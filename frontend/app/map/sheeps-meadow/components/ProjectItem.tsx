"use client";
import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";

export default function ProjectItem({
  img_src,
  title,
  location,
}: {
  title: string;
  location: string;
  img_src: StaticImageData;
}) {
  const router = useRouter();

  return (
    <Grid container justifyContent={"center"}>
      <Button
        disableRipple
        onClick={() => router.push("/feed/featured")}
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
              borderBottom: "1px solid #E9E9E9",
            }}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Grid container p={1.5} pb={2}>
              <Grid item pr={2}>
                <Image
                  src={img_src}
                  style={{
                    width: "70px",
                    height: "70px",
                    objectFit: "cover",
                    borderRadius: "8px",
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
            </Grid>
          </Grid>
        </Grid>
      </Button>
    </Grid>
  );
}
