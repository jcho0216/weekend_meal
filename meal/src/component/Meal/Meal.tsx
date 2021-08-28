import { useEffect, useState } from "react";
import * as S from "./styles";
import { request } from "../../utils/api/axios";
import axios from "axios";
import { data } from "../../utils/test/testData";

const Meal = (): JSX.Element => {
  return (
    <S.Container>
      <S.MealContainer>
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
          {data.map((res) => {
            return (
              <S.TableRow>
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
        <S.Blur />
      </S.MealContainer>
    </S.Container>
  );
};

export default Meal;
