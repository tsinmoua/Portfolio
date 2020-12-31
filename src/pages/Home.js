import React, { useState } from "react"
import { Button, Grid, makeStyles, Typography, } from "@material-ui/core";
import { Link } from 'react-router-dom'
import Flash from 'react-reveal/Flash';

import about from '../assets/About.png'
import tools from '../assets/Tools.png'
import projects from '../assets/Projects.png'
import contact from '../assets/contact.png'

const useStyles = makeStyles((theme) => ({

  helloContainer: {
    backgroundImage: 'linear-gradient(#004080, black)',
    height: '90vh',
  },
  hello: {
    fontSize: '250%',
    // [theme.breakpoints.down("md")]: {
    //   fontSize: '300%'
    // },
    // [theme.breakpoints.down("sm")]: {
    //   fontSize: '14rem'
    // },
    // [theme.breakpoints.down("xs")]: {
    //   fontSize: '6rem'
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
      fontSize: '4rem'
    },
    [theme.breakpoints.down("500")]: {
      fontSize: '3rem'
    },
    [theme.breakpoints.down("375")]: {
      fontSize: '2.5rem'
    },
  },
  info: {
    color: theme.palette.primary.main,
  },
  images: {
    height: '20rem',
    margin: '5rem',
    [theme.breakpoints.down("md")]: {
      height: '10rem',
      margin: '1rem',
    },
    // [theme.breakpoints.down("700")]: {
    //   height: '13rem',
    //   margin: '3rem',
    // },
    [theme.breakpoints.down("500")]: {
      height: '15rem',
      margin: '.5rem',
      display: 'block'
    }
  },
  infoText: {
    fontSize: '2.5rem',
    [theme.breakpoints.down("sm")]: {
      fontSize: '2rem'
    },
    [theme.breakpoints.down("500")]: {
      padding: '0 2rem 0 2rem',
      fontSize: '1.5rem',
      textAlign: 'center'
    },
  },
  sections: {
    height: '50vh',
    [theme.breakpoints.down("520")]: {
      height: '70vh',
    },
  },
}))

const Home = (props) => {
  const classes = useStyles();
  const [counter, setCounter] = useState(0)

  setTimeout(() => { setCounter(counter + 1) }, 4000)

  return (
    <Grid container>

      <Grid container justify='center' alignItems='center' className={classes.helloContainer} >
        <Flash spy={counter}>
          <Typography variant='h1' className={classes.helloText}>
            <span className={classes.hello}>Hello,</span><br />
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
            <Typography variant='h4' className={classes.infoText}>
            <span style={{ fontWeight: "bold" }}>I am a...</span><br/><br/>
              Software Engineer. <br />Husband.<br />
              Father.<br /> Fitness Enthusiast.<br />
              <Button variant="contained" color="primary"
                component={Link} to="/about" style={{ color: '#FFC04A' }}>
                Learn more
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
            <Typography variant='h4' className={classes.infoText}>
              <span style={{ fontWeight: "bold" }}>Toolpack</span>
              <br /><br />
              HTML, CSS, JavaScript<br />
              MySQL, MongoDB<br />
              and so much more!<br />
              <Button variant="contained" color="primary"
                component={Link} to="/skills" style={{ color: '#FFC04A' }}>
                Learn more
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
            <Typography variant='h4' className={classes.infoText}>
              <span style={{ fontWeight: "bold" }}>My work</span>
              <br /><br />
              Works from collaboration.<br />
              Works from myself.<br />
              <Button variant="contained" color="primary"
                component={Link} to="/projects" style={{ color: '#FFC04A' }}>
                Learn more
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
            <Typography variant='h4' className={classes.infoText}>
              <span style={{ fontWeight: "bold" }}>Get in touch</span>
              <br /><br />
              Email me.<br />
              Connect with me.<br />
              <Button variant="contained" color="primary"
                component={Link} to="/contact" style={{ color: '#FFC04A' }}>
                Learn more
              </Button>
            </Typography>
          </Grid>
        </Grid>

      </Grid>
    </Grid>
  )
};

export default Home;
