import HomePage from "../../pages/HomePage/HomePage";
import Details from "../../pages/Details/Details";
import style from "./Main.module.scss";
import { Route, Routes } from "react-router-dom";

const Main = ({ countries, setCountries }) => {
  return (
    <main className={style.wrap}>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage countries={countries} setCountries={setCountries} />
          }
        />
        <Route path="/country/:name" element={<Details />} />
      </Routes>
    </main>
  );
};
export default Main;
