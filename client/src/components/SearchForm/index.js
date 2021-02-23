import React from "react";

const styles = {
    submitbtn: {
        backgroundColor: "purple",
        marginBottom: "30%",
        color: "yellow"
    }
}

const SearchForm = props => {
    return (
        <form>
            <div className="form-group">
                <br />
                <input className="col-12 form-control"
                    value={props.search}
                    type="text"
                    name="searchBook"
                    placeholder= "name of book"
                    onChange={props.handleInputChange} />
            </div>
            <button style={styles.submitbtn} type="submit" className="submitBtn btn" onClick={props.handleFormSubmit}>
                SEARCH</button>
        </form>
    )
}

export default SearchForm;