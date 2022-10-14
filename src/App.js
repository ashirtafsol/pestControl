import React from "react";
import {
  BrowserRouter as Router,
  Switch as Switching,
  Route,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import CartPage from "./pages/Cart Page/CartPage";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Payments from "./pages/Payments/Payments";
import Products from "./pages/Products/Products";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switching>
          <Route path="/cart">
            <CartPage />
          </Route>

          <Route path="/products">
            <Products />
          </Route>

          <Route path="/payments">
            <Payments />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/" exact>
            <Home />
          </Route>
        </Switching>
      </Router>
    </div>
  );
}

export default App;
