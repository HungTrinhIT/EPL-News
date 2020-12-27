import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Table1 from "./table1"
import Logo1 from "../../../../images/club15.png"
import Logo2 from "../../../../images/club5.png"
import Logo3 from "../../../../images/club18.png"
import Logo4 from "../../../../images/club7.png"
import Logo5 from "../../../../images/club10.png"
import Logo6 from "../../../../images/club11.png"
import Logo7 from "../../../../images/club8.png"
import Logo8 from "../../../../images/club6.png"
import Logo9 from "../../../../images/club14.png"
import Logo10 from "../../../../images/club4.png"
import Link from '@material-ui/core/Link';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper
  },
  tab:{
    textTransform:"none",
    fontWeight:'bold',
    width:'33%'
  },
  link:{
    color:'black',
    fontWeight:'bold',
    float:'right',
    marginTop:'1em'
}
}));

function TabPanel1(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={0}>{children}</Box>}
    </Typography>
  );
}


const listRanking=[
    [
      {pos:1,status:'normal',name:"Liverpool",logo:Logo1,match:11,gd:24,pts:21},
      {pos:2,status:'increase',name:"Manchester United",logo:Logo2,match:11,gd:24,pts:20},
      {pos:3,status:'normal',name:"Tottenham",logo:Logo3,match:11,gd:24,pts:19},
      {pos:4,status:'decrease',name:"Arsernal",logo:Logo4,match:11,gd:24,pts:18},
      {pos:5,status:'increase',name:"Chelsea",logo:Logo5,match:11,gd:24,pts:17},
      {pos:6,status:'normal',name:"Everton",logo:Logo6,match:11,gd:24,pts:12},
      {pos:7,status:'increase',name:"Aston Villa",logo:Logo7,match:11,gd:24,pts:11},
      {pos:8,status:'normal',name:"Manchester City",logo:Logo8,match:11,gd:24,pts:10},
      {pos:9,status:'increase',name:"Leisester",logo:Logo9,match:11,gd:24,pts:10},
      {pos:10,status:'normal',name:"Southamton",logo:Logo10,match:11,gd:24,pts:9}
    ],
    [
      {pos:1,status:'normal',name:"Liverpool Academy",logo:Logo1,match:11,gd:24,pts:21},
      {pos:2,status:'increase',name:"Manchester United Academy",logo:Logo2,match:11,gd:24,pts:20},
      {pos:3,status:'normal',name:"Tottenham Academy",logo:Logo3,match:11,gd:24,pts:19},
      {pos:4,status:'decrease',name:"Arsernal Academy",logo:Logo4,match:11,gd:24,pts:18},
      {pos:5,status:'increase',name:"Chelsea Academy",logo:Logo5,match:11,gd:24,pts:17},
      {pos:6,status:'normal',name:"Everton Academy",logo:Logo6,match:11,gd:24,pts:12},
      {pos:7,status:'increase',name:"Aston Villa Academy",logo:Logo7,match:11,gd:24,pts:11},
      {pos:8,status:'normal',name:"Manchester City Academy",logo:Logo8,match:11,gd:24,pts:10},
      {pos:9,status:'increase',name:"Leisester Academy",logo:Logo9,match:11,gd:24,pts:10},
      {pos:10,status:'normal',name:"Southamton Academy",logo:Logo10,match:11,gd:24,pts:9}
    ],
    [
      {pos:1,status:'normal',name:"Liverpool II",logo:Logo1,match:11,gd:24,pts:21},
      {pos:2,status:'increase',name:"Manchester United II",logo:Logo2,match:11,gd:24,pts:20},
      {pos:3,status:'normal',name:"Tottenham II",logo:Logo3,match:11,gd:24,pts:19},
      {pos:4,status:'decrease',name:"Arsernal II",logo:Logo4,match:11,gd:24,pts:18},
      {pos:5,status:'increase',name:"Chelsea II",logo:Logo5,match:11,gd:24,pts:17},
      {pos:6,status:'normal',name:"Everton II",logo:Logo6,match:11,gd:24,pts:12},
      {pos:7,status:'increase',name:"Aston Villa II",logo:Logo7,match:11,gd:24,pts:11},
      {pos:8,status:'normal',name:"Manchester City II",logo:Logo8,match:11,gd:24,pts:10},
      {pos:9,status:'increase',name:"Leisester II",logo:Logo9,match:11,gd:24,pts:10},
      {pos:10,status:'normal',name:"Southamton II",logo:Logo10,match:11,gd:24,pts:9}
    ],

  
]

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          variant="scrollable"
          scrollButtons="on"
          aria-label="full width tabs example"
        >
          <Tab className={classes.tab} label="First Team" {...a11yProps(0)} />
          <Tab className={classes.tab} label="PL2" {...a11yProps(1)} />
          <Tab className={classes.tab} label="PL3" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
      {
        listRanking.map((list,index)=>{
          return (
            <TabPanel1 value={index} index={index} dir={theme.direction}>
                  <Table1 data={list}/>
            </TabPanel1>
          )
        })
        // <TabPanel1 value={value} index={0} dir={theme.direction}>
        //    <Table1/>
        // </TabPanel1>
        // <TabPanel1 value={value} index={1} dir={theme.direction}>
        //   Item Two
        // </TabPanel1>
        // <TabPanel1 value={value} index={2} dir={theme.direction}>
        //   Item Three
        // </TabPanel1>
      }
      </SwipeableViews>
      <Link
      href="/ranking"
     className={classes.link}
    >
     Xem thêm ...
    </Link>
    </div>
  );
}
