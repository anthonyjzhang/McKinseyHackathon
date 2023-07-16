import { Grid, Typography } from "@mui/material";
import IphoneDisplay from "./components/IphoneDisplay";
import "./globals.css";
import NavBar from "./components/NavBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Grid
          container
          sx={{ position: "fixed", zIndex: "0" }}
          justifyContent={"center"}
        >
          <IphoneDisplay />
        </Grid>
        <Grid container sx={{ position: "fixed", zIndex: "2" }}>
          <Grid item flex={1}></Grid>
          <Grid item sx={{ height: "785px", width: "362px", mt: 3 }}>
            <Grid container direction={"column"} height={"100%"}>
              <Grid container sx={{ p: 1, pb: 2 }}>
                <Grid item sx={{ pl: 4, pt: 0.5 }}>
                  <Typography fontWeight={"bold"}> 9:30</Typography>
                </Grid>
                <Grid item flex={1}></Grid>
                <Grid item></Grid>
              </Grid>
              <Grid item sx={{ height: "658px" }} direction={"column"}>
                {children}
              </Grid>
              <NavBar />
            </Grid>
          </Grid>
          <Grid item flex={1}></Grid>
        </Grid>
      </body>
    </html>
  );
}
