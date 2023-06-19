import { useState } from "react";
import Search from "../../../components/Search/Search";
import CustomSelect from "../../../components/CustomSelect/CustomSelect";
import style from "./Controls.module.scss";

const Controls = () => {
  const [search, setSearch] = useState("");
  return (
    <div className={style.container}>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect />
    </div>
  );
};
export default Controls;
