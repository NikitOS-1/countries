import { IoSearch } from "react-icons/io5";
import style from "./Search.module.scss";

const Search = (search, setSearch) => {
  return (
    <div className={style.container}>
      Search
      <IoSearch />
      <input
        type="text"
        onChange={(e) => {
          e.target.value;
        }}
        value={search}
      />
    </div>
  );
};
export default Search;