import { Button, Grid, IconButton } from "@mui/material";
import React from "react";
import Image from "next/image";
import mapImage from "../../public/map.png";
import SearchBar from "../feed/components/SearchBar";

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
          item
          sx={{
            height: "100%",
            position: "absolute",
            zIndex: "5",
            p: 2,
          }}
        >
          {/* <SearchBar /> */}

          <Button
            disableRipple
            // onClick={() => {
            //   // router.back();
            // }}
            sx={{
              background: "#286140",
              color: "white",
              textTransform: "none",
              ":hover": { background: "#286140" },
            }}
          >
            All
          </Button>
          <Button
            disableRipple
            // onClick={() => {
            //   // router.back();
            // }}
            sx={{
              ml: 2,
              textTransform: "none",
              background: "white",
              color: "#286140",
              ":hover": { background: "white" },
            }}
          >
            Restrooms
          </Button>
          <Button
            disableRipple
            // onClick={() => {
            //   // router.back();
            // }}
            sx={{
              ml: 2,
              textTransform: "none",
              background: "white",
              color: "#286140",
              ":hover": { background: "white" },
            }}
          >
            Playgrounds
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
