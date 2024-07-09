import React, { useState, useRef } from "react";
import "./Season.css";

const season = {
  spring: {
    light: "pale, light",
    bright: "bright, vivid, strong",
  },
  summer: {
    light: "pale, light, bright",
    mute: "light grayish, soft, dull, grayish",
  },
  autumn: {
    mute: "light grayish, soft, dull, grayish",
    deep: "deep, dark, dark grayish",
  },
  winter: {
    bright: "vivid, strong",
    deep: "deep, dark, dark grayish",
  },
};

// const undertone

const Season = () => {
  // const season = useRef("value");
  const [season, setSeason] = useState("");
  const [brightness, setBrightness] = useState(false);

  return (
    <>
      <div className="season">
        <select name="season" className="foruSeason" id="">
          <option value="default"> 선택하세요</option>
          <option value={season}>봄</option>
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
    </>
  );
};
export default Season;
