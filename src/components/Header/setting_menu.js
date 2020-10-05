import { Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

export const UserMenuSetting = props => (
  <Menu>
    <Menu.Item>
      <Link to="/user/account/setting">اعدادات الحساب</Link>
    </Menu.Item>
    <Menu.Item>
      <div
        onClick={async () => {
          const { history } = props;
          await props.logout();
          history.push('/');
        }}
      >
        تسجيل الخروج
      </div>
    </Menu.Item>
  </Menu>
);

export const CompanyMenuSetting = props => (
  <Menu>
    <Menu.Item>
      <Link to="/company/setting">اعدادات الحساب</Link>
    </Menu.Item>
    <Menu.Item>
      <div
        onClick={async () => {
          const { history } = props;
          await props.logout();
          history.push('/');
        }}
      >
        تسجيل الخروج
      </div>
    </Menu.Item>
  </Menu>
);
