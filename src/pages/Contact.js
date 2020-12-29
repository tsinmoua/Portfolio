import React from "react"
import { Grid, makeStyles, Typography, Button } from "@material-ui/core";

import email from '../assets/email.png'
import github from '../assets/github_link.png'
import linkedin from '../assets/linkedin.png'
import resume from '../assets/resume.png'
import TsinMouaResume from '../assets/TsinMouaResume.pdf'

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
  main: {
    color: theme.palette.primary.main,
  },
  padding: {
    padding: '3rem',
    [theme.breakpoints.down("xs")]: {
      padding: '1rem',
    },
  },
  buttons: {
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'transparent'
    },
  },
  buttonImages: {
    height: '4rem'
  },
  infoText: {
    fontSize: '2rem',
    [theme.breakpoints.down("925")]: {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.down("718")]: {
      fontSize: '1.25rem',
    },
    [theme.breakpoints.down("550")]: {
      fontSize: '1rem',
    },
  }
}))

const Contact = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container justify='center' alignItems='center' className={classes.header}>
        <Typography variant='h1' className={classes.headerText}>
          Contact Me
      </Typography>
      </Grid>

      <Grid container className={classes.main} justify='center' >

        <Grid container direction='column' justify='center' alignItems='center'
          className={classes.padding} style={{ textAlign: 'center' }}
        >
          <Grid item>
            <Typography variant='h4' className={classes.infoText}>
              <span style={{ fontWeight: 'bold' }}>Want to contact me?</span><br />
              Easiest way to get reach of me is through email.
            </Typography>
          </Grid>
          <Grid container justify='center' alignItems='center' style={{paddingTop: '1rem'}}>
            <Button color='primary'
              href="mailto:tsinmoua@gmail.com"
              className={classes.buttons}
              disableRipple>
              <img src={email} alt='email' className={classes.buttonImages} />
            </Button>
            <Typography variant='h5' className={classes.infoText}>
              tsinmoua@gmail.com
            </Typography>
          </Grid>
        </Grid>

        <Grid container direction='column' justify='center' alignItems='center'
          className={classes.padding} style={{ textAlign: 'center' }}
        >
          <Grid item>
            <Typography variant='h4' className={classes.infoText}>
              <span style={{ fontWeight: 'bold' }}>Job Opportunity?</span><br />
              Check out my resume!
            </Typography>
          </Grid>
          <Grid container justify='center' alignItems='center' style={{paddingTop: '1rem'}}>
            <Button color='primary'
              href={TsinMouaResume} target='_blank'
              className={classes.buttons}
            >
              <img src={resume} alt='resume' className={classes.buttonImages} />
            </Button>
            <Typography variant='h5' className={classes.infoText}>
              My Resume
            </Typography>
          </Grid>
        </Grid>

        <Grid container direction='column' justify='center' alignItems='center'
          className={classes.padding} style={{ textAlign: 'center' }}
        >
          <Grid item>
            <Typography variant='h4' className={classes.infoText}>
              <span style={{ fontWeight: 'bold' }}>Lets Connect!</span><br />
              Follow me on LinkedIn and GitHub to see what I am up to!
            </Typography>
          </Grid>
          <Grid container justify='center' alignItems='center' style={{paddingTop: '1rem'}}>
            <Button
              href='https://www.linkedin.com/in/tsinmoua/' target='_blank'
              className={classes.buttons}
            >
              <img src={linkedin} alt='linkedin' className={classes.buttonImages} />
            </Button>
            <Typography variant='h5' className={classes.infoText}>
              linkedin.com/in/tsinmoua
            </Typography>
          </Grid>
          <Grid container justify='center' alignItems='center'>
            <Button
              href='https://github.com/tsinmoua' target='_blank'
              className={classes.buttons}
            >
              <img src={github} alt='github' className={classes.buttonImages} />
            </Button>
            <Typography variant='h5' className={classes.infoText}>
              github.com/tsinmoua
            </Typography>
          </Grid>
        </Grid>

      </Grid>
    </React.Fragment >
  )
};

export default Contact;
