import React from "react";
import Logo1 from "../../../../images/club1.png"
import Logo2 from "../../../../images/club2.png"
import Logo3 from "../../../../images/club3.png"
import Logo4 from "../../../../images/club4.png"
import Logo5 from "../../../../images/club5.png"
import Logo6 from "../../../../images/club6.png"
import Logo7 from "../../../../images/club7.png"
import Logo8 from "../../../../images/club8.png"
import { makeStyles } from '@material-ui/core/styles';
import ListCard from "./listcard"
import Link from '@material-ui/core/Link';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
const useStyles = makeStyles((theme) => ({
    title:{
        background: "rgba(196, 196, 196,0.52)",
        padding:"2px",
        fontWeight:'bold'
    },
    link:{
        color:'black',
        fontWeight:'bold',
        float:'right'
    }
}));

const list = [
    {
        title: "Ngày thi đấu 1/38",
        data : [
            {club1:Logo1,club2:Logo2,score:"3 - 0",date:"KT 12/09",name1:"Club1",name2:"Club2"},
            {club1:Logo3,club2:Logo4,score:"1 - 0",date:"KT 12/09",name1:"Club1",name2:"Club2"},
            {club1:Logo5,club2:Logo6,score:"1 - 0",date:"KT 12/09",name1:"Club1",name2:"Club2"},
            {club1:Logo7,club2:Logo8,score:"1 - 0",date:"KT 12/09",name1:"Club1",name2:"Club2"}
        ]
    },
    {
        title: "Ngày thi đấu 1/38",
        data : [
            {club1:Logo1,club2:Logo2,score:"3 - 0",date:"KT 12/09",name1:"Club1",name2:"Club2"},
            {club1:Logo3,club2:Logo4,score:"1 - 0",date:"KT 12/09",name1:"Club1",name2:"Club2"},
            {club1:Logo5,club2:Logo6,score:"1 - 0",date:"KT 12/09",name1:"Club1",name2:"Club2"},
            {club1:Logo7,club2:Logo8,score:"1 - 0",date:"KT 12/09",name1:"Club1",name2:"Club2"}
        ]
    }
]
export default function Ranking(props)
{
    const classes = useStyles()
    return  (
        <div>
            <h2>Kết quả</h2>
            {
                list.map((ele,index)=>{
                    return (
                    <div key={index} style={{marginBottom:'2em'}}>
                        <div className={classes.title}>{ele.title}</div>
                        <ListCard data={ele.data}/>
                    </div>
                    )
                })
            }
         <Link
      href="/scores"
     className={classes.link}
    >
     Xem thêm ...
    </Link>
        </div>
    )
}