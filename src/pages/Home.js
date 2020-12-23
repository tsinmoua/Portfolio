import React from "react"
import { Grid, makeStyles, Typography } from "@material-ui/core";

import Hero from '../assets/Hero.png'

const useStyles = makeStyles((theme) => ({
  divImage: {
    backgroundImage: `url(${Hero})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%"
  }
}))

const Home = (props) => {
  const classes = useStyles();

  return (
    <div>
      {/* <Grid container style={{ backgroundColor: "navy" }}> */}
      <Grid container>
        <Grid item>
          <div className={classes.divImage} />
        </Grid>
        <Grid item>
          <Typography variant='h1'>
            Hello,
            <br />
            My name is Tsin Moua
        </Typography>
        </Grid>
      </Grid>


    </div>
  )
};

export default Home;
