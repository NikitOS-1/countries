import axios from "axios";
import { useEffect, useState } from "react";
import { ALL_COUNTRIES } from "../../config";
import Card from "../../components/Card/Card";
import style from "./HomePage.module.scss";
import { useNavigate } from "react-router-dom";
import Controls from "./Controls/Controls";

const HomePage = ({ countries, setCountries }) => {
  const [filteredCountries, setFilteredCountries] = useState([]);
  useEffect(() => {
    setFilteredCountries(countries);
  }, [countries]);

  const navigate = useNavigate();

  const handleSearch = (search, region) => {
    let data = [...countries];
    console.log(region);
    if (region) {
      data = data.filter((c) => c.region.includes(region));
    }
    if (search) {
      // data = data.filter((c) => c.name.includes(search));
    }

    setFilteredCountries(data);
  };

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
