import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import "./style.css";
import axios from "axios";
import { NavHeader } from "../components/Navigation";

//header
//links- Main/Home, My Places, Search, Sign Out
//
//Google Maps API?

class Search extends Component {

    render() {
        return (
            <div className="searchPage">
               <NavHeader />
               <h3>Search</h3>
                <div className="searchContainer">
                    <div>Placeholder for 'Search' Page</div>
                </div>
            </div>
        );
    }
}


export default Search;