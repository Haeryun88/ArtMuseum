// CSS
import "../reset.css";

//컴포넌트
import Header from "../Header";
import Contents from "./Contents";
import Footer from "../Footer";

//~~조건~~
//1. 헤더는 항상있음(푸터도 마찬가지)
//2. 검색을 할때만 컨텐츠가 바뀜
//로직 :  Main 에서 쿼리검색 -> 검색 전용 화면으로 이동
//로직 2:  Main 에서 온뷰 버튼 -> 검색 전용 화면으로 이동
//헤더와 푸터는 재사용할것 / 검색 페이지는 새롭게 라우팅할것

function Main() {
  return (
    <>
      <link rel="stylesheet" href="https://use.typekit.net/jze5tjr.css"></link>
      <Header />
      <Contents />
      <Footer />
    </>
  );
}

export default Main;
