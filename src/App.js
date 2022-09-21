import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
//정숙이 최고!!
export const Art = () => {
  //상태관리하기
  // 1.요청의 결과
  // 2.로딩상태
  // 3.에러
  const [Art, setArt] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [page, setPage] = useState();
  const [next, setNext] = useState(1);
  const fetchArt = async () => {
    try {
      //Art초기화, error초기화, loading은 true
      setArt(null);
      setError(null);
      setLoading(true);
      const response = await axios.get(
        `https://api.artic.edu/api/v1/artworks/search?q=lion&query[term][is_public_domain]=true&page=${next}&limit=10&fields=id,title,image_id`
      );
      setArt(response.data.data);
      setPage(response.data.pagination);

      console.log(Art);
      console.log(page);
    } catch (e) {
      //에러번호를 확인하고 싶을때
      console.log(e.response.status);
      setError(e);
    }
    setLoading(false);
  };
  const nextPage = () => {
    setNext(next + 1);
    console.log(next);
  };
  //렌더링 될때 axios를 사용해서 데이터를 받음
  useEffect(() => {
    fetchArt();
  }, [next]);
  //로딩중이라면?
  if (loading) return <div> 로딩중...</div>;
  //에러가 발생했다면?
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!Art) return null;
  return (
    <>
      <ul>
        {Art.map((item, id) => (
          <a key={id} href={item.api_link}>
            <li>
              <img
                src={`https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`}
              ></img>
              {item.title}
            </li>
            {/* 이부분이반복~~ */}
          </a>
        ))}
      </ul>
      <button onClick={fetchArt}>다시 불러오기</button>
      <button onClick={nextPage}>다음</button>
    </>
  );
};
// 404못찾았다
// 401인증되지않았다
// 400요청잘못됨

export default Art;
