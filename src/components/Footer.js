import React from "react"
import { Grid, makeStyles, Typography } from "@material-ui/core";
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundImage: 'linear-gradient(#004080, black)',
    height: '10rem',
    width: '100%',
    position: 'static',
    bottom: 0
  },
  footerLinks: {
    textDecoration: 'none',
    color: 'white',
    [theme.breakpoints.down("400")]: {
      fontSize: '.6rem'
    },
  },
  footerContainer: {
    height: '100%',
    width: '100%',
    margin: 'auto'
  },
  copyright: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '.75rem',
    [theme.breakpoints.down("400")]: {
      fontSize: '.50rem'
    },
  }
}))

const Footer = (props) => {
  const classes = useStyles();

  const routes = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/about" },
    { name: "SKILLS", link: "/skills" },
    { name: "PROJECTS", link: "/projects" },
    { name: "CONTACT", link: "/contact" },
  ]

  return (
    <footer className={classes.footer}>

      <Grid container justify='center' alignItems='center' spacing={3}
        className={classes.footerContainer}
      >
        {routes.map((route, index) => {
          return (
            <Grid item key={index}>
              <Typography
                variant='subtitle2'
                component={Link} to={route.link}
                className={classes.footerLinks}
              >
                {route.name}
              </Typography>
            </Grid>
          )
        })}

        <Grid container justify='center' alignItems='flex-end' >
          <Grid item>
            <Typography variant='subtitle2' className={classes.copyright}>
              Copyright © 2020 Tsin Moua &bull; Greater Minneapolis/Saint Paul, MN
            </Typography>
          </Grid>
        </Grid>

      </Grid>
    </footer>
  )
};

export default Footer;
