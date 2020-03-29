import React, { Component } from "react";
import "./style.css";
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Axios from "axios";


class LogIn extends Component {
    state = {
        username: "",
        password: ""
    }

    loginSubmission = (event) => {
        event.preventDeafult();
        Axios.get("/api/users/", {
            params: {
                username: this.state.username,
                password: this.state.password
            }
        })
            .then(res => {
                console.log(`User has logged in a ${(JSON.stringify(res.username))}`)
                this.props.history.push("/login");
            }).catch(err => {
                console.log(err)
            })
    }

    loginChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    render(props) {
        return (
            <div className="loginPage">
                <section className="containerLogin">
                    <div className="formHeader">Login</div>
                    <div className="loginForm">
                        <form action="/login" method="GET">
                            <div className="containerField">
                                <span className="username">Username: </span>
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Username"
                                    name="username"
                                    value={this.state.username}
                                    onChange={this.loginChange}
                                />
                            </div>
                            <div className="containerField">
                                <span className="password">Password: </span>
                                <input
                                    className="form-control"
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.loginChange}
                                />
                            </div>
                            <div className="buttonContainer">
                                <button
                                    onClick={this.handleLogInSubmit}>
                                    Sign In
                                </button>
                                <Link to="/createaccount/">
                                    Create Account
                                </Link>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        )
    }
}

LogIn = withRouter(LogIn);
export default LogIn;