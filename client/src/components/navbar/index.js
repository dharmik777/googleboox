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
        color: "orange"
    }
}

function Nav() {
    return (
        <nav style={styles.navBar} className="navbar navbar-expand-sm">
            <a style={styles.font} className="navbar-brand" href="/">
                <h2 className="text-yellow">Google BooX</h2>
            </a>
            <div id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item" id="home">
                        <a style={styles.text} className="nav-link" href="/">Search </a>
                    </li>
                    <li className="nav-item" id="report">
                        <a  style={styles.text} className="nav-link" href="/saved"> BooX</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
 export default Nav;