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
        // onClick={() => router.push("/map/sheeps-meadow")}
        sx={{
          padding: 1,
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
              width: "350px",
              borderRadius: "18px",
              background: "white",
              boxShadow: "5px 3px 5px #00000020",
            }}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Grid container p={1.5} pl={2} pr={2}>
              <Grid item flex={3}>
                <Grid xs={12}>
                  <Typography
                    textAlign={"left"}
                    sx={{ fontSize: "18px !important" }}
                    fontWeight={"bold"}
                    pb={1}
                  >
                    Red-tailed hawk
                  </Typography>
                </Grid>

                <Typography fontSize={"14px"} textAlign={"left"}>
                  The red-tailed hawk is a bird of prey that breeds...
                </Typography>
              </Grid>
              <Grid
                flex={1}
                container
                alignContent={"center"}
                justifyContent={"center"}
                m={2}
                p={1}
                sx={{ border: "1px solid #e9e9e9", borderRadius: "8px" }}
              >
                <Typography fontSize={"12px"}>
                  <strong style={{ color: "#286140" }}>Read more </strong>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Button>
    </Grid>
  );
}
