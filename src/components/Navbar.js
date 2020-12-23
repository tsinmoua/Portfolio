import React, { useEffect, useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  useScrollTrigger,
  Button,
  Tab,
  Tabs,
  useMediaQuery
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom'

import Logo from '../assets/TsinMoua.png'

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "2rem",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "2.5rem"
    }
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: 'transparent'
    },
    height: '6rem'
  },
  menuButton: {
    marginLeft: 'auto',
    height: '2rem'
  },
  tabContainer: {
    marginLeft: 'auto',
    marginRight: '0',
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));


function Navbar(props) {
  const classes = useStyles();
  const [value, setValue] = useState('1');
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (window.location.pathname === '/' && value !== 0) {
      setValue('1')
    } else if (window.location.pathname === '/about' && value !== '2') {
      setValue('2')
    } else if (window.location.pathname === '/skills' && value !== '3') {
      setValue('3')
    } else if (window.location.pathname === '/projects' && value !== '4') {
      setValue('4')
    } else if (window.location.pathname === '/contact' && value !== '5') {
      setValue('5')
    }
  }, [value])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const drawer = (
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon style={{ width: '50px', height: '50px' }} />
    </IconButton>
  )


  const tabs = (
    <Tabs value={value} onChange={handleChange} className={classes.tabContainer}>
      <Tab label="Home" value='1' component={Link} to='/' disableRipple />
      <Tab label="About" value='2' component={Link} to='/about' disableRipple />
      <Tab label="Skills" value='3' component={Link} to='/skills' disableRipple />
      <Tab label="Projects" value='4' component={Link} to='/projects' disableRipple />
      <Tab label="Contact" value='5' component={Link} to='/contact' disableRipple />
    </Tabs>
  )

  return (
    <>
      <ElevationScroll {...props}>

        <AppBar position="fixed" >
          <Toolbar disableGutters>

            <Button disableRipple className={classes.logoContainer} component={Link} to='/' onClick={(e) => setValue('1')}>
              <img src={Logo} alt={'Logo'} />
            </Button>

            {matches ? drawer : tabs}

          </Toolbar>
        </AppBar>
      </ElevationScroll>

      <div className={classes.toolbarMargin} />

      {props.children}

    </>
  );
}

export default Navbar