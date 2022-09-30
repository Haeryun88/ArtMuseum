//정숙이가 작성 2022.09.30

import React from "react";
import { useRef } from "react";
import { useParams } from "react-router-dom";

export default function Search() {
  //////////////////////////////////////////////////////

  const inputRef = useRef();
  let { value } = useParams();
  console.log(value);
  //////////////////////////////////////////////////////
  const handleSearch = () => {
    let query = inputRef.current.value;
    console.log(query);
    query.trim();
    //이 밸류값을 라우터로 전달 -> Search 로 전달해야하는데..
    let locals = window.location.href;

    if (query == null || query == "" || query == " " || query.trim() === "") {
      window.location.href = locals;
    } else {
      if (window.location.href.includes("search")) {
        let arr = window.location.href.split("/search");
        console.log(arr);
        const arrText = arr[0];
        window.location.href = arrText + `/search/${query}`;
      } else window.location.href = locals + `search/${query}`;
    }
  };
  //////////////////////////////////////////////////////

  const onClick = () => {
    handleSearch();
  };
  //////////////////////////////////////////////////////

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch();
    }
  };
  //////////////////////////////////////////////////////

  return (
    <>
      <form>
        <input
          ref={inputRef}
          type="search"
          placeholder="Search..."
          onKeyPress={onKeyPress}
        />
        <button type="button" onClick={onClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
          >
            <path
              id="search_FILL0_wght400_GRAD0_opsz48"
              d="M34.167,35.95,23.208,24.992a9.182,9.182,0,0,1-2.917,1.688,10.312,10.312,0,0,1-3.542.6,10.375,10.375,0,0,1-7.625-3.125A10.277,10.277,0,0,1,6,16.617,10.277,10.277,0,0,1,9.125,9.075,10.325,10.325,0,0,1,16.708,5.95a10.208,10.208,0,0,1,7.521,3.125,10.312,10.312,0,0,1,3.1,7.542,10.393,10.393,0,0,1-.583,3.458A10.576,10.576,0,0,1,25,23.2L36,34.117ZM16.708,24.783a7.8,7.8,0,0,0,5.75-2.4,7.9,7.9,0,0,0,2.375-5.771,7.9,7.9,0,0,0-2.375-5.771,7.8,7.8,0,0,0-5.75-2.4,7.915,7.915,0,0,0-5.812,2.4,7.866,7.866,0,0,0-2.4,5.771,7.866,7.866,0,0,0,2.4,5.771,7.915,7.915,0,0,0,5.812,2.4Z"
              transform="translate(-6 -5.95)"
            />
          </svg>
        </button>
      </form>
    </>
  );
}
