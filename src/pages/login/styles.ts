import { styled } from "styled-components";

export const BackButton = styled.button`
  background-color: var(--tigers-eye);
  color: var(--cornsilk);

  font-family: var(--font-main);
  font-weight: bold;
  letter-spacing: 1px;

  cursor: pointer;

  border: 1px solid var(--tigers-eye);
  outline: 0;
  border-radius: 5px;
  padding: 2px;

  width: 130px;

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
  height: 30lvh;

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
  min-height: 100lvh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10%;

  @media (max-width: 824px) {
    flex-direction: column;
    justify-content: center;

    background-image: linear-gradient(
      to bottom,
      #283618,
      #354320,
      #425028,
      #515e30,
      #606c38
    );
  }

  background-image: linear-gradient(
    to left,
    #283618,
    #596243,
    #8d9273,
    #c5c4a8,
    #fefae0
  );

  /* background-color: var(--pakistan-green); */

  > img {
    max-height: 100lvh;
    max-height: 100vh;

    @media (max-width: 824px) {
      display: none;
    }
  }

  > main {
    background-color: var(--cornsilk);
    border-radius: 15px 0px 0px 15px;

    margin-right: 200px;

    max-height: 90vh;
    max-height: 90lvh;
    overflow-y: scroll;
    
    height: 90vh;
    height: 90lvh;
    width: 450px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &::-webkit-scrollbar {
      width: 6px;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-track {
      background: var(--cornsilk);
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--pakistan-green);
      border-radius: 20px;
      border: 2px solid var(--pakistan-green);
      border-radius: 10px;
      opacity: 0.5;
    }

    @media (min-width: 824px) {
    }

    @media (max-width: 824px) {
      max-width: 95%;
      width: 95%;
      height: 90lvh;
      margin-right: 0px;
    }

    > img {
      border-radius: 10px;

      width: 400px;
      height: 450px;

      @media (max-width: 824px) {
        max-width: 100%;
      }
    }
    /* > h1 {
      font-family: var(--font-main);
      font-weight: bold;
      color: var(--pakistan-green);
      letter-spacing: 1px;
      font-size: 42px;

      margin: 30px;

      text-align: center;

      > svg {
        color: var(--tigers-eye);
      }

      @media (min-width: 1024px) {
        font-size: 3.5rem;
      }
    } */
  }
`;

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;

  min-height: 50vh;
  min-height: 50lvh;
  width: 90%;

  @media (min-width: 824px) {
    /* width: 25%; */
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
