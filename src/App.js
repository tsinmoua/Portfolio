import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from "./components/Theme";

import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <Switch>
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/skills' component={Skills} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
