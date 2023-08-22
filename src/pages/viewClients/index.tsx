import api from "../../services";
import { useEffect, useState } from "react";
import {
  ContainerClientsPage,
  CreateNewClientSection,
  Dialog,
  DialogSection,
  ListOfClients,
  LogoutArea,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { TfiEye } from "react-icons/tfi";
import { IClient } from "../../interfaces";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import { IoCreateOutline } from "react-icons/io5";

interface ICreateClient {
  name: string;
}

export const ViewClientsPage = () => {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    function Redirection() {
      if (!token) {
        return navigate(`/`);
      }
    }
    Redirection();
  });

  const token = localStorage.getItem("token");
  const [clients, setClients] = useState<IClient[]>();

  const [createClient, setCreateClient] = useState(false);

  const getClients = () => {
    api
      .get("/clients", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setClients(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getClients();
  }, []);

  const logout = () => {
    localStorage.clear();
    navigate(`/`);
  };

  const createUser = (data: ICreateClient) => {
    console.log(data);
    const newClient = {
      ...data,
      isAdm: false,
      id: uuidv4(),
    };

    api
      .post("/clients", newClient, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setCreateClient(false);
        getClients();
        toast.success("Usuário cadastrado com sucesso");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const deleteUser = () => {};

  return (
    <ContainerClientsPage>
      <ToastContainer />
      <LogoutArea onClick={logout}>
        <BiLogOut />
        <span>SAIR</span>
      </LogoutArea>

      <h1>LISTA DE CLIENTES</h1>
      <ListOfClients>
        {clients &&
          clients.map((c: IClient, i: number) => {
            return (
              <>
                <li
                  key={i}
                  onClick={() => navigate(`/reports/${c.id}/${c.name}`)}
                >
                  <p>
                    {c.name} <br />{" "}
                    <span>
                      {c.city} - {c.state}
                    </span>
                    <br />
                  </p>
                  <TfiEye />
                </li>
                <li
                  key={i}
                  onClick={() => navigate(`/reports/${c.id}/${c.name}`)}
                >
                  <p>
                    {c.name} <br />{" "}
                    <span>
                      {c.city} - {c.state}
                    </span>
                    <br />
                  </p>
                  <TfiEye />
                </li>
              </>
            );
          })}
      </ListOfClients>

      <CreateNewClientSection>
        <p onClick={() => setCreateClient(!createClient)}>
          CADASTRAR NOVO CLIENTE <IoCreateOutline />
        </p>
      </CreateNewClientSection>

      {createClient && (
        <DialogSection>
          <Dialog open>
            <p onClick={() => setCreateClient(!createClient)}>X</p>
            <h3>CADASTRO DE CLIENTE</h3>
            <form method="dialog" onSubmit={handleSubmit(createUser)}>
              <label>Nome:</label>
              <input
                type="text"
                placeholder="Nome do cliente..."
                {...register("name")}
              />

              <label>Email:</label>
              <input
                type="text"
                placeholder="Ex. cliente@gmail.com"
                {...register("email")}
              />

              <label>Senha:</label>
              <input
                type="text"
                placeholder="Senha do cliente..."
                {...register("password")}
              />

              <label>Cidade:</label>
              <input
                type="text"
                placeholder="Cidade do cliente..."
                {...register("city")}
              />

              <label>Estado:</label>
              <input
                type="text"
                placeholder="Ex. SP, PR, MG"
                {...register("state")}
              />

              <label>CEP:</label>
              <input
                type="text"
                placeholder="Ex. 14.706-205"
                {...register("postal_code")}
              />

              <label>Endereço:</label>
              <input
                type="text"
                placeholder="Rua, número e complemento..."
                {...register("address")}
              />

              <label>Telefone:</label>
              <input
                type="text"
                placeholder="Ex. 035991234567"
                {...register("phone_number")}
              />

              <button type="submit">CADASTRAR</button>
            </form>
          </Dialog>
        </DialogSection>
      )}
    </ContainerClientsPage>
  );
};
