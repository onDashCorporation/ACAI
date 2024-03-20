import * as S from "./style";

const Table = () => {
  return (
    <S.Main>
      <S.Header>
        <S.HeaderItem>
          <S.HeaderInfo>id</S.HeaderInfo>
          <S.HeaderInfo>Nome</S.HeaderInfo>
          <S.HeaderInfo>Deparatemnto</S.HeaderInfo>
          <S.HeaderInfo>Data</S.HeaderInfo>
        </S.HeaderItem>
      </S.Header>
      <S.Conatiner> 
        <S.ContainerItem>
          <S.ContainerInfo>
            <S.Info>174</S.Info>
            <S.Info>Arthur Ferreita Nascimento</S.Info>
            <S.Info>contabilidade</S.Info>
            <S.Info>12/04/2022</S.Info>
          </S.ContainerInfo>
        </S.ContainerItem>
      </S.Conatiner>
    </S.Main>
  );
};
export default Table;
