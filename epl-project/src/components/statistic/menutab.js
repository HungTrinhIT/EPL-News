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
import Table2 from "./table2"
import Table3 from "./table3"
import Table4 from "./table4"

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
    width:'25%'
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
    
      1,2,3,4
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
      <AppBar position="static" color="default" style={{marginBottom:'1%'}}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          variant="scrollable"
          scrollButtons="on"
          aria-label="full width tabs example"
          style={{margin: '0 10%'}}
        >
           {/* <Tab className={classes.tab}/> */}
          <Tab className={classes.tab} label="Bàn thắng" {...a11yProps(0)} />
          <Tab className={classes.tab} label="Kiến tạo" {...a11yProps(1)} />
          <Tab className={classes.tab} label="Thẻ phạt" {...a11yProps(2)} />
          <Tab className={classes.tab} label="Giá trị cầu thủ" {...a11yProps(3)} />
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
            <TabPanel1 
            value={index} index={index} dir={theme.direction}
            >
                  {index == 0 ? <Table1/> : 
                  index == 1 ? <Table2/> :
                  index == 2 ? <Table3 /> :
                  index == 3 ? <Table4/> :
                  <></>}
            </TabPanel1>
          )
        })
      }
      </SwipeableViews>
    </div>
  );
}
