"use client";
import { Grid, Typography } from "@mui/material";
import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import QuestItem from "../map/sheeps-meadow/components/QuestItem";
import AirlineStopsIcon from "@mui/icons-material/AirlineStops";
import SearchIcon from "@mui/icons-material/Search";
import UserPlace from "./components/UserPlace";
import StarIcon from "@mui/icons-material/Star";

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
        <Grid pt={3} pb={3} sx={{ height: "514px", overflow: "scroll" }}>
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
        Leaderboard
      </Typography>
      <Grid justifyContent={"center"} container sx={{ width: "100%" }} p={1}>
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
            label="Weekly"
          />
          <Tab
            disabled
            disableRipple
            sx={{
              fontSize: "12px",
              "&.Mui-selected": {
                color: "grey",
              },
            }}
            value={1}
            label="Monthly"
          />
          <Tab
            disabled
            disableRipple
            sx={{
              fontSize: "12px",
              "&.Mui-selected": {
                color: "grey",
              },
            }}
            value={1}
            label="All time"
          />
        </Tabs>
        <CustomTabPanel value={value} index={0}>
          <Grid container justifyContent={"center"} alignItems={"center"}>
            <StarIcon
              sx={{ height: "30px", width: "30px", pr: 2, color: "#ffb703" }}
            />
            <Typography textAlign={"center"} fontSize={"30px"}>
              1. Mark Anthony
            </Typography>
          </Grid>

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
              <Grid item xs={12}>
                <Typography textAlign={"center"} fontSize={"10px"}>
                  5025
                </Typography>
              </Grid>
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
          <Grid container pl={3} pr={3} mb={3} justifyContent={"space-around"}>
            <Grid
              container
              alignContent={"center"}
              justifyContent={"center"}
              sx={{
                background: "#e9e9e9",
                height: "60px",
                width: "60px",
                borderRadius: "100px",
              }}
            >
              <Typography fontSize={"14px"}>BC</Typography>
              <Grid item xs={12}>
                <Typography textAlign={"center"} fontSize={"10px"}>
                  5000
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              alignContent={"center"}
              justifyContent={"center"}
              sx={{
                background: "#e9e9e9",
                height: "60px",
                width: "60px",
                borderRadius: "100px",
              }}
            >
              <Typography fontSize={"14px"}>AM</Typography>
              <Grid item xs={12}>
                <Typography textAlign={"center"} fontSize={"10px"}>
                  4996
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          {[4, 5, 6, 7, 8, 9].map((num, index) => (
            <UserPlace
              rank={num.toString()}
              name={"Otito"}
              points={num.toString() + "00"}
            />
          ))}
        </CustomTabPanel>
      </Grid>
    </Grid>
  );
}
