import api from "../../services";
import { useEffect, useState } from "react";
import {
  ContainerClientsPage,
  CreateNewClientSection,
  Dialog,
  DialogSection,
  FilterClientForm,
  ListOfClients,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { TfiEye } from "react-icons/tfi";
import { IClient } from "../../interfaces";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import { IoCreateOutline } from "react-icons/io5";
import { Header } from "../../components/header";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface ICreateClient {
  name: string;
}

export const ViewClientsPage = () => {
  const ClientSchema = z.object({
    name: z.string().nonempty("Nome obrigadtório!"),
    username: z.string().nonempty("Usuário obrigadtório!"),
    password: z.string().min(6, "A senha precisa ter mais de 6 caracteres."),
    city: z.string().nonempty("Cidade obrigadtória!"),
    state: z.string().nonempty("Estado obrigadtório!"),
    postal_code: z.string().nonempty("CEP obrigadtório!"),
    address: z.string().nonempty("Endereço obrigadtório!"),
    phone_number: z.string().nonempty("Telefone obrigadtório!"),
  });

  type CreateUserFormData = z.infer<typeof ClientSchema>;

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(ClientSchema),
  });

  useEffect(() => {
    function Redirection() {
      if (!token) {
        return navigate(`/`);
      }
    }
    Redirection();
  });

  const token = localStorage.getItem("token");

  const [clients, setClients] = useState<IClient[]>([]);
  const [filteredClients, setFilteredClients] = useState<IClient[]>([]);

  const [createClient, setCreateClient] = useState(false);
  const [clientName, setClientName] = useState("");

  const [adminId, setAdminId] = useState<string>("");

  const filterClients = (data: string) => {
    const filter = clients.filter((client) =>
      client.name.toLowerCase().includes(data.toLowerCase())
    );
    return setFilteredClients(filter);
  };

  const getDataAdmin = () => {
    api
      .get("/login/admin", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        getClients(res.data.id);
        setAdminId(res.data.id);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getDataAdmin();
  }, []);

  const getClients = (admin_id: string) => {
    api
      .get(`/clients/${admin_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setClients(res.data);
      })
      .catch((err) => console.log(err));
  };

  const createUser = (data: ICreateClient) => {
    toast.loading("Criando cadastro do cliente.");
    const newClient = {
      ...data,
      isAdm: false,
      id: uuidv4(),
    };

    api
      .post(`/clients/${adminId}`, newClient, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        toast.dismiss();
        setCreateClient(false);
        getClients(adminId);
        toast.success("Usuário cadastrado com sucesso");
      })
      .catch((err) => {
        toast.dismiss();
        toast.error(err.message);
      });
  };

  return (
    <ContainerClientsPage>
      <Header title="CLIENTES" />
      <ToastContainer />

      <FilterClientForm>
        <div>
          <section>
            <label>Buscar cliente:</label>
            <input
              placeholder="Nome do cliente..."
              name="client-name"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
            />
          </section>
          <button type="button" onClick={() => filterClients(clientName)}>
            FILTRAR
          </button>
        </div>
        <button
          type="button"
          onClick={() => {
            setFilteredClients([]);
            setClientName("");
          }}
        >
          Limpar Filtro
        </button>
      </FilterClientForm>

      <ListOfClients>
        {filteredClients.length > 0
          ? filteredClients.map((c: IClient, i: number) => {
              return (
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
              );
            })
          : clients
          ? clients.map((c: IClient, i: number) => {
              return (
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
              );
            })
          : "AINDA NÃO HÁ CLIENTES"}
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
              {errors.name && <span>{errors.name.message}</span>}

              <label>Usuário:</label>
              <input
                type="text"
                placeholder="Ex. nomedeusuário"
                {...register("username")}
              />
              {errors.username && <span>{errors.username.message}</span>}

              <label>Senha:</label>
              <input
                type="text"
                placeholder="Senha do cliente..."
                {...register("password")}
              />
              {errors.password && <span>{errors.password.message}</span>}

              <label>Cidade:</label>
              <input
                type="text"
                placeholder="Cidade do cliente..."
                {...register("city")}
              />
              {errors.city && <span>{errors.city.message}</span>}

              <label>Estado:</label>
              <input
                type="text"
                placeholder="Ex. SP, PR, MG"
                {...register("state")}
              />
              {errors.state && <span>{errors.state.message}</span>}

              <label>CEP:</label>
              <input
                type="text"
                placeholder="Ex. 14.706-205"
                {...register("postal_code")}
              />
              {errors.postal_code && <span>{errors.postal_code.message}</span>}

              <label>Endereço:</label>
              <input
                type="text"
                placeholder="Rua, número e complemento..."
                {...register("address")}
              />
              {errors.address && <span>{errors.address.message}</span>}

              <label>Telefone:</label>
              <input
                type="text"
                placeholder="Ex. 035991234567"
                {...register("phone_number")}
              />
              {errors.phone_number && (
                <span>{errors.phone_number.message}</span>
              )}

              <button type="submit">CADASTRAR</button>
            </form>
          </Dialog>
        </DialogSection>
      )}
    </ContainerClientsPage>
  );
};
