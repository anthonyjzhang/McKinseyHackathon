import { Button, Grid, IconButton } from "@mui/material";
import React from "react";
import Image from "next/image";
import lensImage from "../../public/lens.svg";
import SearchBar from "../feed/components/SearchBar";
import LensCard from "./components/LensCard";

export default function page() {
  return (
    <Grid container direction={"column"} sx={{ height: "100%" }}>
      <Grid container sx={{ height: "100%", position: "relative" }}>
        <Image
          src={lensImage}
          style={{
            width: "366px",
            height: "622px",
            position: "relative",
            objectFit: "contain",
            paddingBottom: "",
          }}
          priority
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
          <Grid item flex={1}></Grid>
          <Grid container sx={{ width: "366px", overflow: "scroll", pb: 2 }}>
            <LensCard />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
