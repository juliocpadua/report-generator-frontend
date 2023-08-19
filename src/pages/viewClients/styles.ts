import { styled } from "styled-components";

export const ContainerClientsPage = styled.div`
  min-height: 100vh;
  min-width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 5%;
`;

export const ListOfClients = styled.ul`
  height: 70vh;
  width: 95vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 35px;

  > li {
    width: 90%;
    list-style: none;

    text-align: start;

    background-color: var(--earth-yellow);
    border-radius: 10px;
    padding: 15px;

    font-family: var(--font-main);
    color: var(--black);
    font-weight: bold;
    letter-spacing: 1px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    > svg {
      width: 30px;
      height: 30px;
    }

    cursor: pointer;
  }
`;

export const LogoutArea = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  cursor: pointer;
`;
