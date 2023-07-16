"use client";
import { Button, Grid, Icon, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import featureImage from "../../../../public/feature.jpeg";

export default function QuestItem({
  outlined = false,
  icon,
  title,
  location,
}: {
  outlined?: boolean;
  icon: React.ElementType;
  title: string;
  location: string;
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
          <Grid container p={1.5} pb={2}>
            <Grid item pr={2}>
              <Icon
                component={icon}
                sx={{
                  height: "30px",
                  width: "30px",
                  pb: 0.5,
                  color: "#286140",
                }}
              />
            </Grid>
            <Grid container flex={1} alignItems={"center"}>
              <Grid item flex={3}>
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
                  <b>{title}</b>
                </Typography>
                <Typography
                  fontSize={"14px"}
                  fontWeight={"200"}
                  textAlign={"left"}
                >
                  {location}
                </Typography>
              </Grid>
              <Grid item flex={1}>
                <Button
                  disableRipple
                  size="small"
                  sx={{
                    ml: 2,
                    borderRadius: "20px",
                    pl: 2,
                    pr: 2,
                    border: outlined ? "1px solid #79C000" : "none",
                    background: outlined ? "white" : "#79C000",
                    color: outlined ? "#79C000" : "white",
                    textTransform: "none",
                    ":hover": {
                      background: outlined ? "white" : "#79C000",
                    },
                  }}
                >
                  play
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
