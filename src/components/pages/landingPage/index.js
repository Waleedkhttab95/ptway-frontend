import React from 'react';
import Header from '../../Header';
import Services from './Services';
import Sectors from './Sectors';
import HowWorks from './HowWorks';
import Clients from './Clients';
// import CommonQuestions from './CommonQuestions';
import ContactUs from './Contact';
import Footer from '../../Footer';
const LandingPage = () => {
  return (
    <React.Fragment>
      <div style={{ background: 'white' }}>
        <Header />
        <Services />
        <Sectors />
        <HowWorks />
        <Clients />
        {/* <CommonQuestions /> */}
        <ContactUs />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default LandingPage;
