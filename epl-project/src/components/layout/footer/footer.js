import React from "react";
import footerBg from  "./Footer.png"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundImage:"url("+(footerBg)+")",
    color:"white",
    bottom: "0",
    width: "100%",
    minHeight: "20rem"
  },
  paper: {
    padding: theme.spacing(0),
  },
  a:{
      color:"white",
      textDecoration:"none"
  }
}));
function Footer()
{
    const classes=useStyles();
    return (
        <div className={classes.footer}>
             <Grid container direction="row" justify="space-around" alignItems="center">
                <Grid item xs={3} className={classes.paper}>
                    <h1>Premier League</h1>
                    <ul style={{listStyleType:'none',fontSize:'20px',padding:'0'}}>
                        <a className={classes.a} href="/home"><li style={{marginBottom:'10px'}}>Trang chủ</li></a>
                        <a className={classes.a} href="/news"> <li style={{marginBottom:'10px'}}>Tin tức</li></a>
                        <a className={classes.a} href="/ranking"> <li style={{marginBottom:'10px'}}>Bảng xếp hạng</li></a>
                        <a className={classes.a} href="/club"><li style={{marginBottom:'10px'}}>Câu lạc bộ</li></a>
                        <a className={classes.a} href="/statistic"><li style={{marginBottom:'10px'}}>Thống kê</li></a>
                        <a className={classes.a} href="/player"><li style={{marginBottom:'10px'}}>Cầu thủ</li></a>
                    </ul>
                </Grid>
               

                <Grid item xs={3} className={classes.paper}>
                    <h1>Danh sách nhóm</h1>
                    <ul style={{listStyleType:'none',fontSize:'20px',padding:'0'}}>
                        <li style={{marginBottom:'10px'}}>1712148</li>
                        <li style={{marginBottom:'10px'}}>1712155</li>
                        <li style={{marginBottom:'10px'}}>1712056</li>
                        <li style={{marginBottom:'10px'}}>1712049</li>
                        <li style={{marginBottom:'10px'}}>1712018</li>
                        <br/>
                    </ul>
                </Grid>

                <Grid item xs={3} className={classes.paper}>
                    <h1>Đồ án UI</h1>
                    <ul style={{listStyleType:'none',fontSize:'20px',padding:'0'}}>
                        <li style={{marginBottom:'10px'}}>THIẾT KẾ GIAO DIỆN</li>
                        <li style={{marginBottom:'10px'}}>K17 FIT HCMUS</li>  
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </ul>
                </Grid>
            
            </Grid>
        </div>
    );
}

export default Footer;