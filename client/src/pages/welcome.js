import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Welcome extends Component {

    render() {
        return (
            <div className="welcomePage">
                <div className="titleContainer">
                    <div className="title">NoMDay</div>
                    <div className="linkContainer">
                        <Link to="/login">Login</Link>
                    </div>
                    <div className="linkContainer">
                        <Link to="/createaccount">Create An Account</Link>
                    </div>
                </div>
            </div>
        );
    }
}


export default Welcome;