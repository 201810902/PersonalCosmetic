import { useNavigate } from "react-router-dom";
const Home = () => {
  const nav = useNavigate();
  const movetoLips = () => {
    nav("/lips");
  };
  const movetoPalettes = () => {
    nav("/palettes");
  };
  const movetoPersonalColor = () => {
    nav("/personalcolor");
  };

  return (
    <>
      <div>
        <p>☆퍼스널 컬러별 화장품 리스트☆</p>
        <p>
          ※ 여러 유트브 영상과 구글 검색 결과를 바탕으로 한 참고용 글입니다.
        </p>
        <button onClick={movetoLips}>립</button>
        <button onClick={movetoPalettes}>팔레트</button>
      </div>
      <button onClick={movetoPersonalColor}>퍼스널컬러를 모른다면?</button>
    </>
  );
};
export default Home;
