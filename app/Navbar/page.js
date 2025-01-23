import React from 'react';
import { Col, Flex, Menu } from 'antd';
import { UserOutlined, SettingOutlined, UserAddOutlined } from '@ant-design/icons';
import Link from 'next/link';

const { SubMenu } = Menu;

const items = [
  {
    label: (
      <Link href="/" legacyBehavior>
        <a>Add Student</a>
      </Link>
    ),
    key: 'Add Student',
    icon: <UserAddOutlined />,
  },
  {
    label: (
      <Link href="/ViewStudent" legacyBehavior>
        <a>View Student</a>
      </Link>
    ),
    key: 'about',
    icon: <UserOutlined />,
  },
  {
    label: (
      <Link href="/Homepage" legacyBehavior>
        <a>Homepage</a>
      </Link>
    ),
    key: 'settings',
    icon: <SettingOutlined />,
  },
];

const Navbar = () => {
  return (
    <Menu 
      mode="inline" 
      items={items} 
      className="fixed left-0 top-0 h-screen w-64 bg-gray-100 shadow-md" 
    />
  );
};

export default Navbar;