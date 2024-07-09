import { Link } from "react-router-dom";
import colorchip from "../assets/color_icon.svg";
import "./Header";

const Header = () => {
  return (
    <>
      <Link to="/">
        <h1 className="header">Personal Color</h1>
      </Link>
    </>
  );
};
export default Header;
