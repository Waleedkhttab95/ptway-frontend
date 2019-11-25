import React from 'react';
import 'antd/dist/antd.css';
import './index.scss';
import { Row, Col } from 'antd';
import Sidebar from './Sidebar';
import Logout from './Logout';

const AdminPanel = WrappedComponent => {
  const component = props => {
    return (
      <Row className="dashboard">
        <Col md={20}>
          <div className="dashboard-container">
            <div className="header">
              <span className="header-title">لوحة التحكم</span>
              <Logout />
            </div>
            <WrappedComponent {...props} />
          </div>
        </Col>

        <Sidebar />
      </Row>
    );
  };
  return component;
};

export default AdminPanel;
