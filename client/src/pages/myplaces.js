import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import "./style.css";
import axios from "axios";
axios.defaults.withCredentials = true;
import { NavHeader } from "../components/Navigation";
import moment from 'moment';

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
    state = {
        visit_date: "",
        place_name: "",
        place_website: "",
        fave_item: "",
        place_rank: "",
        comments: "",
    }

    isValid = () => {
        return (this.state.place_rank !== "" && this.state.visit_date !== "" && this.state.place_name !== "");
    }

    infoInput = (event) => {
        var { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    infoSubmit = (event) => {
        event.preventDefault();
        axios.post("/addlunchvisit", {
            visit_date: this.state.visit_date,
            place_name: this.state.place_name,
            place_website: this.state.place_website,
            fave_item: this.state.fave_item,
            place_rank: this.state.place_rank,
            comments: this.state.comments
        }).then(response =>{
            console.log("success on state change: " + JSON.stringify(response))
        }).catch(err =>{ 
            console.log(err)
        })

    }

    render() {
        return (
            <div className="myPlacesPage">
                <NavHeader />
                <h3>My Places</h3>
                <div className="myPlacesContainer">
                    <div className="entriesContainer">
                        <form action="/visitentry" method="POST">
                        <h6>When did you go?</h6>
                            <input
                                className="form-control"
                                type="date"
                                placeholder="Visit Date"
                                name="visit_date"
                                value={this.state.visit_date}
                                onChange={this.infoInput}
                                max={moment().format("YYYY-MM-DD")}
                            />
                            <h6>Name of the restaurant</h6>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Restaurant Name"
                                name="place_name"
                                value={this.state.place_name}
                                onChange={this.infoInput}
                            />
                            <h6>Website</h6>
                            <input
                                className="form-control"
                                type="url"
                                placeholder="Enter restaurant Website, if available"
                                name="place_website"
                                value={this.state.place_website}
                                onChange={this.infoInput}
                            />
                            <h6>What did you eat?</h6>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="What did you eat?"
                                name="fave_item"
                                value={this.state.fave_item}
                                onChange={this.infoInput}
                            />
                            <h6>How would you rate this place?</h6>
                            <select
                                className="form-control"
                                type="text"
                                placeholder="Rating"
                                name="place_rank"
                                value={this.state.place_rank}
                                onChange={this.infoInput}
                                >
                                <option value=""></option>
                                <option value="1">1 - Very Low</option>
                                <option value="2">2 - Low</option>
                                <option value="3">3 - Ok</option>
                                <option value="4">4 - Good</option>
                                <option value="5">5 - Very Good</option>
                            </select>
                            <h6>Add any additional comments</h6>
                            <textarea 
                                className="form-control"
                                type="text"
                                placeholder="Additional Comments"
                                name="comments"
                                value={this.state.comments} 
                                onChange={this.infoInput}
                            />
                            <div className="buttonContainer">
                                <button onClick={this.infoSubmit}
                                disabled={!this.isValid()}>
                                Submit
                                </button>
                                </div>
                                <pre>{JSON.stringify(this.state, null, 2)}</pre>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}


export default MyPlaces;