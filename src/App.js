import React from 'react';

import HomePage from './Page/Homepage/homepage.component';

import './App.css';

import {Route, Switch } from 'react-router-dom';

const HatsPage = () =>(
  <div>
    <h1>HatsPage </h1>
  </div>
);

const Jackets = () =>(
  <div>
    <h1>Jackets </h1>
  </div>
);

const Sneakers = () =>(
    <div>
      <h1>Sneakers </h1>
    </div>
);

const Womens = () =>(
  <div>
    <h1>Womens </h1>
  </div>
);

const Mens = () =>(
  <div>
    <h1>Mens </h1>
  </div>
);


function App() {
  return (
    <div>
      <Switch>
        {/*path is used for url and exact is working like target(by default exact is true.) */} 
        <Route exact path='/' component={ HomePage } /> 
        <Route exact path='/hats' component={ HatsPage } /> 
        <Route exact path='/jackets' component={ Jackets } /> 
        <Route exact path='/sneakers' component={ Sneakers } /> 
        <Route exact path='/womens' component={ Womens } /> 
        <Route exact path='/mens' component={ Mens } /> 
      </Switch>
    </div>
  );
}

export default App;