import React from "react";
import DefaultLayout from "../layout/index";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import bgFooter from "../calendar/images/Footer.png";
import News from "./popularNews" 
import Divider from "@material-ui/core/Divider";
import Highlight from "./highlight"
import MainNew from "./mainNew"

const useStyles = makeStyles(() => ({
  body: {
    width: "100%",
    paddingBottom: "5%",
  },
  top: {
    backgroundImage: "url(" + bgFooter + ")",
    color: "white",
    bottom: "0",
    width: "100%",
    height: "15rem",
    fontSize: "50px"
  },
  paper: {
    height: "100%",
  },
  email: {
    color: "rgb(61, 25, 91)",
    fontWeight: "bold",
  },
  content:{
    margin:'0% 10%',
    marginBottom: '5%'
},
divider:{
    margin:'2% 0%',
    background:'#C4C4C4',
    height:'2px'
}
}));


export default function SignIn() {
  const classes = useStyles();
  
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
            <span>Tin tức bên lề</span>
          </Grid>
        </Grid>
        <div className={classes.content}>
            <MainNew/>
          <Divider className={classes.divider}/>
            <News/>
          <Divider className={classes.divider}/>
           <Highlight/>
        </div>
    </DefaultLayout>
  );
}
