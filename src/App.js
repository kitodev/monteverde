import React, {useEffect} from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch, HashRouter} from 'react-router-dom';
import Header from "./Header";
import Home from "./Home";
import Orders from "./Orders";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

const promise = loadStripe('pk_test_ALjv17kGwqh4J5uGgbEVHGV800ItSxA0UM');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect( () => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER iS >>>', authUser);

      if (authUser) {
          dispatch({
            type: 'SET_USER',
            user: authUser
          
          })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        
        })
      }

    })
  }, [])

  return (
    <Router>
    <div className="App">
      <Switch>
        <Router path="/orders">
          <Header />
          <Orders />
        </Router>
        <Router path="/login">
        <Login />
        </Router>
        <Route path="/checkout">
        <Header />
        <Checkout />
        </Route>
        <Router path="/payment">
        <Header />  
          <Elements stripe={promise}>
          <Payment />
        </Elements>
        </Router>
        <Route path="/">
        <Header />
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
