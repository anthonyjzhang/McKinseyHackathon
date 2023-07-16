"use client";
import { Button, Grid, Icon, List, Typography } from "@mui/material";
import React, { use } from "react";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { useRouter, usePathname } from "next/navigation";

const NavItem = ({
  text,
  link,
  icon,
  selected,
}: {
  text: string;
  link: string;
  icon: React.ElementType;
  selected: boolean;
}) => {
  const router = useRouter();
  return (
    <Grid flex={1}>
      <Button
        disableRipple
        onClick={() => {
          router.push("/" + link);
        }}
        sx={{
          textTransform: "none",
          color: selected ? "#79C000" : "#286140",
          ":hover": {
            background: "#00000000",
          },
        }}
      >
        <Grid container justifyContent={"center"}>
          <Icon
            component={icon}
            sx={{ height: "30px", width: "30px", pb: 0.5 }}
          />
          <Grid item xs={12}>
            <Typography fontSize={"10px"} textAlign={"center"}>
              {text}
            </Typography>
          </Grid>
        </Grid>
      </Button>
    </Grid>
  );
};

export default function NavBar() {
  const path = usePathname();
  return (
    <Grid
      container
      sx={{
        // position: "fixed",
        width: "362px",
        height: "110px",
        background: "white",
        bottom: 20,
        zIndex: "3",
        borderBottomLeftRadius: "50px",
        borderBottomRightRadius: "50px",
        borderTop: "1px solid #F1F1F1",
        p: 1,
        pb: 2,
      }}
    >
      <Grid container alignItems={"start"} pt={0.5}>
        <NavItem
          text={"Feed"}
          link={"feed"}
          icon={FeedOutlinedIcon}
          selected={path.includes("feed")}
        />
        <NavItem
          text={"Map"}
          link={"map"}
          icon={LocationOnOutlinedIcon}
          selected={path.includes("map")}
        />
        <NavItem
          text={"Search"}
          link={"search"}
          icon={AddCircleOutlinedIcon}
          selected={path.includes("search")}
        />
        <NavItem
          text={"Leaderboard"}
          link={"leaderboard"}
          icon={EmojiEventsOutlinedIcon}
          selected={path.includes("leaderboard")}
        />
        <NavItem
          text={"Profile"}
          link={"profile"}
          icon={PersonOutlineOutlinedIcon}
          selected={path.includes("profile")}
        />
      </Grid>
    </Grid>
  );
}
