import { styled } from "styled-components";

export const HeaderComponent = styled.header`
  display: flex;
  flex-direction: row;
  grid-auto-flow: row;
  justify-content: space-between;
  align-items: center;

  box-sizing: border-box;
  padding-inline: 20px;

  min-width: 100vw;
  height: 70px;

  /* position: fixed; */

  background-color: var(--pakistan-green);
  color: var(--cornsilk);

  box-shadow: -1px -1px 14px -5px rgba(67, 40, 24, 0.75);
  -webkit-box-shadow: -1px -1px 14px -5px rgba(67, 40, 24, 0.75);
  -moz-box-shadow: -1px -1px 14px -5px rgba(67, 40, 24, 0.75);

  > p {
    font-family: var(--font-main);
    color: var(--cornsilk);
    font-weight: bold;
    font-size: 18px;

    text-align: center;

    max-width: 180px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  > button {
    background-color: transparent;
    border: none;
    outline: 0;
    > svg {
      width: 30px;
      height: 30px;
      cursor: pointer;
      color: var(--cornsilk);
    }
  }
`;

export const LogoutArea = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  cursor: pointer;

  > span {
    font-family: var(--font-main);
    color: var(--cornsilk);
    font-weight: bold;
    font-size: 16px;
  }

  > svg {
    width: 20px;
    height: 20px;
    cursor: pointer;
    color: var(--cornsilk);
  }
`;
