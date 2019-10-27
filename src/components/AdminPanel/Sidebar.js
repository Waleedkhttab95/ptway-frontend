import React from 'react';
import 'antd/dist/antd.css';
import './index.scss';
import { Statistic, Row, Col, Button,Menu, Icon } from 'antd';
import logo from '../../images/ptway.svg'
import {Link} from 'react-router-dom';
const { SubMenu } = Menu;
const Sidebar = ()=>{

    return(

            <Col md={4} className='sidebar'>
                <div className='admin-logo'>
                 <img src={logo} alt=''/>
                </div>
       <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
         >
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="appstore" />
              <span>احصائيات المستخدمين</span>
            </span>
          }
        >

            <Menu.Item key="1">
            <Link to={'/admin/statistics'} >احصائيات بالاعتماد على قيم مدخلة</Link>              
            </Menu.Item>
            <Menu.Item key="2">
            <Link to={'/admin/percentage'} >احصائيات بدون قيم مدخلة</Link>
            </Menu.Item>

        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="appstore" />
              <span>احصائيات الشركات</span>
            </span>
          }
        >
          <Menu.Item key="4">
          <Link to={'/admin/company'} >احصائيات الشركات</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub3"
          title={
            <span>
              <Icon type="appstore" />
              <span>البحث</span>
            </span>
          }
        >
          <Menu.Item key="6">
          <Link to={'/admin/search/user'} >البحث عن المستخدمين</Link>
          </Menu.Item>
          <Menu.Item key="7">
          <Link to={'/admin/search/company'} >البحث عن الشركات</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub4"
          title={
            <span>
              <Icon type="appstore" />
              <span>المحتوى</span>
            </span>
          }
        >
          <Menu.Item key="8">
          <Link to={'/admin/content/cities'} >محتوى المدن</Link>
          </Menu.Item>
          {/* <Menu.Item key="9">
          <Link to={'/admin/content/company'} >البحث عن الشركات</Link>
          </Menu.Item> */}
        </SubMenu>
      </Menu>
            </Col>
           
       
    )
}
export default Sidebar;