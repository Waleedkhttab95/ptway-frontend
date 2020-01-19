import React from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import './style.scss';
import { Row, Col } from 'antd';
import FilterAndSearch from '../../Filter';
const Jobs = props => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div>
      <Header />
      <div className="user-container">
        <div className="user-jobs">
          <FilterAndSearch />
          <Row className="jobs-details">
            {array.map(elm => {
              return (
                <Col md={6} className="job-post" key={elm}>
                  <div className="post-header">
                    {/* <img src="" alt="" className="post-img" /> */}
                    <i
                      className="fa fa-picture-o"
                      aria-hidden="true"
                      style={{
                        fontSize: '45px',
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    ></i>
                    <div className="job-owner-info">
                      <span className="job-owner-title">
                        محاسب في شركة بيتزا هت
                      </span>
                      <span className="job-owner-location">في مقر الشركة</span>
                      <span className="job-owner-mobile">
                        الرقم : 0002163477555
                      </span>
                    </div>
                  </div>
                  <div className="post-body">
                    <span className="post-description">
                      مطلوب موظف مصمم واجهات استخدام ومواقع ويب وتطبيقات موبايل
                      للعمل بدوام ساعات عن بعد مع شركة كبيرة وذات اهمية في السوق
                    </span>
                    <div className="post-actions-btns">
                      <div className="post-status">لم يتم التقدم</div>
                      <button className="apply-job-btn">التقدم للعمل</button>
                      <button
                        className="details-btn"
                        onClick={() => props.history.push('/user/job')}
                      >
                        التفاصيل
                      </button>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
          <button className="display-more">عرض المزيد</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Jobs;
