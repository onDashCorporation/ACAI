import React, { useEffect, useState } from "react";
import * as S from "./style";

const Search = ({ options }) => {

  const [inputSearch, setInputSearch] = useState("")
  const [filterSearch, setFilterSearch] = useState([])

  // const para normalizar as str 
  const normalizeString = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };
  
  const handleFilter = (event) => {
    const searchValue = event.target.value;
    setInputSearch(searchValue);

    const normalizedSearch = normalizeString(searchValue.toLowerCase());

    const newFilter = options.filter(value => {
      const normalizedProduct = normalizeString(value.produto.toLowerCase());
      return normalizedProduct.includes(normalizedSearch);
    });

    setFilterSearch(newFilter);
  };

  useEffect(() => {
    if(inputSearch === ""){
      setFilterSearch([])
    }
  }, [inputSearch])

  return (
    <S.Container>

      <S.SearchContainer>
        <S.SearchInput
          type="text"
          placeholder="Pesquise"
          value={inputSearch}
          onChange={handleFilter}
        />
      </S.SearchContainer>

      {filterSearch !== 0 &&
        <S.ContainerResults>
          {filterSearch.map(value => (
            <S.ContainerOp key={value.id} >
            <S.Op >{value.produto}</S.Op>
            </S.ContainerOp>
          ))}
        </S.ContainerResults>
      }

    </S.Container>
  );
};

export default Search;
