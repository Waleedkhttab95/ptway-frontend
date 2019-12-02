import React from 'react';
import Header from '../Header';
import HowItWorks from '../HowItWorks';
import JobsTypes from '../JobsTypes';
import Contracts from '../Contracts';
import Partners from '../Partners';
import CommonQuestions from '../CommonQuestions';
import ContactUs from '../Contact';
import cloud2 from '../../images/Cloud2.png';
import Footer from '../Footer';
const LandingPage = () => {
  return (
    <React.Fragment>
      <Header />
      <HowItWorks />
      <JobsTypes />
      <Contracts />
      <div style={{ position: 'relative', height: '1060px' }}>
        <img src={cloud2} alt="cloud2" />
        <div style={{ position: 'absolute', right: '155px' }}>
          <Partners />
          <CommonQuestions />
        </div>
      </div>
      <br></br>
      <ContactUs />
      <Footer />
    </React.Fragment>
  );
};

export default LandingPage;
