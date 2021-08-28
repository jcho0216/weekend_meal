import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(180deg, #94e3e3, #b5e7e3);
  display: flex;
  color: grey;
`;

export const MealContainer = styled.div`
  width: 75%;
  height: 75%;
  background-color: white;
  margin: auto auto;
  border-radius: 20px;
`;

export const MealTable = styled.div`
  height: 91%;
  width: 100%;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const TableHeader = styled.div`
  width: 100%;
  background-color: #403d56;
  display: table;
  color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
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
  font-size: 20px;
  padding: 10px;
  display: table-cell;
  text-align: center;
  height: 30px;
  vertical-align: middle;
  cursor: pointer;

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

  &:nth-child(even) {
    background-color: #e7ebe9;
  }

  &:hover {
    color: #212529; 
  }
`;

export const Blur = styled.div`
  filter: blur(10px);
  width: 100%;
  height: 30px;
  background-color: white;
`;