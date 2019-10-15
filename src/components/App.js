import React from 'react';
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import HomePage from './HomePage';
import Statistics from './AdminPanel/Statistics';
import Percentage from './AdminPanel/Percentage';
import AdminPanel from './AdminPanel';
import CompaniesStatistics from './AdminPanel/CompaniesStatistics';
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
      <Route
        exact
        path='/admin/percentage'
        component={AdminPanel(Percentage)}
      />
      <Route
        exact
        path='/admin/company'
        component={AdminPanel(CompaniesStatistics)}
      />
        </Switch>
      </Router>
     
    </div>
   </Provider>
  );
}

export default App;
