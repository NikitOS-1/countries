import { useEffect, useState } from "react";
import CustomSelect from "../../../components/CustomSelect/CustomSelect";
import Search from "../../../components/Search/Search";
import style from "./Controls.module.scss";

const Controls = ({ handleSearch }) => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
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
