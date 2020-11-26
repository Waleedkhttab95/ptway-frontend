import React from 'react';
import { LeftCircleFilled } from '@ant-design/icons';
import {
  Button,
  Col,
  Collapse,
  DatePicker,
  Divider,
  Form,
  Input,
  message,
  Modal,
  Row,
  Select
} from 'antd';
import moment from 'moment';
import applicants from '../../../services/company/applicants';

const { sendInterviewAppointments } = applicants;
const { Panel } = Collapse;
class AppointmentModalForm extends React.Component {
  onFinish = e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const { jobId, closeModal } = this.props;
        try {
          await sendInterviewAppointments({
            ...values,
            jobAd: jobId,
            endDate: moment(values.startDate[1]).format('DD/MM/YYYY'),
            startDate: moment(values.startDate[0]).format('DD/MM/YYYY')
          });
          message.success('تم إرسال الدعوات بنجاح');
          closeModal();
        } catch (error) {
          console.log('error');
        }
      }
    });
  };
  onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo.days);
  };
  render() {
    const { modalVisiable, closeModal } = this.props;
    const { getFieldDecorator } = this.props.form;
    const weekDays = [
      'الأحد',
      'الاثنين',
      'الثلاثاء',
      'الأربعاء',
      'الخميس',
      'الجمعة',
      'السبت'
    ];
    return (
      <Modal
        visible={modalVisiable}
        onCancel={closeModal}
        footer={false}
        width={782}
      >
        <Form
          name="basic"
          onSubmit={this.onFinish}
          onFinishFailed={this.onFinishFailed}
          className="appointments-form"
        >
          <h3>تفاصيل موعد المقابلة</h3>
          <h5>سيتم إرسال إشعار بالموعد لجميع المتقدمين</h5>
          <Collapse
            bordered={false}
            defaultActiveKey={['1', '2', '3']}
            expandIcon={({ isActive }) => (
              <LeftCircleFilled
                rotate={isActive ? 0 : 90}
                style={{ fontSize: '22px', color: '#e8e8e8' }}
              />
            )}
          >
            <Panel
              header={
                <>
                  <img src={require('../../../images/bag.svg')} />
                  {''}
                  <Divider orientation="left">أيام وأوقات المقابلات</Divider>
                </>
              }
              key="1"
              className="section-heading"
            >
              <label className="form-label"> الأيام المحددة في الأسبوع</label>
              <Form.Item>
                {getFieldDecorator('days', {
                  rules: [
                    {
                      required: true,
                      message: 'الرجاء ادخال أيام المقابلات'
                    }
                  ]
                })(
                  <Select mode="multiple" showArrow>
                    {weekDays?.map(elm => (
                      <Select.Option value={elm} key={elm}>
                        {elm}
                      </Select.Option>
                    ))}
                  </Select>
                )}
              </Form.Item>
              <Row gutter={20}>
                <Col span={12}>
                  <label className="form-label">إلى</label>
                  <Form.Item>
                    {getFieldDecorator('endHour', {
                      rules: [
                        {
                          required: true,
                          message: 'الرجاء ادخال الموعد'
                        }
                      ]
                    })(<Input />)}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <label className="form-label">من الساعة</label>
                  <Form.Item>
                    {getFieldDecorator('startHour', {
                      rules: [
                        {
                          required: true,
                          message: 'الرجاء ادخال الموعد'
                        }
                      ]
                    })(<Input />)}
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={20}>
                <Col span={12}>
                  {/* <label className="form-label">تاريخ نهاية المواعيد</label>
                  <Form.Item>
                    {getFieldDecorator('endDate', {
                      rules: [
                        {
                          required: true,
                          message: 'الرجاء ادخال تاريخ نهاية المواعيد'
                        }
                      ]
                    })(<DatePicker placeholder="" />)}
                  </Form.Item> */}
                </Col>
                <Col span={12}>
                  <label className="form-label">تاريخ المواعيد</label>
                  <Form.Item>
                    {getFieldDecorator('startDate', {
                      rules: [
                        {
                          required: true,
                          message: 'الرجاء ادخال تاريخ المواعيد'
                        }
                      ]
                    })(
                      <DatePicker.RangePicker
                        placeholder={['تاريخ البداية', 'تاريخ النهاية']}
                      />
                    )}
                  </Form.Item>
                </Col>
              </Row>
            </Panel>
            <Panel
              header={
                <>
                  <img src={require('../../../images/comp-location.svg')} />{' '}
                  <Divider orientation="left">مسؤول المقابلات والمكان</Divider>
                </>
              }
              key="2"
              className="section-heading"
            >
              <Row gutter={20}>
                <Col span={12}>
                  <label className="form-label">رقم الجوال (اختياري(</label>
                  <Form.Item name="leadNumber">
                    {getFieldDecorator('leadNumber')(<Input />)}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <label className="form-label">
                    اسم مسؤول المقابلات (اختياري)
                  </label>
                  <Form.Item name="leadName">
                    {getFieldDecorator('leadName')(<Input />)}
                  </Form.Item>
                </Col>
              </Row>

              <label className="form-label">العنوان</label>
              <Form.Item>
                {getFieldDecorator('address', {
                  rules: [
                    {
                      required: true,
                      message: 'الرجاء ادخال العنوان'
                    }
                  ]
                })(<Input.TextArea rows={4} />)}
              </Form.Item>
              <label className="form-label">رابط الموقع (خرائط قوقل)</label>
              <Form.Item>
                {getFieldDecorator('googleMapAddress', {
                  rules: [
                    {
                      required: true,
                      message: 'الرجاء ادخال رابط الموقع'
                    }
                  ]
                })(<Input />)}
              </Form.Item>
            </Panel>
          </Collapse>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="submit-btn">
              إرسال
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

const AppointmentModal = Form.create({ name: 'basic' })(AppointmentModalForm);

export default AppointmentModal;
