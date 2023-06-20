import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect() {
  const [country, setCountry] = React.useState("");
  console.log(country);
  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <Box
      sx={{
        width: 220,
        color: "inherit",
        fontFamily: "inherit",
      }}>
      <FormControl fullWidth>
        <InputLabel
          id="filter"
          sx={{ color: "inherit", fontFamily: "inherit" }}>
          Filter by Region
        </InputLabel>
        <Select
          labelId="filter"
          id="select-filter"
          value={country}
          label="Filter by Region"
          onChange={handleChange}
          sx={{
            color: "inherit",
            fontFamily: "inherit",
          }}>
          <MenuItem value={"None"} style={{ backgroundColor: "tomato" }}>
            None
          </MenuItem>
          <MenuItem value={"Africa"}>Africa</MenuItem>
          <MenuItem value={"America"}>America</MenuItem>
          <MenuItem value={"Asia"}>Asia</MenuItem>
          <MenuItem value={"Europe"}>Europe</MenuItem>
          <MenuItem value={"Oceania"}>Oceania</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
