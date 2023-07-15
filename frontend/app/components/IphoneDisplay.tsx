import React from "react";
import Image from "next/image";
import iphonebackground from "../../public/iphone.svg";
import { Grid } from "@mui/material";

export default function IphoneDisplay() {
  return (
    <Grid item>
      <Image
        src={iphonebackground}
        style={{ height: "100vh" }}
        alt="iphone_here"
      />
    </Grid>
  );
}
