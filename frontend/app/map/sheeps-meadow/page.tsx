"use client";
import { Button, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import sheepsmeadow from "../../../public/sheepsmeadow.png";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { useRouter } from "next/navigation";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import QuestItem from "./components/QuestItem";
import ProjectItem from "./components/ProjectItem";
import AirlineStopsIcon from "@mui/icons-material/AirlineStops";
import SearchIcon from "@mui/icons-material/Search";
import featureImage from "../../../public/feature.jpeg";
import stmem from "../../../public/7mem.jpeg";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Grid
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      {...other}
    >
      {value === index && (
        <Grid pt={3} pb={3}>
          {children}
        </Grid>
      )}
    </Grid>
  );
}

export default function page() {
  const router = useRouter();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Grid
      container
      sx={{ height: "622px", overflow: "scroll" }}
      alignContent={"start"}
    >
      <Grid container sx={{ position: "relative" }}>
        <Image
          src={sheepsmeadow}
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

      <Grid container pl={3} pr={3} alignContent={"start"}>
        <Typography sx={{ fontSize: "12px", pt: 3 }}>
          General Landscape Restoration • Status: Construction
        </Typography>
        <Typography
          fontWeight={"bold"}
          sx={{ fontSize: "20px !important", pt: 1 }}
        >
          Sheep's Meadow
        </Typography>
        <Grid container pt={2}>
          {/* Share Contact Donate */}
          <IconButton
            disableRipple
            size="small"
            sx={{
              // borderRadius: "20px",
              p: 1,
              background: "white",
              color: "#286140",
              textTransform: "none",
              ":hover": {
                background: "white",
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
              background: "white",
              color: "#286140",
              textTransform: "none",
              ":hover": {
                background: "white",
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
              background: "#79C000",
              color: "white",
              textTransform: "none",
              ":hover": {
                background: "#79C000",
              },
            }}
          >
            Support
          </Button>
        </Grid>
        <Grid container pt={1}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="wrapped label tabs example"
            sx={{
              "& .MuiTabs-indicator": {
                background: "#79C000",
              },
            }}
          >
            <Tab
              disableRipple
              sx={{
                fontSize: "12px",
                "&.Mui-selected": {
                  color: "grey",
                },
              }}
              value={0}
              label="History"
              wrapped
            />
            <Tab
              disableRipple
              sx={{
                fontSize: "12px",
                "&.Mui-selected": {
                  color: "grey",
                },
              }}
              value={1}
              label="Quests"
            />
            <Tab
              disableRipple
              sx={{
                fontSize: "12px",
                "&.Mui-selected": {
                  color: "grey",
                },
              }}
              value={2}
              label="Projects"
            />
          </Tabs>
          <CustomTabPanel value={value} index={0}>
            <Typography fontSize={"14px"}>
              Like all the landscapes in Central Park, this beautiful 15 acre
              lawn known as Sheep Meadow is man-made. The Greensward Plan of
              1858, the winning entry in the design competition for Central Park
              by Frederick Law Olmsted (1822-1903) and Calvert Vaux (1824-1895),
              featured broad open lawns, known in nineteenth-century terminology
              as greensward. Sheep Meadow was naturally rocky and swampy, and
              the designers converted the terrain into a smooth meadow by
              blasting the rock outcrops and adding two feet of new surface
              soil. Sheep Meadow was the most costly construction undertaken in
              the new park.
              <br />
              <br />
              The original stipulations of the design competition required that
              Central Park include a parade ground for military reviews, drills,
              and practice. Reluctantly, Olmsted and Vaux included such a
              feature in the plan that they submitted. However, since military
              use conflicted with the vision of a quiet and serene atmosphere,
              the park commissioners later decided to eliminate the parade
              ground. The name of the meadow was changed from “the Parade” to
              “the Green,” and visitors were usually not allowed to walk on it.
              Instead, they were to view and appreciate the vast green expanse
              from the paths.
              <br />
              <br />
              Sheep Meadow takes its name from the flock of Southdown and Dorset
              sheep that were kept on the meadow from 1864 until 1934. Olmsted
              and Vaux believed that the sheep enhanced the Romantic English
              quality of the park. The animals served a practical purpose as
              well—they trimmed the grass and fertilized the lawn. In 1871,
              Jacob Wrey Mould (1825-1886) designed an elaborate sheepfold to
              house both the flock and its shepherd. Twice a day, the shepherd
              stopped traffic on the west drive so that the flock could travel
              to and from the meadow. In the 1910s and 1920s, the flock shared
              space with a variety of folk-dancing festivals, children’s
              pageants, and patriotic celebrations. In 1934, when the sheep were
              transferred to Prospect Park in Brooklyn, the sheepfold was
              converted into Tavern on the Green, a restaurant that has grown in
              size and popularity over the years.
            </Typography>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <QuestItem
              icon={AirlineStopsIcon}
              title={"Take a guided tour"}
              location={"Sheeps Meadow, Southeast"}
            />
            <QuestItem
              icon={SearchIcon}
              title={"Find the hidden easter eggs"}
              location={"Tennis court, Northwest"}
            />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <ProjectItem
              img_src={featureImage}
              title={"Restoration of the Kinderberg"}
              location={"West Side at 60s"}
            />
            <ProjectItem
              img_src={stmem}
              title={"7th Regiment Memorial Conservation"}
              location={"West Side at 69th"}
            />
          </CustomTabPanel>
        </Grid>
      </Grid>
    </Grid>
  );
}
