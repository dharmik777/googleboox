import React from "react";

const styles = {
    navBar: {
        backgroundColor: "purple"
    },
    font: {
        color: "yellow",
        fontSize: "20pt",
        fontStyle: "bold"

    },
    text: {
        color: "yellow",
        fontSize: "15pt",
        fontStyle: "bold"
    }
}

function Nav() {
    return (
        <nav style={styles.navBar} className="navbar navbar-expand-lg">
            <a style={styles.font} className="navbar-brand" href="/">
                <h2 className="text-white">GOOGLE BOOX</h2>
            </a>
            <div id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item" id="home">
                        <a style={styles.text} className="nav-link" href="/">Search </a>
                    </li>
                    <li className="nav-item" id="report">
                        <a  style={styles.text} className="nav-link" href="/saved">BOOX</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
 export default Nav;