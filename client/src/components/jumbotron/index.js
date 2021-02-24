import React from "react";


const styles = {
    jumbo: {
        backgroundPosition: "center",
        height: "200px",
        textAlign: "center"
    }
}

function Jumbotron({ children }) {
    return (
        <div style={styles.jumbo} className="jumbotron jumbotron-fluid d-flex align-items-center">
            <div className="container text-center">
                {children}
            </div>
        </div>
    )
}

export default Jumbotron;