import Card from "../../components/Card/Card";
import Controls from "./Controls/Controls";
import style from "./Main.module.scss";

const Main = ({ countries = [] }) => {
  console.log(countries);
  return (
    <main className={style.wrap}>
      <Controls />
      <section className={style.cards}>
        {countries.map((c) => {
          <Card key={c.name} img={c.flags.png} name={c.name} />;
        })}
      </section>
    </main>
  );
};
export default Main;
