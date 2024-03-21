import * as S from "./style";
import Nav from "../../components/nav/nav";
import Header from "../../components/header/header";
import Dropdown from "../../components/dropdown/dropdown";
import { useState } from "react";
import Search from "../../components/search/search";
import Options from "./db.json";
import Table from "../../components/table/table";
const solicitacoes = () => {
  const [filterop, setFilterop] = useState("Filtro");
  const headers = ["ID", "Produto"];
  const data = [
    { id: 1, produto: "PC" },
    { id: 2, produto: "Notebook" },
    { id: 3, produto: "Celular" },
    { id: 4, produto: "Papel" },
    { id: 5, produto: "Lápis" },
    { id: 6, produto: "Teclado" },
    { id: 7, produto: "Celular" },
    { id: 8, produto: "Cabo" },
    { id: 9, produto: "PC" },
    { id: 10, produto: "Notebook" },
    { id: 11, produto: "Celular" },
    { id: 12, produto: "Papel" },
    { id: 13, produto: "Lápis" },
    { id: 14, produto: "Teclado" },
    { id: 15, produto: "Celular" },
    { id: 16, produto: "Cabo" },
    { id: 17, produto: "PC" },
    { id: 18, produto: "Notebook" },
    { id: 19, produto: "Celular" },
    { id: 20, produto: "Papel" },
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
              <S.InsertConatiner>
                <S.FilterContainer>
                  <Dropdown filterop={filterop} setFilterop={setFilterop} />
                </S.FilterContainer>
                <S.SearchContainer>
                  <Search placeholder="oi" options={Options} />
                </S.SearchContainer>
              </S.InsertConatiner>
            </S.Header>
          </S.Section>
          {/* <S.TableConteiner> */}
          <Table
            headers={headers}
            data={data.map((item) => [item.id, item.produto])}
          />
          {/* </S.TableConteiner> */}
        </S.Container>
      </S.Main>
    </S.Body>
  );
};

export default solicitacoes;
