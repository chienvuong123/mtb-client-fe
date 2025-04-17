'use client';

import {
  Badge,
  Col,
  Flex,
  Image,
  Input,
  Layout,
  Menu,
  MenuProps,
  Row,
} from 'antd';
import { MenuUnfoldOutlined, SearchOutlined } from '@ant-design/icons';
import '@styles/dropdown.css';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: 'Nam',
    key: 'mail',
  },
  {
    label: 'Nữ',
    key: 'app',
  },
  {
    label: 'Thể thao',
    key: '2',
  },
  {
    label: 'CARE & SHARE',
    key: 'SubMenu',
  },
];
const Nav = () => {
  return (
    <div>
      <Layout.Header className="!bg-white mb-3">
        <Row className="flex !items-center">
          <Col xs={2} sm={2} md={0} lg={0} xl={0}>
            <Flex align="center" gap={24}>
              <MenuUnfoldOutlined className="text-lg" />
              <SearchOutlined className="text-2xl" />
            </Flex>
          </Col>
          <Col md={8} lg={8} xl={8} className="mt-3">
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
            xs={3}
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
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
          <Flex className="bg-[#404040] h-7" align="center" justify="center">
            <span className="text-white font-medium text-sm">
              Giảm 40k đơn từ 299k dành cho khách hàng mua lần đầu tại website!
            </span>
          </Flex>
        </Col>
      </Row>
    </div>
  );
};

export default Nav;
