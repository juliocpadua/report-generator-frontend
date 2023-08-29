import { useForm } from "react-hook-form";
import { Header } from "../../components/header";
import { ContainerFormReport, FormReport } from "./styles";
import { v4 as uuidv4 } from "uuid";
import api from "../../services";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const CreateReportPage = () => {
  const ReportSchema = z.object({
    title: z.string().nonempty("Título obrigatório!"),
    subject: z.string().nonempty("Assunto obrigatório!"),
    description: z.string().nonempty("Descrição obrigatória!"),
    photo: z.instanceof(FileList),
  });

  type CreateReportSchema = z.infer<typeof ReportSchema>;

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<CreateReportSchema>({
    resolver: zodResolver(ReportSchema),
  });

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
        toast.dismiss();
        toast.error("Não foi possível criar esse relatório!");
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
          {errors.title && <span>{errors.title.message}</span>}
        </div>

        <div>
          <label>Assunto:</label>
          <input
            type="text"
            placeholder="Digite aqui o assunto do relatório..."
            {...register("subject")}
          />
          {errors.subject && <span>{errors.subject.message}</span>}
        </div>

        <div>
          <label>Description:</label>
          <textarea
            placeholder="Descreva aqui o relatório..."
            {...register("description")}
          />
          {errors.description && <span>{errors.description.message}</span>}
        </div>

        <div>
          <label>Imagens:</label>
          <input
            type="file"
            accept="image/jpeg, image/png, image/jpg"
            multiple
            {...register("photo")}
          />
          {errors.photo && <span>{errors.photo.message}</span>}
        </div>

        <button type="submit">CRIAR</button>
      </FormReport>
    </ContainerFormReport>
  );
};

export default CreateReportPage;
