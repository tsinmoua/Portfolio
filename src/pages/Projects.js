import React, { useState } from "react"
import {
  Grid,
  makeStyles, Typography,
  Card, CardActionArea, CardMedia,
  Button, useTheme, useMediaQuery,
  Dialog, DialogContent, DialogContentText, DialogActions,
} from "@material-ui/core";
import ClearIcon from '@material-ui/icons/Clear';

import MachliFitness from '../assets/MachliFitness.png'
import BudgetTracker from '../assets/BudgetTracker.png'
import EmployeeDirectory from '../assets/EmployeeDirectory.png'
import TheLibrary from '../assets/TheLibrary.png'
import WeatherDashboard from '../assets/WeatherDashboard.png'
import WorkoutTracker from '../assets/WorkoutTracker.png'

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
import repo from "../assets/github_link.png";
import external from "../assets/external.png";

const tools = {
  HTML: { image: HTML, caption: 'HTML' },
  CSS: { image: CSS, caption: 'CSS' },
  JavaScript: { image: JavaScript, caption: 'JavaScript' },
  jQuery: { image: jQuery, caption: 'jQuery' },
  Node: { image: Node, caption: 'Node' },
  Express: { image: Express, caption: 'Express' },
  react: { image: react, caption: 'React' },
  NoSQL: { image: NoSQL, caption: 'NoSQL' },
  MongoDB: { image: MongoDB, caption: 'MongoDB' },
  Mongoose: { image: Mongoose, caption: 'Mongoose' },
  SQL: { image: SQL, caption: 'SQL' },
  MySQL: { image: MySQL, caption: 'MySQL' },
  Sequelize: { image: Sequelize, caption: 'Sequelize' },
  Bootstrap: { image: Bootstrap, caption: 'Boostrap' },
  MaterialUI: { image: MaterialUI, caption: 'MaterialUI' },
  Handlebars: { image: Handlebars, caption: 'Handlebars' },
  GitHub: { image: GitHub, caption: 'GitHub' },
  Heroku: { image: Heroku, caption: 'Heroku' },
  ESLint: { image: ESLint, caption: 'ESLint' },
  Jest: { image: Jest, caption: 'Jest' },
  Webpack: { image: Webpack, caption: 'Webpack' }
}


const projects = [
  {
    image: MachliFitness, name: 'Machli Fitness', id: 'MachliFitness',
    text: 'A platform for personal trainers to connect to their clients',
    tools: [tools.Node, tools.GitHub, tools.Heroku, tools.MaterialUI, tools.react, tools.Express, tools.MySQL, tools.Sequelize],
    other: ['axios,', 'moment,', 'socket.io,', 'bcryptjs,', 'passport'],
    github: 'https://github.com/TotalAce/machliFitness',
    app: 'https://machli-fitness.herokuapp.com/',
  },
  {
    image: BudgetTracker, name: 'Budget Tracker', id: 'BudgetTracker',
    text: 'Keep track of your budget/income/expenses',
    tools: [tools.Node, tools.GitHub, tools.Heroku, tools.Bootstrap, tools.Express, tools.MySQL, tools.Sequelize],
    other: ['bcryptjs,', 'chart.js'],
    github: 'https://github.com/ShueMoua/Budget_Tracker',
    app: 'https://budget-hero.herokuapp.com/',
  },
  {
    image: EmployeeDirectory, name: 'Employee Directory', id: 'EmployeeDirectory',
    text: 'Sort and search for an employee to see their info',
    tools: [tools.Node, tools.GitHub, tools.Heroku, tools.Bootstrap, tools.react],
    other: ['axios,', 'RandomUser API'],
    github: 'https://github.com/tsinmoua/Employee-Directory',
    app: 'https://desolate-ocean-52390.herokuapp.com/',
  },
  {
    image: TheLibrary, name: 'The Library', id: 'TheLibrary',
    text: 'Search/Save books of interest and get more information about them',
    tools: [tools.Node, tools.GitHub, tools.Heroku, tools.Bootstrap, tools.react, tools.Express, tools.MongoDB, tools.Mongoose],
    other: ['axios,', 'Google Books API'],
    github: 'https://github.com/tsinmoua/The-Library',
    app: 'https://nist-library.herokuapp.com/',
  },
  {
    image: WorkoutTracker, name: 'Workout Tracker', id: 'WorkoutTracker',
    text: 'Keep track of your workouts and see their stats',
    tools: [tools.Node, tools.GitHub, tools.Heroku, tools.Express, tools.MongoDB, tools.Mongoose],
    other: ['N/A'],
    github: 'https://github.com/tsinmoua/Workout-Tracker',
    app: 'https://shrouded-temple-07479.herokuapp.com/',
  },
  {
    image: WeatherDashboard, name: 'Weather Dashboard', id: 'WeatherDashboard',
    text: 'See the current and forecasted weather for the chosen location',
    tools: [tools.GitHub, tools.Bootstrap, tools.jQuery],
    other: ['OpenWeatherMap API'],
    github: 'https://github.com/tsinmoua/Weather-Dashboard',
    app: 'https://tsinmoua.github.io/Weather-Dashboard/',
  },
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
  card: {
    maxWidth: '100%',
    padding: '.5rem',
  },
  images: {
    height: '100%',
    marginRight: '.2rem'
  },
  imageItem: {
    height: '2rem'
  },
  buttons: {
    height: '2rem',
    width: '2rem',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  projectContainer: {
    width: '45%',
    padding: '.5rem',
    margin: '.5rem',
    [theme.breakpoints.down("760")]: {
      width: '90%',
      margin: 0
    },
  },
  dialog: {
    padding: 0,
  },
  imageText: {
    textAlign: 'center',
    padding: '3rem',
    fontWeight: 'bold',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: 'rgba(0, 64, 128, 0.8)',
    color: '#FFC04A',
    opacity: 0,
    transition: 'opacity .5s, visibility .5s',
    '&:hover': {
      // visibility: 'visible',
      opacity: 1,
    }
  },
  // cardAction: {
  //   '&:hover': {
  //     visibility: 'visible',
  //     opacity: 1,
  //   }
  // }

}))

const Skills = (props) => {
  const classes = useStyles();

  const [value, setValue] = useState()

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));

  const handleClickOpen = (e) => {
    setValue(parseInt(e.currentTarget.value))
  };

  const handleClose = () => {
    setValue()
  };

  return (
    <React.Fragment>

      <Grid container justify='center' alignItems='center' className={classes.header}>
        <Typography variant='h1' className={classes.headerText}>
          Projects
      </Typography>
      </Grid>

      <Grid container className={classes.main} justify='center' >

        {projects.map((project, index) => {
          return (
            <Grid container key={index} className={classes.projectContainer}>
              <Card className={classes.card} >
                <CardActionArea onClick={handleClickOpen} value={index} className={classes.cardAction}>
                  <CardMedia
                    component="img"
                    alt={project.name}
                    height="100%"
                    image={project.image}
                  />
                  <Typography variant='h1' className={classes.imageText}>
                    Click me to learn more
                  </Typography>
                </CardActionArea>
              </Card>

              <Dialog
                fullScreen={fullScreen}
                maxWidth='md'
                open={value === index}
                onClose={handleClose}
              >
                <DialogContent className={classes.dialog}>

                  <Grid container justify='flex-end'>
                    <Button style={{ padding: 0, display: 'block' }}>
                      <ClearIcon onClick={handleClose} />
                    </Button>
                  </Grid>

                  <img src={project.image} alt={project.name} style={{ width: '100%' }} />

                  <Typography variant="h5" style={{ textAlign: 'center' }}>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" style={{ textAlign: 'center', paddingBottom: '.5rem' }}>
                    {project.text}
                  </Typography>

                  <Grid container>
                    <Grid container justify='center'>
                      <Typography variant='subtitle2' >
                        Powered by:
                        </Typography>
                    </Grid>
                    <Grid container justify='center'>
                      {project.tools.map((tools, index) => {
                        return (
                          <Grid item key={index} className={classes.imageItem}>
                            <img src={tools.image} alt={tools.caption} className={classes.images} />
                          </Grid>
                        )
                      })}
                    </Grid>
                  </Grid>

                  <Grid container justify='center' style={{ paddingTop: '.5rem' }}>
                    <Typography variant='subtitle2' >
                      Other: &nbsp;
                        </Typography>
                    {project.other.map((other, index) => {
                      return (
                        <>
                          <Typography key={index} variant='subtitle2' style={{ marginRight: '.2rem' }}>
                            {other}
                          </Typography>
                        </>
                      )
                    })}
                  </Grid>


                  <DialogActions>
                    <Grid container justify='center' >
                      <Button color="primary" variant='contained'
                        style={{ marginRight: '.5rem', height: '32px' }} >
                        <a href={project.github} target='_blank' rel='noreferrer' style={{ height: '32px' }}>
                          <img src={repo} alt='Github' className={classes.buttons} />
                        </a>
                      </Button>
                      <Button color="primary" variant='contained' style={{ height: '32px', padding: 0 }}>
                        <a href={project.app} target='_blank' rel='noreferrer' style={{ height: '32px' }}>
                          <img src={external} alt='Application' className={classes.buttons} />
                        </a>
                      </Button>
                    </Grid>
                  </DialogActions>

                </DialogContent>
              </Dialog>

            </Grid>
          )
        })}


      </Grid>

    </React.Fragment>
  )
};

export default Skills;
