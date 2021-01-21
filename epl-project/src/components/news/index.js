import React from "react";
import DefaultLayout from "../layout/index";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Calendar from "./../calendar/index"

import { useHistory } from "react-router-dom";
import bgFooter from "../calendar/images/Footer.png";
import News from "./popularNews" 
import Divider from "@material-ui/core/Divider";
import Highlight from "./highlight"
import MainNew from "./mainNew"

const useStyles = makeStyles((theme) => ({
  body: {
    width: "100%",
    paddingBottom: "5%",
  },
  top: {
    backgroundImage: "url(" + bgFooter + ")",
    color: "white",
    bottom: "0",
    width: "100%",
    height: "10rem",
    fontSize: "50px",
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
  const history = useHistory();
 
  
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
            style={{ paddingLeft: 15 }}
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
