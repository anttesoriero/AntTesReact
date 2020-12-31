import React from 'react';
import { Button, Container } from 'reactstrap';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import LandingPage from './Pages/LandingPage';
import ErrorPage from './Pages/ErrorPage'
import CovidVaccine from './Pages/CovidVaccine'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" render={(props) => <LandingPage />} />
        <Route exact={true} path="/error" render={(props) => <ErrorPage />} />
        <Route exact={true} path="/covid" render={(props) => <CovidVaccine />} />
        {/* 
          <Route exact={true} path="/survey" render={(props) => <SurveyPage />} />
          <Route exact={true} path="/tasks" render={(props) => <TaskPage />} />
          <Route exact={true} path="/profile" render={(props) => <ProfilePage />} />
          <Route exact={true} path="/error" render={(props) => <ErrorPage />} />
          <Route exact={true} path="/list" render={(props) => <ListingPage />} />
          <Route exact={true} path="/edit-profile" render={(props) => <EditPage />} />
          <Route exact={true} path="/shop" render={(props) => < Shop {...props}/>}/>
          <Route exact={true} path="/signin" render={(props) => < Signin {...props}/>}/>
          <Route exact={true} path="/register" render={(props) => < Register {...props}/>}/>
          <Route exact={true} path="/contact" render={(props) => < ContactPage {...props}/>}/> */}
        <Redirect to="/error" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
