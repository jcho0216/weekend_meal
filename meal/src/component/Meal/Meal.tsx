import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import * as S from "./styles";
import { getClassMember } from "../../utils/api/axios";
const baseUrl =
  "https://41xzgsp1fk.execute-api.ap-northeast-2.amazonaws.com/prod/v1/apply/weekend-meal";

const Meal = (): JSX.Element => {
  const [data, setData] = useState<any>([]);
  const [classNum, setClassNum] = useState<string>("1-1");
  // const [loading, setLoading] = useState<boolean>(false);
  const classList: Array<string> = [
    "1-1",
    "1-2",
    "1-3",
    "1-4",
    "2-1",
    "2-2",
    "2-3",
    "2-4",
    "3-1",
    "3-2",
    "3-3",
    "3-4",
  ];
  const Select: MutableRefObject<any> = useRef();
  useEffect(() => {
    let yearClass = classNum.split("-");
    let year = yearClass[0];
    let classroom = yearClass[1];
    const GetData = async () => {
      await getClassMember("GET", `${baseUrl}?grade=${year}&cls=${classroom}`)
        .then((res) => setData(res.status))
        .catch((err) => console.log(err));
    };
    GetData();
  }, [classNum]);

  return (
    <S.Container>
      <S.MealContainer>
        <S.Header>
          <S.Title>주말 급식 신청 명단</S.Title>
          <S.Select
            ref={Select}
            onChange={(e) => setClassNum(classList[e.target.selectedIndex])}
          >
            {classList.map((value: any, index) => {
              return <option key={index}>{value}</option>;
            })}
          </S.Select>
        </S.Header>
        <S.TableHeader>
          <S.TableRow>
            <S.TableHeaderCell>학년</S.TableHeaderCell>
            <S.TableHeaderCell>반</S.TableHeaderCell>
            <S.TableHeaderCell>번호</S.TableHeaderCell>
            <S.TableHeaderCell>이름</S.TableHeaderCell>
            <S.TableHeaderCell>주말급식 신청여부</S.TableHeaderCell>
            <S.TableHeaderCell>급식 관련 기타사항</S.TableHeaderCell>
          </S.TableRow>
        </S.TableHeader>
        <S.MealTable>
          {data.map((res: any, index: number) => {
            return (
              <S.TableRow key={index}>
                <S.TableCell>{res.grade}</S.TableCell>
                <S.TableCell>{res.cls}</S.TableCell>
                <S.TableCell>{res.number}</S.TableCell>
                <S.TableCell>{res.name}</S.TableCell>
                <S.TableCell>{res.value}</S.TableCell>
                <S.TableCell>{res.reason}</S.TableCell>
              </S.TableRow>
            );
          })}
        </S.MealTable>
      </S.MealContainer>
    </S.Container>
  );
};

export default Meal;
