import { useEffect, useState } from "react";
import * as S from "./styles";
import { request } from "../../utils/api/axios";
import axios from "axios";
import { data } from "../../utils/test/testData";

const Meal = (): JSX.Element => {
  return (
    <S.Container>
      <S.Header>
        <S.Title>주말 급식 신청 명단</S.Title>
        <S.Select>
          <S.Option>전체</S.Option>
          <S.Option>1-1</S.Option>
          <S.Option>1-2</S.Option>
          <S.Option>1-3</S.Option>
          <S.Option>1-4</S.Option>
          <S.Option>2-1</S.Option>
          <S.Option>2-2</S.Option>
          <S.Option>2-3</S.Option>
          <S.Option>2-4</S.Option>
          <S.Option>3-1</S.Option>
          <S.Option>3-2</S.Option>
          <S.Option>3-3</S.Option>
          <S.Option>3-4</S.Option>
        </S.Select>
      </S.Header>
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
