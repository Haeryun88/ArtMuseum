import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sample01 from "./sample01/Sample01";
import Sample02 from "./sample02/Sample02";

// 메인
import Main from "./Main/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Main />} />
      </Routes>
      <Routes>
        <Route path={"/detail"} element={<Sample02 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
