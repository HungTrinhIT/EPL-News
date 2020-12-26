import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MainCard from "./mainCard"
import MainLogo from "../../../images/maincard.png"
import MinorCard from "./minorCard"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <h2>Tin nổi bật</h2>
      <Grid container spacing={3}>
        <Grid item xs={6}>
            <MainCard logo={MainLogo}/>
        </Grid>
        <Grid item xs={6}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                   <MinorCard logo={MainLogo}/>
                </Grid>
                <Grid item xs={6}>
                    <MinorCard logo={MainLogo}/>
                </Grid>
                <Grid item xs={6}>
                    <MinorCard logo={MainLogo}/>
                </Grid>
                <Grid item xs={6}>
                 <MinorCard logo={MainLogo}/>
                </Grid>
        </Grid>
        </Grid>
       
      </Grid>
    </div>
  );
}
