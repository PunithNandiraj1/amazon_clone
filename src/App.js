import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Checkout from "./Components/Checkout/Checkout";
function App() {
return (
  <div className="app">
    <Router>
      <Header/>
      <Switch>
      <Route path="/checkout">
          <Checkout/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>

      </Switch>
    </Router>
  </div>
);
}
export default App;