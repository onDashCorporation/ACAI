import * as S from "./style";
import Nav from "../../components/nav/nav";
import Header from "../../components/header/header";
import Dropdown from "../../components/dropdown/dropdown"
import { useState } from "react";
import Search  from "../../components/search/search";
import Options from "./db.json"
const solicitacoes = () => {
  const [filterop, setFilterop] = useState("Filtro");


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
                <Dropdown filterop={filterop} setFilterop={setFilterop}/>
                </S.FilterContainer>
                <S.SearchContainer>
                  <Search placeholder="oi" options={Options}/>
                </S.SearchContainer>
              </S.InsertConatiner>
    
            </S.Header>
          </S.Section>
        </S.Container>
      </S.Main>
    </S.Body>
  );
};

export default solicitacoes;
