import { useState } from "react";
import Search from "../../../components/Search/Search";
import CustomSelect from "../../../components/CustomSelect/CustomSelect";
import style from "./Controls.module.scss";

const Controls = () => {
  const [search, setSearch] = useState("");
  return (
    <div className={style.container}>
      <Search search={search} setSearch={setSearch} className={style.search} />
      <CustomSelect className={style.select} />
    </div>
  );
};
export default Controls;
