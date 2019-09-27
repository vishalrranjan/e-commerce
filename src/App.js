import React from 'react';

import HomePage from './Page/Homepage/homepage.component';

import './App.css';

import {Route, Switch } from 'react-router-dom';

const HatsPage = () =>(
  <div>
    <h1>HatsPage</h1>
  </div>
);



function App() {
  return (
    <div>
      <Switch>
        {/*path is used for url and exact is working like target(by default exact is true.) */}
        <Route exact path='/' component={ HomePage } /> 
        <Route path='/hats' component={ HatsPage } /> 
      </Switch>
    </div>
  );
}

export default App;