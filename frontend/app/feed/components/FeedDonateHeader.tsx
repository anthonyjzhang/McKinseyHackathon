import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function FeedDonateHeader() {
  return (
    <Grid container justifyContent={"center"}>
      <Grid item>
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
              <FavoriteIcon sx={{ mr: 2, color: "#fb3958" }} />
              <Typography>Love the park? </Typography>
            </Grid>
          </Grid>

          <Button
            disableRipple
            size="small"
            sx={{
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
            Donate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
