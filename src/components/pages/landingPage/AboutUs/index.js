import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
import aboutus from '../../../../images/aboutus.svg';
import './style.scss';
import ab1 from '../../../../images/ab1.svg';
import ab2 from '../../../../images/ab2.svg';
import ab3 from '../../../../images/ab3.svg';
import ab4 from '../../../../images/ab4.svg';
import ab5 from '../../../../images/ab5.svg';
import ab6 from '../../../../images/ab6.svg';
import Navbar from '../../../Header/Navbar';
import work from '../../../../images/vis1.svg';
import education from '../../../../images/vis2.svg';
import enviroment from '../../../../images/mv.svg';
import Footer from '../../../Footer';
import SEO from '../../../SEO';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      <SEO
        title="من نحن"
        description="منصة الكترونية تربط بين الشركات والباحثين عن عمل جزئي لتغطية احتياجهم من الكوادر البشرية"
      />
      <div style={{ background: '#fff' }}>
        <Row className="about-us">
          <Navbar />
          <h2 className="title">من نحن؟</h2>
          <Col md={10} lg={10} xs={24} sm={24} className="about-us-img">
            <img src={aboutus} alt="aboutus" />
          </Col>
          <Col md={14} lg={14} xs={24} sm={24} className="about-us-content">
            <Row>
              <p className="desc">
                منصة الكترونية تربط بين الشركات والباحثين عن عمل جزئي لتغطية
                احتياجهم من الكوادر البشرية
              </p>
              <h3>مميزاتنا:</h3>
              <div className="contact-digram-cont">
                <div md={8} lg={8} xs={12} sm={12}>
                  <div className="about-elm col-left-side">
                    <div className="elm-img">
                      <img src={ab2} alt="" />
                    </div>
                    <div className="elm-desc-second-col">
                      <h3>التخصصات</h3>
                      <p>نتميز بتوفير أكثر من 160 تخصص</p>
                    </div>
                  </div>
                  <div className="about-elm col-left-side">
                    <div className="elm-img">
                      <img src={ab4} alt="" />
                    </div>
                    <div className="elm-desc-second-col">
                      <h3>الخبرات</h3>
                      <p>
                        نملك العديد من الأشخاص ذوي الخبرات <br />
                        بمجالات متعددة
                      </p>
                    </div>
                  </div>
                  <div
                    className="about-elm col-left-side"
                    // style={{ marginTop: '41px' }}
                  >
                    <div className="elm-img">
                      <img src={ab6} alt="" />
                    </div>
                    <div className="elm-desc-second-col">
                      <h3>المناطق</h3>
                      <p>أبطال PTway من جميع مناطق المملكة</p>
                    </div>
                  </div>
                </div>
                <div md={8} lg={8} xs={12} sm={12}>
                  <div className="about-elm ">
                    <div className="elm-desc-first-col">
                      <h3>اللغات</h3>
                      <p>
                        نتميز بتوفير أشخاص <br />
                        يملكون مهارات لغوية متعددة
                      </p>
                    </div>
                    <div className="elm-img">
                      <img src={ab1} alt="" />
                    </div>
                  </div>
                  <div className="about-elm col-right-side">
                    <div className="elm-desc-first-col">
                      <h3>المهارات</h3>
                      <p>
                        جميع المهارات العلمية والعملية <br />
                        تجدها هنا
                      </p>
                    </div>
                    <div className="elm-img">
                      <img src={ab3} alt="" />
                    </div>
                  </div>
                  <div className="about-elm col-right-side">
                    <div className="elm-desc-first-col">
                      <h3>الأعمار</h3>
                      <p>نتميز بتوفير أي عمر من 16 سنة فما فوق</p>
                    </div>
                    <div className="elm-img">
                      <img src={ab5} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </Row>
          </Col>
        </Row>
        <Row className="vision-message">
          <div className="vision">
            <h2>رؤيتنا: </h2>
            <p>أن نصبح أكبر منصة للعمل الجزئي إقليمياً وعالمياً.</p>
          </div>
          <div className="message-container">
            <h2>رسالتنا</h2>
            <p>
              قيادة تجربة علمية للطلاب وحديثي التخرج وأصحاب الخبرات داخل سوق
              العمل “العمل الجزئي” <br />
              بما يتوافق مع متطلبات السوق ورغبات الشباب من خلال:
            </p>
            {/* <ul> */}
            <div className="message">
              <div>
                <img src={enviroment} alt="" />
              </div>
              <span>
                &nbsp; توفير بيئة تفاعلية مشجعة ومحفزة للطلاب والخريجين لإكتساب
                المهارات والخبرات اللازمة.
              </span>
            </div>
            <div className="message">
              <div>
                <img src={work} alt="work-transformation" />
              </div>
              <span>
                {' '}
                &nbsp; تنظيم عملية العمل الجزئي داخل منظومة سوق العمل
              </span>
            </div>
            <div className="message">
              <div>
                <img src={education} alt="education" />{' '}
              </div>
              <span>
                {' '}
                &nbsp; تطبيق نظام التعليم التفاعلي لطلاب وطالبات المدارس.
              </span>
            </div>
            {/* </ul> */}
          </div>
        </Row>
        <Footer />
      </div>
    </React.Fragment>
  );
};
export default AboutUs;
