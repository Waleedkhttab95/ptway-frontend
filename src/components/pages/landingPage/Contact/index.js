import React from 'react';
import { Row, Col, Radio, Input } from 'antd';
import './contact.scss';
import Illustration_Digital from '../../../../images/Illustration_Digital.svg';
import { withTranslation } from 'react-i18next';

const { TextArea } = Input;
const ContactUs = props => {
  const { i18n } = props;
  return (
    <Row className="contact-container">
      <h3 className="contact-title">{i18n.t('home.contact')} </h3>
      <div className="contact-us">
        <Col md={12}>
          <img
            style={{ marginTop: '100px' }}
            src={Illustration_Digital}
            alt="Illustration_Digital"
            className="contact-us-img"
          />
        </Col>
        <Col md={12}>
          <div className="element">
            <h4 className="element-title"> {i18n.t('home.contact-reason')}</h4>
            <Radio.Group value={'مساعدة مالية'} className="radio-options">
              <Radio value={1}>{i18n.t('home.general-help')}</Radio>
              <Radio value={2}> {i18n.t('home.contact-report')}</Radio>
              <Radio value={3}>{i18n.t('home.contact-ads')}</Radio>
            </Radio.Group>
            <form className="contact-form">
              <Input
                placeholder={i18n.t('home.contact-fullname')}
                className="contact-input"
              />
              <Input
                placeholder={i18n.t('home.contact-email')}
                className="contact-input"
              />
              <Input
                placeholder={i18n.t('home.contact-title')}
                className="contact-input"
              />
              <TextArea
                rows={4}
                className="contact-input"
                placeholder={i18n.t('home.contact-message')}
              />
              <button className="contact-btn">
                {i18n.t('home.contact-send-btn')}
              </button>
            </form>
          </div>
        </Col>
      </div>
    </Row>
  );
};

export default withTranslation()(ContactUs);
