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
  border-radius: 10px;
  overflow: scroll;
`;

export const MealTable = styled.div`
  width: 100%;
  margin: auto auto;
  background-color: #ffffff;
  border-radius: 15px;
  box-sizing: border-box;
  overflow: auto;
`;

export const TableHeader = styled.div`
  width: 100%;
  background-color: #403d56;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: table;
  color: white;
`;

export const TableHeaderCell = styled.div`
  font-size: 20px;
  padding: 10px;
  display: table-cell;
  color: white;
  text-align: center;
  height: 30px;
  vertical-align: middle;
  &:nth-child(1) {
    width: 10%;
  }
  &:nth-child(2) {
    width: 10%;
  }
  &:nth-child(3) {
    width: 10%;
  }
  &:nth-child(4) {
    width: 20%;
  }
  &:nth-child(5) {
    width: 25%;
  }
  &:nth-child(6) {
    width: 25%;
  }
`;

export const TableCell = styled.div`
  /* width: 100%; */
  font-size: 20px;
  padding: 10px;
  display: table-cell;
  text-align: center;
  height: 30px;
  vertical-align: middle;
  &:nth-child(1) {
    width: 10%;
  }
  &:nth-child(2) {
    width: 10%;
  }
  &:nth-child(3) {
    width: 10%;
  }
  &:nth-child(4) {
    width: 20%;
  }
  &:nth-child(5) {
    width: 25%;
  }
  &:nth-child(6) {
    width: 25%;
  }

`;

export const TableRow = styled.div`
  width: 100%;
  display: table;
  text-align: center;
  line-height: 2px;
  vertical-align: middle;
`;
