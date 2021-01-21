import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    padding:'0',
    margin:0,
    fontWeight:'bold'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
      <>
      <div style={{background:'black',color:'white',height:'100px',borderRadius:'10px',textAlign:'center',paddingTop:'10px'}}>
        <h2>Bình luận</h2>
    </div>
    <div className={classes.root}>
      <Grid container spacing={3} style={{padding:'2em'}}>
        <Grid item xs={12} style={{borderBottom:'1px solid black'}}>
         Arsenal kết thúc mùa giải ở vị trí thứ 4 quen thuộc
        </Grid>
        <Grid item xs={12} style={{borderBottom:'1px solid black'}}>
          Liverpool sa thải huấn luận viên Jürgen Klopp vì thành tích tệ hại
        </Grid>
        <Grid item xs={12} style={{borderBottom:'1px solid black'}}>
         José Mourinho tuyên bố bỏ biệt danh “Người đặc biệt”
        </Grid>
        <Grid item xs={12} style={{borderBottom:'1px solid black'}}>
          Rooney sẽ quay về “Nhà hát của những giấc mơ” trước khi giải nghệ ?
        </Grid>
        <Grid item xs={12} style={{borderBottom:'1px solid black'}}>
          Rooney sẽ quay về “Nhà hát của những giấc mơ” trước khi giải nghệ ?
        </Grid>
        <Grid item xs={12} style={{borderBottom:'1px solid black'}}>
          Rooney sẽ quay về “Nhà hát của những giấc mơ” trước khi giải nghệ ?
        </Grid>
      </Grid>
    </div>
    </>
  );
}
