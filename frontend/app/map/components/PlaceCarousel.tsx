import { Button, Grid, List } from "@mui/material";
import React from "react";
import PlaceCard from "./PlaceCard";

function PlaceCarousel() {
  return (
    <List
      sx={{
        display: "flex",
        flexDirection: "row",
        padding: 0,
        pr: 3,
      }}
    >
      <Grid item pl={2}>
        <PlaceCard />
      </Grid>
      <Grid item pl={2}>
        <PlaceCard />
      </Grid>
      <Grid item pl={2}>
        <PlaceCard />
      </Grid>
      <Grid item pl={2}>
        <PlaceCard />
      </Grid>
    </List>
  );
}

export default PlaceCarousel;
