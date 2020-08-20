import React from 'react';
import './style.scss';
import { Form, Icon, Input, Button, Checkbox, Select, Alert } from 'antd';
import { Link } from 'react-router-dom';
import Footer from '../../Footer';
import statatisticsService from '../../../services/statisticsService';
import { companySignup, userSignup } from '../../../store/actions/userAction';
import UserSignup from '../../User/signup';
import { connect } from 'react-redux';
import Header from '../../Header';
import SEO from '../../SEO';

const { getAllCompanyMajors, getCompanySMajor } = statatisticsService;
const { Option } = Select;

class CompanySignupForm extends React.Component {
  state = {
    sectors: [],
    jobTypes: []
  };
  componentDidMount = async () => {
    window.scrollTo(0, 0);
    const sectors = await getAllCompanyMajors();
    const jobTypes = await getCompanySMajor();
    this.setState({
      sectors,
      jobTypes
    });
  };
  handleSubmit = async e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const { register, history } = this.props;
        await register({
          companyName: values.companyname,
          email: values.email,
          password: values.password,
          sector: values.sector,
          specialist: values.type,
          status: values.sector === '5c56c3572e168a2c30fe5dde' ? false : true
        });

        history.push('/company/profile');
      }
    });
  };

  render() {
    return <UserSignup />;
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    register: params => {
      return dispatch(companySignup(params));
    }
  };
};

const CompanyRegistration = Form.create({ name: 'CompanySignupForm' })(
  CompanySignupForm
);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyRegistration);
