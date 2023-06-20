import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import style from "./App.module.scss";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={[style["container"], style[`${theme}`]].join(" ")}>
      <Header toggleTheme={toggleTheme} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
