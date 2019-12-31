import React from 'react';
import './Navbar.css';


const Navbar = props => {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav-main">

            <ul className="navbar-nav">
                <li className="nav-item">Clicky Game</li>
            </ul>

            <ul className="navbar-nav">
                <li className="nav-item">{props.status ? props.status : 'Click an image to begin!'}</li>
            </ul>

            <ul className="navbar-nav">
                <li className="nav-item">Score: {props.score} | Top Score: {props.maxScore}</li>
            </ul>

        </nav>

    )
}

export default Navbar;

