import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// CSS
import "../reset.css";

//컴포넌트
import Header from "../Header";
import SearchPage from "./SearchPage";
import SearchAside from "./SearchAside";
import Footer from "../Footer";

//~~조건~~
//1. 헤더는 항상있음(푸터도 마찬가지)
//2. 검색을 할때만 컨텐츠가 바뀜
//로직 :  Main 에서 쿼리검색 -> 검색 전용 화면으로 이동
//로직 2:  Main 에서 온뷰 버튼 -> 검색 전용 화면으로 이동
//헤더와 푸터는 재사용할것 / 검색 페이지는 새롭게 라우팅할것

function SearchMain() {
  // console.log(useParams().value); // 입력된 쿼리값
  // ////////////////////////////////////////////////////////
  const { value } = useParams();

  console.log(value);

  const [Art, setArt] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [page, setPage] = useState();
  const [next, setNext] = useState(1);
  const [query, setQuery] = useState(value);

  /////////////////////////////////////////////

  const fetchArt = async () => {
    try {
      //Art초기화, error초기화, loading은 true
      setArt(null);
      setError(null);
      setLoading(true);
      const response = await axios.get(
        `https://api.artic.edu/api/v1/artworks/search?q=${query}&query[term][is_public_domain]=true&page=${next}&limit=10&fields=id,title,image_id`
      );
      setArt(response.data.data);
      setPage(response.data.pagination);
    } catch (e) {
      //에러번호를 확인하고 싶을때
      // console.log(e.response.status);
      setError(e);
      console.log(e);
    }
    setLoading(false);
  };

  // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const nextPage = () => {
    setNext(next + 1);
    console.log(next);
  };
  //렌더링 될때 axios를 사용해서 데이터를 받음
  useEffect(() => {
    fetchArt();
  }, [next]);
  ///////////////////////////////////////////////////////
  //로딩중이라면?
  if (loading) return <div> 로딩중...</div>;
  //에러가 발생했다면?
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!Art) return null;
  ////////////////////////////////////////////////////

  console.log(Art);
  console.log(page);
  return (
    <>
      <link rel="stylesheet" href="https://use.typekit.net/jze5tjr.css"></link>
      <Header />
      <SearchAside />
      <SearchPage Art={Art} />
      <Footer />
    </>
  );
}

export default SearchMain;
