import { styled } from "styled-components";

export const ContainerLogin = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > img {
    width: 70%;
    height: 250px;
  }
`;

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;

  min-height: 50vh;
  width: 70%;

  padding: 20px;
  border-radius: 10px;

  background-color: var(--pakistan-green);

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
  }
`;
