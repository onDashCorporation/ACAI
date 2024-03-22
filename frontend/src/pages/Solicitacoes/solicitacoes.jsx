import * as S from "./style";
import Nav from "../../components/nav/nav";
import Header from "../../components/header/header";
import Dropdown from "../../components/dropdown/dropdown";
import { useState, useEffect } from "react";
import Search from "../../components/search/search";
import Options from "./db.json";
import TableMain from "../../components/table/table";
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
  // const [dataSource, setDataSource] = useState([]);

  // useEffect(() => {
  //   fetchDataFromAPI();
  // }, []);

  // const fetchDataFromAPI = async () => {
  //   try {
  //     // Simulando uma requisição para obter os dados da API
  //     const response = await axios.get('url_da_sua_api');
  //     const data = response.data; // Dados recebidos da API
  //     setDataSource(data);
  //   } catch (error) {
  //     console.error('Erro ao obter dados da API:', error);
  //   }
  // };

  const getUniqueOptions = (data, key) => {
    const uniqueOptions = new Set();
    data.forEach((item) => {
      uniqueOptions.add(item[key]);
    });
    return Array.from(uniqueOptions).map((value) => ({ text: value, value }));
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name", // Chave correspondente nos dados
      key: "name",
      filteredValue: filteredInfo.name || null,
      filters: getUniqueOptions(dataSource, "name"),
      onFilter: (value, record) => record.name.includes(value),
      // filters: [], // Inicializar opções de filtro vazias
      // filteredValue: filteredInfo.name || null,
      // filters: getUniqueOptions(dataSource, "name"),
      // onFilter: (value, record) => record.name.includes(value),

      // Outros atributos omitidos por brevidade...
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      filters: [], // Inicializar opções de filtro vazias
      filteredValue: filteredInfo.age || null,
      onFilter: (value, record) => record.age.includes(value),
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      filters: [], // Inicializar opções de filtro vazias
      filteredValue: filteredInfo.address || null,
      onFilter: (value, record) => record.address.includes(value),
    },
    {
      title: "Hehe",
      dataIndex: "hehe",
      key: "hehe",
      filters: [], // Inicializar opções de filtro vazias
      filteredValue: filteredInfo.hehe || null,
      onFilter: (value, record) => record.hehe.includes(value),
    },
  ];
  console.log(dataSource);

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
          <S.TableConteiner>
            <TableMain
              showDeleteOption={true}
              dataSource={dataSource}
              columns={columns}
              filteredInfo={filteredInfo}
              setFilteredInfo={setFilteredInfo}
            />
          </S.TableConteiner>
        </S.Container>
      </S.Main>
    </S.Body>
  );
};

export default solicitacoes;
