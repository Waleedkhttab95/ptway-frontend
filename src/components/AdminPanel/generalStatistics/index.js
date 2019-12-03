import React from 'react';
import 'antd/dist/antd.css';
import './index.scss';
import { connect } from 'react-redux';
import { DatePicker } from 'antd';
import GeneralUserStatistics from './users';
import GeneralCompanyStatistics from './companies';
import GeneralJobsStatistics from './jobs';
import {
  dailyStatistics,
  weeklyStatistics,
  monthlyStatistics,
  periodStatistics
} from '../../../store/actions/generalStatistics';
const { RangePicker } = DatePicker;

class generalStatistics extends React.Component {
  state = {
    daily: ''
  };
  componentDidMount() {
    const { getDailyAds } = this.props;
    getDailyAds();
  }
  weeklyChange = date => {
    const { getWeeklyAds } = this.props;
    getWeeklyAds({
      date
    });
  };
  monthlyChange = date => {
    const { getMonthlyAds } = this.props;
    getMonthlyAds({
      date
    });
  };
  periodChange = date => {
    const { getPeriodAds } = this.props;
    getPeriodAds({
      start_date: date[0],
      end_date: date[1]
    });
  };
  render() {
    return (
      <React.Fragment>
        <div style={{ padding: '40px 40px 0 0' }}>
          <label>بحث أسبوعي :</label>
          <DatePicker
            onChange={this.weeklyChange}
            placeholder={'اختر التاريخ'}
            style={{ width: '250px', marginLeft: '20px' }}
          />
          <label>بحث شهري :</label>
          <DatePicker
            onChange={this.monthlyChange}
            placeholder={'اختر التاريخ'}
            style={{ width: '250px', marginLeft: '20px' }}
          />
          <label>بحث بين فترتين :</label>
          <RangePicker
            onChange={this.periodChange}
            style={{ width: '250px', marginLeft: '20px' }}
          />
        </div>
        <GeneralUserStatistics {...this.props} />
        <GeneralCompanyStatistics {...this.props} />
        <GeneralJobsStatistics {...this.props} />
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
    getMonthlyAds: params => dispatch(monthlyStatistics(params)),
    getPeriodAds: params => dispatch(periodStatistics(params))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(generalStatistics);
