import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import MyMenu from "./menu/menu"
import ClubSite from "./clubsite/clubsite"
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import clsx from 'clsx';
import Avatar from '@material-ui/core/Avatar';
import Logo from "./logo.png";
import {Link} from "react-router-dom";
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
 

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const logout = ()=>{
    localStorage.removeItem("user");
    setAnchorEl(null);
    handleMobileMenuClose();
    window.location.reload(true);
  }

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      style={{marginTop:'3em'}}
    >
      <MenuItem style={{width:'100px'}} onClick={handleMenuClose}><PersonIcon/>Cá nhân</MenuItem>
      <MenuItem onClick={logout}><ExitToAppIcon/>Đăng xuất</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {
        localStorage.getItem("user")?
        (
          <>
          <MenuItem style={{width:'100px'}} onClick={handleMenuClose}><PersonIcon/>Profile</MenuItem>
          <MenuItem onClick={logout}><ExitToAppIcon/>Log out</MenuItem>
          </>
        ):
        <Link style={{color:"black",textDecoration:'none'}} to="/login">
      <MenuItem>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Đăng nhập</p>
      </MenuItem>
      </Link>
    }
    </Menu>
  );

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {/* {['Trang chủ', 'Tin tức', 'Bảng xếp hạng', 'Câu lạc bộ',"Thống kê","Cầu thủ"].map((text, index) => ( */}
          <a href="/home" style={{color:'black',textDecoration:'none'}}>
            <ListItem button>
              <ListItemText primary="Trang chủ" />
            </ListItem>
          </a>
          <a href="/news" style={{color:'black',textDecoration:'none'}}>
            <ListItem button>
              <ListItemText primary="Tin tức" />
            </ListItem>
          </a>
          <a href="/ranking" style={{color:'black',textDecoration:'none'}}>
            <ListItem button>
              <ListItemText primary="Bảng xếp hạng" />
            </ListItem>
          </a>
          <a href="/club" style={{color:'black',textDecoration:'none'}}>
            <ListItem button>
              <ListItemText primary="Câu lạc bộ" />
            </ListItem>
          </a>
          <a href="/statistic" style={{color:'black',textDecoration:'none'}}>
            <ListItem button>
              <ListItemText primary="Thống kê" />
            </ListItem>
          </a>
          <a href="/player" style={{color:'black',textDecoration:'none'}}>
            <ListItem button>
              <ListItemText primary="Cầu thủ" />
            </ListItem>
          </a>
        {/* ))} */}
      </List>
    </div>
  );

  return (
    <>
    <ClubSite/>
    <div className={classes.grow} style={{display:'flex',flexWrap:'nowrap'}}>
      <AppBar position="static" style={{backgroundColor:'#3D195B',alignContent:'center'}}>
        <Toolbar>
          <div className={classes.sectionMobile} style={{flexGrow:'1'}}>
             <React.Fragment key="left">
                  {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
                      <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="open drawer"
                  onClick={toggleDrawer("left", true)}
                >
                  <MenuIcon />
                </IconButton>
                  <Drawer anchor="left" open={state["left"]} onClose={toggleDrawer("left", false)}>
                        {list("left")}
                  </Drawer>
               </React.Fragment>
          </div>

          <div className={classes.sectionDesktop} >
            <Avatar
            alt="Remy Sharp" src={Logo} 
            className={classes.large} 
            style={{height:'100px',width:'100px',margin:'2px 0'}} />
        </div>

           <div className={classes.sectionDesktop} style={{flexGrow:'2',justifyContent:'center'}}>  
                <MyMenu/>
            </div>
          {/* <div className={classes.grow} />
          */}

          
          <div className={classes.sectionDesktop} style={{marginRight:'5%'}}>

            <IconButton aria-label="show 4 new mails" color="inherit">
             <SearchIcon style={{ transform: "scale(1.5)",marginRight:'10px'}} />
            </IconButton>
           
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
             onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle 
              style={{ transform: "scale(1.5)",marginRight:'10px'}} /> 
              {
                JSON.parse(localStorage.getItem("user"))?
                <span style={{fontSize:'20px',fontWeight:'bold'}}>Chào,{JSON.parse(localStorage.getItem("user")).name}</span>:
                <Link  style={{fontSize:'20px',fontWeight:'bold',textDecoration:'none',color:'white'}} to="/login"><span>Đăng nhập</span></Link>
              }
            </IconButton>
          </div>

          
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
   </>
  );
}
