import * as S from "./style";

const Table = ({ headers, data }) => {
  const size = headers.length;
  const columns = Array.from({ length: size }, () => "1fr").join(" ");

  return (
    <S.Table columns={columns}>
      {data.map((element) =>
        element.map((row) => <S.TableCell key={row}>{row}</S.TableCell>)
      )}
    </S.Table>
  );
};

// const Table = ({ headers, data }) => {
//   return (
//     <S.TableWrapper>
//     <S.Table>
//       <thead>
//         <S.TableRow>
//           {headers.map((header, index) => (
//             <S.TableHeader key={index}>{header}</S.TableHeader>
//           ))}
//         </S.TableRow>
//       </thead>
//       <tbody>
//         {data.map((row, rowIndex) => (
//           <S.TableRow key={rowIndex}>
//             {row.map((cell, cellIndex) => (
//               <S.TableCell key={cellIndex}>{cell}</S.TableCell>
//             ))}
//           </S.TableRow>
//         ))}
//       </tbody>
//     </S.Table>
//   </S.TableWrapper>
//   );
// };
export default Table;
