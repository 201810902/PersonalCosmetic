import "./SearchBar.css";
import { useState, useRef } from "react";
const SearchBar = () => {
  const [content, setContent] = useState("");
  const contentRef = useRef();

  // const onSubmit = () => {
  //   if (content === "") {
  //     contentRef.current.focus();
  //     return;

  //     onCreate(content);
  //     setContent("");
  //   };
  return (
    <>
      <input label="제품 검색" type="search" placeholder="입력하세요" />
      <button>검색</button>
    </>
  );
};
export default SearchBar;
