import React from "react"
import { Grid, makeStyles, Typography, Card, CardActionArea, CardContent, CardMedia, CardActions, Button } from "@material-ui/core";

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
    image: MachliFitness, name: 'Machli Fitness',
    text: 'textfield',
    tools: [tools.Node, tools.GitHub, tools.Heroku, tools.MaterialUI, tools.react, tools.Express, tools.MySQL, tools.Sequelize],
    other: ['axios', 'moment', 'socket.io', 'bcryptjs', 'passport'],
    github: 'link',
    app: 'applink'
  },
  {
    image: BudgetTracker, name: 'Budget Tracker',
    text: 'textfield',
    tools: [tools.Node, tools.GitHub, tools.Heroku, tools.Bootstrap, tools.Express, tools.MySQL, tools.Sequelize],
    other: ['bcryptjs', 'chart.js'],
    github: 'link',
    app: 'applink'
  },
  {
    image: EmployeeDirectory, name: 'Employee Directory',
    text: 'textfield',
    tools: [tools.Node, tools.GitHub, tools.Heroku, tools.Bootstrap, tools.react],
    other: ['axios', 'RandomUser API'],
    github: 'link',
    app: 'applink'
  },
  {
    image: TheLibrary, name: 'The Library',
    text: 'textfield',
    tools: [tools.Node, tools.GitHub, tools.Heroku, tools.Bootstrap, tools.react, tools.Express, tools.MongoDB, tools.Mongoose],
    other: ['axios', 'Google Books API'],
    github: 'link',
    app: 'applink'
  },
  {
    image: WorkoutTracker, name: 'Workout Tracker',
    text: 'textfield',
    tools: [tools.Node, tools.GitHub, tools.Heroku, tools.Express, tools.MongoDB, tools.Mongoose],
    other: ['N/A'],
    github: 'link',
    app: 'applink'
  },
  {
    image: WeatherDashboard, name: 'Weather Dashboard',
    text: 'textfield',
    tools: [tools.GitHub, tools.Bootstrap, tools.jQuery],
    other: ['OpenWeatherMap API'],
    github: 'link',
    app: 'applink'
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
    height: '50',
  },
  images: {
    height: '100%',
    marginRight: '.2rem'
  },
  imageItem: {
    height: '2rem'
  }

}))

const Skills = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>

      <Grid container justify='center' alignItems='center' className={classes.header}>
        <Typography variant='h1' className={classes.headerText}>
          Projects
      </Typography>
      </Grid>

      <Grid container className={classes.main} justify='center' >

        {projects.map(project => {
          return (
            <Grid container style={{ width: '33%', padding: '2rem' }}>

              <Card className={classes.card}>

                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt={project.name}
                    height="100%"
                    image={project.image}
                  />
                </CardActionArea>

                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" style={{ textAlign: 'center' }}>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {project.text}
                  </Typography>

                  <Grid container>
                    <Grid item>
                      <Typography variant='subtitle2'>
                        <br />Tools:
                      </Typography>
                    </Grid>
                    <Grid container>
                      {project.tools.map(tools => {
                        return (
                          <Grid item className={classes.imageItem}>
                            <img src={tools.image} alt={tools.caption} className={classes.images} />
                          </Grid>
                        )
                      })}
                    </Grid>
                  </Grid>

                  <Grid container>
                    <Grid item>
                      <Typography gutterBottom variant="subtitle2">
                        <br />Other:
                    </Typography>
                    </Grid>
                    <Grid container>
                      {project.other.map(other => {
                        return (
                          <>
                            <Typography variant='subtitle2'>
                              {other}, &nbsp;
                            </Typography>
                          </>
                        )
                      })}
                    </Grid>
                  </Grid>

                </CardContent>
                <CardActions>
                  <Grid container alignItems='flex-end'>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                    <Button size="small" color="primary">
                      Learn More
                    </Button>
                  </Grid>
                </CardActions>
              </Card>
            </Grid>
          )
        })}


      </Grid>

    </React.Fragment>
  )
};

export default Skills;
