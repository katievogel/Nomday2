import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import "./style.css";
import axios from "axios";

class CreateAccount extends Component {
    state = {
        userName: "",
        email: "",
        passWord: "",
        redirectTo: null
    }

    //the 'const { name, value } = event.target' (as with any line written with parts in curly braces) just simplifies it into one line. You could write lines for event.target.name and event.target.value, but less code is always better//
    nameInput = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    nameSubmit = event => {
        event.preventDefault();
        if (!this.state.userName || !this.state.passWord) {
            alert("You must enter a username and password");
        } else if (this.state.passWord.length < 7) {
            alert(
                `Password must be more than 7 characters, ${this.state.userName}`
            );
        } else {
            alert(`Hello ${this.state.userName}`);
        }
        axios.post('/adduser', {
            username: this.state.userName,
            pass_word: this.state.passWord,
            email: this.state.email
        }).then(response => {
            this.setState({
                redirectTo: '/mainplaces'
            })
        }).catch(err => {
            console.log(err)
        })
    }
    render() {
        if (this.state.redirectTo) {
            return <Redirect to={
                { pathname: this.state.redirectTo }} />
        }
        return (
            <div className="loginPage">
                <section className="containerLogin">
                    <div className="accountHeader">Create Your Account</div>
                    <div className="loginForm">
                        <form action="/adduser" method="POST">
                            <div className="containerField">
                                <span className="username">Username: </span>
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Username"
                                    name="userName"
                                    value={this.state.userName}
                                    onChange={this.nameInput}
                                />
                            </div>
                            <div className="containerField">
                                <span className="password">Password: </span>
                                <input
                                    className="form-control"
                                    type="password"
                                    placeholder="Password"
                                    name="passWord"
                                    value={this.state.passWord}
                                    onChange={this.nameInput}
                                />
                            </div>
                            <div className="containerField">
                                <span className="email">Email: </span>
                                <input
                                    className="form-control"
                                    type="email"
                                    placeholder="Email Address"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.nameInput}
                                />
                            </div>
                            <div className="buttonContainer">
                                <button onClick={this.nameSubmit}>
                                Create Account
                                </button>
                                <Link to="/login">
                                Already have an account?
                                </Link>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        )
    }
}

export default CreateAccount;
