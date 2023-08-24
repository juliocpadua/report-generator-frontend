import { useForm } from "react-hook-form";
import { Header } from "../../components/header";
import { ContainerFormReport, FormReport } from "./styles";
import { v4 as uuidv4 } from "uuid";
import api from "../../services";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const CreateReportPage = () => {
  const { handleSubmit, register, reset } = useForm();

  const { client_id } = useParams();

  const token = localStorage.getItem("token");

  const createNewReport = (data: any) => {
    toast.loading("Gerando relatório...");

    const dataForm = new FormData();

    const newData = {
      title: data.title,
      subject: data.subject,
      description: data.description,
      id: uuidv4(),
    };

    dataForm.append("data", JSON.stringify(newData));

    for (let i = 0; i < data.photo.length; i++) {
      dataForm.append("photo", data.photo[i]);
    }

    api
      .post(`/report/${client_id}`, dataForm, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        toast.dismiss();
        toast.success("Relatório criado com sucesso!");
        reset();
      })
      .catch(() => {
        toast.error("Não foi possível criar esse relatório!");
        toast.dismiss();
      });
  };

  return (
    <ContainerFormReport>
      <Header title="Criar Relatório" />

      <ToastContainer />

      <FormReport onSubmit={handleSubmit(createNewReport)}>
        <h2>RELATÓRIO</h2>
        <div>
          <label>Título:</label>
          <input
            type="text"
            placeholder="Digite aqui o título do relatório..."
            {...register("title")}
          />
        </div>

        <div>
          <label>Assunto:</label>
          <input
            type="text"
            placeholder="Digite aqui o assunto do relatório..."
            {...register("subject")}
          />
        </div>

        <div>
          <label>Description:</label>
          <textarea
            placeholder="Descreva aqui o relatório..."
            {...register("description")}
          />
        </div>

        <div>
          <label>Imagens:</label>
          <input
            type="file"
            accept="image/jpeg, image/png, image/jpg"
            multiple
            {...register("photo")}
          />
        </div>

        <button type="submit">CRIAR</button>
      </FormReport>
    </ContainerFormReport>
  );
};

export default CreateReportPage;
