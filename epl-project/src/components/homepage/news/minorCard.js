import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  media: {
    height: 125,
  }
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.logo}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom component="p" style={{fontWeight:'bold'}}>
          Đại chiến MU - Chelsea: Kịch bản khó lường ...
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
