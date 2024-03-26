import * as S from "./style";
import Nav from "../../components/nav/nav";
import Header from "../../components/header/header";
import Dropdown from "../../components/dropdown/dropdown";
import { useState, useEffect } from "react";
import Search from "../../components/search/search";
import Plus from "../../assets/images/plus.svg"
import data from "./tabledb.json";
const solicitacoes = () => {
  
  const [filterop, setFilterop] = useState("Filtro");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const normalizeString = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  };

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);

    
    const normalizedSearch = normalizeString(searchValue);
        const newFilteredData = data.filter((item) => {
          if (filterop === "address") {
            // Filtro por Departamento
            return normalizeString(item.address.toString()).includes(normalizedSearch);
          } else {
            // Filtro genérico em todas as colunas
            return Object.values(item).some((value) =>
              normalizeString(value.toString()).includes(normalizedSearch)
            );
          }
        });
        setFilteredData(newFilteredData);
      };
 
 
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
                  <Search 
                  placeholder="Pesquisar"
                   value={searchTerm}
                  onChange={handleSearch}/>
                </S.SearchContainer>
              </S.InsertContainer>
            </S.Header>
          </S.Section>
          <S.TableContainer>
            <S.StyledTable>
              <S.TableHeader>
                <S.TrHeader>
                <S.ThHeader isFirst>Status</S.ThHeader>
                <S.ThHeader>id</S.ThHeader>
                <S.ThHeader>Nome</S.ThHeader>
                <S.ThHeader>Departamento</S.ThHeader>
                <S.ThHeader >Data</S.ThHeader>       
                <S.ThHeader isLast></S.ThHeader>       
                </S.TrHeader>
              </S.TableHeader>
              <S.TableBody>
              {filteredData.map((item, index) => (
                <S.TrBody key={index}>
                  {Object.values(item).map((value, index) => (
                    <S.TdBody  key={index}>{value}</S.TdBody>
                  ))}
                  <S.TdBody>
                    <S.ImageCell src={Plus} alt="Imagem" onClick={() => handleImageClick(item.id)} />
                  </S.TdBody>
                </S.TrBody>
              ))}
              </S.TableBody>
            </S.StyledTable>
          
            
          </S.TableContainer>
        </S.Container>
      </S.Main>
    </S.Body>
  );
};

export default solicitacoes;
