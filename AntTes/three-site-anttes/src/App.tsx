import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import LandingPage from './Pages/LandingPage';
import ErrorPage from './Pages/ErrorPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" render={(props) => <LandingPage />} />
        <Route exact={true} path="/error" render={(props) => <ErrorPage />} />
        
        <Redirect to="/error" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
