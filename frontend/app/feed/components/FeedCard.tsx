"use client";
import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import featureImage from "../../../public/feature.jpeg";

export default function FeedCard() {
  const router = useRouter();

  return (
    <Grid container justifyContent={"center"}>
      <Grid item>
        <Grid
          container
          sx={{
            width: "325px",
            borderBottom: "1px solid #E9E9E9",
          }}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Grid container p={1.5} pb={2}>
            <Grid item pr={2}>
              <Image
                src={featureImage}
                style={{
                  width: "40px",
                  height: "40px",
                  objectFit: "cover",
                  borderRadius: "100px",
                }}
                alt="none"
              />
            </Grid>
            <Grid item flex={1}>
              <Typography
                sx={{
                  fontSize: "14px !important",
                  a: {
                    textDecoration: "none",
                    color: "black",
                    fontWeight: "bold",
                  },
                }}
                fontWeight={"500"}
                textAlign={"left"}
                pb={0.5}
              >
                <a href="/profile">Anthony</a> took a{" "}
                <a href="/feed/action/garden-tour">garden tour</a> in{" "}
                <a href="/map/sheeps-meadow">Sheep's Meadow</a>
              </Typography>
              <Typography
                fontSize={"14px"}
                fontWeight={"200"}
                textAlign={"left"}
              >
                Southeast, Central Park
              </Typography>
            </Grid>
          </Grid>

          <Grid container p={1.5} pb={2}>
            <Typography
              color={"grey"}
              fontSize={"10px"}
              fontWeight={"200"}
              textAlign={"left"}
            >
              Wednesday
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
