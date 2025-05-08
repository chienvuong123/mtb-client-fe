'use client';

import React, { useEffect, useRef, useState } from 'react';
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
  Dropdown,
} from 'antd';
import { MenuUnfoldOutlined, SearchOutlined } from '@ant-design/icons';
import DropdownContent from './product-navigation/DropdownContent';
import DropdownSport from './product-navigation/DropdownSport';
import DropdownWomen from './product-navigation/DropdownWomen';
import DropdownCareShare from './product-navigation/DropdownCareShare';
import RegisterPage from '../register/page';
import SearchPage from './Search';
import SearchMobiPage from './SearchMobi';
import UIQuickCartInfo from '@/components/ui/UIQuickCartInfo';
import { IoClose } from 'react-icons/io5';

const messages: string[] = [
  'Hoàn tiền khi mua sắm',
  'Giảm 50%',
  'Cho trả hàng',
];

type MenuItem = Required<MenuProps>['items'][number];

const Nav: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(
    null,
  );
  const [headerHeight, setHeaderHeight] = React.useState<number>(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [showSearchMobi, setShowSearchMobi] = useState<boolean>(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState<number>(0);
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [animationState, setAnimationState] = useState<
    'entering' | 'visible' | 'exiting'
  >('visible');

  const showDrawer = () => {
    setDrawerOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    document.body.style.overflow = '';
  };

  const handleShowSearch = () => {
    setShowSearch(true);
  };

  const handleCloseShowSearch = () => {
    setShowSearch(false);
  };

  const handleShowSearchMobi = () => {
    setShowSearchMobi(true);
  };

  const handleCloseShowSearchMobi = () => {
    setShowSearchMobi(false);
  };

  useEffect(() => {
    const animationCycle = setInterval(() => {
      setAnimationState('exiting');
      setTimeout(() => {
        setCurrentMessageIndex(
          (prevIndex) => (prevIndex + 1) % messages.length,
        );
        setAnimationState('entering');
        setTimeout(() => {
          setAnimationState('visible');
        }, 500);
      }, 500);
    }, 3000);

    return () => clearInterval(animationCycle);
  }, []);

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

  const getAnimationClass = (): string => {
    switch (animationState) {
      case 'entering':
        return 'translate-x-0 opacity-100 transition-all duration-500';
      case 'visible':
        return 'translate-x-0 opacity-100';
      case 'exiting':
        return '-translate-x-full opacity-0 transition-all duration-500';
      default:
        return '';
    }
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
              <SearchOutlined
                className="text-2xl"
                onClick={handleShowSearchMobi}
              />
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
                  onClick={handleShowSearch}
                  className="w-[90%] !rounded-full placeholder:text-gray-400 placeholder:text-[10px] placeholder:font-medium"
                />
              </Col>
              <Image
                src="/icons/icon-account.svg"
                alt="Logo"
                className="cursor-pointer"
                preview={false}
                onClick={showDrawer}
              />
              <Dropdown overlay={<UIQuickCartInfo />}>
                <Badge count={3} size="small">
                  <Image
                    src="/icons/icon-cart.svg"
                    alt="Logo"
                    className="cursor-pointer"
                    preview={false}
                  />
                </Badge>
              </Dropdown>
              {isLogin && (
                <div
                  className="absolute px-4 py-2 bg-white w-56 rounded-lg mt-2 top-15 right-5 z-10 flex flex-col"
                  style={{
                    boxShadow:
                      'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
                  }}
                >
                  <Flex
                    align="center"
                    justify="space-between"
                    className="w-full"
                  >
                    <Image
                      src="/images/login/icon.webp"
                      alt="coolclup"
                      width={80}
                      className="!p-0 !m-0"
                      preview={false}
                    />
                    <IoClose
                      className="cursor-pointer"
                      onClick={() => setIsLogin(false)}
                    />
                  </Flex>
                  <span className="!m-0 pt-1 font-medium text-sm tracking-tighter">
                    Đăng kí mới nhập ngay
                  </span>
                  <div className="relative h-6 overflow-hidden">
                    <div
                      className={`absolute font-bold text-sm ${getAnimationClass()}`}
                    >
                      {messages[currentMessageIndex]}
                    </div>
                  </div>
                </div>
              )}
            </Flex>
          </Col>
        </Row>
      </Layout.Header>
      <RegisterPage open={isDrawerOpen} onClose={closeDrawer} />
      {/* Global centered dropdown content */}
      {activeDropdown && (
        <div
          className="absolute left-1/2 transform -translate-x-1/2 w-full max-w-[92%] bg-white shadow-lg z-40"
          style={{ top: `${headerHeight + 14}px` }}
          onMouseEnter={() => setActiveDropdown(activeDropdown)}
          onMouseLeave={handleMenuLeave}
        >
          {activeDropdown === 'nam' && <DropdownContent />}
          {activeDropdown === 'nu' && <DropdownWomen />}
          {activeDropdown === 'the-thao' && <DropdownSport />}
          {activeDropdown === 'care-share' && <DropdownCareShare />}
        </div>
      )}
      {showSearch && (
        <div className="absolute z-99 top-0.5">
          <SearchPage onClose={handleCloseShowSearch} />
        </div>
      )}
      {showSearchMobi && (
        <div className="">
          <SearchMobiPage onClose={handleCloseShowSearchMobi} />
        </div>
      )}
    </div>
  );
};

export default Nav;
