import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(180deg, #94e3e3, #b5e7e3);
  display: flex;
`;

export const MealContainer = styled.div`
  width: 80%;
  height: 80%;
  background-color: white;
  margin: auto auto;
`;

export const MealTable = styled.div`
  width: 100%;
  height: 100%;
  margin: auto auto;
  background-color: #ffffff;
  border-radius: 15px;
  box-sizing: border-box;
  overflow: auto;
`;

export const TableHead = styled.div`
  background-color: #403d56;
`;

export const TableBody = styled.div`
  background-color: white;
  color: yellow;
`;

export const TableRow = styled.div`
  background-color: #403d56;
  height: 10;
  th {
    color: white;
  }
`;

export const TableHeight = styled.div`
  font-size: 20px;
  padding: 10px;
`;

export const TableData = styled.div`
  display: table-cell;
  text-align: center;
  padding: 10px;
  line-height: 2px;
  vertical-align: middle;
`;
