import { Grid, IconButton, Typography } from "@mui/material";
import IphoneDisplay from "../components/IphoneDisplay";
import SearchBar from "./components/SearchBar";
import Image from "next/image";
import cpclogo from "../../public/cpclogo.svg";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import FeedDonateHeader from "./components/FeedDonateHeader";
import FeatureArticle from "./components/FeatureArticle";
import { Height } from "@mui/icons-material";

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
        <Typography sx={{ fontSize: "14px !important", p: 3, pt: 0, pb: 10 }}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32. The standard chunk of Lorem Ipsum used since the
          1500s is reproduced below for those interested. Sections 1.10.32 and
          1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
          reproduced in their exact original form, accompanied by English
          versions from the 1914 translation by H. Rackham.
        </Typography>
      </Grid>
    </Grid>
  );
}
