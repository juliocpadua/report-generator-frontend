import { useNavigate, useParams } from "react-router-dom";
import api from "../../services";
import { useEffect, useState } from "react";
import {
  ContainerReportsPage,
  CreateNewReportSection,
  FilterSection,
  ListReportsSection,
} from "./styles";
import dayjs from "dayjs";
import { IoIosCreate } from "react-icons/io";
import { useForm } from "react-hook-form";
import { LogoutArea } from "../viewClients/styles";
import { BiLogOut } from "react-icons/bi";

const ViewReportPage = () => {
  const { client_id, client_name } = useParams();

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const [reports, setReports] = useState();
  const [filteredReports, setFilteredReports] = useState();

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

  const filterReports = (data: any) => {
    console.log(data);
  };

  const logout = () => {
    localStorage.clear();
    navigate(`/`);
  };

  const createNewReport = () => {
    console.log("cria novo report");
  };

  const openReport = () => {};
  return (
    <ContainerReportsPage>
      <LogoutArea onClick={logout}>
        <BiLogOut />
        <span>SAIR</span>
      </LogoutArea>
      <h1>
        Relatórios <br /> {client_name}
      </h1>

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
        </form>
      </FilterSection>

      <ListReportsSection>
        <h2>Listagem de Relatórios</h2>
        <ul>
          {reports?.length === 0 ? (
            <li>
              <h4>Ainda não há relatórios para esse cliente</h4>
            </li>
          ) : (
            reports?.map((r: any, i: number) => {
              return (
                <li key={i} onClick={openReport}>
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

      <CreateNewReportSection>
        <h3>Criar novo Relatório</h3>
        <span onClick={createNewReport}>
          CRIAR <IoIosCreate />
        </span>
      </CreateNewReportSection>
    </ContainerReportsPage>
  );
};

export default ViewReportPage;
