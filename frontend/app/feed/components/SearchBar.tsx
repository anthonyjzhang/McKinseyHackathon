import { Grid, InputAdornment, OutlinedInput } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar({
  background = "#E9E9E9",
  color = "#191919",
}: {
  background?: string;
  color?: string;
}) {
  return (
    <Grid item>
      <OutlinedInput
        size="small"
        sx={{
          width: "325px",
          borderRadius: "10px",
          background: `${background}`,
          color: `${color}`,
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        }}
        id="outlined-adornment-weight"
        placeholder="Search a parklocation, activity"
        startAdornment={<SearchIcon sx={{ color: "#A1A1A1", pr: 1 }} />}
        aria-describedby="outlined-weight-helper-text"
        inputProps={{
          "aria-label": "weight",
        }}
      />
    </Grid>
  );
}
