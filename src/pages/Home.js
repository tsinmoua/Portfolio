import React, { useState } from "react"
import { Button, Grid, makeStyles, Typography, } from "@material-ui/core";
import { Link } from 'react-router-dom'
import Flash from 'react-reveal/Flash';

import about from '../assets/About.png'
import tools from '../assets/Tools.png'
import projects from '../assets/Projects.png'
import contact from '../assets/contact.png'

const useStyles = makeStyles((theme) => ({

  hello: {
    backgroundImage: 'linear-gradient(#004080, black)',
    height: '90vh',
    // [theme.breakpoints.down("xs")]: {
    //   height: '50vh'
    // },

  },
  helloText: {
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
      fontSize: '2rem'
    },
  },
  info: {
    color: theme.palette.primary.main,
  },
  images: {
    height: '20rem',
    margin: '5rem',
    [theme.breakpoints.down("md")]: {
      height: '15rem',
    },
    [theme.breakpoints.down("sm")]: {
      height: '12rem',
      margin: '1rem',
    },
    [theme.breakpoints.down("500")]: {
      height: '10rem',

    },
    [theme.breakpoints.down("460")]: {
      height: '9rem',
      margin: '.5rem',
      display: 'block'
    },
  },
  infoText: {
    // fontWeight: 400,
    [theme.breakpoints.down("lg")]: {
      fontSize: '3.75rem',
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: '3rem'
    },
    [theme.breakpoints.down("640")]: {
      fontSize: '2rem'
    },
    [theme.breakpoints.down("375")]: {
      fontSize: '1.5rem'
    },
  },
  sections: {
    height: '60vh',
    [theme.breakpoints.down("lg")]: {
      height: '50vh',
    },
  },
}))

const Home = (props) => {
  const classes = useStyles();
  const [counter, setCounter] = useState(0)

  setTimeout(() => { setCounter(counter + 1) }, 4000)

  return (
    <Grid container>

      <Grid container justify='center' alignItems='center' className={classes.hello}>
        <Flash spy={counter}>
          <Typography variant='h1' className={classes.helloText}>
            Hello,<br />
            My name is Tsin.
          </Typography>
        </Flash>
      </Grid>

      <Grid container className={classes.info}>

        <Grid container
          justify='center'
          alignItems='center'
          className={classes.sections}
        >
          <Grid item>
            <Typography variant='h2' className={classes.infoText}>
              Full Stack Engineer.
              <br />
              Husband/Father.
              <br />
              Fitness Enthusiast.
              <br />
              <Button variant="contained" color="secondary"
                component={Link} to="/about">
                Learn more about me
              </Button>
            </Typography>
          </Grid>
          <Grid item>
            <img src={about} alt='profile'
              className={classes.images}
              style={{ borderRadius: '50%' }}
            />
          </Grid>
        </Grid>

        <Grid container
          justify='center'
          alignItems='center'
          className={classes.sections}
        >
          <Grid item>
            <img src={tools} alt='tools'
              className={classes.images}
            />
          </Grid>
          <Grid item>
            <Typography variant='h2' className={classes.infoText}>
              My toolpack: <br /> HTML, CSS, <br />JavaScript... <br />
              <Button variant="contained" color="secondary"
                component={Link} to="/skills">
                Skills
              </Button>
            </Typography>
          </Grid>
        </Grid>

        <Grid container
          justify='center'
          alignItems='center'
          className={classes.sections}
        >
          <Grid item>
            <Typography variant='h2' className={classes.infoText}>
              Check out my<br /> work<br />
              <Button variant="contained" color="secondary"
                component={Link} to="/projects">
                Projects
              </Button>
            </Typography>
          </Grid>
          <Grid item>
            <img src={projects} alt='Projects'
              className={classes.images}
            />
          </Grid>
        </Grid>

        <Grid container
          justify='center'
          alignItems='center'
          className={classes.sections}
        >
          <Grid item>
            <img src={contact} alt='Contact'
              className={classes.images}
            />
          </Grid>
          <Grid item>
            <Typography variant='h2' className={classes.infoText}>
              My information. <br />
              <Button variant="contained" color="secondary"
                component={Link} to="/contact">
                Contact me
            </Button>
            </Typography>
          </Grid>
        </Grid>

      </Grid>
    </Grid>
  )
};

export default Home;
