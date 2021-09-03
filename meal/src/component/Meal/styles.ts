import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(180deg, #94e3e3, #b5e7e3);
  display: inline-block;
  color: rgba(35,53,57,.6);
`;

export const Header = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-evenly;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 30px;
  color: #f4f8f9;
  align-content: center;
  margin: 34px;
`;

export const Select = styled.select`
  text-decoration: none;
  border: none;
  background-color: transparent;
  color: #f4f8f9;
  outline: none;
  font-size: 18px;
`;

export const Option = styled.option`

`;

export const MealContainer = styled.div`
  width: 75%;
  height: 75%;
  background-color: white;
  margin: auto auto;
  border-radius: 5px;
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
  display: table;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  /* border-bottom: 1px solid #f4f8f9; */
  font-weight: 800;
  /* background-color:  */
`;

export const TableHeaderCell = styled.div`
  font-size: 20px;
  padding: 10px;
  display: table-cell;
  color: rgba(35,53,57,.6);
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
  border-bottom: 1px solid #f4f8f9;
  &:nth-child(even) {
    /* background-color: #e7ebe9; */
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