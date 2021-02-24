import React from "react";
// import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/navbar/index";
import SaveBooks from "./pages/savedBooksPage";
import SearchBooks from "./pages/searchBooksPage";
import Footer from "./components/footer/index"
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={SearchBooks} />
          <Route exact path="/saved" component={SaveBooks} />
        </Switch>
        <Footer />
       </div>
    </Router>
  );
}

export default App;
