import React from "react"
import { Button, Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundImage: 'linear-gradient(#004080, black)',
    height: '45vh',
    [theme.breakpoints.down("xs")]: {
      height: '30vh'
    },
  },
  headerText: {
    fontSize: '10rem',
    fontWeight: 'bolder',
    color: theme.palette.secondary.main,
    [theme.breakpoints.down("md")]: {
      fontSize: '8rem'
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: '5rem'
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: '3rem'
    },
  },
  about: {
    color: theme.palette.primary.main,
  }
}))

const About = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container justify='center' alignItems='center' className={classes.header}>
        <Typography variant='h1' className={classes.headerText}>
          About
      </Typography>
      </Grid>

      <Grid container className={classes.about}>
        <Grid item>
          <Typography variant='h2'>
            I am a Full Stack Engineer with a background in Accounting, based in St. Paul, Minnesota.
            <br />
            I enjoy building applications that can fulfill your needs.
            <br />
            Always looking to learn more whenever possible.
            <br />
            Feel free to take a look at my latest projects in the projects tab.
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  )
};

export default About;
