import axios from "axios";
import { useEffect, useState } from "react";
import { ALL_COUNTRIES } from "../../config";
import Controls from "../../containers/Main/Controls/Controls";
import Card from "../../components/Card/Card";
import style from "./HomePage.module.scss";

const HomePage = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
  }, []);

  return (
    <div className={style.wrap}>
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
              key={countryInfo.name}
              img={countryInfo.img}
              name={countryInfo.name}
              info={countryInfo.info}
            />
          );
        })}
      </section>
    </div>
  );
};
export default HomePage;
