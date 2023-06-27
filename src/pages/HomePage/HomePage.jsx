import axios from "axios";
import { useEffect, useState } from "react";
import { ALL_COUNTRIES } from "../../config";
import Controls from "../../containers/Main/Controls/Controls";
import Card from "../../components/Card/Card";
import style from "./HomePage.module.scss";
import { useNavigate } from "react-router-dom";

const HomePage = ({ countries, setCountries }) => {
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const navigate = useNavigate();

  const handleSearch = (search, region) => {
    let data = [...countries];

    if (region) {
      data = data.filter((c) => c.region.includes(region));
    }
    if (search) {
      data = data.filter((c) => c.name.includes(search));
    }
    setFilteredCountries(data);
  };
  const news = countries;
  useEffect(() => {
    if (!countries.length) {
      axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
    }
  }, []);

  return (
    <div className={style.wrap}>
      <Controls handleSearch={handleSearch} />
      <section className={style.cards}>
        {filteredCountries.map((c) => {
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
              onClick={() => navigate(`/country/${countryInfo.name}`)}
            />
          );
        })}
      </section>
    </div>
  );
};
export default HomePage;
