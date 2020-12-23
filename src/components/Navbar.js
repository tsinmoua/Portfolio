import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  useScrollTrigger,
  Button,
  Grid
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom'

import logo from '../assets/TsinMoua.png'

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
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: 'transparent'
    },
    height: '6rem'
  },
  menuButton: {
    marginLeft: 'auto'
  }
}));

export default function Navbar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <ElevationScroll {...props}>

        <AppBar position="fixed" >
          <Toolbar disableGutters>

            <Button disableRipple className={classes.logoContainer}>
              <img src={logo} alt={'logo'} />
            </Button>

            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>

          </Toolbar>
        </AppBar>

      </ElevationScroll>

    </div>
  );
}
