import styled from "styled-components";

export const TableWrapper = styled.div`
  width: 100%;
`;

// export const Table = styled.table`
//   width: 100%;
//   border-collapse: collapse;
//   text-align: left;
// `;

export const TableHeader = styled.th`
  padding: 8px;
  border-bottom: 1px solid #ddd;
`;

export const TableCell = styled.td`
  padding: 8px;
  border-bottom: 1px solid #ddd;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const Table = styled.div`
  display: grid;
  grid-template-columns: ${props => props.columns};
`;
