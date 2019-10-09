import React, { Component } from 'react';
import Sidebar from './Sidebar';
import { Statistic, Row, Col, Button } from 'antd';


const RenderComponent = (WrappedComponent) => {
  const component = class extends Component {
    render () {
      return (
       
          <Row className='dashboard'>
              <Sidebar />
                <div className='wrapp-container'>
                <WrappedComponent {...this.props} />
                </div>
              
            </Row>
      );
    }
  };
  return component;
};

export default RenderComponent;
