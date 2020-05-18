import React from 'react';
import { connect } from 'react-redux';
import { userInformation } from '../../store/actions/user/HomeActions';
import './style.scss';
import { Redirect } from 'react-router-dom';
import UserInfo from './userInfo';

class User extends React.Component {
  state = {
    status: ''
  };
  async componentDidMount() {
    const { userInformation } = this.props;
    await userInformation();
  }
  render() {
    const { status } = this.props.user.userInfo;
    console.log('status', this.props.user);

    return (
      <div>
        {this.props.user.userInfo && !status ? (
          <Redirect to={{ pathname: '/user-info' }} />
        ) : (
          <UserInfo {...this.props} />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ userS }) => {
  return {
    user: userS
  };
};
const mapDispatchToProps = dispatch => {
  return {
    userInformation: () => dispatch(userInformation())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(User);
