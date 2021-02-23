import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

function Nav() {
    return (
        <div className="nav">
            <Link className="bar" to="/react_googlebooks">GOOGLE BOOX</Link>
            <Link className="bar" to="/search">Search</Link>
            <Link className="bar" to="/savedbooks">BOOX</Link>
        </div>
    )
}

export default Nav;