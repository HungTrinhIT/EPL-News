import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
  root: {
    background:"rgba(221, 221, 221,0.4)"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  nameClub:{
    fontWeight:"bold"
  },
  schedule:{
    textAlign:'center',
    marginTop:'2em'
  },
  book:{
    padding:'5px 15px',
    borderRadius:"20px",
    textTransform:'none',
    marginLeft:'auto'
  }
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Card className={classes.root}>
      <CardContent>
      <Grid container justify="center" alignItems="center" style={{textAlign:'center'}}>
        <Grid item xs={12} md={5}>
            <img src={props.data.club1}/>
            <div className={classes.nameClub}>{props.data.name1}</div>
        </Grid>
        <Grid item xs={12} md={2}>
           <h4>{props.data.score}</h4>
        </Grid>
        <Grid item xs={12} md={5}>
          <img src={props.data.club2}/>
          <div className={classes.nameClub}>{props.data.name2}</div>
        </Grid>
      </Grid>
      <div className={classes.schedule}>{props.data.date}</div>
      </CardContent>
    </Card>
  );
}
