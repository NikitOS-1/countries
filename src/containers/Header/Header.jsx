import { IoMoonOutline, IoMoon } from "react-icons/io5";
import style from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = ({ toggleTheme }) => {
  return (
    <header>
      <div className={style.wrap}>
        <div className={style.logo}>
          <Link to={"/"}>Where is the world?</Link>
        </div>
        <div onClick={toggleTheme} className={style.modeTheme}>
          <IoMoon />
          <span>Light Mode </span>
        </div>
      </div>
    </header>
  );
};
export default Header;
