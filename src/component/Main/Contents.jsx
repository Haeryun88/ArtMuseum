import React from "react";
import "./contents.css";
import Section01 from "./contents/Section01";
import Section02 from "./contents/Section02";
import Section03 from "./contents/Section03";

export default function Contents() {
  return (
    <div className="Contents">
      <Section01 />
      <Section02 />
      <Section03 />
    </div>
  );
}
