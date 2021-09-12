import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(180deg, #078f91, #19b6b6);
  color: rgba(35, 53, 57, 0.6);
  display: flex;
  min-width: 800px;
  min-height: 500px;
`;

export const Header = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  background-color: #36304a;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 25px;
  color: #f4f8f9;
  align-content: center;
  line-height: 60px;
  margin-left: 45px;
`;

export const Select = styled.select`
  text-decoration: none;
  border: none;
  background-color: transparent;
  color: #f4f8f9;
  outline: none;
  font-size: 20px;
  margin-right: 20px;
`;

export const Option = styled.option`
  color: black;
`;

export const Download = styled.div`
  height: 30px;
  display: flex;
  font-weight: 700;
  font-size: 18px;
  color: #f4f8f9;
  vertical-align: middle;
  line-height: 60px;
  margin-right: 80px;
  cursor: pointer;
`;

export const SelectDownloadBox = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
`;

export const MealContainer = styled.div`
  width: 75vw;
  height: 85vh;
  background-color: #36304a;
  border-radius: 5px;
  margin: auto auto;
  min-width: 800px;
  min-height: 500px;
  color: #212529;
`;

export const MealTable = styled.div`
  height: 90%;
  width: 100%;
  overflow: auto;
  background-color: white;
  &::-webkit-scrollbar {
    width: 14px;
  }

  &::-webkit-scrollbar-track {
    background: #ffffff;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #19b6b6;
    border-radius: 10px;
    border: 3px solid #ffffff;
  }
`;

export const TableHeader = styled.div`
  width: 100%;
  display: table;
  font-weight: 800;
  background-color: white;
`;

export const TableHeaderCell = styled.div`
  font-size: 20px;
  padding: 10px;
  display: table-cell;
  color: rgba(35, 53, 57, 0.6);
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
  &:hover {
    background-color: #f4f8f9;
  }
`;

export const TableRow = styled.div`
  width: 100%;
  display: table;
  text-align: center;
  line-height: 2px;
  vertical-align: middle;
  border-bottom: 1px solid #f4f8f9;
`;