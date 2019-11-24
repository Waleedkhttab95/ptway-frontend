import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import Statistics from './AdminPanel/Statistics';
import Percentage from './AdminPanel/Percentage';
import AdminPanel from './AdminPanel';
import CompaniesStatistics from './AdminPanel/CompaniesStatistics';
import CompanySearch from '../components/AdminPanel/CompanySearch';
import UserSearch from '../components/AdminPanel/UserSearch';
import CitiesContent from '../components/AdminPanel/contentSection/CitiesContent';
import UniversityContent from '../components/AdminPanel/contentSection/UniversityContent';
import MajorContent from '../components/AdminPanel/contentSection/MajorContent';
import CompanyAds from '../components/AdminPanel/AdsSection/Ads';
import SearchAds from '../components/AdminPanel/AdsSection/AdsSearch';
import UserSetting from '../components/AdminPanel/setting/User';
import CompanySetting from '../components/AdminPanel/setting/Company';
import generalStatistics from '../components/AdminPanel/generalStatistics';
import './App.scss';

const App = props => {
  return (
    <Provider store={props.store}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route
              exact
              path="/admin/general/statistics"
              component={AdminPanel(generalStatistics)}
            />
            <Route
              exact
              path="/admin/statistics"
              component={AdminPanel(Statistics)}
            />
            <Route
              exact
              path="/admin/percentage"
              component={AdminPanel(Percentage)}
            />
            <Route
              exact
              path="/admin/company"
              component={AdminPanel(CompaniesStatistics)}
            />
            <Route
              exact
              path="/admin/search/user"
              component={AdminPanel(UserSearch)}
            />
            <Route
              exact
              path="/admin/search/company"
              component={AdminPanel(CompanySearch)}
            />
            <Route
              exact
              path="/admin/content/cities"
              component={AdminPanel(CitiesContent)}
            />
            <Route
              exact
              path="/admin/content/universities"
              component={AdminPanel(UniversityContent)}
            />
            <Route
              exact
              path="/admin/content/majors"
              component={AdminPanel(MajorContent)}
            />
            <Route
              exact
              path="/admin/ads/company"
              component={AdminPanel(CompanyAds)}
            />
            <Route
              exact
              path="/admin/ads/search"
              component={AdminPanel(SearchAds)}
            />
            <Route
              exact
              path="/admin/setting/user"
              component={AdminPanel(UserSetting)}
            />
            <Route
              exact
              path="/admin/setting/company"
              component={AdminPanel(CompanySetting)}
            />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
