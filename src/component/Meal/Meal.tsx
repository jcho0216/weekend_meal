import { FC, useEffect, useState } from "react";
import * as S from "./styles";
import { getClassMember } from "../../utils/api/axios";
import { baseUrl } from "../../utils/api/baseURL";

const Meal: FC = (): JSX.Element => {
  const [data, setData] = useState<Array<string>>([]);
  const [className, setClassName] = useState<string>("1-1");
  const [year, setYear] = useState<any>(1);
  const [classroom, setClassroom] = useState<any>(1);
  const [downloadURL, setDownloadURL] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

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

  useEffect(() => {
    let yearClass = className.split("-");
    let year = yearClass[0];
    let classroom = yearClass[1];
    const GetData = async () => {
      setLoading(true);
      await getClassMember("GET", `${baseUrl}?grade=${year}&cls=${classroom}`)
        .then((res) => setData(res.status))
        .catch((err) =>
          alert("에러 발생: 정지우 학생에게 문의하세요 (와이파이 연결)")
        );
    };
    GetData();
    setLoading(false);
    setYear(year);
    setClassroom(classroom);
  }, [className]);

  useEffect(() => {
    setDownloadURL(
      `${process.env.REACT_APP_API_URL}/download?grade=${year}&cls=${classroom}`
    );
  }, [year, classroom]);

  const moveToDownload = () => {
    let open = window.open(downloadURL);
    setTimeout(() => {
      open?.close();
    }, 300);
  };

  return (
    <S.Container>
      <S.MealContainer>
        <S.Header>
          <S.Title>주말 급식 신청 명단</S.Title>
          <S.SelectDownloadBox>
            <S.Select
              onChange={(e) => setClassName(classList[e.target.selectedIndex])}
            >
              {classList.map((value: any, index) => {
                return <S.Option key={index}>{value}</S.Option>;
              })}
            </S.Select>
            <S.Download onClick={moveToDownload}>다운로드</S.Download>
          </S.SelectDownloadBox>
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
        {loading ? (
          <h1>loading...</h1>
        ) : (
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
        )}
      </S.MealContainer>
    </S.Container>
  );
};

export default Meal;
