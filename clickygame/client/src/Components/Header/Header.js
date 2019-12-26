import React from 'react';
import './Header.css'

function Header() {

    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4 header-main">Clicky Game</h1>
                <h2 className="display-6 header-sub">Silicon Valley Edition</h2>
                <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
            </div>
        </div>
    )

}

export default Header;
