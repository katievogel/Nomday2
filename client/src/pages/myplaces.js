import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import "./style.css";
import axios from "axios";

//header
//links- Main/Home, My Places, Search, Sign Out
//
//Body
//Favorite Place
//Last Visited Place
//Most Visited Place
//All Entries
//Google API?
//
//Enter a new place, Save

class MyPlaces extends Component {

    render() {
        return (
            <div className="myPlacesPage">
                <div className="myPlacesContainer">
                    <div>Placeholder for 'My Places' Page</div>
                </div>
            </div>
        );
    }
}


export default MyPlaces;