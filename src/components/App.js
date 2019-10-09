import React from 'react';
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import HomePage from './HomePage';
import Statistics from './AdminPanel/Statistics';
import AdminPanel from './AdminPanel';
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
        <Route
        exact
        path='/admin/statistics'
        component={AdminPanel(Statistics)}
      />
        </Switch>
      </Router>
     
    </div>
   </Provider>
  );
}

export default App;
