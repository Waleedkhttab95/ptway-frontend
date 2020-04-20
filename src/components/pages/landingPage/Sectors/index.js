import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col, Collapse } from 'antd';
import './style.scss';
import { withTranslation } from 'react-i18next';
const { Panel } = Collapse;
const Sectors = () => {
  // const { i18n } = props;
  return (
    <React.Fragment>
      <Row className="sectors">
        <h2 className="title">القطاعات</h2>
        <p className="desc">
          نغطي معظم مدن المملكة، ونتوسع يومياً.
          <br />
          نعمل في قطاعات ومجالات مختلفة في السوق السعودي، كالضيافة، قطاع
          التجزئة، القطاع الصحي والمزيد...
        </p>
      </Row>
      <Row>
        <Row className="sector-elms">
          <Row>
            <Col md={24} className="sector-elm">
              <Collapse
                bordered={false}
                className="sector-collapse"
                defaultActiveKey={'1'}
              >
                <Panel header="قطاع التجزئة" className="pnl-content" key={1}>
                  <div className="panel-desc">
                    <h4> كاشير &nbsp;</h4>
                    <h4>مصفف رفوف</h4>
                    <h4>استقبال</h4>
                  </div>
                  <div className="panel-desc">
                    <h4> &nbsp;أمن &nbsp;</h4>
                    <h4> &nbsp;الصيانة &nbsp;</h4>
                    <h4> &nbsp;مبيعات &nbsp;</h4>
                  </div>
                  <div className="panel-desc">
                    <h4>امين مستودع</h4>
                  </div>
                </Panel>
              </Collapse>
            </Col>
          </Row>
          <Row>
            <Col md={24} className="sector-elm">
              <Collapse bordered={false} className="sector-collapse">
                <Panel header="الفعاليات" className="pnl-content">
                  <div className="panel-desc">
                    <h4> &nbsp;منظم </h4>
                    <h4>مدخل بيانات</h4>
                    <h4> &nbsp;استقبال </h4>
                  </div>
                  <div className="panel-desc">
                    <h4> &nbsp;ممثل &nbsp;</h4>
                    <h4>فني صوت</h4>
                    <h4>&nbsp;مترجم &nbsp;</h4>
                  </div>
                  <div className="panel-desc">
                    <h4>قارئ صوتي</h4>
                    <h4>مدير فعاليات</h4>
                  </div>
                </Panel>
              </Collapse>
            </Col>
          </Row>
          <Row>
            <Row>
              <Col md={24} className="sector-elm">
                <Collapse bordered={false} className="sector-collapse">
                  <Panel header="القطاع الصحي" className="pnl-content">
                    <div className="panel-desc">
                      <h4> &nbsp;طبيب &nbsp;</h4>
                      <h4>فني اشعة</h4>
                      <h4> &nbsp;استقبال &nbsp;</h4>
                    </div>
                    <div className="panel-desc">
                      <h4> &nbsp;محاسب &nbsp;</h4>
                      <h4> &nbsp;طوارئ&nbsp;</h4>
                      <h4> &nbsp;ممرض &nbsp;</h4>
                    </div>
                  </Panel>
                </Collapse>
              </Col>
            </Row>
          </Row>
        </Row>
      </Row>
      <Row>
        <Row className="sector-elms">
          <Row>
            <Col md={24} className="sector-elm">
              <Collapse bordered={false} className="sector-collapse">
                <Panel header="قطاع الضيافة" className="pnl-content">
                  <div className="panel-desc">
                    <h4>&nbsp;باريستا &nbsp;</h4>
                    <h4>مقدم طعام</h4>
                    <h4> &nbsp;طباخ &nbsp;</h4>
                  </div>
                  <div className="panel-desc">
                    <h4> &nbsp;كاشير &nbsp;</h4>
                    <h4>استقبال</h4>
                  </div>
                </Panel>
              </Collapse>
            </Col>
          </Row>
          <Row>
            <Col md={24} className="sector-elm">
              <Collapse bordered={false} className="sector-collapse">
                <Panel header="الشركات" key={1} className="pnl-content">
                  <div className="panel-desc">
                    <h4>مبرمج</h4>
                    <h4>كول سنتر</h4>
                    <h4>استقبال</h4>
                  </div>
                  <div className="panel-desc">
                    <h4>محاسب</h4>
                    <h4>سكرتارية</h4>
                    <h4>مصمم</h4>
                  </div>
                  <div className="panel-desc">
                    <h4>مدير عمليات</h4>
                    <h4>UX,UI</h4>
                  </div>
                </Panel>
              </Collapse>
            </Col>
          </Row>
          <Row>
            <Row>
              <Col md={24} className="sector-elm">
                <Collapse bordered={false} className="sector-collapse">
                  <Panel header="القطاع الصناعي" className="pnl-content">
                    <div className="panel-desc">
                      <h4> &nbsp;سائق&nbsp;</h4>
                      <h4>اللوجستي</h4>
                      <h4>الماشندايزر</h4>
                    </div>
                    <div className="panel-desc">
                      <h4>مهندس صناعي</h4>
                      <h4> &nbsp;فني &nbsp;</h4>
                    </div>
                  </Panel>
                </Collapse>
              </Col>
            </Row>
          </Row>
        </Row>
      </Row>
    </React.Fragment>
  );
};

export default withTranslation()(Sectors);
