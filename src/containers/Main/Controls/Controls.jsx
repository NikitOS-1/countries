import { useEffect, useState } from "react";
import Search from "../../../components/Search/Search";
import CustomSelect from "../../../components/CustomSelect/CustomSelect";
import style from "./Controls.module.scss";

const Controls = ({ handleSearch }) => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    console.log(search);
    console.log(region);
    handleSearch(search, region);
  }, [search, region]);
  return (
    <div className={style.container}>
      <Search search={search} setSearch={setSearch} className={style.search} />
      <CustomSelect
        className={style.select}
        region={region}
        setRegion={setRegion}
      />
    </div>
  );
};
export default Controls;
