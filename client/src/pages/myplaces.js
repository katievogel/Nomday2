import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import "./style.css";
import axios from "axios";
import { NavHeader } from "../components/Navigation";

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
                <NavHeader />
                <div className="myPlacesContainer">
                    <div className="entriesContainer">
                        <form className="form-group" action="/visitentry" method="POST">
                            <input
                                className="form-control"
                                type="date"
                                placeholder="Visit Date"
                                name="visit_date"
                            //value={this.state.visit_date}
                            //onChange={this.ratingsInput}
                            />
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Restaurant Name"
                                name="place_name"
                            //value={this.state.place_name}
                            //onChange={this.ratingsInput}
                            />
                            <input
                                className="form-control"
                                type="text"
                                placeholder="What did you eat?"
                                name="fave_item"
                            //value={this.state.fave_item}
                            //onChange={this.ratingsInput}
                            />
                            <input
                                className="form-control"
                                type="text"
                                placeholder="How would rank this place?"
                                name="place_rank"
                            //value={this.state.place_rank}
                            //onChange={this.ratingsInput}
                            />
                            <textarea //value={this.state.value} onChange={this.handleChange}//
                                className="form-control"
                                type="text"
                                placeholder="Additional Comments"
                                name="comments"
                            />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}


export default MyPlaces;