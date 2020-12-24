import React from "react"
import { Button, Grid, makeStyles, Typography } from "@material-ui/core";

import hero from '../assets/Hero.png'

const useStyles = makeStyles((theme) => ({
  divImage: {
    width: "100%",
  },
  hello: {
    // zIndex: 100,
    position: "relative",
    top: '-20rem',
    left: '5rem'
  }
}))

const Home = (props) => {
  const classes = useStyles();

  return (
    <div style={{ overflowX: 'hidden' }}>
      <img src={hero} alt='Hero img' className={classes.divImage} />

      <Grid container className={classes.hello} direction='column'>
        <Grid item>
          <Typography variant='h2' color='secondary'>
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

    </div>
  )
};

export default Home;
