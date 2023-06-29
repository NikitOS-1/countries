import { useEffect, useState } from "react";
import style from "./Info.module.scss";

const Info = (props) => {
  const {
    name,
    nativeName,
    flags,
    capital,
    population,
    region,
    subregion,
    tld = [],
    currencies = [],
    languages = [],
    borders = [],
  } = props;
  let currencyValue = Object.values(props.currencies).map((i) => i.name);
  let languageValue = Object.values(languages);

  return (
    <div className={style.wrapper}>
      <div className={style.picture}>
        <img src={flags.svg} alt={name} />
      </div>
      <div className={style.infoDetail}>
        <h1>{name.common}</h1>
        <ul className={style.list1}>
          <li>
            <b>Native Name: </b>
            {name.official}
          </li>
          <li>
            <b>Population: </b>
            {population}
          </li>
          <li>
            <b>Region: </b>
            {region}
          </li>
          <li>
            <b>Sub Region: </b>
            {subregion}
          </li>
          <li>
            <b>Capital: </b>
            {capital}
          </li>
        </ul>
        <ul className={style.list2}>
          <li>
            <b>Top Level Domain: </b>
            {tld.map((d) => (
              <span key={d}>{d} </span>
            ))}
          </li>
          <li>
            <b>Currency: </b>
            <span>{currencyValue}</span>
          </li>
          <li>
            <b>Language: </b>
            {languageValue.map((l) => (
              <span key={l}>{l} </span>
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Info;
