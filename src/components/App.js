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
import CompanySearch from '../components/AdminPanel/CompanySearch';
import UserSearch from '../components/AdminPanel/UserSearch';
import CitiesContent from '../components/AdminPanel/contentSection/CitiesContent';

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
      <Route
        exact
        path='/admin/search/user'
        component={AdminPanel(UserSearch)}
      />
      <Route
        exact
        path='/admin/search/company'
        component={AdminPanel(CompanySearch)}
      />
      <Route
        exact
        path='/admin/content/cities'
        component={AdminPanel(CitiesContent)}
      />
        </Switch>
      </Router>
     
    </div>
   </Provider>
  );
}

export default App;
