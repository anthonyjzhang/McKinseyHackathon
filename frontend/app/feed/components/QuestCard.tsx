"use client";
import { Button, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import iphonebackground from "../../../public/feature.jpeg";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { useRouter } from "next/navigation";

export default function QuestCard() {
  const router = useRouter();

  return (
    <Grid container pl={3}>
      <Button
        disableRipple
        // onClick={() => router.push("/feed/featured")}
        sx={{
          padding: 0,
          textTransform: "none",
          color: "black",
          ":hover": {
            background: "#00000000",
          },
        }}
      >
        <Grid item>
          <Grid
            container
            sx={{
              width: "250px",
              border: "1px solid #E9E9E9",
              borderRadius: "8px",
            }}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Grid container sx={{ position: "relative" }}>
              <Image
                src={iphonebackground}
                style={{
                  width: "100%",
                  height: "200px",
                  position: "relative",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
                alt="none"
              />
              <Grid
                container
                sx={{
                  height: "100%",
                  position: "absolute",
                  zIndex: "5",
                  p: 2,
                }}
              ></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Button>
    </Grid>
  );
}
