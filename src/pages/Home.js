import React from "react"
import { Button, Grid, makeStyles, Typography } from "@material-ui/core";

import hero from '../assets/Hero.png'

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
    backgroundImage: 'linear-gradient(black, white)',
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
        <Grid item>
          <Typography variant='h3'>
            About:
          <br />
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
          Test
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
