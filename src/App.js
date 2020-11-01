import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Switch>
        <Route path="/checkout">
        <Checkout />
        </Route>
        <Router path="/login">
        <h1>sdfdfgdg</h1>
        </Router>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
