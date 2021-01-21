import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import MainCard from "./mainCard";
import MainLogo from "./images/maincard.png";
import MinorCard from "./minorCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  link: {
    color: "black",
    fontWeight: "bold",
    float: "right",
    margin: "1em 0",
    textDecoration: "none",
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2>Có thể bạn quan tâm</h2>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <MainCard logo={MainLogo} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <MinorCard logo={MainLogo} />
            </Grid>
            <Grid item xs={12} md={6}>
              <MinorCard logo={MainLogo} />
            </Grid>
            <Grid item xs={12} md={6}>
              <MinorCard logo={MainLogo} />
            </Grid>
            <Grid item xs={12} md={6}>
              <MinorCard logo={MainLogo} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* <Link
      to="/news"
     className={classes.link}
    >
     Xem thêm ...
    </Link> */}
    </div>
  );
}
