'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Col, Layout, Menu, Row } from 'antd';
import { ItemType, MenuItemType } from 'antd/es/menu/interface';

const Header = () => {
  const router = useRouter();
  const [selectedKey, setSelectedKey] = useState('');

  const menuService: ItemType<MenuItemType>[] = [
    {
      key: 'CoolClub',
      label: 'CoolClub',
    },
    {
      key: 'CSKH',
      label: 'Trung tâm CSKH',
    },
    {
      key: 'login',
      label: 'Đăng nhập',
    },
  ];

  const menu: ItemType<MenuItemType>[] = [
    {
      key: '2',
      label: 'VỀ COLMATE',
    },
    {
      key: '4',
      label: 'COOLXPRINT',
    },
  ];

  const handleMenuClick = (key: string) => {
    setSelectedKey(key);
    router.push(`/${key}`);
  };
  return (
    <div>
      <Layout.Header className="header">
        <Row justify={'space-between'}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Menu
              theme="dark"
              mode="horizontal"
              selectedKeys={[selectedKey]}
              items={menu}
              className="bg-header h-[40px] text-white text-sm font-medium !leading-10"
              onClick={({ key }) => handleMenuClick(key)}
            />
          </Col>
          <Col xs={0} sm={0} md={12} lg={12} xl={12}>
            <Menu
              theme="dark"
              mode="horizontal"
              selectedKeys={[selectedKey]}
              items={menuService}
              className="bg-header h-[40px] flex justify-end text-white text-sm font-medium !leading-10"
              onClick={({ key }) => handleMenuClick(key)}
            />
          </Col>
        </Row>
      </Layout.Header>
    </div>
  );
};

export default Header;
