import React from 'react';
import { Row, Col, Typography, Menu, Card, Image } from 'antd';
import { RightOutlined } from '@ant-design/icons';

const { Title, Text, Link } = Typography;

const ProductNavigation = () => {
  return (
    <div className="p-5">
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={18}>
          <Row gutter={[16, 0]}>
            {/* First Column - TẤT CẢ SẢN PHẨM */}
            <Col xs={24} sm={12} md={6} lg={4}>
              <Title
                level={5}
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <Link href="#" style={{ color: '#000' }}>
                  TẤT CẢ SẢN PHẨM
                </Link>
                <RightOutlined
                  style={{ fontSize: '12px', marginLeft: '5px' }}
                />
              </Title>
              <Menu mode="vertical" style={{ border: 'none' }}>
                <Menu.Item
                  key="1"
                  style={{ padding: '8px 0', color: '#1890ff' }}
                >
                  <Link href="#" style={{ color: '#1890ff' }}>
                    Sản phẩm mới
                  </Link>
                </Menu.Item>
                <Menu.Item key="2" style={{ padding: '8px 0' }}>
                  <Link href="#">Bán chạy nhất</Link>
                </Menu.Item>
                <Menu.Item key="3" style={{ padding: '8px 0' }}>
                  <Link href="#">ECC Collection</Link>
                </Menu.Item>
                <Menu.Item key="4" style={{ padding: '8px 0' }}>
                  <Link href="#">Excool Collection</Link>
                </Menu.Item>
                <Menu.Item key="5" style={{ padding: '8px 0' }}>
                  <Link href="#">Copper Denim</Link>
                </Menu.Item>
              </Menu>
            </Col>

            {/* Second Column - ÁO NAM */}
            <Col xs={24} sm={12} md={6} lg={4}>
              <Title
                level={5}
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <Link href="#" style={{ color: '#000' }}>
                  ÁO NAM
                </Link>
                <RightOutlined
                  style={{ fontSize: '12px', marginLeft: '5px' }}
                />
              </Title>
              <Menu mode="vertical" style={{ border: 'none' }}>
                <Menu.Item key="6" style={{ padding: '8px 0' }}>
                  <Link href="#">Áo Tanktop</Link>
                </Menu.Item>
                <Menu.Item key="7" style={{ padding: '8px 0' }}>
                  <Link href="#">Áo Thun</Link>
                </Menu.Item>
                <Menu.Item key="8" style={{ padding: '8px 0' }}>
                  <Link href="#">Áo Thể Thao</Link>
                </Menu.Item>
                <Menu.Item key="9" style={{ padding: '8px 0' }}>
                  <Link href="#">Áo Polo</Link>
                </Menu.Item>
                <Menu.Item key="10" style={{ padding: '8px 0' }}>
                  <Link href="#">Áo Sơ Mi</Link>
                </Menu.Item>
                <Menu.Item key="11" style={{ padding: '8px 0' }}>
                  <Link href="#">Áo Dài Tay</Link>
                </Menu.Item>
                <Menu.Item key="12" style={{ padding: '8px 0' }}>
                  <Link href="#">Áo Khoác</Link>
                </Menu.Item>
              </Menu>
            </Col>

            {/* Third Column - QUẦN NAM */}
            <Col xs={24} sm={12} md={6} lg={4}>
              <Title
                level={5}
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <Link href="#" style={{ color: '#000' }}>
                  QUẦN NAM
                </Link>
                <RightOutlined
                  style={{ fontSize: '12px', marginLeft: '5px' }}
                />
              </Title>
              <Menu mode="vertical" style={{ border: 'none' }}>
                <Menu.Item key="13" style={{ padding: '8px 0' }}>
                  <Link href="#">Quần Short</Link>
                </Menu.Item>
                <Menu.Item key="14" style={{ padding: '8px 0' }}>
                  <Link href="#">Quần Jogger</Link>
                </Menu.Item>
                <Menu.Item key="15" style={{ padding: '8px 0' }}>
                  <Link href="#">Quần Thể Thao</Link>
                </Menu.Item>
                <Menu.Item key="16" style={{ padding: '8px 0' }}>
                  <Link href="#">Quần Dài</Link>
                </Menu.Item>
                <Menu.Item key="17" style={{ padding: '8px 0' }}>
                  <Link href="#">Quần Jean</Link>
                </Menu.Item>
                <Menu.Item key="18" style={{ padding: '8px 0' }}>
                  <Link href="#">Quần Bơi</Link>
                </Menu.Item>
              </Menu>
            </Col>

            {/* Fourth Column - QUẦN LÓT NAM */}
            <Col xs={24} sm={12} md={6} lg={4}>
              <Title
                level={5}
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <Link href="#" style={{ color: '#000' }}>
                  QUẦN LÓT NAM
                </Link>
                <RightOutlined
                  style={{ fontSize: '12px', marginLeft: '5px' }}
                />
              </Title>
              <Menu mode="vertical" style={{ border: 'none' }}>
                <Menu.Item key="19" style={{ padding: '8px 0' }}>
                  <Link href="#">Brief(Tam giác)</Link>
                </Menu.Item>
                <Menu.Item key="20" style={{ padding: '8px 0' }}>
                  <Link href="#">Trunk(Boxer)</Link>
                </Menu.Item>
                <Menu.Item key="21" style={{ padding: '8px 0' }}>
                  <Link href="#">Boxer Brief (Boxer dài)</Link>
                </Menu.Item>
                <Menu.Item key="22" style={{ padding: '8px 0' }}>
                  <Link href="#">Long Leg</Link>
                </Menu.Item>
                <Menu.Item key="23" style={{ padding: '8px 0' }}>
                  <Link href="#">Short mặc nhà</Link>
                </Menu.Item>
              </Menu>
            </Col>

            {/* Fifth Column - PHỤ KIỆN */}
            <Col xs={24} sm={12} md={6} lg={4}>
              <Title
                level={5}
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <Link href="#" style={{ color: '#000' }}>
                  PHỤ KIỆN
                </Link>
                <RightOutlined
                  style={{ fontSize: '12px', marginLeft: '5px' }}
                />
              </Title>
              <Menu mode="vertical" style={{ border: 'none' }}>
                <Menu.Item key="24" style={{ padding: '8px 0' }}>
                  <Link href="#">Tất cả phụ kiện</Link>
                </Menu.Item>
                <Menu.Item key="25" style={{ padding: '8px 0' }}>
                  <Text type="secondary" style={{ fontSize: '13px' }}>
                    (Tất, mũ, túi...)
                  </Text>
                </Menu.Item>
              </Menu>
            </Col>
          </Row>

          {/* Bottom Categories */}
          <Row
            style={{
              marginTop: '30px',
              borderTop: '1px solid #f0f0f0',
              paddingTop: '15px',
            }}
          >
            <Col span={24}>
              <Menu
                mode="horizontal"
                style={{ border: 'none', background: '#f5f5f5' }}
              >
                <Menu.Item
                  key="category1"
                  style={{ paddingLeft: '20px', paddingRight: '20px' }}
                >
                  <Link href="#" style={{ color: '#666' }}>
                    THEO NHU CẦU
                  </Link>
                </Menu.Item>
                <Menu.Item
                  key="category2"
                  style={{ paddingLeft: '20px', paddingRight: '20px' }}
                >
                  <Link href="#" style={{ color: '#666' }}>
                    ĐỒ LÓT
                  </Link>
                </Menu.Item>
                <Menu.Item
                  key="category3"
                  style={{ paddingLeft: '20px', paddingRight: '20px' }}
                >
                  <Link href="#" style={{ color: '#666' }}>
                    ĐỒ THỂ THAO
                  </Link>
                </Menu.Item>
                <Menu.Item
                  key="category4"
                  style={{ paddingLeft: '20px', paddingRight: '20px' }}
                >
                  <Link href="#" style={{ color: '#666' }}>
                    MẶC HÀNG NGÀY
                  </Link>
                </Menu.Item>
              </Menu>
            </Col>
          </Row>
        </Col>

        {/* Featured Product Cards - Right Side */}
        <Col xs={24} lg={6}>
          <Row gutter={[0, 16]}>
            <Col span={24}>
              <Card
                hoverable
                cover={
                  <div
                    style={{
                      position: 'relative',
                      height: '180px',
                      overflow: 'hidden',
                    }}
                  >
                    <Image
                      preview={false}
                      src="/images/quan-jeans-nam-hover.htm"
                      alt="Áo Sơ Mi Dài Tay"
                      style={{
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '10px',
                        left: '10px',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '16px',
                      }}
                    >
                      Áo Sơ Mi Dài Tay Essentials Cotton
                    </div>
                  </div>
                }
                bodyStyle={{ display: 'none' }}
              />
            </Col>
            <Col span={24}>
              <Card
                hoverable
                cover={
                  <div
                    style={{
                      position: 'relative',
                      height: '180px',
                      overflow: 'hidden',
                    }}
                  >
                    <Image
                      preview={false}
                      src="/images/ao-so-mi-hover.htm"
                      alt="Quần Jeans Nam"
                      style={{
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '10px',
                        left: '10px',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '16px',
                      }}
                    >
                      Quần Jeans Nam siêu nhẹ
                    </div>
                  </div>
                }
                bodyStyle={{ display: 'none' }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ProductNavigation;
