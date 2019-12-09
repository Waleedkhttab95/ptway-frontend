import React from 'react';
import 'antd/dist/antd.css';
import './sidebar.scss';
import { Col, Menu } from 'antd';
import logo from '../../../images/ptway.svg';
import { Link, NavLink } from 'react-router-dom';
import history from '../../../_core/history';
const { SubMenu } = Menu;
let selectedKeys = '';
let openKey = '';
const route = ({ item, key, keyPath, domEvent }) => {
  console.log(
    'item',
    item,
    'key',
    key,
    'keyPath',
    keyPath[1],
    'domEvent',
    domEvent
  );
  selectedKeys = key;
  openKey = keyPath[1];
  return item.props.renderMenuItem(key);
};
const Sidebar = props => {
  // const sideBarMenuKey = useSelector(
  //   state => state.currentComponetReducer.sideBarMenuItemKey
  // );
  console.log('props+++', props);

  return (
    <Col md={4} className="sidebar">
      <div className="admin-logo">
        <img src={logo} alt="" />
      </div>
      <Menu
        // defaultSelectedKeys={['/admin/general/statistics']}
        selectedKeys={[selectedKeys]}
        // openKeys={[`'${openKey}'`]}
        defaultOpenKeys={['sub1']}
        mode="inline"
        className="sidebar-menu"
        onClick={route}
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <span>احصائيات عامة</span>
            </span>
          }
        >
          <Menu.Item key="/admin/general/statistics">
            <Link to="/admin/general/statistics"></Link>
            اعلانات يومية
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <span>احصائيات المستخدمين</span>
            </span>
          }
        >
          <Menu.Item key="/admin/statistics ">
            <Link to="/admin/statistics"></Link>
            بالاعتماد على قيم مدخلة
          </Menu.Item>
          <Menu.Item key="/admin/percentage">
            <Link to="/admin/percentage"></Link>
            بدون قيم مدخلة
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub3"
          title={
            <span>
              <span>احصائيات الشركات</span>
            </span>
          }
        >
          <Menu.Item key="/admin/company">
            <Link to="/admin/company"></Link>
            احصائيات الشركات
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub4"
          title={
            <span>
              <span>البحث</span>
            </span>
          }
        >
          <Menu.Item key="/admin/search/user">
            <Link to="/admin/search/user"></Link>
            البحث عن المستخدمين
          </Menu.Item>
          <Menu.Item key="/admin/search/company">
            <Link to="/admin/search/company"></Link>
            البحث عن الشركات
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub5"
          title={
            <span>
              <span>المحتوى</span>
            </span>
          }
        >
          <Menu.Item key="/admin/content/cities">
            <Link to="/admin/content/cities"></Link>
            المدن
          </Menu.Item>
          <Menu.Item key="9">
            <Link to="/admin/content/universities"></Link>
            الجامعات
          </Menu.Item>
          <Menu.Item key="10">
            <Link to="/admin/jobs"></Link>
            التخصصات
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub6"
          title={
            <span>
              <span>العروض الوظيفية</span>
            </span>
          }
        >
          <Menu.Item key="/admin/ads/company">اعلانات الشركات</Menu.Item>
          <Menu.Item key="/admin/ads/search">البحث</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub7"
          title={
            <span>
              <span>الإعدادات</span>
            </span>
          }
        >
          <Menu.Item key="/admin/setting/user">الأفراد</Menu.Item>
          <Menu.Item key="/admin/setting/company">الشركات</Menu.Item>
        </SubMenu>
      </Menu>
    </Col>
  );
};
export default Sidebar;
