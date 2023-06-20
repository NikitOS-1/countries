import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import style from "./CustomSelect.module.scss";

export default function BasicSelect() {
  const [country, setCountry] = React.useState("");

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <Box sx={{ width: 220 }}>
      <FormControl fullWidth>
        <InputLabel id="filter" className={style.filterLabel}>
          Filter by Region
        </InputLabel>
        <Select
          labelId="filter"
          id="select-filter"
          value={country}
          label="Filter by Region"
          onChange={handleChange}
          className={style.filterSelect}>
          <MenuItem
            value={10}
            style={{ backgroundColor: "tomato" }}
            className={style.filterSelect}>
            None
          </MenuItem>
          <MenuItem value={20} className={style.filterSelect}>
            Africa
          </MenuItem>
          <MenuItem value={30} className={style.filterSelect}>
            America
          </MenuItem>
          <MenuItem value={40} className={style.filterSelect}>
            Asia
          </MenuItem>
          <MenuItem value={50} className={style.filterSelect}>
            Europe
          </MenuItem>
          <MenuItem value={60} className={style.filterSelect}>
            Oceania
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
