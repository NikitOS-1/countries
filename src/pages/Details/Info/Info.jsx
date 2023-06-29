import { useEffect, useState } from "react";
import style from "./Info.module.scss";

const Info = (props) => {
  const {
    name,
    nativeName = name,
    flags,
    capital = "There is no capital",
    population,
    region,
    subregion = "Dont have subregion",
    tld,
    currencies,
    languages,
    borders,
  } = props;
  let currencyValue = currencies
    ? Object.values(props.currencies).map((i) => i.name)
    : currencies;
  let languageValue = languages ? Object.values(languages) : languages;

  return (
    <section>
      <div className={style.picture}>
        <img src={flags.svg} alt={name} />
      </div>
      <div className={style.infoDetail}>
        <h1>{name.common}</h1>
        <div className={style.wrap}>
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
              {tld ? (
                tld.map((d) => <span key={d}>{d} </span>)
              ) : (
                <span>There is no domain</span>
              )}
            </li>
            <li>
              <b>Currency: </b>
              <span>
                {currencyValue ? (
                  currencyValue
                ) : (
                  <span>There is no currency</span>
                )}
              </span>
            </li>
            <li>
              <b>Language: </b>
              {languageValue ? (
                languageValue.map((l) => <span key={l}>{l} </span>)
              ) : (
                <span>There is no languages</span>
              )}
            </li>
          </ul>
          <ul className={style.borderC}>
            <li>
              <b>Border Countries: </b>
              <span>There is no border country</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Info;
