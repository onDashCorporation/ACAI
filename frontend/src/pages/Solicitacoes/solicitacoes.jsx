import * as S from "./style";
import Nav from "../../components/nav/nav";
import Header from "../../components/header/header";
import Dropdown from "../../components/dropdown/dropdown";
import { useState } from "react";
import Search from "../../components/search/search";
import Folder from "../../assets/images/folder.svg"
import data from "./tabledb.json";
import Pagination from "../../components/pagination/pagination"


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
          if (filterop === "Departamento") {
            return normalizeString(item.departamento.toString()).includes(normalizedSearch);
          } 
           else if (filterop === "Nome") {         
            return normalizeString(item.nome.toString()).includes(normalizedSearch);
          }
           else if (filterop === "Status") {          
            return normalizeString(item.status.toString()).includes(normalizedSearch);
          } 
           else if (filterop === "Id") {         
            return normalizeString(item.id.toString()).includes(normalizedSearch);
          } 
           else if (filterop === "Data") {
            return normalizeString(item.data.toString()).includes(normalizedSearch);
          } else {
            return Object.values(item).some((value) =>
              normalizeString(value.toString()).includes(normalizedSearch)
            );
          }
        });
        setFilteredData(newFilteredData);
      };
 
const generateStyles = (key, value) => {
  switch (key) {
    case 'status':
      return value === 'novo' ? 'color: #276e27;'  : value === 'lido' ? 'color: #ccdd32;' : 'color: #6e2d27;';
    default:
      return '';
  }
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
                {Object.entries(item).map(([key, value], index) => (
                  <S.StyledTableCell key={index} styles={generateStyles(key, value)}>{value}</S.StyledTableCell>
                ))}
                <S.StyledTableCell>
                   <S.ImageCell src={Folder} alt="Imagem" onClick={() => handleImageClick(item.id)} />
                </S.StyledTableCell>
                
              </S.TrBody>
            ))}
            
              </S.TableBody>
              <S.PaginationConatiner>
               <Pagination/>
            </S.PaginationConatiner>
              
            </S.StyledTable>
            
          </S.TableContainer>
        </S.Container>
      </S.Main>
    </S.Body>
  );
};

export default solicitacoes;
