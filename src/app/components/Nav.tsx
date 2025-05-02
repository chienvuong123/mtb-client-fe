'use client';

import React, { useEffect, useRef } from 'react';
import {
  Badge,
  Col,
  Flex,
  Input,
  Layout,
  Menu,
  MenuProps,
  Row,
  Image,
} from 'antd';
import { MenuUnfoldOutlined, SearchOutlined } from '@ant-design/icons';
import DropdownContent from './product-navigation/DropdownContent';
import DropdownSport from './product-navigation/DropdownSport';
import DropdownWomen from './product-navigation/DropdownWomen';
import DropdownCareShare from './product-navigation/DropdownCareShare';

type MenuItem = Required<MenuProps>['items'][number];

const Nav: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(
    null,
  );
  const [headerHeight, setHeaderHeight] = React.useState<number>(0);
  const headerRef = useRef<HTMLDivElement>(null);

  // Calculate header height on mount and window resize
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight;
        setHeaderHeight(height);
      }
    };

    // Initial calculation
    updateHeaderHeight();

    // Update on resize
    window.addEventListener('resize', updateHeaderHeight);

    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, []);

  const handleMenuHover = (key: string) => {
    setActiveDropdown(key);
  };

  const handleMenuLeave = () => {
    setActiveDropdown(null);
  };

  const items: MenuItem[] = [
    {
      label: <span className="dropdown-trigger">Nam</span>,
      key: 'nam',
      onMouseEnter: () => handleMenuHover('nam'),
    },
    {
      label: <span className="dropdown-trigger">Nữ</span>,
      key: 'nu',
      onMouseEnter: () => handleMenuHover('nu'),
    },
    {
      label: <span className="dropdown-trigger">Thể thao</span>,
      key: 'the-thao',
      onMouseEnter: () => handleMenuHover('the-thao'),
    },
    {
      label: <span className="dropdown-trigger">CARE & SHARE</span>,
      key: 'care-share',
      onMouseEnter: () => handleMenuHover('care-share'),
    },
  ];

  return (
    <div className="bg-white" ref={headerRef}>
      <Layout.Header
        className="!bg-white mb-3 sm: !px-4 md:!px-10"
        onMouseLeave={handleMenuLeave}
      >
        <Row className="flex !items-center">
          <Col xs={2} sm={2} md={0} lg={0} xl={0}>
            <Flex align="center" gap={24}>
              <MenuUnfoldOutlined className="text-lg" />
              <SearchOutlined className="text-2xl" />
            </Flex>
          </Col>
          <Col xs={0} sm={0} md={8} lg={8} xl={8}>
            <Image
              width={80}
              src="/images/logo-coolmate.png"
              preview={false}
              alt="logo"
              className="mt-3"
            />
          </Col>
          <Col
            xs={10}
            sm={10}
            md={0}
            lg={0}
            xl={0}
            className="mt-3 mx-auto !flex justify-center md:!hidden lg:!hidden xl:!hidden"
          >
            <Image
              width={80}
              src="/images/logo-coolmate.png"
              preview={false}
              alt="logo"
            />
          </Col>
          <Col xs={0} sm={0} md={8} lg={8} xl={8}>
            <Menu
              mode="horizontal"
              className="bg-white w-full !border-none min-w-0 !leading-12 font-bold text-base"
              items={items}
            />
          </Col>
          <Col
            xs={4}
            sm={3}
            md={8}
            lg={8}
            xl={8}
            xxl={8}
            className="!flex !justify-end"
          >
            <Flex gap={12} align="center" justify="flex-end">
              <Col xs={0} sm={0} md={16} lg={18} xl={18}>
                <Input
                  size="large"
                  placeholder="Tìm kiếm sản phẩm..."
                  prefix={<SearchOutlined />}
                  className="w-[90%] !rounded-full placeholder:text-gray-400 placeholder:text-[10px] placeholder:font-medium"
                />
              </Col>
              <Image src="/icons/icon-account.svg" alt="Logo" className="" />
              <Badge count={3} size="small">
                <Image src="/icons/icon-cart.svg" alt="Logo" className="" />
              </Badge>
            </Flex>
          </Col>
        </Row>
      </Layout.Header>

      {/* Global centered dropdown content */}
      {activeDropdown && (
        <div
          className="absolute left-1/2 transform -translate-x-1/2 w-full max-w-[92%] bg-white shadow-lg z-40"
          style={{ top: `${headerHeight - 27}px` }}
          onMouseEnter={() => setActiveDropdown(activeDropdown)}
          onMouseLeave={handleMenuLeave}
        >
          {activeDropdown === 'nam' && <DropdownContent />}
          {activeDropdown === 'nu' && <DropdownWomen />}
          {activeDropdown === 'the-thao' && <DropdownSport />}
          {activeDropdown === 'care-share' && <DropdownCareShare />}
        </div>
      )}
    </div>
  );
};

export default Nav;
