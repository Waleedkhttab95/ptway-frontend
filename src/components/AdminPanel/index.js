import React from 'react';
import 'antd/dist/antd.css';
import './index.scss';
import { Statistic, Row, Col, Button } from 'antd';
import AgeStatistics from './AgeStatistic'

const AdminPanel = ()=>{

    return(
        <div>
            <Row gutter={20} >
            <Col md={2}></Col>
        <AgeStatistics/>
   
     <Col md={6} className='statistic'>
 
      <Statistic title="عدد المستخدمين بناءً على المدينة" value={112893} />
      <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
    </Col>
  </Row>
        </div>
    )
}
export default AdminPanel;