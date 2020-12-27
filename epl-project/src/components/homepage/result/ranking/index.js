import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Logo from "../../../layout/header/logo.png"
import MenuTab from "./menutab"


const useStyles = makeStyles((theme) => ({
   rankingHeader:{
       background: '#FF2882',
       color: "white",
       textAlign: 'center',
       borderTopLeftRadius: '10px',
       borderTopRightRadius : '10px',
       fontWeight: 'bold',
       padding: '10px'
   },
   logo:{
    height:'100px',
    borderRadius: '50px'
   }
}));

export default function Ranking(props)
{
    const classes = useStyles();
    return  (
        <div>
            <h2>Bảng xếp hạng</h2>
            <div className={classes.rankingHeader}>
                <h1>Premier <img className={classes.logo} src={Logo}/> League</h1>
              
            </div>
            <MenuTab/>
        </div>
    )
}