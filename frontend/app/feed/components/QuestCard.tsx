"use client";
import { Button, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import iphonebackground from "../../../public/feature.jpeg";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import { useRouter } from "next/navigation";

export default function QuestCard({
  title,
  description,
  link,
  coin,
}: {
  title: string;
  description: string;
  link: string;
  coin: string;
}) {
  const router = useRouter();

  return (
    <Grid container pl={3}>
      <Button
        disableRipple
        onClick={() => router.push(link)}
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
              borderRadius: "18px",
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
                  borderRadius: "18px",
                }}
                alt="none"
              />

              <Grid
                container
                direction={"column"}
                sx={{
                  height: "100%",
                  position: "absolute",
                  zIndex: "5",
                  borderRadius: "18px",
                  background: "#28614070",
                  p: 2,
                }}
              >
                <Grid item pr={1}>
                  <Grid container justifyContent={"end"}>
                    <Typography sx={{ color: "white", fontWeight: "bold" }}>
                      +
                    </Typography>
                    <MonetizationOnRoundedIcon sx={{ color: "#fcba03" }} />

                    <Typography sx={{ color: "white", fontWeight: "bold" }}>
                      {coin} cpc
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item flex={1}></Grid>
                <Grid
                  container
                  textAlign={"start"}
                  alignItems={"center"}
                  sx={{ p: 1 }}
                >
                  <Grid item>
                    <Typography
                      sx={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "20px",
                      }}
                    >
                      {title}
                    </Typography>
                    <Typography sx={{ color: "white" }}>
                      {description}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Button>
    </Grid>
  );
}
