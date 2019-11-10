import React from 'react';
import 'antd/dist/antd.css';
import './index.scss';
import { Col, Menu, Icon } from 'antd';
import logo from '../../images/ptway.svg';
import { Link } from 'react-router-dom';
const { SubMenu } = Menu;

const Sidebar = () => {
  return (
    <Col md={4} className="sidebar">
      <div className="admin-logo">
        <img src={logo} alt="" />
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
          <Menu.Item key="/admin/statistics">
            <Link to="/admin/statistics"> بالاعتماد على قيم مدخلة</Link>
          </Menu.Item>
          <Menu.Item key="/admin/percentage">
            <Link to="/admin/percentage"> بدون قيم مدخلة</Link>
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
          <Menu.Item key="/admin/company">
            <Link to="/admin/company"> احصائيات الشركات</Link>
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
          <Menu.Item key="/admin/search/user">
            <Link to={'/admin/search/user'}>البحث عن المستخدمين</Link>
          </Menu.Item>
          <Menu.Item key="/admin/search/company">
            <Link to={'/admin/search/company'}>البحث عن الشركات</Link>
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
          <Menu.Item key="/admin/content/cities">
            <Link to={'/admin/content/cities'}> المدن</Link>
          </Menu.Item>
          <Menu.Item key="9">
            <Link to={'/admin/content/universities'}>الجامعات</Link>
          </Menu.Item>
          <Menu.Item key="10">
            <Link to={'/admin/content/majors'}>التخصصات</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub5"
          title={
            <span>
              <Icon type="appstore" />
              <span>العروض الوظيفية</span>
            </span>
          }
        >
          <Menu.Item key="/admin/ads/company">
            <Link to={'/admin/ads/company'}> اعلانات الشركات</Link>
          </Menu.Item>
          <Menu.Item key="/admin/ads/search">
            <Link to={'/admin/ads/search'}> البحث </Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub6"
          title={
            <span>
              <Icon type="appstore" />
              <span>الإعدادات</span>
            </span>
          }
        >
          <Menu.Item key="/admin/setting/user">
            <Link to={'/admin/setting/user'}> الأفراد</Link>
          </Menu.Item>
          <Menu.Item key="/admin/setting/company">
            <Link to={'/admin/setting/company'}> الشركات </Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Col>
  );
};
export default Sidebar;
