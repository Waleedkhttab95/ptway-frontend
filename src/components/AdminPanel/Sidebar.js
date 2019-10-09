import React from 'react';
import 'antd/dist/antd.css';
import './index.scss';
import { Statistic, Row, Col, Button } from 'antd';
import {Link} from 'react-router-dom';
const Sidebar = ()=>{

    return(

            <Col md={4} className='sidebar'>
                <div className='admin-logo'>
                <img src='../../images/ptway.svg' alt=''/>
                </div>
              <div className='sidebar-title'> لوحة التحكم </div>
              <Link to={'/admin/statistics'} className='sidebar-elm'>الإحصائيات</Link>
              <Link to={'/statistics'} className='sidebar-elm'>العنصر الاول</Link>
              <Link to={'/statistics'} className='sidebar-elm'>العنصر الاول</Link>


            </Col>
           
       
    )
}
export default Sidebar;