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
  helloText: {
    [theme.breakpoints.down("md")]: {
      fontSize: '3rem'
    },
    // [theme.breakpoints.down("sm")]: {
    //   fontSize: '3rem'
    // }
  }
}))

const Home = (props) => {
  const classes = useStyles();

  return (
    <Grid container direction='column'>
      <Grid item>
        <Typography variant='h2' color='secondary' className={classes.helloText}>
          Hello,
           <br />
           My name is Tsin Moua
         </Typography>
      </Grid>
      <Grid item>
        <Button>
          Learn more
         </Button>
      </Grid>
    </Grid>
  )
};

export default Home;
