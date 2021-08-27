import { useEffect, useState } from "react";
import * as S from "./styles";
import { request } from "../../utils/api/axios";
import axios from "axios";
import { data } from "../../utils/test/testData";

const Meal = () => {
  return (
    <S.Container>
      <S.MealContainer>
        <S.MealTable>
          <S.TableRow>
            <S.TableHeight>학년</S.TableHeight>
            <S.TableHeight>반</S.TableHeight>
            <S.TableHeight>번호</S.TableHeight>
            <S.TableHeight>이름</S.TableHeight>
            <S.TableHeight>주말급식 신청여부</S.TableHeight>
            <S.TableHeight>급식 관련 기타사항</S.TableHeight>
          </S.TableRow>
          <S.TableData>ㅇㅇ</S.TableData>
          <S.TableData>ㅇㅇ</S.TableData>
          <S.TableData>ㅇㅇ</S.TableData>
          <S.TableData>ㅇㅇ</S.TableData>
          <S.TableData>ㅇㅇ</S.TableData>
          <S.TableData>ㅇㅇ</S.TableData>
        </S.MealTable>
      </S.MealContainer>
    </S.Container>
  );
};

export default Meal;
