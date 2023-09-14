import {
  BackButton,
  ChoseTypeSection,
  ContainerLogin,
  FormLogin,
} from "./styles";
import api from "../../services";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { GiCoffeeBeans } from "react-icons/gi";
import { BiLogOut } from "react-icons/bi";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const [type, setType] = useState("");

  const navigate = useNavigate();

  const createSession = (data: object) => {
    toast.loading("Aguarde, fazendo login...");
    api
      .post("/admin/login", data)
      .then((res) => {
        toast.dismiss();
        const resToken = res.data;

        localStorage.setItem("token", resToken);

        api
          .get("/login/admin", {
            headers: {
              Authorization: `Bearer ${resToken}`,
            },
          })
          .then((res) => {
            localStorage.setItem("user", JSON.stringify(res.data));
            localStorage.setItem("type", "admin");
          })
          .catch((err) =>
            console.log(
              `Não foi possível obter os dados do usuário com o token - ${err}`
            )
          );

        if (resToken) {
          return navigate("/clients");
        }
      })
      .catch(() => {
        toast.dismiss();
        return toast.error("Usuário e/ou senha incorretos.");
      });
  };

  const createSessionClient = (data: object) => {
    toast.loading("Aguarde, fazendo login...");
    api
      .post("/login", data)
      .then((res) => {
        toast.dismiss();
        const resToken = res.data;

        localStorage.setItem("token", resToken);

        if (resToken) {
          api
            .get("/login/client", {
              headers: {
                Authorization: `Bearer ${resToken}`,
              },
            })
            .then((res) => {
              localStorage.setItem("user", JSON.stringify(res.data));
              localStorage.setItem("type", "client");

              return navigate(`/reports/${res.data.id}/${res.data.username}`);
            })
            .catch((err) =>
              console.log(
                `Não foi possível obter os dados do usuário com o token - ${err}`
              )
            );
        }
      })
      .catch(() => {
        toast.dismiss();
        return toast.error("Usuário e/ou senha incorretos.");
      });
  };

  return (
    <ContainerLogin>
      <ToastContainer />

      <h1>
        Gerador <br /> De <GiCoffeeBeans />
        <br /> Relatório
      </h1>

      {type === "" ? (
        <ChoseTypeSection>
          <p>Acesso de usuário:</p>
          <button onClick={() => setType("client")}>Sou Cliente</button>
          <button onClick={() => setType("admin")}>Sou Administrador</button>
        </ChoseTypeSection>
      ) : (
        <BackButton onClick={() => setType("")}>
          <BiLogOut />
          VOLTAR
        </BackButton>
      )}
      {type === "admin" && (
        <FormLogin onSubmit={handleSubmit(createSession)}>
          <h4>ADMINISTRADOR</h4>

          <div>
            <label>Usuário:</label>
            <input
              placeholder="Digite aqui o seu usuário"
              {...register("username")}
            />
          </div>
          <div>
            <label>Senha:</label>
            <input
              type="password"
              placeholder="Digite aqui a sua senha"
              {...register("password")}
            />
          </div>
          <button type="submit">Entrar</button>
        </FormLogin>
      )}
      {type === "client" && (
        <FormLogin onSubmit={handleSubmit(createSessionClient)}>
          <h4>CLIENTE</h4>

          <div>
            <label>Usuário:</label>
            <input
              placeholder="Digite aqui o seu usuário"
              {...register("username")}
            />
          </div>
          <div>
            <label>Senha:</label>
            <input
              type="password"
              placeholder="Digite aqui a sua senha"
              {...register("password")}
            />
          </div>
          <button type="submit">Entrar</button>
        </FormLogin>
      )}
    </ContainerLogin>
  );
};

export default Login;
