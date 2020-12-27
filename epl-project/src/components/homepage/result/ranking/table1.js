import React from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


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
            <TableCell align="">Pos</TableCell>
            <TableCell align="left"></TableCell>
            <TableCell align="left"></TableCell>
            <TableCell align="left">Club</TableCell>
            <TableCell align="right">PI</TableCell>
            <TableCell align="right">GD</TableCell>
            <TableCell align="right">Pts</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((row,index) => (
            <TableRow key={index}>
              <TableCell >
                1 
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
