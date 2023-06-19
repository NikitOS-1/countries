import { IoSearch } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import style from "./Search.module.scss";
import { useState } from "react";

const Search = ({ search, setSearch }) => {
  return (
    <div className={style.container}>
      <IoSearch />
      <input
        type="text"
        onChange={(e) => {
          setSearch(() => e.target.value);
        }}
        value={search}
        placeholder="Search for a country..."
      />
      {search ? <IoClose onClick={() => setSearch("")} /> : false}
    </div>
  );
};
export default Search;
