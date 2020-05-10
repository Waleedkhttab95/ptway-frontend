import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default (
  <Router>
    <Switch>
      <Route exact path="/" />
      <Route exact path="/admin/general/statistics" />
      <Route exact path="/admin" />
      <Route path="/admin/statistics" />
      <Route exact path="/admin/percentage" />
      <Route exact path="/admin/company" />
      <Route exact path="/admin/search/user" />
      <Route exact path="/admin/search/company" />
      <Route exact path="/admin/content/cities" />
      <Route exact path="/admin/content/universities" />
      <Route exact path="/admin/content/majors" />
      <Route exact path="/admin/ads/company" />
      <Route exact path="/admin/ads/search" />
      <Route exact path="/admin/setting/user" />
      <Route exact path="/admin/setting/company" />
      <Route exact path="/user/signup" />
      <Route exact path="/user/home" />

      <Route exact path="/user/jobs" />
      <Route exact path="/user/job/:id" />
      <Route exact path="/user/account/setting" />
      <Route exact path="/user/notifications" />
      <Route exact path="/user/profile/update" />
      <Route exact path="/user/login" />
      <Route exact path="/company/login" />
      <Route exact path="/company/new/short/ad/:id" />
      <Route exact path="/company/new/long/ad/:id" />
      <Route exact path="/company/new/continuous/ad/:id" />
      <Route exact path="/company/signup" />
      <Route exact path="/company/home" />
      <Route exact path="/company/projects" />
      <Route exact path="/applicants/job/id=:id" />
      <Route exact path="/applicant/profile/job/:jobId/user/:id" />
      <Route exact path="/accepted/applicants/job/id=:id" />

      <Route exact path="/company/setting" />
      <Route exact path="/company/profile/update" />
      <Route exact path="/company/profile" />
      <Route exact path="/user/resetPassword" />
      <Route exact path="/company/resetPassword" />
      <Route exact path="/resetPassword" />
      <Route exact path="/common-questions" />
      <Route exact path="/about-us" />
      <Route exact path="/job-form" />
      <Route exact path="/delivery" />
      <Route exact path="/policy-and-privacy" />

      <Route to="*" />
    </Switch>
  </Router>
);
