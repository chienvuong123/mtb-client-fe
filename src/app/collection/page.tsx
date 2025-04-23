'use client';

import CustomBreadcrumb from '@/components/common/CustomBreadcrumb';
import { Carousel, Col, Row } from 'antd';

const breadcrumbItems = [
  { title: 'Trang chủ', href: '/' },
  { title: 'Đồ Nam', href: '/do-nam' },
  { title: 'Áo Nam', href: '/ao-nam' },
  { title: '187 Áo Thun Nam' },
];

const CollectionPage = () => {
  return (
    <div className="mt-10">
      <Row>
        <Col span={6}>Bên trái</Col>
        <Col span={18}>
          <CustomBreadcrumb items={breadcrumbItems} />
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h1 style={{ fontWeight: 'bold', marginBottom: '24px' }}>
              ÁO THUN NAM
            </h1>

            <Row gutter={[16, 16]}>
              <Carousel></Carousel>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CollectionPage;
