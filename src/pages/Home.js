import React from "react"
import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import { Link } from 'react-router-dom'

import about from '../assets/About.png'
import tools from '../assets/Tools.png'
import projects from '../assets/Projects.png'
import contact from '../assets/contact.png'

const useStyles = makeStyles((theme) => ({
  // divImage: {
  //   width: "100%",
  //   height: '100%'
  // },
  // hello: {
  //   position: "relative",
  //   top: '-20rem',
  //   left: '5rem',
  //   [theme.breakpoints.down("md")]: {
  //     fontSize: '3rem'
  //   },
  // },
  hello: {
    backgroundImage: 'linear-gradient(#004080, black)',
    height: '90vh',
    // [theme.breakpoints.down("md")]: {
    //   height: '90vh'
    // },
    [theme.breakpoints.down("xs")]: {
      height: '50vh'
    },

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
      fontSize: '3rem'
    },
  },
  info: {
    // backgroundImage: 'linear-gradient(black, white)',
    color: theme.palette.primary.main,

  }
}))

const Home = (props) => {
  const classes = useStyles();

  return (
    <Grid container>

      <Grid container justify='center' alignItems='center' className={classes.hello}>
        <Typography variant='h1' className={classes.helloText}>
          Hello,<br />
          My name is Tsin.
        </Typography>
      </Grid>

      <Grid container className={classes.info}>

        <Grid container
          justify='center'
          alignItems='center'
          style={{ height: '50vh' }}>
          <Grid item>
            <Typography variant='h2'>
              Full Stack Engineer.
              <br />
              Husband/Father.
              <br />
              Fitness Enthusiast.
              <br />
              <Button variant="contained" color="secondary"
                component={Link} to="/about"
                component={Link} to="/about">
                Learn more about me
              </Button>
            </Typography>
          </Grid>
          <Grid item>
            <img src={about} alt='profile'
              style={{ borderRadius: '50%', height: '20rem', marginLeft: '5rem' }}
            />
          </Grid>
        </Grid>

        <Grid container
          justify='center'
          alignItems='center'
          style={{ height: '50vh' }}>
          <Grid item>
            <img src={tools} alt='tools'
              style={{ height: '20rem', marginRight: '5rem' }}
            />
          </Grid>
          <Grid item>
            <Typography variant='h2'>
              My toolpack includes: <br /> HTML, CSS, JavaScript... <br />
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
          style={{ height: '50vh' }}>
          <Grid item>
            <Typography variant='h2'>
              Check out my work<br />
              <Button variant="contained" color="secondary"
                component={Link} to="/projects">
                Projects
              </Button>
            </Typography>
          </Grid>
          <Grid item>
            <img src={projects} alt='Projects'
              style={{ height: '20rem', marginLeft: '5rem' }}
            />
          </Grid>
        </Grid>

        <Grid container
          justify='center'
          alignItems='center'
          style={{ height: '50vh' }}>
          <Grid item>
            <img src={contact} alt='Contact'
              style={{ height: '20rem', marginRight: '5rem' }}
            />
          </Grid>
          <Grid item>
            <Typography variant='h2'>
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
