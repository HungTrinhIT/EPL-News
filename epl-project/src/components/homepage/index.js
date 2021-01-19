import React from 'react';
import DefaultLayout from "../layout/index"
import Carousel from "./carousel/index"
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Scheme from "./schedule/index"
import Result from "./result/index"
import News from "./news/index"
const useStyles = makeStyles((theme) => ({
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
function Homepage(props)
{
    const classes = useStyles();
    return (
        <DefaultLayout>
           <Carousel/>
           <div className={classes.content}>
                <Divider className={classes.divider}/>
                <Scheme/>
                <Divider className={classes.divider}/>
                <Result/>
                <Divider className={classes.divider}/>
                <News/>
           </div>
        </DefaultLayout>
    )
}

export default Homepage;