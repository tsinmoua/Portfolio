import React from "react"
import { Grid, makeStyles, Typography } from "@material-ui/core";

import collage from '../assets/collage.png'

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
          About Me
      </Typography>
      </Grid>

      <Grid container className={classes.about} justify='center' >
        <Grid container style={{ height: '50vh', width: '75%' }} alignItems='center' justify='center'>
          <Typography variant='h4'>
            I am a Full Stack Engineer with a background in Accounting. 
            Based in Saint Paul, Minnesota and obtained my certificate from the University of Minnesota.

            Always looking to learn more whenever possible.
            Feel free to take a look at my latest projects in the projects tab.
          </Typography>
        </Grid>

        <Grid container justify='center' style={{ width: '100%'}}>
          <img src={collage} alt='Collage' style={{ width: '75%' }} />
        </Grid>

      </Grid>
    </React.Fragment>
  )
};

export default About;
