import { IoSearch } from "react-icons/io5";

const Search = (search, setSearch) => {
  return (
    <div className="">
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
