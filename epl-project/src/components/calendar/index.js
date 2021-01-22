import React from "react";
import DefaultLayout from "../layout/index";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import bgFooter from "./images/Footer.png";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import Image from "material-ui-image";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
  body: {
    width: "100%",
    
  },
  top: {
    backgroundImage: "url(" + bgFooter + ")",
    color: "white",
    bottom: "0",
    width: "100%",
    height: "15rem",
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
  const location = useLocation();
  const props = JSON.parse(localStorage.getItem("data"));
  const history = useHistory();

  const handleBook = () => {
    if (location.state.isBook === false) {
      localStorage.setItem(`calendar${props.data.id}`,JSON.stringify({data:{book:true,id:props.data.id}}));
    }
    else{
      localStorage.removeItem(`calendar${props.data.id}`);
    }
    history.push({pathname:'/home'});
  };

  const handleCancel = () => {
    history.push({pathname:'/home'});
  };
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
          style={{ paddingLeft: '2em' }}
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
                  <Image src={props.data.club1} />
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
                  <Image src={props.data.club2} />
                </Grid>
              </Grid>
              <Grid container style={{ margin: 20 }}>
                <Divider variant="fullWidth" light="false" />
              </Grid>
              <Grid container alignItems="center" justify="center" spacing="2">
                <Grid item xs={1}>
                  <Image src={props.data.club1} />
                </Grid>
                <Grid
                  item
                  xs={4}
                  container
                  alignItems="center"
                  justify="center"
                >
                  <Typography>{props.data.name1}</Typography>
                </Grid>
                <Grid item xs={7}>
                  <Typography>{props.data.time}</Typography>
                </Grid>
              </Grid>
              <Grid container alignItems="center" justify="center" spacing="2">
                <Grid item xs={1}>
                  <Image src={props.data.club2} />
                </Grid>
                <Grid
                  item
                  xs={4}
                  container
                  alignItems="center"
                  justify="center"
                >
                  <Typography>{props.data.name2}</Typography>
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
              <Typography className={classes.email} component="h1">
                Email
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <TextField
                id="email"
                type="email "
                variant="outlined"
                fullWidth
                style={{ backgroundColor: "#C4C4C4" }}
                defaultValue={
                  location.state.isAuth === true ? "nvh@gmail.com" : ""
                }
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
                    location.state.isBook === false
                      ? "rgb(61, 25, 91)"
                      : "rgb(220, 0, 78)",
                  color: "#FFFFFF",
                }}
                onClick={handleBook}
              >
                {location.state.isBook === false
                  ? "Xác nhận đặt lịch"
                  : "Hủy đặt lịch"}
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                variant="contained"
                style={{ backgroundColor: "#FFFFFF", color: "rgb(61, 25, 91)" }}
                onClick={handleCancel}
              >
                {location.state.isBook === false ? "Hủy" : "Quay lại"}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </DefaultLayout>
  );
}

export default Calendar;
