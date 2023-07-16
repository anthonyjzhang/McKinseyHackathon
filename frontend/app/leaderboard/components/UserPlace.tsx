"use client";
import { Button, Grid, Icon, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import featureImage from "../../../../public/feature.jpeg";

export default function UserPlace({
  rank,
  name,
  points,
}: {
  rank: string;
  name: string;
  points: string;
}) {
  const router = useRouter();

  return (
    <Grid container justifyContent={"center"}>
      <Grid item>
        <Grid
          container
          sx={{
            width: "325px",
            borderBottom: "1px solid #F9F9F9",
          }}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Grid container p={1.5} pb={2} alignContent={"center"}>
            <Grid item pr={2}>
              <Typography fontSize={20} color={"#79C000"}>
                {rank}
              </Typography>
            </Grid>
            <Grid container flex={1} alignItems={"center"}>
              <Grid container justifyContent={"space-between"}>
                <Typography
                  sx={{
                    fontSize: "14px !important",
                    a: {
                      textDecoration: "none",
                      color: "black",
                    },
                  }}
                  textAlign={"left"}
                  pb={0.5}
                >
                  {name}
                </Typography>
                <Typography
                  fontSize={"14px"}
                  fontWeight={"600"}
                  textAlign={"left"}
                >
                  {points}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
