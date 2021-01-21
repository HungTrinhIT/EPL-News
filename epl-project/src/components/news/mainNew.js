import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import mainNew from "./images/mainnew.png"
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import AttractiveNew from "./attractiveNews"
import {Link} from "react-router-dom"
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  media:{
      height:'100vh'
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Link to="/detailNews" style={{textDecoration:'none'}}>
        <Card>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={mainNew}
                title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom component="p" style={{fontWeight:'bold',fontSize:'2.0em'}}>
                    Mannchester United chính thức  vô địch Premier League
                    mùa giải 2020 - 2021 sớm 3 vòng đấu...
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
            </Link>
        </Grid>
        <Grid item xs={4}>
          <AttractiveNew/>
        </Grid>
      </Grid>
    </div>
  );
} 
