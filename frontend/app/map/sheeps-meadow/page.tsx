"use client";
import { Button, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import sheepsmeadow from "../../../public/sheepsmeadow.png";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { useRouter } from "next/navigation";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function page() {
  const router = useRouter();
  return (
    <Grid
      container
      sx={{ height: "622px", overflow: "scroll" }}
      alignContent={"start"}
    >
      <Grid container sx={{ position: "relative" }}>
        <Image
          src={sheepsmeadow}
          style={{
            width: "366px",
            height: "200px",
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
          <IconButton
            disableRipple
            onClick={() => {
              router.push("/feed");
            }}
            sx={{
              background: "#286140",
              color: "white",
              ":hover": { background: "#286140" },
            }}
          >
            <ArrowBackOutlinedIcon />
          </IconButton>
        </Grid>
      </Grid>

      <Grid container pl={3} pr={3} alignContent={"start"}>
        <Typography sx={{ fontSize: "12px", pt: 3 }}>
          General Landscape Restoration • Status: Construction
        </Typography>
        <Typography
          fontWeight={"bold"}
          sx={{ fontSize: "20px !important", pt: 1 }}
        >
          Sheep's Meadow
        </Typography>
        <Grid container pt={2}>
          {/* Share Contact Donate */}
          <IconButton
            disableRipple
            size="small"
            sx={{
              // borderRadius: "20px",
              p: 1,
              background: "#286140",
              color: "white",
              textTransform: "none",
              ":hover": {
                background: "#286140",
              },
            }}
          >
            <IosShareOutlinedIcon />
          </IconButton>
          <IconButton
            disableRipple
            size="small"
            sx={{
              // borderRadius: "20px",
              ml: 2,
              p: 1,
              background: "#286140",
              color: "white",
              textTransform: "none",
              ":hover": {
                background: "#286140",
              },
            }}
          >
            <CallOutlinedIcon />
          </IconButton>
          <Button
            disableRipple
            size="small"
            sx={{
              ml: 2,
              borderRadius: "20px",
              pl: 2,
              pr: 2,
              background: "#286140",
              color: "white",
              textTransform: "none",
              ":hover": {
                background: "#286140",
              },
            }}
          >
            Support
          </Button>
        </Grid>
        <Grid container></Grid>
      </Grid>
    </Grid>
  );
}
