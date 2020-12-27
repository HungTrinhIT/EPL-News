import React, { useState } from "react";
import DefaultLayout from "../layout/index";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import bgFooter from "./images/Footer.png";
import Typography from "@material-ui/core/Typography";
import Logo1 from "./images/manchester-united.png";
import Logo2 from "./images/manchester-city.png";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import Image from "material-ui-image";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  body: {
    width: '100%',
    backgroundColor: "#F4F4F4",
    paddingBottom: "25%",
  },
  top: {
    backgroundImage: "url(" + bgFooter + ")",
    color: "white",
    bottom: "0",
    width: "100%",
    height: "10rem",
    fontSize: "50px",
  },
  paper: {
    height: "100%",
  },
  email: {
    color: "rgb(61, 25, 91)",
    fontWeight: "bold",
  },
}));

function Calendar() {
  const classes = useStyles();
  const location =useLocation();
  return (
    <DefaultLayout>
      <Grid
        container
        alignItems="center"
        justify="center"
        className={classes.body}
      >
        <Grid
          item
          xs={12}
          className={classes.top}
          container
          alignItems="center"
          style={{ paddingLeft: 15 }}
        >
          <span>Trận đấu sắp diễn ra</span>
        </Grid>
        <Grid item xs={6} container alignItems="center" justify="center">
          <Paper className={classes.paper} style={{ margin: 15, padding: 20 }}>
            <Grid container>
              <Typography
                style={{
                  color: "rgb(61, 25, 91)",
                  fontWeight: "bold",
                  paddingBottom: "10px",
                }}
              >
                Ngoại hạng Anh
              </Typography>
              <Grid container alignItems="center" justify="center">
                <Grid xs={4}>
                  <Image src={Logo1} />
                </Grid>
                <Grid
                  container
                  item
                  xs={4}
                  justify="center"
                  alignItems="center"
                >
                  <Typography style={{ fontWeight: "bold" }}>VS</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Image src={Logo2} />
                </Grid>
              </Grid>
              <Grid container style={{ margin: 20 }}>
                <Divider variant="fullWidth" light="false" />
              </Grid>
              <Grid container alignItems="center" justify="center" spacing="2">
                <Grid item xs={1}>
                  <Image src={Logo1} />
                </Grid>
                <Grid
                  item
                  xs={4}
                  container
                  alignItems="center"
                  justify="center"
                >
                  <Typography>Manchester United</Typography>
                </Grid>
                <Grid item xs={7}>
                  <Typography>13/12/2020</Typography>
                </Grid>
              </Grid>
              <Grid container alignItems="center" justify="center" spacing="2">
                <Grid item xs={5}></Grid>
                <Grid item xs={7}>
                  <Typography>22:00</Typography>
                </Grid>
              </Grid>
              <Grid container alignItems="center" justify="center" spacing="2">
                <Grid item xs={1}>
                  <Image src={Logo2} />
                </Grid>
                <Grid
                  item
                  xs={4}
                  container
                  alignItems="center"
                  justify="center"
                >
                  <Typography>Manchester City</Typography>
                </Grid>
                <Grid item xs={7}>
                  <Typography>Sân vận động Old Trafford</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
          <Grid
            container
            alignItems="center"
            justify="center"
            style={{ margin: 15 }}
          >
            <Grid item xs={2} container alignItems="center" justify="center">
              <Typography className={classes.email} component="h1">Email</Typography>
            </Grid>
            <Grid item xs={10}>
              <TextField
                id="email"
                autocomplete
                type="email "
                variant="outlined"
                fullWidth
                style={{ backgroundColor: "#C4C4C4" }}
                defaultValue={location.state.isAuth === true ? "nvh@gmail.com" : ""}
              />
            </Grid>
          </Grid>
          <Grid
            container
            alignItems="center"
            justify="center"
            spacing="2"
            style={{ margin: 15 }}
          >
            <Grid item xs={9} container alignItems="center" justify="flex-end">
              <Button
                variant="contained"
                style={{
                  backgroundColor:
                  location.state.isAuth === false ? "rgb(61, 25, 91)" : "rgb(220, 0, 78)",
                  color: "#FFFFFF",
                }}
                
              >
                {location.state.isAuth === false ? "Xác nhận đặt lịch" : "Hủy đặt lịch"}
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                variant="contained"
                style={{ backgroundColor: "#FFFFFF", color: "rgb(61, 25, 91)" }}
              >
                {location.state.isAuth === false ? "Hủy" : "Quay lại"}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </DefaultLayout>
  );
}

export default Calendar;
