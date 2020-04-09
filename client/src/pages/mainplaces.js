import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import "./style.css";
import axios from "axios";
import { NavHeader } from "../components/Navigation";

//header
//links- Main/Home, My Places, Search, Sign Out
//
//
//Body
//Most Visited
//List Visited
//Highest Rank
//Select a Random Place
//
//
//Add in giphy API for keyword "food" or "lunch"

class MainPlaces extends Component {

    render() {
        return (
            <div className="mainPlacesPage">
            <NavHeader />
                <div className="mainPlacesContainer">
                    <div>Placeholder for 'Main Places' Page</div>
                </div>
            </div>
        );
    }
}


export default MainPlaces;