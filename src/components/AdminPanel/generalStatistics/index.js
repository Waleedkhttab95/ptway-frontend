import React from 'react';
import 'antd/dist/antd.css';
import './index.scss';
import { connect } from 'react-redux';
import { DatePicker } from 'antd';
import UsergeneralStatistics from './users';
import CompanyGeneralStatistics from './companies';
import JobsGeneralStatistics from './jobs';
import {
  dailyStatistics,
  weeklyStatistics,
  monthlyStatistics
} from '../../../store/actions/generalStatistics';
const { RangePicker } = DatePicker;

class generalStatistics extends React.Component {
  componentDidMount() {
    const { getDailyAds } = this.props;
    getDailyAds();
  }
  weeklyChange = (date, dateString) => {
    const result = this.props.getWeeklyAds({
      date
    });
    console.log('result', result);
  };
  monthlyChange = (date, dateString) => {
    this.props.getMonthlyAds({
      date
    });
  };
  render() {
    return (
      <React.Fragment>
        <div style={{ padding: '40px 40px 0 0' }}>
          <DatePicker
            onChange={this.weeklyChange}
            placeholder={'اختر التاريخ'}
            style={{ width: '250px', marginLeft: '20px' }}
          />
          <DatePicker
            onChange={this.monthlyChange}
            placeholder={'اختر التاريخ'}
            style={{ width: '250px', marginLeft: '20px' }}
          />
          <RangePicker
            onChange={this.onChange}
            style={{ width: '250px', marginLeft: '20px' }}
          />
        </div>
        <UsergeneralStatistics {...this.props} />
        <CompanyGeneralStatistics {...this.props} />
        <JobsGeneralStatistics {...this.props} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ generalStatistics }) => {
  return {
    generalStatistics
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getDailyAds: () => dispatch(dailyStatistics()),
    getWeeklyAds: params => dispatch(weeklyStatistics(params)),
    getMonthlyAds: params => dispatch(monthlyStatistics(params))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(generalStatistics);
