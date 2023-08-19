import { styled } from "styled-components";

export const ContainerReportsPage = styled.div`
  min-height: 100vh;
  min-width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 5%;

  > h1 {
    font-family: var(--font-main);
    color: var(--brown);
    font-weight: bold;
    letter-spacing: 1px;
    font-size: 22px;
  }
`;

export const CreateNewReportSection = styled.section`
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;

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
    gap: 5px;
    text-align: center;

    > svg {
      width: 25px;
      height: 25px;
    }
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

    > div {
      display: flex;
      align-items: flex-start;
      flex-direction: column;

      > input {
        min-width: 300px;
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
