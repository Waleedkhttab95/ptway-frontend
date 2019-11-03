import React from 'react';
import 'antd/dist/antd.css';
import './index.scss';
import { Row, Col, Button } from 'antd';
import Sidebar from './Sidebar';

const AdminPanel = WrappedComponent => {
  const component = props => {
    return (
      <Row className="dashboard">
        <Col md={20}>
          <div className="dashboard-container">
            <div className="header">
              <span className="header-title">لوحة التحكم</span>
              <Button className="logout">تسجيل خروج</Button>
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
