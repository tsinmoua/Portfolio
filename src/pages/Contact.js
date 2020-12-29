import React from "react"
import { Grid, makeStyles, Typography, Button } from "@material-ui/core";

import email from '../assets/email.png'
import github from '../assets/github_link.png'
import linkedin from '../assets/linkedin.png'
import resume from '../assets/resume.png'
import phone from '../assets/phone.png'

const images = [
  { image: resume, text: 'Resume' },
  { image: email, text: 'tsinmoua@gmail.com' },
  { image: phone, text: '(651)214-1980' },
  { image: github, text: 'GitHub Account' },
  { image: linkedin, text: 'LinkedIn Account' },
]

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
    padding: '6rem',
    [theme.breakpoints.down("xs")]: {
      padding: '2rem',
    },
  },
  buttons: {
    height: '4rem'
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

        <Grid item className={classes.padding}>
          <Typography variant='h4' className={classes.infoText}>
            <span style={{ fontWeight: 'bold' }}>Lets Connect!</span><br /><br />
          </Typography>
        </Grid>

        <Grid container justify='center' alignItems='center'>
          {images.map(icon => {
            return (
              <Grid item style={{ width: '100%', textAlign: 'center' }}>
                <Button color='primary'>
                  <img src={icon.image} alt={icon.text} className={classes.buttons} />
                </Button>
                <Typography variant='h4' className={classes.infoText}>
                  {icon.text}
                </Typography>
              </Grid>
            )
          })}

        </Grid>

      </Grid>

    </React.Fragment>
  )
};

export default Contact;
