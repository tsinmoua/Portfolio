import React from "react"
import { Grid, makeStyles, Typography } from "@material-ui/core";

import HTML from "../assets/HTML.png";
import Bootstrap from "../assets/Bootstrap.png";
import CSS from "../assets/CSS.png";
import ESLint from "../assets/ESLint.png";
import Express from "../assets/Express.png";
import GitHub from "../assets/GitHub.png";
import Handlebars from "../assets/Handlebars.png";
import Heroku from "../assets/Heroku.png";
import JavaScript from "../assets/JavaScript.png";
import Jest from "../assets/Jest.png";
import jQuery from "../assets/jQuery.png";
import MaterialUI from "../assets/MaterialUI.png";
import MongoDB from "../assets/MongoDB.png";
import Mongoose from "../assets/Mongoose.png";
import MySQL from "../assets/MySQL.png";
import Node from "../assets/Node.png";
import NoSQL from "../assets/NoSQL.png";
import react from "../assets/React.png";
import Sequelize from "../assets/Sequelize.png";
import SQL from "../assets/SQL.png";
import Webpack from "../assets/Webpack.png";

const images = [
  { image: HTML, caption: 'HTML' },
  { image: CSS, caption: 'CSS' },
  { image: JavaScript, caption: 'JavaScript' },
  { image: jQuery, caption: 'jQuery' },
  { image: Node, caption: 'Node' },
  { image: Express, caption: 'Express' },
  { image: react, caption: 'React' },
  { image: NoSQL, caption: 'NoSQL' },
  { image: MongoDB, caption: 'MongoDB' },
  { image: Mongoose, caption: 'Mongoose' },
  { image: SQL, caption: 'SQL' },
  { image: MySQL, caption: 'MySQL' },
  { image: Sequelize, caption: 'Sequelize' },
  { image: Bootstrap, caption: 'Boostrap' },
  { image: MaterialUI, caption: 'MaterialUI' },
  { image: Handlebars, caption: 'Handlebars' },
  { image: GitHub, caption: 'GitHub' },
  { image: Heroku, caption: 'Heroku' },
  { image: ESLint, caption: 'ESLint' },
  { image: Jest, caption: 'Jest' },
  { image: Webpack, caption: 'Webpack' }
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
  infoText: {
    fontSize: '1.5rem',
    [theme.breakpoints.down("md")]: {
      fontSize: '1rem'
    },
  },
  padding: {
    padding: '6rem',
    [theme.breakpoints.down("xs")]: {
      padding: '2rem',
    },
  },
  imagesContainer: {
    padding: '1rem',
    width: '15%',
    [theme.breakpoints.down("md")]: {
      width: '20%',
    },
    [theme.breakpoints.down("sm")]: {
      width: '33%',
    },
    [theme.breakpoints.down("350")]: {
      width: '50%',
    },
  },
  images: {
    height: '6rem',
    [theme.breakpoints.down("xs")]: {
      height: '3rem',
    },
  }
}))

const Skills = () => {
  const classes = useStyles();

  return (
    <React.Fragment>

      <Grid container justify='center' alignItems='center' className={classes.header}>
        <Typography variant='h1' className={classes.headerText}>
          Technical Skills
      </Typography>
      </Grid>

      <Grid container className={classes.main} justify='center' >

        <Grid item className={classes.padding}>
          <Typography variant='h4' className={classes.infoText}>
            <span style={{ fontWeight: 'bold' }}>What do I use?</span><br /><br />
              There are a variety of tools at my disposal to use.
              Currently I am using the MERN Stack (MongoDB, Express, React, Node).
              However it is not limited to that. Below are some of the other tools used:
            </Typography>
        </Grid>

        <Grid container justify='center' alignItems='center' style={{ marginBottom: '10vh' }}>
          {images.map((image, index) => {
            return (
              <Grid container key={index} direction='column' justify='center' alignItems='center' className={classes.imagesContainer}>
                <img src={image.image} alt={image.caption} className={classes.images} />
                <Typography variant='subtitle2'>
                  {image.caption}
                </Typography>
              </Grid>
            )
          })}
        </Grid>
      </Grid>

    </React.Fragment>
  )
};

export default Skills;
