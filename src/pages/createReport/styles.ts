import { styled } from "styled-components";

export const SectionTable = styled.section`
  max-width: 100%;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    height: 3px;
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

  > button {
    background-color: var(--pakistan-green);
    color: var(--cornsilk);

    font-family: var(--font-main);
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 1px;

    border: none;
    outline: none;

    padding-inline: 5px;
    margin: 5px;

    border-radius: 3px;

    cursor: pointer;
  }
`;

export const AddTableButton = styled.button`
  background-color: var(--tigers-eye);
  color: var(--cornsilk);

  font-family: var(--font-main);
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 1px;

  border: none;
  outline: none;

  padding-inline: 5px;
  margin: 5px;

  border-radius: 3px;

  cursor: pointer;
`;

export const InputTable = styled.input`
  background-color: none;

  border: 2px solid #000;
  min-width: 60px;
  width: 100px;

  font-family: var(--font-main);
  color: #000;
  font-weight: 600;

  border-radius: 0px;
`;

export const SectionTitlesTable = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  margin-top: 10px;
  margin-bottom: 10px;

  .input-table {
    width: 80%;

    border: 1px solid var(--brown);
    outline: none;

    font-family: var(--font-main);
    color: var(--brown);
    font-size: 14px;
    font-weight: bold;

    padding-inline: 10px;
    border-radius: 5px;

    box-shadow: -1px -1px 14px -5px rgba(67, 40, 24, 0.75);
    -webkit-box-shadow: -1px -1px 14px -5px rgba(67, 40, 24, 0.75);
    -moz-box-shadow: -1px -1px 14px -5px rgba(67, 40, 24, 0.75);
  }

  .desc {
    width: 300px;
    height: 40px;
    font-size: 14px;
  }

  > label {
    color: var(--brown);

    font-family: var(--font-main);
    font-weight: bold;
  }
`;

export const ContainerFormReport = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormReport = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  min-height: 85vh;
  height: auto;
  width: 95vw;
  margin-top: 3%;
  padding-top: 10px;
  padding-bottom: 15px;

  max-height: 90vh;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 5px;
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

  box-shadow: -1px -1px 14px -5px rgba(67, 40, 24, 0.75);
  -webkit-box-shadow: -1px -1px 14px -5px rgba(67, 40, 24, 0.75);
  -moz-box-shadow: -1px -1px 14px -5px rgba(67, 40, 24, 0.75);

  > h2 {
    font-family: var(--font-main);
    color: var(--brown);
    font-size: 22px;
    font-weight: bold;
  }

  > button {
    font-family: var(--font-main);
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;

    color: var(--cornsilk);
    background-color: var(--pakistan-green);

    width: 200px;
    height: 40px;

    border: none;
    outline: 0;
    border-radius: 5px;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 95%;

    > label {
      font-family: var(--font-main);
      color: var(--brown);
      font-size: 16px;
      font-weight: bold;
    }

    > span {
      font-family: var(--font-main);
      color: #86180f;
      font-size: 14px;
      font-weight: bold;
      margin-top: 3px;
    }

    > input {
      width: 100%;

      border: none;
      outline: none;

      font-family: var(--font-main);
      color: var(--brown);
      font-size: 14px;
      font-weight: bold;

      padding: 10px;
      border-radius: 5px;

      box-shadow: -1px -1px 14px -5px rgba(67, 40, 24, 0.75);
      -webkit-box-shadow: -1px -1px 14px -5px rgba(67, 40, 24, 0.75);
      -moz-box-shadow: -1px -1px 14px -5px rgba(67, 40, 24, 0.75);
    }

    > textarea {
      max-width: 100%;
      width: 100%;
      min-height: 300px;

      @media (min-width: 824px) {
        width: 100%;
        min-height: 250px;
      }
    }

    > textarea {
      border: none;
      outline: none;

      font-family: var(--font-main);
      color: var(--brown);
      font-size: 14px;
      font-weight: bold;

      padding: 10px;
      border-radius: 5px;

      box-shadow: -1px -1px 14px -5px rgba(67, 40, 24, 0.75);
      -webkit-box-shadow: -1px -1px 14px -5px rgba(67, 40, 24, 0.75);
      -moz-box-shadow: -1px -1px 14px -5px rgba(67, 40, 24, 0.75);
    }

    > p {
      cursor: pointer;
    }
  }
`;

export const ButtonInsertImage = styled.button`
  font-family: var(--font-main);
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;

  color: var(--cornsilk);
  background-color: var(--pakistan-green);

  width: 200px;
  height: 20px;

  border: none;
  outline: 0;
  border-radius: 5px;

  margin-top: 10px;
`;
