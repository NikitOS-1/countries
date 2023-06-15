import { IoMoonOutline, IoMoon } from "react-icons/io5";
import style from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <a href="">Where is the world?</a>
      <div>
        <IoMoon />
        <span>Light Mode </span>
      </div>
    </header>
  );
};
export default Header;
