import { BrowserRouter, Routes, Route } from "react-router-dom";

// 메인
import Main from "./component/Main/Main";
//검색
import SearchMain from "./component/SearchPages/SearchMain";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"/search/:value"} element={<SearchMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
