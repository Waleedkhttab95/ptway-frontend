import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import AuthenticatedRoute from '../components/AuthenticatedRoute';
import CompanyAuthenticatedRoute from './Company/CompanyAuthRoutes';
import UserAuthenticatedRoute from './User/UserAuthRoutes';

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
import Auth from '../components/pages/Auth';
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
import CompanyShortContract from './Company/contracts/shortContract';
import CompanyLongContract from './Company/contracts/longContract';
import CompanyContinuousContract from './Company/contracts/continuousContract';
import CompanySignup from './Company/SignUp';
import CompanyHome from './Company';
import CompanyProjects from './Company/Projects';
import Applicants from './Company/Applicants';
import Applicant from './Company/Applicant';
import CompSetting from './Company/Setting';
import UpdateCompanyProfile from './Company/UpdateProfile';
import AcceptedApplicant from './Company/AcceptedApplicants';
import CompanyProfile from './Company/Profile';
import ResetPassword from './User/login/resetPassword';
import ResetCompanyPassword from './Company/Login/ResetPassword';
import SetNewPassword from './User/login/newPassword';
import CommenQuestions from '../components/pages/landingPage/CommonQuestions';
import AboutUs from '../components/pages/landingPage/AboutUs';
import JobForm from './JobForm';
import DeliveryForm from './Delivery';
import { Privacy } from './pages/landingPage/Privacy';

import { GetNewJob } from './NewJob';
import { UserNewJob } from './NewJob/user';
import { CompanyNewJob } from './NewJob/company';

import { DeliveryCompany } from './NewJob/deliveryCompany';
import { Helmet } from 'react-helmet';
import UserInfo from './User/userInfoFollowForm';

// DELETE ME
// import UserHomeClone from '../components/User/index_clone';

const App = () => {
  return (
    <div className="App">
      <Helmet titleTemplate="%s - PTway" defaultTitle="PTway ">
        <meta
          name="description"
          content="منصة التوظيف الأسرع في العثور على وظائف جزئية تسد أوقات فراغك، تساعدك على إيجاد موظفيين مؤهلين لأوقات ذروة مشروعك، كسب المهارات والخبرات اللازمة لسوق العمل، حلول توظيف مناسبة لجميع قطاعات سوق العمل!"
        />
      </Helmet>
      <Router>
        <Switch>
          <Route exact path="/" component={Auth} />
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
          <UserAuthenticatedRoute
            exact
            path="/user/home"
            component={UserHome}
          />

          {/* THIS IS CLONE PAGE */}
          {/* <UserAuthenticatedRoute
            exact
            path="/user/home-clone"
            component={UserHomeClone}
          /> */}

          {/*  */}

          <UserAuthenticatedRoute exact path="/user/jobs" component={Jobs} />
          <UserAuthenticatedRoute exact path="/user/job/:id" component={Job} />
          <UserAuthenticatedRoute
            exact
            path="/user/account/setting"
            component={UserSetting}
          />
          <UserAuthenticatedRoute
            exact
            path="/user/notifications"
            component={Notifications}
          />
          <UserAuthenticatedRoute
            exact
            path="/user/profile/update"
            component={UpdateProfile}
          />
          <Route exact path="/user/login" component={UserLogin} />
          <Route exact path="/company/login" component={CompanyLogin} />
          <CompanyAuthenticatedRoute
            exact
            path="/company/new/short/ad/:id"
            component={CompanyShortContract}
          />
          <CompanyAuthenticatedRoute
            exact
            path="/company/new/long/ad/:id"
            component={CompanyLongContract}
          />
          <CompanyAuthenticatedRoute
            exact
            path="/company/new/continuous/ad/:id"
            component={CompanyContinuousContract}
          />
          <Route exact path="/company/signup" component={CompanySignup} />
          <CompanyAuthenticatedRoute
            exact
            path="/company/home"
            component={CompanyHome}
          />
          <CompanyAuthenticatedRoute
            exact
            path="/company/projects"
            component={CompanyProjects}
          />
          <CompanyAuthenticatedRoute
            exact
            path="/applicants/job/id=:id"
            component={Applicants}
          />
          <CompanyAuthenticatedRoute
            exact
            path="/applicant/profile/job/:jobId/user/:id"
            component={Applicant}
          />
          <CompanyAuthenticatedRoute
            exact
            path="/accepted/applicants/job/id=:id"
            component={AcceptedApplicant}
          />

          <CompanyAuthenticatedRoute
            exact
            path="/company/setting"
            component={CompSetting}
          />
          <CompanyAuthenticatedRoute
            exact
            path="/company/profile/update"
            component={UpdateCompanyProfile}
          />
          <CompanyAuthenticatedRoute
            exact
            path="/company/profile"
            component={CompanyProfile}
          />
          <Route exact path="/user/resetPassword" component={ResetPassword} />
          <Route
            exact
            path="/company/resetPassword"
            component={ResetCompanyPassword}
          />
          <Route exact path="/resetPassword" component={SetNewPassword} />
          <Route exact path="/common-questions" component={CommenQuestions} />
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/job-form" component={JobForm} />
          <Route exact path="/delivery" component={DeliveryForm} />
          <Route exact path="/policy-and-privacy" component={Privacy} />
          <Route exact path="/get-new-job" component={GetNewJob} />
          <Route exact path="/user-new-job" component={UserNewJob} />
          <Route exact path="/company-new-job" component={CompanyNewJob} />

          <Route exact path="/delivery-company" component={DeliveryCompany} />
          <Route exact path="/user-info" component={UserInfo} />

          <Route to="*" component={ErrorPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
