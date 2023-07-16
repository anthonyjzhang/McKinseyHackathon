"use client";
import { Button, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import iphonebackground from "../../../public/feature.jpeg";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { useRouter } from "next/navigation";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";

export default function page() {
  const router = useRouter();
  return (
    <Grid container sx={{ height: "622px", overflow: "scroll" }}>
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
              router.push("/feed");
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

      <Grid container pl={3} pr={3}>
        <Typography sx={{ fontSize: "12px", pt: 3 }}>
          General Landscape Restoration • Status: Construction
        </Typography>
        <Typography
          fontWeight={"bold"}
          sx={{ fontSize: "20px !important", pt: 1 }}
        >
          Restoration of the Kinderberg and Renovation of the Chess & Checkers
          House
        </Typography>
        <Grid container pt={2}>
          {/* Share Contact Donate */}
          <IconButton
            disableRipple
            size="small"
            sx={{
              // borderRadius: "20px",
              p: 1,
              background: "#286140",
              color: "white",
              textTransform: "none",
              ":hover": {
                background: "#286140",
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
              background: "#286140",
              color: "white",
              textTransform: "none",
              ":hover": {
                background: "#286140",
              },
            }}
          >
            <CallOutlinedIcon />
          </IconButton>
          <Button
            disableRipple
            size="small"
            sx={{
              ml: 2,
              borderRadius: "20px",
              pl: 2,
              pr: 2,
              background: "#286140",
              color: "white",
              textTransform: "none",
              ":hover": {
                background: "#286140",
              },
            }}
          >
            Support
          </Button>
        </Grid>
        <Grid container></Grid>
        <Typography sx={{ fontSize: "14px", pt: 3 }}>
          Our restoration of this historic site focused on renovating the
          building and its surrounding landscape to ensure accessibility for
          modern Park users while maintaining the spirit of the area’s original
          purpose and design.
          <br />
          <br />
          The Children's District is the historic name of an area near the
          southeast corner of Central Park, north of the Pond at 59th Street and
          south of the 65th Street Transverse, between the Center Drive and the
          East Drive. Conveniently sited to welcome visitors immediately upon
          their arrival to the Park, it offered facilities catering to the needs
          of small children and their caregivers, including the Dairy
          refreshment house and the Children’s Cottage (a changing and restroom
          facility). Most significant of these was the Kinderberg, also referred
          to as the Children’s Shelter or the Nursery. Completed in 1868, it was
          a character-defining feature of the Children’s District and the
          largest, most elaborate of several rustic shelters located at high
          points in the Park landscape. Sited on a large outcropping of rock
          overlooking the Pond, the Kinderberg offered shade, seating, and
          tables for caregivers and children to rest, picnic, and play games.
          <br />
          <br />
          The Kinderberg was razed in the 1940s, and in 1952, the original Chess
          & Checkers House was constructed on the site. The octagonal brick
          structure was originally open on four sides and functioned as an
          open-air pavilion. By the 1980s, doors and windows were added to fully
          enclose the structure. A dimensional lumber trellis on the plaza
          surrounding the building was added in 1985.
          <br />
          <br />
          <b>Conditions Prior to Restoration</b>
          <br />
          <br />
          The last significant project at this site was a restoration of the
          building exterior and addition of the existing trellis in 1985. Prior
          to the Conservancy’s recent restoration, the trellis reached the end
          of its useful life, and the pavement beneath showed signs of
          significant settling and deterioration. The building roof had not been
          replaced since the original construction in 1952. The stairs and
          steeply sloped path leading up to the facility were not accessible.
          Finally, there were no longer public restrooms in the Children’s
          District to support the public programs run out of Chess & Checkers
          House or the Dairy, the Conservancy’s main visitor center and gift
          shop.
          <br />
          <br />
          <b>
            Our restoration of the Kinderberg and Chess & Checkers House
            included:
          </b>
          <br />
          <br />
          <b>Site Work </b>
        </Typography>
        <Grid
          sx={{
            "& .MuiTypography-root": {
              fontSize: "14px",
            },
          }}
        >
          <ul>
            <li>
              <Typography>
                Recreating a rustic shelter, based on the original Kinderberg
                structure, encompassing the existing Chess & Checkers House
              </Typography>
            </li>
            <li>
              <Typography>
                Replacing existing asphalt hexagonal pavers in-kind
              </Typography>
            </li>
            <li>
              <Typography>
                Constructing an accessible ramp to the facility on the slope on
                the east side of the Kinderberg, adjacent to the existing stairs
              </Typography>
            </li>
            <li>
              <Typography>
                Restoring the existing stairs and adding handrails
              </Typography>
            </li>
          </ul>
        </Grid>

        <Typography sx={{ fontSize: "14px", pt: 1 }}>
          <b>Building </b>
        </Typography>

        <Grid
          sx={{
            "& .MuiTypography-root": {
              fontSize: "14px",
            },
          }}
        >
          <ul>
            <li>
              <Typography>
                Restoring the exterior of Chess & Checkers House
              </Typography>
            </li>
            <li>
              <Typography>
                Replacing the roof, cupola, windows, and doors in-kind
              </Typography>
            </li>
            <li>
              <Typography>
                Renovating the interior of Chess & Checkers House to include
                public restrooms as well as space to support public programs
              </Typography>
            </li>
            <li>
              <Typography>
                Upgrading existing mechanical and utility systems
              </Typography>
            </li>
          </ul>

          <Typography sx={{ fontSize: "14px" }}>
            The Conservancy completed this restoration in June 2023. The project
            was a continuation of the restoration of the Children’s District
            that began with the Conservancy’s restoration of the Dairy.
          </Typography>

          <Grid container justifyContent={"center"} pt={3} pb={5}>
            <Grid item xs={12}>
              <Grid
                container
                sx={{
                  p: 1,
                  pl: 2,
                  pr: 2,
                  width: "325px",
                  border: "1px solid #E9E9E9",
                  borderRadius: "8px",
                }}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Grid item>
                  <Grid container alignItems={"center"}>
                    {/* <FavoriteIcon sx={{ mr: 2, color: "#fb3958" }} /> */}
                    <Typography>
                      Projects like these are made possible by your
                      contributions
                    </Typography>
                  </Grid>
                </Grid>
                <Button
                  disableRipple
                  size="small"
                  sx={{
                    width: "100%",
                    borderRadius: "20px",
                    pl: 2,
                    pr: 2,
                    mt: 2,
                    mb: 1,
                    background: "#286140",
                    color: "white",
                    textTransform: "none",
                    ":hover": {
                      background: "#286140",
                    },
                  }}
                >
                  Donate
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
