import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthenticatedRoute from '../components/AuthenticatedRoute';
import HomePage from './Admin/HomePage';
import Statistics from './Admin/Statistics';
import Percentage from './Admin/Statistics/Percentage';
import AdminPanel from './Admin';
import CompaniesStatistics from './Admin/CompaniesStatistics';
import CompanySearch from '../components/Admin/CompanySearch';
import UserSearch from '../components/Admin/UserSearch';
import CitiesContent from '../components/Admin/contentSection/CitiesContent';
import UniversityContent from '../components/Admin/contentSection/UniversityContent';
import MajorContent from '../components/Admin/contentSection/MajorContent';
import CompanyAds from '../components/Admin/AdsSection/Ads';
import SearchAds from '../components/Admin/AdsSection/AdsSearch';
import UserSetting from '../components/Admin/setting/User';
import CompanySetting from '../components/Admin/setting/Company';
import generalStatistics from '../components/Admin/generalStatistics';
import LandingPage from '../components/pages/landingPage';
import ErrorPage from '../components/pages/ErrorPage';
import UserRegistration from './User/signup/index';
import UserHome from './User/index';
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
            <Route exact path="/user/signup" component={UserRegistration} />
            <Route exact path="/user/home" component={UserHome} />

            <Route to="*" component={ErrorPage} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
