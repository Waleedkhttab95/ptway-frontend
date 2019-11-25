import React from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { logout } from '../../../store/actions/userAction';
import history from '../../../_core/history';
const Logout = props => {
  const { logout } = props;
  return (
    <Button
      className="logout"
      onClick={async () => {
        await logout();
        history.push('/');
      }}
    >
      تسجيل خروج
    </Button>
  );
};

const mapPropsToState = ({ user }) => {
  return {
    user
  };
};
const mapPropsToDispatch = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};
export default connect(
  mapPropsToState,
  mapPropsToDispatch
)(Logout);
