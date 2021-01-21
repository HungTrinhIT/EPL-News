import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from "./card"


export default function CenteredGrid(props) {
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
