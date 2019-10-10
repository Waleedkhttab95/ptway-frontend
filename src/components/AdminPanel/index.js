import React,{Component} from 'react';
import 'antd/dist/antd.css';
import './index.scss';
import { Row, Col,Button } from 'antd';
import Sidebar from './Sidebar';

const AdminPanel = (WrappedComponent) => {
  const component = class extends Component {
    render () {
      return (
  
          <Row gutter={24} className='dashboard'>
              <Col md={20}>
                <div  className='dashboard-container'>
                  <div className='header'>
                    <span className='header-title'>
                    لوحة التحكم
                    </span>
                    <Button className='logout'>تسجيل خروج</Button>
                    </div>
                <div className='wrapp-container'>
                <WrappedComponent {...this.props} />
                </div>

                </div>
              </Col>

              <Sidebar />
          </Row>
      );
    }
  };
  return component;
};

export default AdminPanel;