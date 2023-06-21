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
          const countryInfo = {
            img: c.flags.png,
            name: c.name.common,
            info: [
              {
                title: "Population:",
                description: c.population.toLocaleString(),
              },
              {
                title: "Region:",
                description: c.region,
              },
              {
                title: "Capital:",
                description: c.capital,
              },
            ],
          };

          return (
            <Card
              img={countryInfo.img}
              name={countryInfo.name}
              info={countryInfo.info}
            />
          );
        })}
      </section>
    </main>
  );
};
export default Main;
