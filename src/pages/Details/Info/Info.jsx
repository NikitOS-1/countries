import { useEffect, useState } from "react";
import style from "./Info.module.scss";

const Info = (props) => {
  const {
    name,
    nativeName,
    flag,
    capital,
    population,
    region,
    subregion,
    topLevelDomain,
    currencues = [],
    languages = [],
    borders = [],
  } = props;

  return <div>info{name}</div>;
};
export default Info;
