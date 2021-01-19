import React from "react"
import DefaultLayout from "../layout/index";
import { makeStyles } from "@material-ui/core/styles";
import bgFooter from "../calendar/images/Footer.png";
import Grid from "@material-ui/core/Grid";
import content from "./images/Newscontent.png"
import AttractiveNew from "./attractiveNews"
import Comment from "./comment"
import AddComment from "./addComment"
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
      padding:' 0 50px'
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

export default function DetailNew()
{
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
          >
            <div style={{  fontSize: "40px"}}>Manchester United chính thức  vô địch Premier League
            mùa giải 2020 - 2021 sớm 3 vòng đấu</div>
            <span>20/05/2021</span>
          </Grid>
        </Grid>
        <div style={{margin:'0 5%'}}>
            <Grid container spacing={3}>
            <Grid item xs={8}>
            <img src={content} style={{width:'90%'}}/>
            </Grid>
            <Grid item xs={4}>
                <AttractiveNew/>
                <Comment/>
            </Grid>
            <Grid item xs={12}> 
               <AddComment/>
            </Grid>
            </Grid>
        </div>
    </DefaultLayout>
    )
}