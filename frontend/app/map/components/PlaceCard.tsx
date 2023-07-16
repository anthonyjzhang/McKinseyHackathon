"use client";
import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import featureImage from "../../../public/feature.jpeg";
import DirectionsIcon from "@mui/icons-material/Directions";
import IosShareIcon from "@mui/icons-material/IosShare";
import { useRouter } from "next/navigation";

export default function FeatureArticle() {
  const router = useRouter();
  return (
    <Grid container justifyContent={"center"}>
      <Button
        disableRipple
        onClick={() => router.push("/map/sheeps-meadow")}
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
              width: "325px",
              borderRadius: "18px",
              background: "white",
              boxShadow: "5px 3px 5px #00000020",
            }}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Image
              src={featureImage}
              style={{
                width: "100%",
                height: "125px",
                position: "relative",
                objectFit: "cover",
                borderTopLeftRadius: "18px",
                borderTopRightRadius: "18px",
              }}
              alt="none"
            />
            <Grid container p={1.5} pb={1.5}>
              <Grid xs={12}>
                <Typography
                  textAlign={"left"}
                  sx={{ fontSize: "18px !important" }}
                  fontWeight={"bold"}
                >
                  Sheep's Meadow
                </Typography>
              </Grid>

              <Typography pt={1} pb={1} fontSize={"14px"} textAlign={"left"}>
                Southeast, Central • Closes 9pm
              </Typography>
              <Grid container justifyContent={"start"} pt={1}>
                <Grid item>
                  <Grid
                    container
                    sx={{
                      p: 0.5,
                      pl: 1,
                      pr: 2,
                      background: "#286140",
                      color: "white",
                      textTransform: "none",
                      borderRadius: "100px",
                      ":hover": { background: "#286140" },
                    }}
                  >
                    <DirectionsIcon sx={{ pr: 1 }} />
                    <Typography>Directions</Typography>
                  </Grid>
                </Grid>

                <Grid item ml={1}>
                  <Grid
                    container
                    sx={{
                      p: 0.5,
                      pl: 1,
                      pr: 2,
                      border: "1px solid #286140",
                      background: "white",
                      color: "#286140",
                      textTransform: "none",
                      borderRadius: "100px",
                      ":hover": { background: "white" },
                    }}
                  >
                    <IosShareIcon sx={{ pr: 1 }} />
                    <Typography>Share</Typography>
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
