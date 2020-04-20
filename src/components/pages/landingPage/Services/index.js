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
          defaultActiveKey="4"
          // animated={false}
          className="works-tab"
        >
          <TabPane tab=" تطوعي" key="1" className="custom-tab">
            تستطيع الجهات الخيرية ولقطاع غير الربحي على اسخدام المنصة للحصول على
            متطوعين بشكل مجاني تماماً اذا كنت تمثل هذه القطاعات أو مايشابهها
            <br />
            <p className="tag-title">مناسب لـ</p>
            <span className="tag">
              تطوع_صحي &nbsp;#تطوع_خيري&nbsp; #تطوع_اجتماعي# &nbsp;
            </span>
            <img src={voluntery} alt="voluntery" className="tag-icon" />
            <br />
            <Link to="/user/signup" className="tag-link">
              {'<'} انضم معنا &nbsp; &nbsp;
            </Link>
          </TabPane>
          <TabPane tab=" عقود" key="2">
            هذا الخيار يساعدك على إيجاد موظفين لعقود مؤقتة أو موسمية قد تمتد
            لشهر أو عدة أشهر تناسب الشركات التي تحصل على عقود مؤقتة مثل المشاريع
            أو تعمل اثناء المواسم الطويله مثل الصيف
            <br />
            <p className="tag-title">مناسب لـ</p>
            <span className="tag">
              وظائف_صيفية &nbsp;#رمضان&nbsp; #مشاريع# &nbsp;
            </span>
            <img src={contract} alt="contract" className="tag-icon" />
            <br />
            <Link to="/user/signup" className="tag-link">
              {'<'} انضم معنا &nbsp; &nbsp;
            </Link>
          </TabPane>
          <TabPane tab="جزئي" key="3">
            يساعدك هذا الخيار الحصول على موظفين بدوام جزئي لتغطية أوقات الذروة
            أو حتى تخليص الاعمال بجميع الاوقات لوظائف مسائية ووظائف صباحية مثل
            المطاعم والمقاهي والشركات الناشئة وقطاع التجزئة
            <br />
            <p className="tag-title">مناسب لـ</p>
            <span className="tag">
              مطاعم &nbsp;#مقاهي&nbsp; #شركات_ناشئة# &nbsp;
            </span>
            <img src={partial} alt="partial" className="tag-icon" />
            <br />
            <Link to="/user/signup" className="tag-link">
              {'<'} انضم معنا &nbsp; &nbsp;
            </Link>
          </TabPane>
          <TabPane tab="يومي" key="4">
            تستطيع من خلال هذا الخيار الحصول على موظفين للعمل ليوم واحد أو لعدة
            أيام حسب الطلب، يناسب الشركات المهتمة بتنظيم المعارض والمؤتمرات
            والإحتفالات والتسويق والترويج
            <br />
            <p className="tag-title">مناسب لـ</p>
            <span className="tag">
              المناسبات &nbsp;#مواسم_السعودية&nbsp; #المعارض# &nbsp; &nbsp;
            </span>
            <img src={calender} alt="calender" className="tag-icon" />
            <br />
            <Link to="/user/signup" className="tag-link">
              {'<'} انضم معنا &nbsp; &nbsp;
            </Link>
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
