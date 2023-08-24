import { useNavigate } from "react-router-dom";
import { HeaderComponent, LogoutArea } from "./styles";
import { FiLogOut } from "react-icons/fi";
import { IoMdArrowRoundBack } from "react-icons/io";

interface IProps {
  title: string;
  client?: string;
}

export const Header = ({ title, client }: IProps) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate(`/`);
  };

  return (
    <HeaderComponent>
      <button onClick={() => history.back()}>
        <IoMdArrowRoundBack />
      </button>

      <p>
        {title} <br />
        {client ? `${client}` : ""}
      </p>

      <LogoutArea onClick={logout}>
        <span>SAIR</span>
        <FiLogOut />
      </LogoutArea>
    </HeaderComponent>
  );
};
