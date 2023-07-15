"use client";
import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import featureImage from "../../../public/feature.jpeg";
import { useRouter } from "next/navigation";

export default function FeatureArticle() {
  const router = useRouter();
  return (
    <Grid container justifyContent={"center"}>
      <Button
        disableRipple
        onClick={() => router.push("/featured")}
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
              border: "1px solid #E9E9E9",
              borderRadius: "8px",
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
                borderTopLeftRadius: "8px",
                borderTopRightRadius: "8px",
              }}
              alt="none"
            />
            <Grid container p={1.5} pb={2}>
              <Typography
                sx={{ fontSize: "16px !important" }}
                fontWeight={"bold"}
              >
                Restoration of the Kinderberg
              </Typography>

              <Typography pt={1} fontSize={"14px"} textAlign={"left"}>
                Our restoration of this historic site focused on renovating the
                building and its surroud...
              </Typography>
              <Grid container justifyContent={"end"} pt={1}>
                <Typography fontSize={"14px"}>
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
