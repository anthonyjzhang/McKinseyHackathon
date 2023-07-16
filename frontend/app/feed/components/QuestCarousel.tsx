import { Grid, List } from "@mui/material";
import React from "react";
import QuestCard from "./QuestCard";

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
      <QuestCard />
      <QuestCard />
      <QuestCard />
    </List>
  );
}

export default QuestCarousel;
