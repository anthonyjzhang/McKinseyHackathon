import { Button, Grid, IconButton } from "@mui/material";
import React from "react";
import Image from "next/image";
import mapImage from "../../public/map.png";
import SearchBar from "../feed/components/SearchBar";
import QuestCarousel from "../feed/components/QuestCarousel";
import FilterCarousel from "./components/FilterCarousel";
import PlaceCarousel from "./components/PlaceCarousel";

export default function page() {
  return (
    <Grid container direction={"column"} sx={{ height: "100%" }}>
      <Grid container sx={{ height: "100%", position: "relative" }}>
        <Image
          src={mapImage}
          style={{
            width: "366px",
            height: "100%",
            position: "relative",
            objectFit: "cover",
          }}
          alt="iphone_here"
        />
        <Grid
          container
          direction={"column"}
          alignItems={"start"}
          sx={{
            height: "100%",
            position: "absolute",
            zIndex: "5",
            pt: 2,
          }}
        >
          <Grid container pb={2} justifyContent={"center"}>
            <SearchBar color="black" background="white" />
          </Grid>
          <Grid container sx={{ width: "366px", overflow: "scroll", pl: 1 }}>
            <FilterCarousel />
          </Grid>
          <Grid item flex={1}></Grid>
          <Grid container sx={{ width: "366px", overflow: "scroll", pb: 2 }}>
            <PlaceCarousel />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
