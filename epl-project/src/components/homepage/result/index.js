import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Ranking from "./ranking/index"
import Score from "./scores/index"

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
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Ranking/>
          </Grid>
          <Grid item xs={12} md={6}>
            <Score/>
          </Grid>
        </Grid>
      </div>
    );
  }
