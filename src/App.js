import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from "./components/Theme";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from "./components/ScrollToTop";

import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <ScrollToTop />
          <Switch>
            <Navbar>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/skills' component={Skills} />
              <Route exact path='/projects' component={Projects} />
              <Route exact path='/contact' component={Contact} />
              <Footer />
            </Navbar>
          </Switch>
        </BrowserRouter >
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
