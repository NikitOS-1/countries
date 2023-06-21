import HomePage from "../../pages/HomePage/HomePage";
import Details from "../../pages/Details/Details";
import NotFound from "../../pages/NotFound/NotFound";
import style from "./Main.module.scss";

const Main = () => {
  return (
    <main className={style.wrap}>
      <HomePage />
      <Details />
      <NotFound />
    </main>
  );
};
export default Main;
