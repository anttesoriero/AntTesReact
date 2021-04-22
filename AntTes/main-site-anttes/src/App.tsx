import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import LandingPage from './Pages/LandingPage';
import ErrorPage from './Pages/ErrorPage';
import Splash from './Pages/Splash';
import Contact from './Pages/Contact';
import Oddjobs from './Redirect/Oddjobs';
import Mitigations from './Redirect/Mitigations';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" render={(props) => <LandingPage />} />
        <Route exact={true} path="/error" render={(props) => <ErrorPage />} />
        <Route exact={true} path="/splash" render={(props) => <Splash />} />
        <Route exact={true} path="/contact" render={(props) => <Contact />} />
        <Route exact={true} path="/oddjobs" render={(props) => <Oddjobs />} />
        <Route exact={true} path="/mitigations" render={(props) => <Mitigations />} />
        <Redirect to="/error" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
