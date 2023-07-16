import { Grid, IconButton, Typography } from "@mui/material";
import IphoneDisplay from "../components/IphoneDisplay";
import SearchBar from "./components/SearchBar";
import Image from "next/image";
import cpclogo from "../../public/cpclogo.svg";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import FeedDonateHeader from "./components/FeedDonateHeader";
import FeatureArticle from "./components/FeatureArticle";
import { Height } from "@mui/icons-material";
import FeedCard from "./components/FeedCard";
import QuestCard from "./components/QuestCard";
import QuestCarousel from "./components/QuestCarousel";

export default function Home() {
  return (
    <Grid container direction={"column"} sx={{ height: "100%" }}>
      <Grid container>
        <Grid container p={1}>
          <Grid item pl={1.8}>
            <Image
              src={cpclogo}
              style={{
                width: "90px",
                height: "40px",
                position: "relative",
                objectFit: "contain",
              }}
              alt="none"
            />
          </Grid>
          <Grid item flex={1}></Grid>
          <Grid item pr={1}>
            <IconButton>
              <NotificationsNoneIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Grid container justifyContent={"center"}>
          <SearchBar />
        </Grid>
        <Grid container p={2}>
          <FeedDonateHeader />
        </Grid>
      </Grid>

      <Grid container overflow={"scroll"} sx={{ height: "441px" }}>
        <Typography
          sx={{ fontSize: "12px !important", pl: 3, pb: 2 }}
          fontWeight={"bold"}
        >
          FEATURED
        </Typography>
        <Grid container pb={2}>
          <FeatureArticle />
        </Grid>
        <Typography
          sx={{ fontSize: "12px !important", pl: 3, pb: 2 }}
          fontWeight={"bold"}
        >
          RECOMMENDED FOR YOU
        </Typography>
        <Grid container pb={2}>
          <Grid container sx={{ width: "366px", overflow: "scroll" }}>
            <QuestCarousel />
          </Grid>
        </Grid>
        <Typography
          sx={{ fontSize: "12px !important", pl: 3, pb: 2, pt: 2 }}
          fontWeight={"bold"}
        >
          YOUR FEED
        </Typography>
        <Grid container pb={2}>
          <FeedCard />
          <FeedCard />
        </Grid>
      </Grid>
    </Grid>
  );
}
