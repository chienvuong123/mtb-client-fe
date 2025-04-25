'use client';

import CustomBreadcrumb from '@/components/common/CustomBreadcrumb';
import Product from '@/components/products/Product';
import UISelector from '@/components/ui/UISelector';
import { categories, collectionData } from '@/mocks/mockDataCollection';
import { commonSizes } from '@/mocks/mockDataHomePage';
import { Col, Divider, Flex, Image, Row } from 'antd';
import { PullRequestOutlined } from '@ant-design/icons';
import SearchFilter from './SearchFilter';
import UIDrawer from '@/components/ui/UIDrawer';
import { useState } from 'react';

const breadcrumbItems = [
  { title: 'Trang chủ', href: '/' },
  { title: 'Đồ Nam', href: '/do-nam' },
  { title: 'Áo Nam', href: '/ao-nam' },
  { title: '187 Áo Thun Nam' },
];

const CollectionPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [filteredCollection, setFilteredCollection] = useState(collectionData);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSearch = (filters: {
    category: string;
    size: string;
    colors: string[];
    materials: string[];
  }) => {
    const filtered = collectionData.filter((product) => {
      const matchesCategory = filters.category
        ? product.type === filters.category
        : true;

      return matchesCategory;
    });

    // Cập nhật danh sách sản phẩm
    setFilteredCollection(filtered);
  };
  return (
    <div className="mt-10 overflow-x-hidden">
      <Row gutter={16}>
        <Col xs={0} sm={0} md={0} lg={8} xl={6}>
          <div className="lg:pl-5 xl:pl-10">
            <SearchFilter onSearch={handleSearch} />
          </div>
        </Col>
        <Col sm={24} md={24} lg={16} xl={18}>
          <div className="sm: px-3 md:px-5 lg:px-5">
            <CustomBreadcrumb items={breadcrumbItems} />
          </div>
          <div className="sm: pl-3 md:pl-5 lg:pl-5">
            <h1 className="my-6 text-2xl font-bold">ÁO THUN NAM</h1>

            <div className="w-full overflow-hidden">
              <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                <Row
                  className="!flex !flex-nowrap !min-w-min"
                  gutter={16}
                  style={{ width: 'max-content', minWidth: '100%' }}
                >
                  {categories.map((item) => (
                    <Col
                      key={item.id}
                      className="flex-shrink-0 sm: w-[180px] md:w-[200px] lg:w-[200px] xl:w-[250px]"
                    >
                      <div className="rounded-lg overflow-hidden cursor-pointer">
                        <div>
                          <Image
                            preview={false}
                            alt={item.title}
                            src={item.image}
                            className="!rounded-lg w-full"
                            style={{ objectFit: 'cover' }}
                          />
                        </div>
                        <span className="text-black font-bold text-[15px] block px-1">
                          {item.title}
                        </span>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </div>
          </div>
          <Divider />
          <Row className="sm: px-3 md:px-5 lg:pl-5 lg:pr-10">
            <Flex align="center" justify="space-between" className="w-full">
              <span className="font-bold">187 kết quả</span>
              <Col sm={0} xs={0} md={12}>
                <Flex align="center" gap={10} justify="end">
                  <samp className="text-[#808080] uppercase font-medium">
                    Sắp xếp theo
                  </samp>
                  <UISelector
                    options={[
                      { label: 'Bán chạy', value: '1' },
                      { label: 'Mới nhất', value: '2' },
                      { label: 'Giá thấp đến cao', value: '3' },
                      { label: 'Giá cao đến thấp', value: '4' },
                      { label: '% Giảm nhiều', value: '5' },
                    ]}
                    defaultValue={'1'}
                    className="w-40"
                  />
                </Flex>
              </Col>
              <Col xs={10} sm={10} md={0}>
                <Flex justify="end">
                  <div
                    onClick={() => setIsOpen(true)}
                    className="bg-[#f1f1f1] w-full font-medium px-4 py-2 rounded-full flex items-center justify-between gap-2"
                  >
                    <span>Bộc lọc</span>
                    <PullRequestOutlined className="rotate-90" />
                  </div>
                </Flex>
              </Col>
            </Flex>
            <Col span={24}>
              <Row gutter={[16, 16]}>
                {filteredCollection.map((product) => (
                  <Col
                    key={product.id}
                    xs={12}
                    sm={12}
                    md={8}
                    lg={8}
                    xl={6}
                    className="mt-6"
                  >
                    <Product product={product} commonSizes={commonSizes} />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
          <Divider />
          <Row>
            <Flex vertical gap={10} className="w-full">
              <button className="w-fit m-auto text-white bg-black px-10 py-3 rounded-full text-base font-bold uppercase hover:bg-[#d9d9d9] hover:text-black cursor-pointer">
                Xem thêm
              </button>
              <p className="text-center text-gray-500 font-medium">
                Hiển thị1 - 12 trên tổng số 187 sản phẩm
              </p>
            </Flex>
          </Row>
        </Col>
      </Row>
      <Row className="bg-[#f1f1f1] px-20 py-10 my-10">
        <h2 className="text-black text-lg font-bold">
          Áo thun nam - Áo phông nam - T-shirt nam Coolmate
        </h2>
        <p className="text-gray-400 font-normal py-3">
          Áo thun nam, hay còn gọi là áo phông hoặc T-shirt, là một trong những
          trang phục phổ biến và không thể thiếu trong tủ đồ của phái mạnh. Với
          thiết kế cổ tròn và chất liệu co giãn, mềm mại và thoáng mát, áo thun
          mang lại sự thoải mái và dễ dàng phối với nhiều trang phục khác nhau.
        </p>
        <button className="text-black border border-black px-6 mt-3 py-1.5 rounded-full text-base hover:bg-black hover:text-white cursor-pointer">
          Xem thêm
        </button>
      </Row>
      <UIDrawer isOpen={isOpen} onClose={handleClose} />
    </div>
  );
};

export default CollectionPage;
