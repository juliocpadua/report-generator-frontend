import { styled } from "styled-components";

export const SectionTable = styled.section``;

export const SectionTitlesTable = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  margin-top: 10px;
  margin-bottom: 10px;

  .input-table {
    width: 250px;
    padding: 0px;
    padding-inline: 5px;

    font-size: 14px;
  }

  .desc {
    width: 300px;
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
  justify-content: space-evenly;
  gap: 10px;

  height: 85vh;
  width: 95vw;
  margin-top: 3%;

  max-height: 90vh;
  overflow-y: scroll;

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
      font-family: var(--font-main);
      color: var(--brown);
      font-size: 14px;
    }

    > textarea {
      max-width: 100%;
      min-width: 350px;
      min-height: 300px;

      @media (min-width: 824px) {
        min-width: 100%;
      }
    }

    > textarea,
    input {
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
