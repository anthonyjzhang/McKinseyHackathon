"use client";
import { Button, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import iphonebackground from "../../../../public/feature.jpeg";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { useRouter } from "next/navigation";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import SearchIcon from "@mui/icons-material/Search";
import QuestItem from "@/app/map/sheeps-meadow/components/QuestItem";
import AirlineStopsIcon from "@mui/icons-material/AirlineStops";

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
          src={iphonebackground}
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
              router.back();
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
        <Typography
          fontWeight={"bold"}
          sx={{ fontSize: "20px !important", pt: 2 }}
        >
          Seneca Village Tour
        </Typography>

        <Grid container pt={1}>
          {/* Share Contact Donate */}
          <Grid item pr={2}>
            {" "}
            <Grid
              container
              pt={1}
              justifyContent={"start"}
              alignItems={"center"}
            >
              <Typography sx={{ color: "black" }}>+</Typography>
              <MonetizationOnRoundedIcon sx={{ color: "green", pr: 0.5 }} />
              <Typography sx={{ color: "black" }}>200 cpc</Typography>
            </Grid>
          </Grid>
          <IconButton
            disableRipple
            size="small"
            sx={{
              // borderRadius: "20px",
              p: 1,
              background: "white",
              color: "#286140",
              textTransform: "none",
              ":hover": {
                background: "white",
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
              background: "white",
              color: "#286140",
              textTransform: "none",
              ":hover": {
                background: "white",
              },
            }}
          >
            <CallOutlinedIcon />
          </IconButton>
        </Grid>

        <Grid container></Grid>
        <Typography sx={{ fontSize: "14px", pt: 3 }}>
          Our restoration of this historic site focused on renovating the
          building and its surrounding landscape to ensure accessibility for
          modern Park users while maintaining the spirit of the area’s original
          purpose and design.
        </Typography>
        <Button
          disableRipple
          size="small"
          sx={{
            borderRadius: "20px",
            pl: 2,
            m: 2,
            mt: 3,
            mb: 3,
            pr: 2,
            width: "100%",
            background: "#79C000",
            color: "white",
            textTransform: "none",
            ":hover": {
              background: "#79C000",
            },
          }}
        >
          Buy Tickets
        </Button>
        <Typography
          sx={{ fontSize: "12px !important", pb: 2 }}
          fontWeight={"bold"}
        >
          RELATED QUESTS
        </Typography>
        <QuestItem
          outlined={true}
          icon={AirlineStopsIcon}
          title={"Take a guided tour"}
          location={"Sheeps Meadow, Southeast"}
        />
        <QuestItem
          outlined={true}
          icon={SearchIcon}
          title={"Find the hidden easter eggs"}
          location={"Tennis court, Northwest"}
        />
      </Grid>
    </Grid>
  );
}
