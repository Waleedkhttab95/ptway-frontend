import React from 'react';
import Header from '../../Header';
import Services from './Services';
import Sectors from './Sectors';
import HowWorks from './HowWorks';
import Partners from './Partners';
import CommonQuestions from './CommonQuestions';
import ContactUs from './Contact';
// import cloud2 from '../../images/Cloud2.png';
import Footer from '../../Footer';
const LandingPage = () => {
  return (
    <React.Fragment>
      <div style={{ background: 'white' }}>
        <Header />
        <Services />
        <Sectors />
        <HowWorks />
        <Partners />
        <CommonQuestions />
        <ContactUs />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default LandingPage;
