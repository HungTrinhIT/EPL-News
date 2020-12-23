import React from "react";
import footerBg from  "./Footer.png"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundImage:"url("+(footerBg)+")",
    color:"white",
    bottom: "0",
    width: "100%",
    height: "20rem",
  },
  paper: {
    padding: theme.spacing(2),
  
  },
}));
function Footer(props)
{
    const classes=useStyles();
    return (
        <div className={classes.footer}>
             <Grid container direction="row" justify="space-around" alignItems="center">
                <Grid item xs={3} className={classes.paper}>
                    <h1>Premier League</h1>
                    <ul style={{listStyleType:'none',fontSize:'20px',padding:'0'}}>
                        <li style={{marginBottom:'10px'}}>Trang chủ</li>
                        <li style={{marginBottom:'10px'}}>Tin tức</li>
                        <li style={{marginBottom:'10px'}}>Bảng xấp hạng</li>
                        <li style={{marginBottom:'10px'}}>Câu lạc bộ</li>
                        <li style={{marginBottom:'10px'}}>Thống kê</li>
                        <li style={{marginBottom:'10px'}}>Cầu thủ</li>
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
                       
                    </ul>
                </Grid>

                <Grid item xs={3} className={classes.paper}>
                    <h1>Đồ án UI</h1>
                    
                    <ul style={{listStyleType:'none',fontSize:'20px',padding:'0'}}>
                        <li style={{marginBottom:'10px'}}>Trang web cung cập tin tức bóng đá giải Ngoại Hạng Anh</li>
                        <li style={{marginBottom:'10px'}}>Phục vụ cho mục đích học tập và nghiên cứu</li>   
                    </ul>
                </Grid>
            
            </Grid>
        </div>
    );
}

export default Footer;