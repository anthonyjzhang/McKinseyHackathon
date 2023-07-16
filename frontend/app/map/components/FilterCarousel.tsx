import { Button, Grid, List } from "@mui/material";
import React from "react";

function QuestCarousel() {
  return (
    <List
      sx={{
        display: "flex",
        flexDirection: "row",
        padding: 0,
        pr: 3,
      }}
    >
      <Button
        disableRipple
        sx={{
          ml: 2,
          background: "#286140",
          color: "white",
          textTransform: "none",
          borderRadius: "100px",
          ":hover": { background: "#286140" },
        }}
      >
        All
      </Button>
      <Button
        disableRipple
        sx={{
          ml: 2,
          textTransform: "none",
          background: "white",
          color: "#286140",
          borderRadius: "100px",

          ":hover": { background: "white" },
        }}
      >
        Restrooms
      </Button>
      <Button
        disableRipple
        sx={{
          ml: 2,
          textTransform: "none",
          background: "white",
          color: "#286140",
          borderRadius: "100px",

          ":hover": { background: "white" },
        }}
      >
        Playgrounds
      </Button>
      <Button
        disableRipple
        sx={{
          ml: 2,
          textTransform: "none",
          background: "white",
          color: "#286140",
          borderRadius: "100px",

          ":hover": { background: "white" },
        }}
      >
        Playgrounds
      </Button>
      <Button
        disableRipple
        sx={{
          ml: 2,
          textTransform: "none",
          background: "white",
          color: "#286140",
          borderRadius: "100px",
          ":hover": { background: "white" },
        }}
      >
        Playgrounds
      </Button>
    </List>
  );
}

export default QuestCarousel;
