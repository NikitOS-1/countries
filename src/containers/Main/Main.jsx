import Card from "../../components/Card/Card";
import Search from "../../components/Search/Search";
import Controls from "./Controls/Controls";
import style from "./Main.module.scss";

const Main = () => {
  return (
    <main className={style.wrap}>
      <Controls />
      <section className={style.cards}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </main>
  );
};
export default Main;
