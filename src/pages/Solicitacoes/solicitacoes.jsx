import * as S from "./style";
import Nav from "../../components/nav/nav";
import Header from "../../components/header/header";
import Dropdown from "../../components/dropdown/dropdown"
import { useState } from "react";
import Search  from "../../components/search/search";

const solicitacoes = () => {
  const [filterop, setFilterop] = useState("Filtro");
  const options = ["Categoria","Tipo", "Departamento","Categoria","Tipo", "Departamento","Categoria","Tipo", "Departamento" ]


  return (
    <S.Body>
      <Header />
      <S.Main>
        <Nav />
        <S.Container>
          <S.Setcion>
            <S.Title>Solicitações</S.Title>
            <S.Header>
              <S.Option>
                <S.Op>Abertos</S.Op>
                <S.Op>Historico</S.Op>
              </S.Option>
              <S.SearchContainer>
                <Dropdown filterop={filterop} setFilterop={setFilterop}/>
                <Search placeholder="oi" options={options}/>
              </S.SearchContainer>
            </S.Header>
          </S.Setcion>
        </S.Container>
      </S.Main>
    </S.Body>
  );
};

export default solicitacoes;
