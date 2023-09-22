import { useForm } from "react-hook-form";
import { Header } from "../../components/header";
import {
  AddTableButton,
  ButtonInsertImage,
  ContainerFormReport,
  FormReport,
  InputTable,
  SectionTable,
  SectionTitlesTable,
} from "./styles";
import { v4 as uuidv4 } from "uuid";
import api from "../../services";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const CreateReportPage = () => {
  const ReportSchema = z.object({
    title: z.string().nonempty("Título obrigatório!"),
    subject: z.string().nonempty("Assunto obrigatório!"),
    description: z.string().nonempty("Descrição obrigatória!"),
    generationDate: z.string().nonempty("Data necessária."),
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

  const [containTable, setContainTable] = useState(false);
  const initialRow = Array(2).fill("");
  const [tableData, setTableData] = useState([initialRow]);
  const [titleTable, setTitleTable] = useState<string>("");
  const [descriptionTable, setDescriptionTable] = useState<string>("");
  const [numRows, setNumRows] = useState(1);
  const [numCols, setNumCols] = useState(2);

  const [images, setImages] = useState<any[]>([]);
  const [legends, setLegends] = useState<string[]>([]);
  const [currentImage, setCurrentImage] = useState<File>();
  const [currentLegend, setCurrentLegend] = useState("");

  const createNewReport = (data: any) => {
    toast.loading("Gerando relatório...");

    const dataForm = new FormData();

    const newData = {
      title: data.title,
      subject: data.subject,
      description: data.description,
      generationDate: data.generationDate,
      id: uuidv4(),
      table: tableData,
      title_table: titleTable,
      description_table: descriptionTable,
      legends,
    };

    dataForm.append("data", JSON.stringify(newData));

    for (let i = 0; i < images.length; i++) {
      dataForm.append("photo", images[i]);
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

  //table=====================

  const addRow = () => {
    setTableData((prevData) => {
      const newData = [...prevData, Array(numCols).fill("")];
      return newData;
    });
    setNumRows(numRows + 1);
  };

  const addColumn = () => {
    setTableData((prevData) => {
      const newData = prevData.map((row) => [...row, ""]);
      return newData;
    });
    setNumCols(numCols + 1);
  };

  const updateCellValue = (rowIndex: any, colIndex: any, newValue: any) => {
    const updatedData = [...tableData];
    updatedData[rowIndex][colIndex] = newValue;
    setTableData(updatedData);
  };

  const renderTable = () => {
    const tableRows = [];
    for (let i = 0; i < numRows; i++) {
      const rowCells = [];
      for (let j = 0; j < numCols; j++) {
        rowCells.push(
          j === 0 ? (
            <th key={j}>
              <InputTable
                type="text"
                value={tableData[i]?.[j] || ""}
                onChange={(e) => updateCellValue(i, j, e.target.value)}
              />
            </th>
          ) : (
            <td key={j}>
              <InputTable
                type="text"
                value={tableData[i]?.[j] || ""}
                onChange={(e) => updateCellValue(i, j, e.target.value)}
              />
            </td>
          )
        );
      }
      tableRows.push(<tr key={i}>{rowCells}</tr>);
    }
    return (
      <table>
        <tbody>{tableRows}</tbody>
      </table>
    );
  };

  const orderImages = () => {
    setImages([...images, currentImage]);
    setLegends([...legends, currentLegend]);

    setCurrentLegend("");

    toast.success("Imagem e Legenda adicionadas.");
  };

  const handleImages = (e: any) => {
    // setCurrentImage(URL.createObjectURL(e?.target?.files[0]));
    return setCurrentImage(e?.target?.files[0]);
  };

  return (
    <ContainerFormReport>
      <Header title="Criar Relatório" />

      <ToastContainer autoClose={2500} />

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
          <label>Data:</label>
          <input
            type="date"
            placeholder="Escolha a data do relatório"
            {...register("generationDate")}
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
          <label>Imagem:</label>
          <input
            type="file"
            accept="image/jpeg, image/png, image/jpg"
            onChange={handleImages}
            // multiple
            // {...register("photo")}
          />
          {/* {errors.photo && <span>{errors.photo.message}</span>} */}

          <label>Legenda:</label>
          <input
            placeholder="Insira a legenda para a imagem..."
            type="text"
            value={currentLegend}
            onChange={(e) => setCurrentLegend(e.target.value)}
          />

          <ButtonInsertImage type="button" onClick={orderImages}>
            Inserir Imagem
          </ButtonInsertImage>
        </div>

        <div>
          <AddTableButton type="button" onClick={() => setContainTable(true)}>
            ADICIONAR TABELA +
          </AddTableButton>
          {containTable && (
            <SectionTable>
              <SectionTitlesTable>
                <label>Título da Tabela:</label>
                <input
                  className="input-table"
                  type="text"
                  placeholder="Digite um título para a tabela..."
                  onChange={(e) => setTitleTable(e.target.value)}
                />
                <label>Descrição da Tabela:</label>
                <input
                  className="input-table desc"
                  type="text"
                  placeholder="Digite uma descrição para a tabela..."
                  onChange={(e) => setDescriptionTable(e.target.value)}
                />
              </SectionTitlesTable>
              <button type="button" onClick={addRow}>
                LINHA +
              </button>
              <button type="button" onClick={addColumn}>
                COLUNA +
              </button>
              {renderTable()}
            </SectionTable>
          )}
        </div>

        <button type="submit">CRIAR</button>
      </FormReport>
    </ContainerFormReport>
  );
};

export default CreateReportPage;
