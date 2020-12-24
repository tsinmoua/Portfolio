import React from "react"
import { Grid, makeStyles, Typography } from "@material-ui/core";
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundImage: 'linear-gradient(#004080, black)',
    height: '10rem',
    width: '100%',
    position: 'absolute',
    bottom: 0
  },
  footerLinks: {
    textDecoration: 'none',
    color: 'white'
  }
}))

const Footer = (props) => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container justify='center' alignItems='center' spacing={2}>
        <Grid item>
          <Typography variant='subtitle2' component={Link} to='/' className={classes.footerLinks}>Home</Typography>
        </Grid>
        <Grid item>
          <Typography variant='subtitle2' component={Link} to='/about' className={classes.footerLinks}>About</Typography>
        </Grid>
        <Grid item>
          <Typography variant='subtitle2' component={Link} to='/skills' className={classes.footerLinks}>Skills</Typography>
        </Grid>
        <Grid item>
          <Typography variant='subtitle2' component={Link} to='/projects' className={classes.footerLinks}>Projects</Typography>
        </Grid>
        <Grid item>
          <Typography variant='subtitle2' component={Link} to='/contact' className={classes.footerLinks}>Contact</Typography>
        </Grid>
      </Grid>
    </footer>
  )
};

export default Footer;
