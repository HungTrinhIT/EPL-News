import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';


const useStyles = makeStyles((theme)=>({
  table: {
    width:"100%",
  },
  increaseBadge:{
    backgroundColor:"green"
  },
  decreaseBadge:{
    backgroundColor:"red"
  },
  normalBadge:{
    backgroundColor:"gray"
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));






function CircleStatus({status})
{
  const classes = useStyles();
  console.log(status)
  return ( <Badge variant="dot"
  classes={{ badge: status=="normal"?classes.normalBadge:(status=="increase"?classes.increaseBadge:classes.decreaseBadge) }}
  style={{marginLeft:"10px"}}>

  </Badge>)
}

export default function BasicTable(props) {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow style={{background:'rgba(221,221,221,0.4)'}}>
            <TableCell >Vị trí</TableCell>
            <TableCell align="left"></TableCell>
            <TableCell align="left"></TableCell>
            <TableCell align="left">Câu lạc bộ</TableCell>
            <TableCell align="right">Vòng đấu</TableCell>
            <TableCell align="right">Hệ số</TableCell>
            <TableCell align="right">Điểm</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((row,index) => (
            <TableRow key={index}>
              <TableCell >
                {row.pos}
              </TableCell>
              <TableCell align="left"><CircleStatus status ={row.status}/></TableCell>
              <TableCell align="right"> <Avatar alt={row.logo} src={row.logo} style={{display:"inline-block"}}/></TableCell>
              <TableCell component="th" scope="row" align="left">
               {row.name}</TableCell>
              <TableCell align="right">{row.match}</TableCell>
              <TableCell align="right">{row.gd}</TableCell>
              <TableCell align="right">{row.pts}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
