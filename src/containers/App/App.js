import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import style from "./App.module.scss";
import axios from "axios";
import { ALL_COUNTRIES } from "../../config";

function App() {
  const [countries, setCountries] = useState([]);
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={[style["container"], style[`${theme}`]].join(" ")}>
      <Header toggleTheme={toggleTheme} />
      <Main countries={countries} setCountries={setCountries} />
      <Footer />
    </div>
  );
}

export default App;
