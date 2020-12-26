import React from "react"
import { Button, Grid, makeStyles, Typography } from "@material-ui/core";

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

        <Grid container>
          <Grid item>
            <Typography variant='h3'>
              Full Stack Engineer
          <br />
          Father/Husband
          <br />
              <Button>
                Learn more...
            </Button>
            </Typography>
          </Grid>
          <Grid item>
            <img src={about} alt='profile' />
          </Grid>
        </Grid>

        <Grid container justify='flex-end'>
          <Grid item>
            <img src={tools} alt='tools' />
          </Grid>
          <Grid item>
            <Typography variant='h3'>
              Languages. Servers. Tools.
              <br />
              <Button>
                Learn more...
              </Button>
            </Typography>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item>
            <Typography variant='h3'>
              Projects. My work
            <br />
              <Button>
                Check out my work
            </Button>
            </Typography>
          </Grid>
          <Grid item>
            <img src={projects} alt='Projects' />
          </Grid>
        </Grid>

        <Grid container justify='flex-end'>
          <Grid item>
            <img src={contact} alt='Contact' />
          </Grid>
          <Grid item>
            <Typography variant='h3'>
              Contact Information
              <br />
              <Button>
                Contact
              </Button>
            </Typography>
          </Grid>
        </Grid>

      </Grid>
    </Grid>
    // <Grid container direction='column'>
    //   <Grid item>
    //     <Typography variant='h2' color='secondary' className={classes.helloText}>
    //       Hello,
    //        <br />
    //        My name is Tsin Moua
    //      </Typography>
    //   </Grid>
    //   <Grid item>
    //     <Button>
    //       Learn more
    //      </Button>
    //   </Grid>
    // </Grid>
  )
};

export default Home;
