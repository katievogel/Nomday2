import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import CreateAccount from './pages/createAcc';
import LogIn from './pages/login';
import Welcome from './pages/welcome';
import MyPlaces from './pages/myplaces';
import MainPlaces from './pages/mainplaces';
import Search from './pages/search';


function App() {
  return (
    <Router>
      <span className="">
        <Switch>
          <Route exact path="/" component={ Welcome }/>
          <Route exact path="/login/" component={ LogIn }/>
          <Route exact path="/createaccount/" component={ CreateAccount }/>
          <Route exact path="/mainplaces/" component={ MainPlaces }/>
          <Route exact path="/myplaces/" component={ MyPlaces }/>
          <Route exact path="/search/" component={ Search }/>
        </Switch>
      </span>
    </Router>
  );
}

export default App;
