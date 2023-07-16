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
      <QuestCard
        title={"TOUR"}
        description={"Seneca Village Tour, and invite a friend"}
        link={"/feed/action/garden-tour"}
        coin={"125"}
      />
      <QuestCard
        title={"DAILY QUEST"}
        description={"15min walk through the park"}
        link={"/feed"}
        coin={"10"}
      />
      <QuestCard
        title={"WEEKLY QUEST"}
        description={"Take a picture at Sheep's Meadow"}
        link={"/feed"}
        coin={"20"}
      />
      <QuestCard
        title={"MEMBERSHIP"}
        description={"Gift a tree to a loved one, show them you care"}
        link={"/feed"}
        coin={"300"}
      />
      <QuestCard
        title={"MEMBERSHIP"}
        description={"If you're late don't keep 'em standing gift a bench"}
        link={"/feed"}
        coin={"200"}
      />
    </List>
  );
}

export default QuestCarousel;
