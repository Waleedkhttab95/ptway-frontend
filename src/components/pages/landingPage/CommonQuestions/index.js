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
      <Row className="com-questions">
        <h3 className="com-title">{i18n.t('home.comQuestions')} </h3>
        <div className="questions">
          <div className="question">
            <Collapse
              bordered={false}
              className="cQues-collapse"
              expandIcon={panelProps => (
                <div>
                  {panelProps.isActive ? (
                    <i
                      className="fa fa-minus"
                      aria-hidden="true"
                      style={{ color: '#fff ', fontSize: '20px' }}
                    ></i>
                  ) : (
                    <i
                      className="fa fa-plus ques-plus-icon"
                      aria-hidden="true"
                      style={{ color: '#18233d ', fontSize: '20px' }}
                    ></i>
                  )}
                </div>
              )}
              expandIconPosition="right"
            >
              <Panel
                key="1"
                className="qus-name"
                header={
                  <p className="ques-title" style={{ marginBottom: '0' }}>
                    هل تأتي رسالة أو اشعار على أنه تم ترشيحي للوظيفة الجزئية؟
                    إذا نعم هل عن طريق الإيميل، رقم، أو المنصة؟
                  </p>
                }
              >
                <p
                  className="qus-reply"
                  style={{
                    paddingLeft: 24,
                    paddingRight: '40px'
                  }}
                >
                  نعم، في حال تم ترشيحك المبدئي للفرصة الوظيفية، يصل إليك اشعار
                  على حسابك في المنصة أو يتم التواصل معك عن طريق وسائل التواصل
                  المرفقة في سيرتك الذاتية.
                </p>
              </Panel>
              <Panel
                className="qus-name"
                header={
                  <p className="ques-title" style={{ marginBottom: '0' }}>
                    عند الرفض أو القبول العرض الوظيفي الجزئى هل التواصل من
                    ptway، أو الشركة المعلنة؟
                  </p>
                }
                key="2"
              >
                {text}
              </Panel>
              <Panel
                className="qus-name"
                header={
                  <p className="ques-title" style={{ marginBottom: '0' }}>
                    هل عمر المتقدم للوظيفة محدود لفئة معينة؟
                  </p>
                }
                key="3"
              >
                {text}
              </Panel>
              <Panel
                className="qus-name"
                header={
                  <p className="ques-title" style={{ marginBottom: '0' }}>
                    هل يؤثر التسجيل على التأمين ، حافز ؟
                  </p>
                }
                key="4"
              >
                {text}
              </Panel>
              <Panel
                className="qus-name"
                header={<p className="ques-title">لم تصلني رسالة تفعيل ؟</p>}
                key="5"
              >
                {text}
              </Panel>
              <Panel
                className="qus-name"
                header={
                  <p className="ques-title" style={{ marginBottom: '0' }}>
                    كيف يمكنني التعديل على السيرة الذاتية؟
                  </p>
                }
                key="6"
              >
                {text}
              </Panel>
              <Panel
                className="qus-name"
                header={
                  <p className="ques-title" style={{ marginBottom: '0' }}>
                    تخصصي الدقيق يندرج تحت مسمى اخر؟
                  </p>
                }
                key="7"
              >
                {text}
              </Panel>
            </Collapse>
          </div>
        </div>
      </Row>
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
