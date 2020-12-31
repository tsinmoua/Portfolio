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
  useMediaQuery,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  Typography
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
  drawerIconContainer: {
    marginLeft: 'auto',
    height: '2rem',
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  drawer: {
    backgroundColor: theme.palette.common.navy,
    width: '25%',
    [theme.breakpoints.down("xs")]: {
      width: '50%',
    }
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1
    },
    color: theme.palette.common.orange,
  },
  tab: {
    minWidth: '8rem'
  },

}));


function Navbar(props) {
  const classes = useStyles();
  const [value, setValue] = useState('1');
  const [openDrawer, setOpenDrawer] = useState(false);

  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (window.location.pathname === '/' && value !== '1') {
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
  }, [value, window.location.pathname] )

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const routes = [
    { name: "HOME", link: "/", activeIndex: '1' },
    { name: "ABOUT", link: "/about", activeIndex: '2' },
    { name: "SKILLS", link: "/skills", activeIndex: '3' },
    { name: "PROJECTS", link: "/projects", activeIndex: '4' },
    { name: "CONTACT", link: "/contact", activeIndex: '5' },
  ]

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        className={classes.swipe}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
        anchor="right"
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map(route => (
            <ListItem
              divider
              key={`${route}${route.activeIndex}`}
              button
              component={Link}
              to={route.link}
              selected={props.value === route.activeIndex}
              classes={{ selected: classes.drawerItemSelected }}
              onClick={() => {
                setOpenDrawer(false);
                setValue(route.activeIndex);
              }}
            >
              <ListItemText>
                <Typography variant='subtitle1' style={value === route.activeIndex ? { color: theme.palette.common.orange } : { color: 'white' }} >
                  {route.name}
                </Typography>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon style={{ width: '50px', height: '50px' }} />
      </IconButton>
    </React.Fragment >

  )


  const tabs = (
    <Tabs value={value} onChange={handleChange} className={classes.tabContainer}>
      <Tab label="Home" value='1' component={Link} to='/' disableRipple classes={{ root: classes.tab }} />
      <Tab label="About" value='2' component={Link} to='/about' disableRipple classes={{ root: classes.tab }} />
      <Tab label="Skills" value='3' component={Link} to='/skills' disableRipple classes={{ root: classes.tab }} />
      <Tab label="Projects" value='4' component={Link} to='/projects' disableRipple classes={{ root: classes.tab }} />
      <Tab label="Contact" value='5' component={Link} to='/contact' disableRipple classes={{ root: classes.tab }} />
    </Tabs>
  )

  return (
    <>
      <ElevationScroll {...props}>

        <AppBar position="fixed" className={classes.appbar}>
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