import { Grid, Typography } from "@mui/material";
import React from "react";

export default function Summary() {
  return (
    <>
      <Grid item xs={12}>
        <Typography
          textAlign={"center"}
          fontWeight={"bold"}
          color={"#79C000"}
          fontSize={"14px"}
        >
          250 CPC
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography textAlign={"center"} fontSize={"14px"}>
          This Week
        </Typography>
      </Grid>
    </>
  );
}
