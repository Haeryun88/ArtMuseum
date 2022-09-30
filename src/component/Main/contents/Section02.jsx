import React from "react";
import "./section02.css";

export default function section02() {
  return (
    <div className="section02">
      <div className="section02_Title">
        <p>THE COLLECTION</p>
      </div>
      <div className="section02_Menu">
        <div className="s2_main01"></div>
        <div className="s2_main02">
          <p>
            Explore thousands of artworks in the museum’s collection—from our
            renowned icons to lesser-known works from every corner of the globe—
            as well as our books, writings, reference materials, and other
            resources.
          </p>
        </div>
        <div className="s2_main03">
          <a href="#">ARTWORKS</a>
        </div>
        <div className="s2_main04">
          <a href="#">WRITING</a>
        </div>
        <div className="s2_main05">
          <a href="#">RESOURCE</a>
        </div>
      </div>
    </div>
  );
}
