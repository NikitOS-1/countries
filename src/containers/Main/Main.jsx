import Search from "../../components/Search/Search";
import Controls from "./Controls/Controls";
import style from "./Main.module.scss";

const Main = () => {
  return (
    <main className={style.wrap}>
      <Controls />
    </main>
  );
};
export default Main;
