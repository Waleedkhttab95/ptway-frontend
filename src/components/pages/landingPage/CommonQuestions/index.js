import React, { useEffect } from 'react';
import { Row, Collapse } from 'antd';
import './style.scss';
import { withTranslation } from 'react-i18next';
import Footer from '../../../Footer';
import Navbar from '../../../Header/Navbar';
import ContactUs from '../Contact';
import SEO from '../../../SEO';
const { Panel } = Collapse;

const CommonQuestions = props => {
  const { i18n } = props;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      <SEO
        title="الأسئلة الشائعة"
        description=" كيف يمكننا مساعدتك، كباحث عن عمل جزئي أو كباحث عن موظف جزئي"
      />
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
                    نعم، في حال تم ترشيحك المبدئي للفرصة الوظيفية، يصل إليك
                    اشعار على حسابك في المنصة أو يتم التواصل معك عن طريق وسائل
                    التواصل المرفقة في سيرتك الذاتية.
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
                  <p
                    className="qus-reply"
                    style={{
                      paddingLeft: 24,
                      paddingRight: '40px'
                    }}
                  >
                    يكون من الجهة المعلنة للعرض الوظيفي , PTway وسيط بين الفرد و
                    الجهة
                  </p>
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
                  <p
                    className="qus-reply"
                    style={{
                      paddingLeft: 24,
                      paddingRight: '40px'
                    }}
                  >
                    ليس محدود, الحد الأدنى لعمر المتقدم هو 16 سنة
                  </p>
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
                  <p
                    className="qus-reply"
                    style={{
                      paddingLeft: 24,
                      paddingRight: '40px'
                    }}
                  >
                    لا , لا يؤثر التسجيل في المنصة
                  </p>
                </Panel>
                <Panel
                  className="qus-name"
                  header={<p className="ques-title">لم تصلني رسالة تفعيل ؟</p>}
                  key="5"
                >
                  <p
                    className="qus-reply"
                    style={{
                      paddingLeft: 24,
                      paddingRight: '40px'
                    }}
                  >
                    الإطلاع على البريد المهمل او غير المرغوب فيه , في حال لم
                    تصلك أيضا الرجاء قم بالتواصل مع الفريق المختص بالبريد
                    الالكتروني !
                  </p>
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
                  <p
                    className="qus-reply"
                    style={{
                      paddingLeft: 24,
                      paddingRight: '40px'
                    }}
                  >
                    في يمين صفحتك بالمنصة يوجد خيار تعديل السيرة الذاتيه , أو في
                    اعلى الصفحه في حال كنت تستخدم هاتف متنقل
                  </p>
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
                  <p
                    className="qus-reply"
                    style={{
                      paddingLeft: 24,
                      paddingRight: '40px'
                    }}
                  >
                    نعم{' '}
                  </p>
                </Panel>

                <Panel
                  className="qus-name"
                  header={
                    <p className="ques-title" style={{ marginBottom: '0' }}>
                      اذا نسيت كلمة المرور لحسابي هل يتطلب مني التسجيل بالمنصة
                      مرة اخرى ؟{' '}
                    </p>
                  }
                  key="8"
                >
                  <p
                    className="qus-reply"
                    style={{
                      paddingLeft: 24,
                      paddingRight: '40px'
                    }}
                  >
                    لا , يوجد خيار "استعادة كلمة المرور" قم بالضغط عليها وسوف
                    يصلك بريد الكتروني بالتغيير
                  </p>
                </Panel>

                <Panel
                  className="qus-name"
                  header={
                    <p className="ques-title" style={{ marginBottom: '0' }}>
                      اذا تم القبول والمباشرة بالعمل , هل ل PTway نسبة من راتب
                      الموظف ؟
                    </p>
                  }
                  key="9"
                >
                  <p
                    className="qus-reply"
                    style={{
                      paddingLeft: 24,
                      paddingRight: '40px'
                    }}
                  >
                    لا , المنصة لاتأخذ اي نسبة من الموظف !
                  </p>
                </Panel>
              </Collapse>
            </div>
          </div>
        </Row>
        <br />
        <br />
        <ContactUs />

        <Footer />
      </Row>
    </React.Fragment>
  );
};

export default withTranslation()(CommonQuestions);
