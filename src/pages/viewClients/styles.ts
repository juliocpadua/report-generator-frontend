import { styled } from "styled-components";

export const ContainerClientsPage = styled.div`
  min-height: 100vh;
  min-width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ListOfClients = styled.ul`
  height: 65vh;
  max-height: 65vh;
  width: 95vw;

  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 35px;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    background: var(--cornsilk);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--dark-moss-green);
    border-radius: 20px;
    border: 2px solid var(--dark-moss-green);
    border-radius: 10px;
    opacity: 0.5;
  }

  > li {
    width: 90%;
    list-style: none;

    text-align: start;

    background-color: transparent;
    border: 1px solid var(--dark-moss-green);
    border-radius: 10px;

    box-shadow: -1px -1px 14px -5px rgba(67, 40, 24, 0.75);
    -webkit-box-shadow: -1px -1px 14px -5px rgba(67, 40, 24, 0.75);
    -moz-box-shadow: -1px -1px 14px -5px rgba(67, 40, 24, 0.75);

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
      color: var(--tigers-eye);
    }

    > p {
      > span {
        color: var(--pakistan-green);
      }
    }

    cursor: pointer;
  }
`;

export const CreateNewClientSection = styled.section`
  height: 5vh;
  min-width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 30px;

  background-color: var(--dark-moss-green);

  > p {
    font-family: var(--font-main);
    color: var(--cornsilk);
    font-weight: bold;
    font-size: 22px;

    cursor: pointer;

    display: flex;
    align-items: flex-start;
    gap: 10px;

    > svg {
      color: var(--cornsilk);
      height: 30px;
      width: 25px;
    }
  }
`;

export const DialogSection = styled.section`
  background-color: rgba(0, 0, 0, 0.2);

  min-height: 100vh;
  min-width: 100vw;

  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Dialog = styled.dialog`
  position: fixed;
  min-width: 85vw;
  min-height: 50vh;
  height: auto;
  padding-top: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  border: none;
  border-radius: 10px;

  box-shadow: -1px -1px 14px -5px rgba(67, 40, 24, 0.75);
  -webkit-box-shadow: -1px -1px 14px -5px rgba(67, 40, 24, 0.75);
  -moz-box-shadow: -1px -1px 14px -5px rgba(67, 40, 24, 0.75);

  inset-inline-start: 7.5%;

  > h3 {
    font-family: var(--font-main);
    color: var(--brown);
    font-weight: bold;
  }

  > p {
    font-family: var(--font-main);
    color: var(--cornsilk);
    font-weight: bold;
    font-size: 22px;

    display: flex;
    text-align: center;
    justify-content: center;
    width: 40px;
    height: 40px;

    padding: 5px;
    background-color: var(--brown);
    border-radius: 100%;

    cursor: pointer;
  }

  > form {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 20px;

    min-width: 100%;

    > button {
      margin-top: 5%;
      padding: 5px;

      border: none;
      border-radius: 5px;
      background-color: var(--pakistan-green);

      font-family: var(--font-main);
      color: var(--cornsilk);
      font-weight: bold;
      letter-spacing: 1px;
    }

    > p,
    label,
    input {
      font-family: var(--font-main);
      color: var(--brown);
      font-weight: bold;
    }

    > input {
      padding: 5px;
      padding-inline-start: 10px;
      border: 1px solid var(--pakistan-green);
      color: var(--pakistan-green);
    }
  }
`;

export const FilterClientForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 100vw;

  > button {
    background-color: transparent;
    border: none;
    outline: 0;

    font-family: var(--font-main);
    color: var(--tigers-eye);
    font-weight: bold;
    font-size: 14px;
    letter-spacing: 1px;

    text-decoration: underline;
  }

  > div {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 25px;
    width: 100%;

    padding-inline: 30px;

    > button {
      height: 35px;

      font-family: var(--font-main);
      color: var(--cornsilk);
      font-weight: bold;
      font-size: 14px;
      letter-spacing: 1px;

      background-color: var(--tigers-eye);

      padding: 5px;

      border: none;
      outline: 0;
      border-radius: 5px;
    }

    > section {
      display: flex;
      flex-direction: column;
      width: 100%;

      > input {
        width: 100%;
        font-family: var(--font-main);
        color: var(--brown);
        font-weight: bold;
        font-size: 14px;
        padding-inline-start: 10px;
        height: 35px;

        box-shadow: -1px -1px 14px -5px rgba(67, 40, 24, 0.75);
        -webkit-box-shadow: -1px -1px 14px -5px rgba(67, 40, 24, 0.75);
        -moz-box-shadow: -1px -1px 14px -5px rgba(67, 40, 24, 0.75);
      }

      > label {
        font-family: var(--font-main);
        color: var(--brown);
        font-weight: bold;
        font-size: 16px;
      }
    }
  }
`;
