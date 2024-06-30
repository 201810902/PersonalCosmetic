import Season from "./../components/Season";
import SearchBar from "./../components/SearchBar";

import "./Lips.css";

const Lips = () => {
  const mockData = {
    id: 1,
    brands: "peripera",
    productname: "잉크무드 매트스틱",
    type: "02호 핑크따상",
    price: 14000,
    detail: "설명",
  };
  return (
    <>
      <div className="category">
        <Season />
        <SearchBar />
      </div>
      <div className="info_section">
        <div className="product_id">1</div>
        <div className="line"> | </div>
        <div className="brands">페리페라</div>
        <div className="line"> | </div>
        <div className="product_name">잉크무드 매트스틱</div>
        <div className="line"> | </div>
        <div className="type">02호 핑크따상</div>
        <div className="line"> | </div>
        <div className="price">14000</div>
        <div className="line"> | </div>
        <div className="detail">부가설명 예시:~베이스립으로 좋음</div>
        <div className="line"> | </div>
        <div
          className="online_link"
          onClick={() =>
            window.open(
              "https://www.oliveyoung.co.kr/store/goods/getGoodsDetail.do?goodsNo=A000000156081&t_page=%ED%86%B5%ED%95%A9%EA%B2%80%EC%83%89%EA%B2%B0%EA%B3%BC%ED%8E%98%EC%9D%B4%EC%A7%80&t_click=%EA%B2%80%EC%83%89%EC%83%81%ED%92%88%EC%83%81%EC%84%B8&t_search_name=%ED%8E%98%EB%A6%AC%ED%8E%98%EB%9D%BC%20%EC%9E%89%ED%81%AC%EB%AC%B4%EB%93%9C%20%EB%A7%A4%ED%8A%B8%EC%8A%A4%ED%8B%B1&t_number=1&dispCatNo=1000001000200060004&trackingCd=Result_1"
            )
          }
        >
          올리브영
        </div>
      </div>
      <button>{`<`}</button>
      <button>{`>`}</button>
    </>
  );
};
export default Lips;
