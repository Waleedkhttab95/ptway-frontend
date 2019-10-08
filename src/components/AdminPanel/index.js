import React from 'react';
import 'antd/dist/antd.css';
import './index.scss';
import { Statistic, Row, Col, Button } from 'antd';
import AgeStatistics from './AgeStatistic'

const AdminPanel = ()=>{

    return(
        
            <Row gutter={20} >
            <Col md={2}></Col>
        <AgeStatistics/>

  </Row>
       
    )
}
export default AdminPanel;