import React, { useState } from "react";
import * as S from "./style";

const Search = ({ options }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredOptions = options.filter(option =>
    option.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  return (
    <S.Body>
      <S.SearchContainer>
        <S.SearchInput
          type="text"
          placeholder="Pesquise"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        </S.SearchContainer>

          {filteredOptions.map(option => (
            <S.ContainerOp key={option}>
              <S.Op>{option}</S.Op>
            </S.ContainerOp>
          ))}
    </S.Body>
  );
};

export default Search;
