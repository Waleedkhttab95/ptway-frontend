import React from 'react';
import { Provider, connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import HomePage from './HomePage';

import './App.scss'

const App =(props)=> {
  return (
    
    <Provider store ={props.store} >
    <div className="App">
      <Router>
        <Switch>
        <Route
        exact
        path='/'
        component={HomePage}
      />
        {/* <Route
        exact
        path='/admin'
        component={AdminPanel}
      /> */}
       {/* <Route
        exact
        path='/user'
        component={User}
      /> */}
        </Switch>
      </Router>
     
    </div>
   </Provider>
  );
}

export default App;
