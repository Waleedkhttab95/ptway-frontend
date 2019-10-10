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
              <Link to={'/admin/statistics'} className='sidebar-elm'>احصائيات بقيم مدخلة</Link>
              <Link to={'/admin/percentage'} className='sidebar-elm'>احصائيات بدون قيم مدخلة</Link>
              <Link to={'/statistics'} className='sidebar-elm'>العنصر الثاني</Link>


            </Col>
           
       
    )
}
export default Sidebar;