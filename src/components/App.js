import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthenticatedRoute from '../components/AuthenticatedRoute';
import HomePage from './HomePage';
import Statistics from './AdminPanel/Statistics';
import Percentage from './AdminPanel/Statistics/Percentage';
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
import LandingPage from '../components/landingPage';
import ErrorPage from '../components/ErrorPage';
import './App.scss';

const App = props => {
  return (
    <Provider store={props.store}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <AuthenticatedRoute
              exact
              path="/admin/general/statistics"
              component={AdminPanel(generalStatistics)}
            />
            <Route exact path="/admin" component={HomePage} />
            <AuthenticatedRoute
              path="/admin/statistics"
              component={AdminPanel(Statistics)}
            />
            <AuthenticatedRoute
              exact
              path="/admin/percentage"
              component={AdminPanel(Percentage)}
            />
            <AuthenticatedRoute
              exact
              path="/admin/company"
              component={AdminPanel(CompaniesStatistics)}
            />
            <AuthenticatedRoute
              exact
              path="/admin/search/user"
              component={AdminPanel(UserSearch)}
            />
            <AuthenticatedRoute
              exact
              path="/admin/search/company"
              component={AdminPanel(CompanySearch)}
            />
            <AuthenticatedRoute
              exact
              path="/admin/content/cities"
              component={AdminPanel(CitiesContent)}
            />
            <AuthenticatedRoute
              exact
              path="/admin/content/universities"
              component={AdminPanel(UniversityContent)}
            />
            <AuthenticatedRoute
              exact
              path="/admin/content/majors"
              component={AdminPanel(MajorContent)}
            />
            <AuthenticatedRoute
              exact
              path="/admin/ads/company"
              component={AdminPanel(CompanyAds)}
            />
            <AuthenticatedRoute
              exact
              path="/admin/ads/search"
              component={AdminPanel(SearchAds)}
            />
            <AuthenticatedRoute
              exact
              path="/admin/setting/user"
              component={AdminPanel(UserSetting)}
            />
            <AuthenticatedRoute
              exact
              path="/admin/setting/company"
              component={AdminPanel(CompanySetting)}
            />
            <Route to="*" component={ErrorPage} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
