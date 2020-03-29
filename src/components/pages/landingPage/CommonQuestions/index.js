import React from 'react';
import { Row, Collapse, Input } from 'antd';
import './style.scss';
import { withTranslation } from 'react-i18next';
import Footer from '../../../Footer';
import Navbar from '../../../Header/Navbar';
const { Panel } = Collapse;
const text = (
  <p style={{ paddingLeft: 24, paddingRight: '40px' }} className="qus-reply">
    هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ
    عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها.
    ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما-
    للأحرف عوضاً عن استخدام هنا يوجد محتوى نصي
  </p>
);
const CommonQuestions = props => {
  const { i18n } = props;
  return (
    <Row style={{ background: '#fff' }}>
      <Navbar />
      <br />
      <br />
      <div className="com-questions">
        <h3 className="com-title">{i18n.t('home.comQuestions')} </h3>
        <div className="questions">
          <div className="question">
            <Collapse bordered={false} defaultActiveKey={['1']}>
              <Panel
                className="qus-name"
                header={i18n.t('home.coQuestions.question1')}
                key="1"
              >
                {text}
              </Panel>
              <Panel
                className="qus-name"
                header={i18n.t('home.coQuestions.question2')}
                key="2"
              >
                {text}
              </Panel>
              <Panel
                className="qus-name"
                header={i18n.t('home.coQuestions.question3')}
                key="3"
              >
                {text}
              </Panel>
              <Panel
                className="qus-name"
                header={i18n.t('home.coQuestions.question4')}
                key="4"
              >
                {text}
              </Panel>
              <Panel
                className="qus-name"
                header={i18n.t('home.coQuestions.question5')}
                key="5"
              >
                {text}
              </Panel>
            </Collapse>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Row className="contact-us">
        <h2 className="title">هل لديك سؤال أخر؟</h2>
        <form className="questions-form">
          <div className="inputs">
            <Input placeholder="الاسم" />
            <Input placeholder="الإيميل" />
          </div>
          <Input.TextArea rows={4} placeholder="أكتب سؤالك هنا" />
          <button className="send-btn">ارسال</button>
        </form>
      </Row>

      <Footer />
    </Row>
  );
};

export default withTranslation()(CommonQuestions);
