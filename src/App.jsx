import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SearchBar from "./components/Searchbar";
function App() {
  return (
    <>
      <h1>Personal Color</h1>
      <div>
        <p>퍼스널컬러</p>
        <select name="season" id="">
          <option value="spring">봄</option>
          <option value="summer">여름</option>
          <option value="fall">가을</option>
          <option value="winter">겨울</option>
        </select>
        <select name="tone" id="">
          <option value="spring">페일/라이트</option>
          <option value="summer">소프트/뮤트</option>
          <option value="fall">다크/딥</option>
        </select>
      </div>
      <div>
        {" "}
        <p>제품</p>
        <select name="" id="">
          <option value="립">립</option>
        </select>
        <select name="" id="">
          <option value="">스틱</option>
          <option value="">틴트</option>
        </select>
      </div>
      <SearchBar />
    </>
  );
}

export default App;
