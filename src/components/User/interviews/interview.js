import React from 'react';
import { Row, Col, Divider, Button, Modal, Result, Checkbox } from 'antd';
import './index.scss';
import interviewsData from '../../../services/user/interviews';
import Header from '../../Header';

const { changeAppointmentStatus, getInterview } = interviewsData;
export class Interview extends React.Component {
  state = {
    showSuccessModal: false,
    showCancelModal: false
  };

  async componentDidMount() {
    const id = this.props.match?.params?.id;
    if (id) {
      const job = await getInterview({ id });
      this.setState({
        job
      });
    }
  }

  approveInterview = async (appointmentId, jobId) => {
    await changeAppointmentStatus({
      appointmentId,
      status: true,
      jobAd: jobId
    });
    this.setState({
      showSuccessModal: true
    });
  };

  cancelInterview = async jobId => {
    const { reason, appointmentId } = this.state;
    await changeAppointmentStatus({
      appointmentId,
      status: false,
      reason,
      jobAd: jobId
    });
    this.setState({
      showCancelModal: false
    });
  };

  cancelInterviewModal = appointmentId => {
    this.setState({
      appointmentId,
      showCancelModal: true
    });
  };

  handleCancel = () => {
    this.setState({
      showSuccessModal: false,
      showCancelModal: false
    });
  };

  onCancelReasonChange = event => {
    this.setState({
      reason: event.target.value
    });
  };
  render() {
    const appointment = this.props?.job
      ? this.props?.job?.appointment
      : this.state?.job?.appointment;

    const { showSuccessModal, showCancelModal, reason } = this.state;
    return (
      <>
        {window.innerWidth < 768 && <Header />}
        <Row justify="center" type="flex">
          <Col span={24} className="interview-information">
            <h5>استعد للمقابلة الوظيفية</h5>
            <p>
              لقد تقدمت على وظيفة: {appointment?.jobAd?.job_Name} في شركة:
              {appointment?.company?.companyName}
              <br /> بإمكانك الحضور في هذه الأوقات
            </p>
            <Divider />
            <Row>
              <span className="interview-days">أيام المقابلات:</span>
              {appointment?.days.map(elm => (
                <span className="interview-day" key={elm}>
                  {elm}
                </span>
              ))}
            </Row>
            <br /> <br />
            <Row>
              <Col span={12}>
                <span className="interview-days">إلى:</span>
                <span>{appointment?.endDate}</span>
              </Col>
              <Col span={12}>
                <span className="interview-days">تبدأ بتاريخ:</span>
                <span>{appointment?.startDate}</span>
              </Col>
            </Row>
            <br /> <br />
            <Row>
              <Col span={12}>
                <span className="interview-days">إلى الساعة:</span>
                <span>{appointment?.endHour}</span>
              </Col>
              <Col span={12}>
                <span className="interview-days">من الساعة:</span>
                <span>{appointment?.startHour}</span>
              </Col>
            </Row>
            <Divider></Divider>
            <p>{appointment?.Address}</p>
            <a className="google-map-link">{appointment?.GoogleMapAddress}</a>
            <Divider></Divider>
            <Row>
              <Col span={12}>
                <img src={require('../../../images/phone.svg')} />
                <span>{appointment?.appointmentLeadNumber}</span>
              </Col>
              <Col span={12}>
                <span className="interview-days">مسؤول المقابلات:</span>
                <span>{appointment?.appointmentLeadName}</span>
              </Col>
            </Row>
            <Row type="flex" justify="center">
              <Button
                className="ready interview-btns"
                onClick={() =>
                  this.approveInterview(appointment._id, appointment.jobAd._id)
                }
              >
                نعم، أنا جاهز
              </Button>
            </Row>
            <Row type="flex" justify="center">
              <Button
                className="cancel interview-btns"
                onClick={() => this.cancelInterviewModal(appointment._id)}
              >
                لست جاهز الآن
              </Button>
            </Row>
            <Modal
              visible={showSuccessModal}
              footer={false}
              className="success-modal"
              onCancel={this.handleCancel}
            >
              <Result
                status="success"
                title="كل التوفيق في المقابلة"
                subTitle="أظهر حماسك وتمتع بالثقة والتزم بالموعد"
                extra={
                  <>
                    <Row type="flex" justify="center">
                      <Button
                        className="ready interview-btns"
                        onClick={this.handleCancel}
                      >
                        العودة لصفحة العروض
                      </Button>
                    </Row>
                    <Row type="flex" justify="center">
                      <Button
                        className="cancel interview-btns"
                        onClick={this.handleCancel}
                      >
                        راجع تفاصيل الموعد
                      </Button>
                    </Row>
                  </>
                }
              />
            </Modal>
            <Modal
              visible={showCancelModal}
              footer={false}
              onCancel={this.handleCancel}
            >
              <div className="cancel-interview-modal">
                <h3>يهمنا رأيك، لماذا لست جاهز للمقابلة؟</h3>
                <Checkbox
                  value="أوقات المقابلات غير مناسب"
                  onChange={this.onCancelReasonChange}
                >
                  أوقات المقابلات غير مناسب
                </Checkbox>
                <br />
                <Checkbox
                  value="لم أعد متهم بهذه الوظيفة"
                  onChange={this.onCancelReasonChange}
                >
                  لم أعد متهم بهذه الوظيفة
                </Checkbox>
                <br />
                <Checkbox
                  value=" لست متفرغ للوظيفة حالياً"
                  onChange={this.onCancelReasonChange}
                >
                  لست متفرغ للوظيفة حالياً
                </Checkbox>
                <br />
                <Checkbox
                  value="موقع المقابلة بعيد جداً"
                  onChange={this.onCancelReasonChange}
                >
                  موقع المقابلة بعيد جداً
                </Checkbox>
                <br />
                <Checkbox value="آخر" onChange={this.onCancelReasonChange}>
                  آخر
                </Checkbox>
                <br />
                <Row type="flex" justify="center">
                  <Button
                    className={reason ? 'send-btn btn' : 'btn'}
                    disabled={!reason ? true : false}
                    onClick={() => this.cancelInterview(appointment.jobAd._id)}
                  >
                    أنشر
                  </Button>
                </Row>
              </div>
            </Modal>
          </Col>
        </Row>
      </>
    );
  }
}
