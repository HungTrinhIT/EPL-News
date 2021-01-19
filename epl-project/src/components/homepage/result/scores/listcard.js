import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from "./card"
const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
}));

export default function CenteredGrid(props) {
  const classes = useStyles();

  console.log(props.data);
  return (
      <Grid container spacing={3} style={{marginTop:'1em'}}>
          {props.data.map((ele,index)=>{
              return (
                <Grid key={index} item xs={6}>
                    <Card data={ele}/>
                </Grid>
          
              )
            }
          )
        }
      </Grid>
  );
}
