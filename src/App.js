import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from './components/PrivateRoute.js'
import BubblePage from './components/BubblePage.js'
import "./styles.scss";


function App() {
  const logoutFunc = localStorage.removeItem('token');
  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a onClick={logoutFunc} data-testid="logoutButton" href="/">logout</a>
        </header>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute path='/colors' component={BubblePage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to remove the localStorage Item.