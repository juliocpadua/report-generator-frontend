import { ContainerLogin, FormLogin } from "./styles";
import Logo from "../../assets/Logo.png";
import api from "../../services";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// interface ILoginClient {
//   email: string;
//   password: string;
// }

const Login = () => {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const createSession = (data: object) => {
    toast.loading("Aguarde, fazendo login...");
    api
      .post("/admin/login", data)
      .then((res) => {
        toast.dismiss();
        const resToken = res.data;

        localStorage.setItem("token", resToken);

        if (resToken) {
          return navigate("/clients");
        }
      })
      .catch(() => {
        toast.dismiss();
        return toast.error("Email e/ou senha incorretos.");
      });
  };

  return (
    <ContainerLogin>
      <ToastContainer />
      <img src={Logo} alt="logo" />
      <FormLogin onSubmit={handleSubmit(createSession)}>
        <div>
          <label>Email:</label>
          <input placeholder="Digite aqui o seu email" {...register("email")} />
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
    </ContainerLogin>
  );
};

export default Login;
