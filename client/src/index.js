import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom"
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css' 
var stuff = require("history").createBrowserHistory;

const history = stuff()

ReactDOM.render(
    <Router history={history}> 
    <App />
    </Router>, document.getElementById("root"));
