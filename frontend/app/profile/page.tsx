"use client";
import { Grid, Typography } from "@mui/material";
import React from "react";
import Summary from "./components/Summary";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import QuestItem from "../map/sheeps-meadow/components/QuestItem";
import AirlineStopsIcon from "@mui/icons-material/AirlineStops";
import SearchIcon from "@mui/icons-material/Search";

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
        <Grid pt={3} pb={3} sx={{ height: "227px", overflow: "scroll" }}>
          {children}
        </Grid>
      )}
    </Grid>
  );
}

export default function page() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Grid
      container
      direction={"column"}
      alignContent={"start"}
      sx={{ height: "100%" }}
    >
      <Typography textAlign={"center"} fontSize={"30px"}>
        Mark Anthony
      </Typography>
      <Grid container justifyContent={"center"}>
        <Grid
          container
          alignContent={"center"}
          justifyContent={"center"}
          sx={{
            background: "#e9e9e9",
            height: "100px",
            width: "100px",
            borderRadius: "100px",
          }}
        >
          <Typography fontSize={"30px"}>MA</Typography>
        </Grid>
      </Grid>
      <Typography
        sx={{ mt: 1, mb: 2 }}
        textAlign={"center"}
        fontWeight={"bold"}
        fontSize={"14px"}
      >
        @mark_cpc
      </Typography>
      <Grid container pl={2} pr={2}>
        <Grid container flex={1}>
          <Summary />
        </Grid>
        <Grid container flex={1}>
          <Summary />
        </Grid>
        <Grid container flex={1}>
          <Summary />
        </Grid>
      </Grid>
      <Typography
        sx={{ fontSize: "12px !important", pl: 3, pb: 2, pt: 2 }}
        fontWeight={"bold"}
      >
        FRIENDS
      </Typography>

      <Grid container pl={3} pr={3} justifyContent={"space-around"}>
        <Grid
          container
          alignContent={"center"}
          justifyContent={"center"}
          sx={{
            background: "#e9e9e9",
            height: "50px",
            width: "50px",
            borderRadius: "100px",
          }}
        >
          <Typography fontSize={"14px"}>TJ</Typography>
        </Grid>
        <Grid
          container
          alignContent={"center"}
          justifyContent={"center"}
          sx={{
            background: "#e9e9e9",
            height: "50px",
            width: "50px",
            borderRadius: "100px",
          }}
        >
          <Typography fontSize={"14px"}>BD</Typography>
        </Grid>
        <Grid
          container
          alignContent={"center"}
          justifyContent={"center"}
          sx={{
            background: "#e9e9e9",
            height: "50px",
            width: "50px",
            borderRadius: "100px",
          }}
        >
          <Typography fontSize={"14px"}>AM</Typography>
        </Grid>
      </Grid>

      <Grid container sx={{ width: "100%" }} p={1}>
        <Tabs
          value={value}
          onChange={handleChange}
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
            label="Bookmarked Quests"
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
            label="Completed Quests"
          />
        </Tabs>
        <CustomTabPanel value={value} index={0}>
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
          <QuestItem
            icon={AirlineStopsIcon}
            title={"Take a guided tour"}
            location={"Sheeps Meadow, Southeast"}
          />
        </CustomTabPanel>

        <CustomTabPanel value={value} index={1}>
          <Typography fontSize={"14px"}>
            <QuestItem
              icon={SearchIcon}
              title={"Find the hidden easter eggs"}
              location={"Tennis court, Northwest"}
            />
            <QuestItem
              icon={AirlineStopsIcon}
              title={"Take a guided tour"}
              location={"Sheeps Meadow, Southeast"}
            />
            <QuestItem
              icon={AirlineStopsIcon}
              title={"Take a guided tour"}
              location={"Sheeps Meadow, Southeast"}
            />
          </Typography>
        </CustomTabPanel>
      </Grid>
    </Grid>
  );
}
