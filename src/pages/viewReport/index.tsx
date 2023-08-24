import { useNavigate, useParams } from "react-router-dom";
import api from "../../services";
import { useEffect, useState } from "react";
import {
  ActionsSection,
  ContainerReportsPage,
  CreateNewActionSection,
  DialogReport,
  FilterSection,
  ListReportsSection,
} from "./styles";
import dayjs from "dayjs";
import { IoIosCreate } from "react-icons/io";
import { useForm } from "react-hook-form";
import {
  IFunctionFilterReport,
  IReportExibition,
  IReportRequest,
} from "../../interfaces";
import { GoTrash } from "react-icons/go";
import { Header } from "../../components/header";
import { DialogSection } from "../viewClients/styles";
import { ToastContainer, toast } from "react-toastify";

const ViewReportPage = () => {
  const { client_id, client_name } = useParams();

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const [reports, setReports] = useState<IReportRequest[]>([]);
  const [filteredReports, setFilteredReports] = useState<IReportRequest[]>([]);
  const [openReport, setOpenReport] = useState(false);
  const [currentReport, setCurrentReport] = useState<IReportExibition>({});
  const [confirm, setConfirm] = useState(false);
  const [newReport, setNewReport] = useState(false);

  const { register, handleSubmit } = useForm();

  const getReports = () => {
    api
      .get(`/report/${client_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setReports(res.data);
      });
  };

  useEffect(() => {
    getReports();
  }, []);

  const filterReports = (data: IFunctionFilterReport) => {
    if (data.date !== "") {
      const filterByDate = reports?.filter(
        (r) => dayjs(r.generationDate).format("YYYY-MM") === data.date
      );

      setFilteredReports(filterByDate);

      if (data.text !== "") {
        const filterByText = filterByDate?.filter((report) => {
          if (report.subject !== "") {
            return report.subject.toLowerCase() === data.text.toLowerCase();
          } else if (report.title !== "") {
            return report.title.toLowerCase() === data.text.toLowerCase();
          }
        });

        setFilteredReports(filterByText);
      }
    } else {
      const filterBySubject = reports?.filter((report) =>
        report.subject.toLowerCase().includes(data.text.toLowerCase())
      );

      if (filterBySubject.length > 0) {
        setFilteredReports(filterBySubject);
      } else {
        const filterByTitle = reports?.filter((report) =>
          report.title.toLowerCase().includes(data.text.toLowerCase())
        );
        setFilteredReports(filterByTitle);
      }
    }
  };

  const createNewReport = () => {
    console.log("cria novo report");
  };

  const deleteClient = () => {};

  const deleteReport = (id: string) => {
    setConfirm(false);

    api
      .delete(`/report/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setOpenReport(false);
        getReports();
        toast.success("Relatório excluído com sucesso");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Não foi possível deletar esse relatório");
      });
  };

  return (
    <ContainerReportsPage>
      <Header title="RELATÓRIOS" client={client_name} />
      <ToastContainer />

      <FilterSection>
        <form onSubmit={handleSubmit(filterReports)}>
          <div>
            <label>Filtrar por Título ou Assunto:</label>
            <input
              {...register("text")}
              placeholder="Digite aqui o Título ou Assunto..."
            />
          </div>
          <div>
            <label>Filtrar por Data:</label>
            <input {...register("date")} type="month" />
          </div>
          <button type="submit">FILTRAR</button>
          <button
            className="clean"
            type="button"
            onClick={() => setFilteredReports([])}
          >
            Limpar Filtro
          </button>
        </form>
      </FilterSection>

      <ListReportsSection>
        <h2>Listagem de Relatórios</h2>
        <ul>
          {reports?.length === 0 ? (
            <li>
              <h4>Ainda não há relatórios para esse cliente</h4>
            </li>
          ) : filteredReports.length > 0 ? (
            filteredReports.map((r: IReportRequest, i: number) => {
              return (
                <li key={i} onClick={() => setOpenReport(!openReport)}>
                  <div>
                    <p>{r.title}</p>
                    <span>{r.subject}</span>
                  </div>
                  <span>{dayjs(r.generationDate).format("DD/MM/YYYY")}</span>
                </li>
              );
            })
          ) : (
            reports.map((r: IReportRequest, i: number) => {
              return (
                <li
                  key={i}
                  onClick={() => {
                    setCurrentReport({
                      title: r.title,
                      subject: r.subject,
                      generationDate: r.generationDate,
                      description: r.description,
                      img: r.img,
                      id: r.id,
                    });
                    setOpenReport(!openReport);
                  }}
                >
                  <div>
                    <p>{r.title}</p>
                    <span>{r.subject}</span>
                  </div>
                  <span>{dayjs(r.generationDate).format("DD/MM/YYYY")}</span>
                </li>
              );
            })
          )}
        </ul>
      </ListReportsSection>

      <ActionsSection>
        <CreateNewActionSection>
          <h3>Novo Relatório</h3>
          <span onClick={() => navigate(`/new-report/${client_id}`)}>
            CRIAR <IoIosCreate />
          </span>
        </CreateNewActionSection>

        <CreateNewActionSection>
          <h3>Deletar cliente</h3>
          <span onClick={deleteClient} className="delete">
            DELETAR <GoTrash />
          </span>
        </CreateNewActionSection>
      </ActionsSection>

      {openReport && (
        <DialogSection>
          <DialogReport open>
            <p onClick={() => setOpenReport(false)}>X</p>
            <section>
              <h3>PIMENTA E TAVEIRA</h3>
              <p className="date">
                Consultoria Agronômica e Assistência Técnica Especializada em
                Cafeicultura
              </p>
              <p className="subtitle">RELATÓRIO DE VISITA</p>
            </section>

            <section>
              <h2 className="title">{currentReport.title}</h2>
              <p className="date">
                {dayjs(currentReport.generationDate).format("DD/MM/YYYY")}
              </p>
              <span className="subject">{currentReport.subject}</span>
              <p className="description">{currentReport.description}</p>

              <div>
                {currentReport.img?.map((url: string, i: number) => {
                  return <img key={i} src={url} />;
                })}
              </div>

              <p onClick={() => setConfirm(true)}>
                EXCLUIR RELATÓRIO <GoTrash />
              </p>
            </section>

            {confirm && (
              <dialog open>
                <p>Tem certeza que deseja excluir esse relatório?</p>
                <div>
                  <span onClick={() => deleteReport(currentReport.id!)}>
                    SIM
                  </span>
                  <span onClick={() => setConfirm(false)}>NÃO</span>
                </div>
              </dialog>
            )}
          </DialogReport>
        </DialogSection>
      )}
    </ContainerReportsPage>
  );
};

export default ViewReportPage;
