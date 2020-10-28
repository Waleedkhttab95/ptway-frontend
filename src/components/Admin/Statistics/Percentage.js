import React from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import './statistics.scss';
import baseRequest from '../../../_core/index';
import { weeklyGrowth } from '../../../store/actions/statisticsAction';
import { Row, Col, Card } from 'antd';
import statatisticsService from '../../../services/statisticsService';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

const { SearchUsersJobCategory } = statatisticsService;

class Percentage extends React.Component {
  state = {
    allUsers: '',
    userJobCategory: 0,
    exportUserData: false
  };

  async componentDidMount() {
    const { growthPercentage } = this.props;
    growthPercentage();
    const userJobCategory = await SearchUsersJobCategory();
    this.setState({ userJobCategory });

    baseRequest.get('/get/allUsers_Genders_CV').then(allUsers => {
      this.setState({
        allUsers
      });
    });
  }
  render() {
    const { userJobCategory } = this.state;
    const {
      NumberOfUsers,
      NumberOfMaleUsers,
      NumberOfFemaleUsers,
      NumberOfUsersWithCV
    } = this.state.allUsers;

    return (
      <React.Fragment>
        <Row className="user-percentages">
          <Col md={5}>
            <div className="container user-mun">
              <Card
                className="card-body user-mun"
                title="عدد المستخدمين"
                bordered={false}
              >
                <p className="card-text">
                  {this.state.allUsers !== null ? NumberOfUsers : ''}
                </p>
              </Card>
            </div>
          </Col>
          <Col md={5}>
            <div className="container male-user-num ">
              <Card
                className="card-body male-user-num"
                title=" عدد المستخدمين الذكور"
                bordered={false}
              >
                <p className="card-text">
                  {this.state.allUsers !== null ? NumberOfMaleUsers : ''}
                </p>
              </Card>
            </div>
          </Col>
          <Col md={5}>
            <div className="container female-user-mun">
              <Card
                className="card-body female-user-mun"
                title="عدد المستخدمين الاناث"
                bordered={false}
              >
                <p className="card-text">
                  {this.state.allUsers !== null ? NumberOfFemaleUsers : ''}
                </p>
              </Card>
            </div>
          </Col>
          <Col md={5}>
            <div className="container cv-user-num">
              <Card
                className="card-body cv-user-num"
                title=" مستخدمون لديهم سيرة ذاتية"
                bordered={false}
              >
                <p className="card-text">
                  {this.state.allUsers !== null ? NumberOfUsersWithCV : ''}
                </p>
              </Card>
            </div>
          </Col>
        </Row>

        <Row>
          <Col span={11} offset={12}>
            <h4></h4>
            <Card
              title={
                <h4 style={{ color: 'black', textAlign: 'right' }}>
                  عدد المستخدمين الذين ليس لديهم تصنيف للوظيفة
                </h4>
              }
              extra={
                userJobCategory?.users && (
                  <div>
                    <ReactHTMLTableToExcel
                      id="test-table-xls-button"
                      className="download-table-xls-button export-user"
                      table="table-to-xls"
                      filename="tablexls"
                      sheet="tablexls"
                      buttonText={<>تصدير أسماء المستخدمين</>}
                    />
                    <table id="table-to-xls" style={{ display: 'none' }}>
                      <tr>
                        <th>الايميل</th>
                      </tr>
                      {userJobCategory &&
                        userJobCategory?.users.map((elm, index) => {
                          return (
                            <tr key={index}>
                              <td>{elm.user?.email}</td>
                            </tr>
                          );
                        })}
                    </table>
                  </div>
                )
              }
              style={{ width: '100%', borderRadius: '16px' }}
            >
              <b>{userJobCategory?.usersCount}</b>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    statistics: state.statistics
  };
};
const mapDispatchToProps = dispatch => {
  return {
    growthPercentage: () => dispatch(weeklyGrowth())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Percentage);
