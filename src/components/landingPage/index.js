import React from 'react';
import Header from '../Header';
import HowItWorks from '../HowItWorks';
import JobsTypes from '../JobsTypes';
import Contracts from '../Contracts';
import Partners from '../Partners';
import CommonQuestions from '../CommonQuestions';
import ContactUs from '../Contact';
import Footer from '../Footer';
const LandingPage = () => {
  return (
    <React.Fragment>
      <Header />
      <HowItWorks />
      <JobsTypes />
      <Contracts />
      <Partners />
      <CommonQuestions />
      <ContactUs />
      <Footer />
    </React.Fragment>
  );
};

export default LandingPage;
