import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 97%;
  height: 100vh;
  background-color: aqua;
`;
export const Header = styled.header`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10vh;
  background-color: #76bbbb;
`;
export const HeaderItem = styled.text`
  font-size: 20px;
  font-weight: bold;
`;
export const Conatiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
  background-color: #f8ffff;
  overflow: auto;
`;
export const ContainerItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10vh;
  background-color: #bdbd25;
  border: 2px solid black;
`;
