import { styled } from "styled-components";

export const BackButton = styled.button`
  background-color: transparent;
  color: var(--brown);

  font-family: var(--font-main);
  font-weight: bold;
  letter-spacing: 1px;

  cursor: pointer;

  border: 1px solid var(--tigers-eye);
  outline: 0;
  border-radius: 5px;
  padding: 2px;

  width: 150px;

  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  margin-bottom: 10px;

  > svg {
    width: 20px;
    height: 20px;
  }
`;

export const ChoseTypeSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;

  height: 30vh;

  > p {
    font-family: var(--font-main);
    font-weight: bold;
    color: var(--pakistan-green);
    letter-spacing: 1px;
  }

  > button {
    background-color: var(--pakistan-green);
    color: var(--cornsilk);

    font-family: var(--font-main);
    font-weight: bold;
    color: var(--cornsilk);
    letter-spacing: 1px;

    cursor: pointer;

    border: none;
    outline: 0;
    border-radius: 5px;
    padding: 12px;

    width: 250px;
  }
`;

export const ContainerLogin = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10%;

  > h1 {
    font-family: var(--font-main);
    font-weight: bold;
    color: var(--cornsilk);
    letter-spacing: 1px;
    font-size: 32px;

    color: var(--tigers-eye);
    margin: 30px;

    @media (min-width: 1024px) {
      font-size: 3.5rem;
    }
  }
`;

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;

  min-height: 50vh;
  width: 70%;

  @media (min-width: 824px) {
    width: 25%;
  }

  padding: 20px;
  border-radius: 10px;

  background-color: var(--pakistan-green);

  > h4 {
    font-family: var(--font-main);
    font-weight: bold;
    color: var(--cornsilk);
    letter-spacing: 1px;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 100%;

    > input {
      width: 100%;
    }
  }

  > button {
    width: 80%;
    height: 35px;

    border-radius: 10px;
    margin-top: 20px;

    outline: 0;
    border: none;
  }
`;
