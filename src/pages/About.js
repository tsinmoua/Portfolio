import React from "react"
import { Grid, makeStyles, Typography } from "@material-ui/core";

import collage from '../assets/collage.png'
import badge from '../assets/badge.png'

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
  },
  info: {
    padding: '5rem',
    [theme.breakpoints.down("960")]: {
      padding: '2rem',
    },
  },
  infoText: {
    fontSize: '1.5rem',
    [theme.breakpoints.down("md")]: {
      fontSize: '1rem'
    },
  },
  collageImage: {
    width: '40rem',
    [theme.breakpoints.down("1440")]: {
      width: '30rem'
    },
    [theme.breakpoints.down("480")]: {
      width: '25rem'
    },
    [theme.breakpoints.down("400")]: {
      width: '20rem'
    },
  },
  gridTextWidth: {
    width: '50%',
    [theme.breakpoints.down("1120")]: {
      width: '90%'
    },
  }

}))

const About = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container justify='center' alignItems='center' className={classes.header}>
        <Typography variant='h1' className={classes.headerText}>
          About Me
      </Typography>
      </Grid>

      <Grid container className={classes.about} justify='center' >

        <Grid container justify='center' alignItems='center' className={classes.info}>
          <Grid item className={classes.gridTextWidth}>
            <Typography variant='h4' className={classes.infoText}>
              <span style={{ fontWeight: 'bold' }}>Who am I?</span><br /><br />
            I am a Full Stack Engineer with a background in Accounting.
            I enjoy creating applications and websites.
            The critical thinking and problem solving skills learned from being an Accountant helps me bring the vision to life.
            <br /><br />
            Based in Saint Paul, Minnesota and obtained my certificate from the University of Minnesota.
            Always looking to learn more whenever possible.
          </Typography>
          </Grid>
          <Grid item>
            <img src={badge} alt='Badge' style={{ width: '20rem' }} />
          </Grid>
        </Grid>

        <Grid container justify='center' alignItems='center' className={classes.info}>
          <Grid item>
            <img src={collage} alt='Collage' className={classes.collageImage} />
          </Grid>
          <Grid item className={classes.gridTextWidth}>
            <Typography variant='h4' className={classes.infoText}>
              <span style={{ fontWeight: 'bold' }}>Outside of coding</span><br /><br />
            Health and fitness is another passion of mine.
            I try to stay active in my free time and enjoy bodybuilding.
            The rest of the time you can catch me traveling, spending time with my wife and soon to be born daughter.
          </Typography>
          </Grid>
        </Grid>

      </Grid>
    </React.Fragment>
  )
};

export default About;
