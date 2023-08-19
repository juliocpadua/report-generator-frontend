import api from "../../services";
import { useEffect, useState } from "react";
import { ContainerClientsPage, ListOfClients, LogoutArea } from "./styles";
import { useNavigate } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { TfiEye } from "react-icons/tfi";

export const ViewClientsPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    function Redirection() {
      if (!token) {
        return navigate(`/`);
      }
    }
    Redirection();
  });

  const token = localStorage.getItem("token");
  const [clients, setClients] = useState<any[]>();

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

  return (
    <ContainerClientsPage>
      <LogoutArea onClick={logout}>
        <BiLogOut />
        <span>SAIR</span>
      </LogoutArea>

      <h1>Listagem dos clientes</h1>
      <ListOfClients>
        {clients &&
          clients.map((c: any, i: number) => {
            return (
              <li key={i} onClick={() => navigate(`/reports/${c.id}/${c.name}`)}>
                <p>
                  {c.name} - {c.city}
                </p>
                <TfiEye />
              </li>
            );
          })}
      </ListOfClients>
    </ContainerClientsPage>
  );
};
