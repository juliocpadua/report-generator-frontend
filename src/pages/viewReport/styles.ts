import { styled } from "styled-components";

export const ContainerReportsPage = styled.div`
  min-height: 100vh;
  min-width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  gap: 30px;
`;

export const ActionsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;

  margin-bottom: 10px;
`;

export const CreateNewActionSection = styled.section`
  width: 100vw;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  > h3 {
    font-family: var(--font-main);
    color: var(--brown);
    font-weight: bold;
    letter-spacing: 1px;
    font-size: 22px;
  }

  > span {
    font-family: var(--font-main);
    color: var(--cornsilk);
    font-weight: bold;
    letter-spacing: 1px;
    font-size: 18px;

    background-color: var(--tigers-eye);
    padding: 10px;
    border-radius: 5px;

    display: flex;
    justify-content: center;
    gap: 5px;
    text-align: center;

    cursor: pointer;

    width: 120px;

    > svg {
      width: 25px;
      height: 25px;
    }
  }

  .delete {
    background-color: #86180f;
    cursor: pointer;
  }
`;

export const ListReportsSection = styled.section`
  height: auto;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  > h2 {
    font-family: var(--font-main);
    color: var(--brown);
    font-weight: bold;
    letter-spacing: 1px;
    font-size: 22px;
  }

  > ul {
    min-height: 100%;
    min-width: 95%;

    padding: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;

    max-height: 40vh;
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

    > li {
      width: 95%;
      list-style: none;

      text-align: start;

      background-color: transparent;
      border: 1px solid var(--brown);
      border-radius: 10px;

      box-sizing: border-box;
      padding: 15px;

      font-family: var(--font-main);
      color: var(--black);
      font-weight: bold;
      letter-spacing: 1px;

      display: flex;
      justify-content: space-between;
      align-items: center;

      box-shadow: -1px -1px 14px -5px rgba(67, 40, 24, 0.75);
      -webkit-box-shadow: -1px -1px 14px -5px rgba(67, 40, 24, 0.75);
      -moz-box-shadow: -1px -1px 14px -5px rgba(67, 40, 24, 0.75);

      > div {
        max-width: 200px;
        > p {
          font-family: var(--font-main);
          color: var(--brown);
          letter-spacing: 1px;
          font-weight: bold;
          font-size: 18px;

          max-width: 150px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        > span {
          font-family: var(--font-main);
          color: var(--pakistan-green);
          letter-spacing: 1px;

          max-width: 150px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }

      > span {
        color: var(--tigers-eye);
      }

      > svg {
        width: 30px;
        height: 30px;
      }

      cursor: pointer;
    }
  }
`;

export const FilterSection = styled.section`
  height: auto;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  > form {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-inline: 20px;
    width: 100%;
    gap: 20px;

    @media (min-width: 824px) {
      transition: 1s;
      flex-direction: row;
      align-items: flex-end;
      justify-content: space-around;
    }

    > button {
      width: 150px;
      height: 30px;

      background-color: var(--tigers-eye);
      border: none;
      outline: none;
      border-radius: 5px;

      font-family: var(--font-main);
      font-weight: bold;
      color: var(--cornsilk);
      letter-spacing: 2px;
    }

    .clean {
      background-color: transparent;
      color: var(--tigers-eye);
      text-decoration: underline;
    }

    > div {
      display: flex;
      align-items: flex-start;
      flex-direction: column;

      > input {
        min-width: 330px;
        height: 40px;
        padding: 5px;
        padding-inline-start: 15px;

        font-family: var(--font-main);
        font-weight: bold;
        color: var(--brown);
        letter-spacing: 1px;

        box-shadow: -1px -1px 14px -5px rgba(67, 40, 24, 0.75);
        -webkit-box-shadow: -1px -1px 14px -5px rgba(67, 40, 24, 0.75);
        -moz-box-shadow: -1px -1px 14px -5px rgba(67, 40, 24, 0.75);
      }

      > label {
        font-family: var(--font-main);
        font-weight: bold;
        color: var(--pakistan-green);
        letter-spacing: 1px;
      }
    }
  }
`;

export const DialogReport = styled.dialog`
  @media (min-width: 824px) {
    width: 55vw;
    height: 95vh;
    justify-content: space-around;
    inset-inline-start: 22%;
  }

  position: fixed;
  width: 92vw;
  min-height: 75vh;
  height: auto;
  padding: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;

  border: none;
  border-radius: 10px;

  box-shadow: -1px -1px 14px -5px rgba(67, 40, 24, 0.75);
  -webkit-box-shadow: -1px -1px 14px -5px rgba(67, 40, 24, 0.75);
  -moz-box-shadow: -1px -1px 14px -5px rgba(67, 40, 24, 0.75);

  inset-inline-start: 5%;

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

    @media (min-width: 824px) {
      margin-top: 0px;
    }

    margin-top: -50px;
  }

  > section {
    display: flex;
    flex-direction: column;
    gap: 5px;

    > div {
      max-width: 95%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 10%;
      > img {
        max-width: 70px;

        @media (min-width: 824px) {
          max-width: 150px;
        }
      }
    }

    > h3 {
      font-family: var(--font-main);
      font-size: 28px;
      font-weight: bold;
      text-align: center;
      color: #814d69;
    }

    > p {
      color: #5a5658;
      font-weight: bold;
      font-size: 9px;

      @media (min-width: 824px) {
        font-size: 14px;
      }
    }

    > .subtitle {
      text-align: center;
      font-family: var(--font-main);
      font-weight: bold;
      font-size: 18px;
      color: #003c00;
    }

    .title,
    .date,
    .subject,
    .description {
      font-family: var(--font-main);
    }

    .title {
      font-weight: bold;
      font-size: 22px;
      text-align: start;
    }

    .date {
      color: #5a5658;
    }

    .subject {
      color: #da6300;
      font-weight: bold;
      font-size: 16px;
    }

    .description {
    }
  }

  > dialog {
    border: none;
    padding: 40px;
    inset-inline-start: 10%;

    width: 80%;

    text-align: center;

    display: flex;
    flex-direction: column;
    gap: 15px;

    background-color: var(--pakistan-green);
    color: var(--cornsilk);
    border-radius: 20px;

    font-family: var(--font-main);

    > div {
      display: flex;
      gap: 20px;
      align-items: center;
      justify-content: center;
    }
  }
`;
