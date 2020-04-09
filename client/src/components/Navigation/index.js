import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export function NavHeader(props) {
    return (
        <div className="nav-link-container">
            <li className="nav-link">
                <Link to="/mainplaces" className="nav-link">Home</Link>
            </li>
            <li className="nav-link">
                <Link to="/myplaces" className="nav-link">My Places</Link>
            </li>
            <li className="nav-link">
                <Link to="/search" className="nav-link">Search</Link>
            </li>
            <li className="nav-link">
                <Link to="/logout" className="nav-link">Logout</Link>
            </li>
        </div>
    )
}