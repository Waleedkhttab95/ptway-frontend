import React from 'react';
import 'antd/dist/antd.css';
import './index.scss';
import { Statistic, Row, Col, Button } from 'antd';
import logo from '../../images/ptway.svg'
import {Link} from 'react-router-dom';
const Sidebar = ()=>{

    return(

            <Col md={4} className='sidebar'>
                <div className='admin-logo'>
                <img src={logo} alt=''/>
                </div>
              <Link to={'/admin/statistics'} className='sidebar-elm'>احصائيات بالاعتماد على قيم مدخلة</Link>
              <Link to={'/admin/percentage'} className='sidebar-elm'>احصائيات بدون قيم مدخلة</Link>
              <Link to={'/admin/company'} className='sidebar-elm'>احصائيات الشركات</Link>


            </Col>
           
       
    )
}
export default Sidebar;