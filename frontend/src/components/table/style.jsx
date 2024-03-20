import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #ffaa00;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`;
export const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 4vh;
  background-color: #76bbbb;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`;
export const HeaderItem = styled.text`
  display: flex;
  flex-direction: row;
  margin-left: 159px;
  gap: 150px;
`;
export const HeaderInfo = styled.text`
  font-size: 15px;
  font-weight: bold;
`;








export const Conatiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  background-color: #2b8d8d;
  overflow-y: auto;
  overflow: hidden;
  width: 100%;
`;
export const ContainerItem = styled.div`
  border: 0.5px solid black;
  width: 100%;

`;
export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
   padding-left: 159px;
    gap: 150px;
  background-color: blue;
`;
export const Info = styled.div`
  
  
`;



