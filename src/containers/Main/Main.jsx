import HomePage from "../../pages/HomePage/HomePage";
import Details from "../../pages/Details/Details";
import NotFound from "../../pages/NotFound/NotFound";
import style from "./Main.module.scss";
import { Route, Routes } from "react-router-dom";

const Main = () => {
  return (
    <main className={style.wrap}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/country/:name" element={<Details />} />
        <Route path="/error" element={<NotFound />} />
      </Routes>
    </main>
  );
};
export default Main;
