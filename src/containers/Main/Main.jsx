import Card from "../../components/Card/Card";
import Search from "../../components/Search/Search";
import Controls from "./Controls/Controls";
import style from "./Main.module.scss";

const Main = () => {
  return (
    <main className={style.wrap}>
      <Controls />
      <div className={style.cards}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
};
export default Main;
