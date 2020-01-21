import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
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
import AdminSetting from '../components/Admin/setting/User';
import CompanySetting from '../components/Admin/setting/Company';
import generalStatistics from '../components/Admin/generalStatistics';
import LandingPage from '../components/pages/landingPage';
import ErrorPage from '../components/pages/ErrorPage';
import UserRegistration from './User/signup/index';
import UserHome from './User/index';
import Jobs from './User/Jobs';
import Job from './User/Job';
import UserSetting from './User/UserSetting';
import Notifications from './User/Notifications';
import UpdateProfile from './User/UpdateProfile';
import UserLogin from './User/login';
import CompanyLogin from './Company/Login';
import CompanyNewAd from './Company/newAd';
import CompanySignup from './Company/SignUp';
import CompanyHome from './Company';
import CompanyProjects from './Company/Projects';
import Applicants from './Company/Applicants';
import Applicant from './Company/Applicant';
import CompSetting from './Company/Setting';
import UpdateCompanyProfile from './Company/UpdateProfile';

const App = () => {
  return (
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
            component={AdminPanel(AdminSetting)}
          />
          <AuthenticatedRoute
            exact
            path="/admin/setting/company"
            component={AdminPanel(CompanySetting)}
          />
          <Route exact path="/user/signup" component={UserRegistration} />
          <Route exact path="/user/home" component={UserHome} />
          <Route exact path="/user/jobs" component={Jobs} />
          <Route exact path="/user/job" component={Job} />
          <Route exact path="/user/account/setting" component={UserSetting} />
          <Route exact path="/user/notifications" component={Notifications} />
          <Route exact path="/user/profile/update" component={UpdateProfile} />
          <Route exact path="/user/login" component={UserLogin} />
          <Route exact path="/company/login" component={CompanyLogin} />
          <Route exact path="/company/new/ad" component={CompanyNewAd} />
          <Route exact path="/company/signup" component={CompanySignup} />
          <Route exact path="/company/home" component={CompanyHome} />
          <Route exact path="/company/projects" component={CompanyProjects} />
          <Route exact path="/company/applicants" component={Applicants} />
          <Route
            exact
            path="/company/applicant/profile"
            component={Applicant}
          />

          <Route exact path="/company/setting" component={CompSetting} />
          <Route
            exact
            path="/company/profile/update"
            component={UpdateCompanyProfile}
          />

          <Route to="*" component={ErrorPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
