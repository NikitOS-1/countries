import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ width: 220 }}>
      <FormControl fullWidth>
        <InputLabel id="filter">Filter by Region</InputLabel>
        <Select
          labelId="filter"
          id="select-filter"
          value={age}
          label="Filter by Region"
          onChange={handleChange}>
          <MenuItem value={10} style={{ backgroundColor: "tomato" }}>
            None
          </MenuItem>
          <MenuItem value={20}>Africa</MenuItem>
          <MenuItem value={30}>America</MenuItem>
          <MenuItem value={40}>Asia</MenuItem>
          <MenuItem value={50}>Europe</MenuItem>
          <MenuItem value={60}>Oceania</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
