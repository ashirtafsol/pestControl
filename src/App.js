import React from "react";
import {
  BrowserRouter as Router,
  Switch as Switching,
  Route,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Payments from "./pages/Payments/Payments";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switching>
          <Route path="/payments">
            <Payments />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switching>
      </Router>
    </div>
  );
}

export default App;
