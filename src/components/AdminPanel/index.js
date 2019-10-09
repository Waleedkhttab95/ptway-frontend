import React,{Component} from 'react';
import 'antd/dist/antd.css';
import './index.scss';
import { Row, Col } from 'antd';
import Sidebar from './Sidebar';

const AdminPanel = (WrappedComponent) => {
  const component = class extends Component {
    render () {
      return (
  
          <Row gutter={24} className='dashboard'>
              <Col md={20} className='dashboard-container'>
                <div className='wrapp-container'>
                <WrappedComponent {...this.props} />
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