import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  nameClub: {
    fontWeight: "bold",
  },
  schedule: {
    fontWeight: "bolder",
    textAlign: "center",
    marginTop: "2em",
  },
  book: {
    padding: "5px 15px",
    borderRadius: "20px",
    textTransform: "none",
    marginLeft: "auto",
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const history = useHistory();
  
  const handleBook = () => {
    localStorage.setItem("data", JSON.stringify({ data: props.data }));
    console.log(props.data);
    const book =JSON.parse(localStorage.getItem(`calendar${props.data.id}`))&&(JSON.parse(localStorage.getItem(`calendar${props.data.id}`)).data.id==props.data.id)?true:false;
    JSON.parse(localStorage.getItem("user"))
      ? history.push({ pathname: `/calendar/${props.data.id}`,state:{isAuth:true,isBook:book} })
      : history.push({ pathname: `/login`});
  };
  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ textAlign: "center" }}
        >
          <Grid item xs={5}>
            <img src={props.data.club1} style={{width: "50px", height: "50px"}}/>
            <div className={classes.nameClub}>{props.data.name1}</div>
          </Grid>
          <Grid item xs={2}>
            <h4>VS</h4>
          </Grid>
          <Grid item xs={5}>
            <img src={props.data.club2} style={{width: "50px", height: "50px"}} />
            <div className={classes.nameClub}>{props.data.name2}</div>
          </Grid>
        </Grid>
        <div className={classes.schedule}>{props.data.time}</div>
      </CardContent>
      <CardActions>
        <Button
          size="medium"
          variant="contained"
          color={JSON.parse(localStorage.getItem(`calendar${props.data.id}`))&&(JSON.parse(localStorage.getItem(`calendar${props.data.id}`)).data.id==props.data.id)&&JSON.parse(localStorage.getItem("user")) ?"primary":"secondary"}
          className={classes.book}
          onClick={handleBook}
        >
          {JSON.parse(localStorage.getItem(`calendar${props.data.id}`))&&(JSON.parse(localStorage.getItem(`calendar${props.data.id}`)).data.id==props.data.id)&&JSON.parse(localStorage.getItem("user")) ? 'Đã đặt lịch' : ' Đặt lịch'}
        </Button>
      </CardActions>
    </Card>
  );
}
