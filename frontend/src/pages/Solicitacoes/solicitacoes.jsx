import * as S from "./style";
import Nav from "../../components/nav/nav";
import Header from "../../components/header/header";
import Dropdown from "../../components/dropdown/dropdown";
import { useState, useEffect } from "react";
import Search from "../../components/search/search";
import Options from "./db.json";
const solicitacoes = () => {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
      hehe: "oi",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
      hehe: "hehe",
    },
  ];

  const [filterop, setFilterop] = useState("Filtro");
  const [filteredInfo, setFilteredInfo] = useState({});
 

  

  const columns = [
    {
      title: "Name",
      dataIndex: "name", // Chave correspondente nos dados
      key: "name",


    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    
    },
    {
      title: "Hehe",
      dataIndex: "hehe",
      key: "hehe",
     
    },
  ];

  return (
    <S.Body>
      <Header />
      <S.Main>
        <Nav />
        <S.Container>
          <S.Section>
            <S.Title>Solicitações</S.Title>
            <S.Header>
              <S.Option>
                <S.Op>Abertos</S.Op>
                <S.Op>Historico</S.Op>
              </S.Option>
              <S.InsertContainer>
                <S.FilterContainer>
                  <Dropdown filterop={filterop} setFilterop={setFilterop} />
                </S.FilterContainer>
                <S.SearchContainer>
                  <Search placeholder="oi" options={Options} />
                </S.SearchContainer>
              </S.InsertContainer>
            </S.Header>
          </S.Section>
          <S.TableContainer>
            <S.StyledTable>
              <S.TableHeader>
                <tr>
                <th>Status</th>
                <th>id</th>
                <th>Nome</th>
                <th>Departamento</th>
                <th>Data</th>
                </tr>
              </S.TableHeader>
              <S.TableBody>
                <tr>
                  <td>confirmado</td>
                  <td>83272</td>
                  <td>Arthur Seinai   </td>
                  <td>Logistica</td>
                  <td>22/03/2024</td>
                </tr>
                <tr>
                  <td>confirmado</td>
                  <td>83272</td>
                  <td>Arthur Seinai   </td>
                  <td>Logistica</td>
                  <td>22/03/2024</td>
                </tr>
                <tr>
                  <td>confirmado</td>
                  <td>83272</td>
                  <td>Arthur Seinai   </td>
                  <td>Logistica</td>
                  <td>22/03/2024</td>
                </tr>
                <tr>
                  <td>confirmado</td>
                  <td>83272</td>
                  <td>Arthur Seinai   </td>
                  <td>Logistica</td>
                  <td>22/03/2024</td>
                </tr>
                  <tr>
                    <td>confirmado</td>
                    <td>83272</td>
                    <td>Arthur Seinai   </td>
                    <td>Logistica</td>
                    <td>22/03/2024</td>
                  </tr>
                  <tr>
                    <td>confirmado</td>
                    <td>83272</td>
                    <td>Arthur Seinai   </td>
                    <td>Logistica</td>
                    <td>22/03/2024</td>
                  </tr>
                  <tr>
                    <td>confirmado</td>
                    <td>83272</td>
                    <td>Arthur Seinai   </td>
                    <td>Logistica</td>
                    <td>22/03/2024</td>
                  </tr>
                  <tr>
                    <td>confirmado</td>
                    <td>83272</td>
                    <td>Arthur Seinai   </td>
                    <td>Logistica</td>
                    <td>22/03/2024</td>
                  </tr>
                  <tr>
                    <td>confirmado</td>
                    <td>83272</td>
                    <td>Arthur Seinai   </td>
                    <td>Logistica</td>
                    <td>22/03/2024</td>
                  </tr>
                  <tr>
                    <td>confirmado</td>
                    <td>83272</td>
                    <td>Arthur Seinai   </td>
                    <td>Logistica</td>
                    <td>22/03/2024</td>
                  </tr>
                  <tr>
                    <td>confirmado</td>
                    <td>83272</td>
                    <td>Arthur Seinai   </td>
                    <td>Logistica</td>
                    <td>22/03/2024</td>
                  </tr>
                  <tr>
                    <td>confirmado</td>
                    <td>83272</td>
                    <td>Arthur Seinai   </td>
                    <td>Logistica</td>
                    <td>22/03/2024</td>
                  </tr>
                  <tr>
                    <td>confirmado</td>
                    <td>83272</td>
                    <td>Arthur Seinai   </td>
                    <td>Logistica</td>
                    <td>22/03/2024</td>
                  </tr>
                  <tr>
                    <td>confirmado</td>
                    <td>83272</td>
                    <td>Arthur Seinai   </td>
                    <td>Logistica</td>
                    <td>22/03/2024</td>
                  </tr>
                  
              </S.TableBody>
            </S.StyledTable>
            
          </S.TableContainer>
        </S.Container>
      </S.Main>
    </S.Body>
  );
};

export default solicitacoes;
