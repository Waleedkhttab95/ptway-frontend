import React from 'react';
import { Row, Col, Tabs } from 'antd';
import './style.scss';
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import calender from '../../../../images/serv1.svg';
import voluntery from '../../../../images/serv4.svg';
import partial from '../../../../images/serv2.svg';
import contract from '../../../../images/serv3.svg';
const { TabPane } = Tabs;

const HowItWorks = () => {
  // const { i18n } = props;
  return (
    <Row className="services">
      <Col
        md={12}
        sm={24}
        style={{ direction: 'initial' }}
        className="services-tabs"
      >
        <Tabs
          defaultActiveKey="1"
          animated={true}
          className="works-tab"
          tabPosition="top"
          keyboard={true}
          tabBarStyle={{ '-webkit-backface-visibility': ' hidden' }}
          size="default"
          tabBarGutter="10"
        >
          <TabPane tab="يومي" key="1" forceRender={true}>
            تستطيع من خلال هذا الخيار الحصول على موظفين للعمل ليوم واحد أو لعدة
            أيام حسب الطلب، يناسب الشركات المهتمة بتنظيم المعارض والمؤتمرات
            والإحتفالات والتسويق والترويج
            <br />
            <Link to="/user/signup" className="tag-link">
              {'<'} انضم معنا
            </Link>
            <p className="tag-title">مناسب لـ</p>
            <span className="tag">
              المناسبات &nbsp;#مواسم_السعودية&nbsp; #المعارض# &nbsp; &nbsp;
            </span>
            <img src={calender} alt="calender" className="tag-icon" />
            <br />
          </TabPane>
          <TabPane tab="جزئي" key="2" forceRender={true}>
            يساعدك هذا الخيار الحصول على موظفين بدوام جزئي لتغطية أوقات الذروة
            أو حتى تخليص الأعمال بجميع الاوقات لوظائف مسائية و وظائف صباحية
            ووظائف نهاية الأسبوع مثل المطاعم والمقاهي والشركات الناشئة وقطاع
            التجزئة.
            <br />
            <Link to="/user/signup" className="tag-link">
              {'<'} انضم معنا
            </Link>
            <p className="tag-title">مناسب لـ</p>
            <span className="tag">
              مطاعم &nbsp;#مقاهي&nbsp; #شركات_ناشئة# &nbsp;
            </span>
            <img src={partial} alt="partial" className="tag-icon" />
            <br />
          </TabPane>
          <TabPane tab=" عقود" key="3" forceRender={true}>
            هذا الخيار يساعدك على إيجاد موظفين لعقود مؤقتة أو موسمية قد تمتد
            لشهر أو عدة أشهر تناسب الشركات التي تحصل على عقود مؤقتة مثل المشاريع
            أو تعمل اثناء المواسم الطويله مثل الصيف
            <br />
            <Link to="/user/signup" className="tag-link">
              {'<'} انضم معنا
            </Link>
            <p className="tag-title">مناسب لـ</p>
            <span className="tag">
              وظائف_صيفية &nbsp;#رمضان&nbsp; #مشاريع# &nbsp;
            </span>
            <img src={contract} alt="contract" className="tag-icon" />
            <br />
          </TabPane>

          <TabPane
            tab=" تطوعي"
            key="4"
            className="custom-tab"
            forceRender={true}
          >
            مجاناً تستطيع الجهات الخيرية والقطاع غير الربحي استخدام المنصة
            للحصول على متطوعين ، فاذا كنت تمثل هذه القطاعات أو مايشابهها انظم
            معنا
            <br />
            <Link to="/user/signup" className="tag-link">
              {'<'} انضم معنا
            </Link>
            <p className="tag-title">مناسب لـ</p>
            <span className="tag">
              تطوع_صحي &nbsp;#تطوع_خيري&nbsp; #تطوع_اجتماعي# &nbsp;
            </span>
            <img src={voluntery} alt="voluntery" className="tag-icon" />
            <br />
          </TabPane>
        </Tabs>
      </Col>
      <Col md={12} sm={24} className="services-content">
        <h2 className="title">خدماتنا</h2>
        <p className="desc">
          ضغط الوقت يمكن في الواقع أن يكون مفيداً، <br /> فهو يساعد على تركيز
          الذهن وعدم التفكير <br />
          في التسويف، وخفض عدد البدائل التي يمكن التفكير بها
        </p>
      </Col>
    </Row>
  );
};

export default withTranslation()(HowItWorks);
