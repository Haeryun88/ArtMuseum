import React from "react";
import Search from "../Search";
import "./header.css";

export default function Header() {
  //함수를 통해서  props를 전달하는 방법은?
  //아...리액트훅 자체가 함수잖아 이런!
  return (
    <header>
      <div className="Logo"></div>
      <div className="headerBox">
        <div className="TopMenu">
          <div className="Login">Login</div>
          <div className="Logout">Logout</div>
          <div className="SearchBox">
            <Search />
          </div>
        </div>

        <div className="DownMenu">
          <a href="#">ARTWORKS</a>
          <a href="#">WRITINGS</a>
          <a href="#">RESOURCES</a>
        </div>
      </div>
    </header>
  );
}
