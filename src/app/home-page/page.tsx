'use client';

import { useState } from 'react';
import { Button, Carousel, Col, Image, Row, Space, Typography } from 'antd';
import {
  femaleProducts,
  maleProducts,
  runningProducts,
  todayProducts,
} from '@/mocks/mockDataHomePage';
import ProductCarousel from '@/components/products/ListProduct';
import Link from 'next/link';

const { Text } = Typography;

const HomePage = () => {
  const [category, setCategory] = useState<'male' | 'female'>('male');
  const [products, setProducts] = useState(maleProducts);

  const handleCategoryChange = (newCategory: 'male' | 'female') => {
    setCategory(newCategory);
    setProducts(newCategory === 'male' ? maleProducts : femaleProducts);
  };

  return (
    <div>
      <Carousel autoplay arrows={true} dots={false}>
        <div>
          <Image
            preview={false}
            src="/images/Hero_Banner_-_Desktopzz.webp"
            alt="banner1"
          />
        </div>
        <div>
          <Image
            preview={false}
            src="/images/Hero_Banner_-_Desktopza.webp"
            alt="banner2"
          />
        </div>
      </Carousel>
      <section className="sm: py-7 sm: pl-3 md:py-10 md:pl-10">
        <Row className="mb-4 text-center">
          <Button
            type="text"
            onClick={() => handleCategoryChange('male')}
            className={`font-medium text-lg !px-6 !py-5 !rounded-full ${
              category === 'male'
                ? '!bg-black !text-white border-black'
                : '!bg-[#e5e5e5] text-black border-black'
            }`}
            style={{ marginRight: 8 }}
          >
            ĐỒ NAM
          </Button>
          <Button
            type="text"
            onClick={() => handleCategoryChange('female')}
            className={`!font-medium text-lg !px-6 !py-5 !rounded-full ${
              category === 'female'
                ? '!bg-black !text-white border-black'
                : '!bg-[#e5e5e5] text-black border-black'
            }`}
          >
            ĐỒ NỮ
          </Button>
        </Row>
        <Row
          gutter={12}
          className="flex !overflow-x-auto !overflow-y-hidden !flex-nowrap !scroll-smooth !scrollbar-hide max-w-full"
        >
          {products.map((product, index) => (
            <Col xs={9} sm={9} xl={4} key={index} className="flex-shrink-0">
              <Link href="/collection">
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    preview={false}
                    src={product.image}
                    className="w-full !rounded-lg h-auto transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
                    alt="anh"
                  />
                </div>
                <div className="text-center">
                  <Text
                    className=" !font-bold uppercase 
                    !sm:text-sm !md:text-base"
                  >
                    {product.title}
                  </Text>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </section>
      <section className="sm: p-2 md:p-5 lg:p-10">
        <Row gutter={[24, 8]}>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <div className="relative overflow-hidden !rounded-2xl">
              <Image
                preview={false}
                src="/images/banner/Section_Banner.webp"
                alt="baner3"
                className="!rounded-2xl transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
              <div
                className="absolute
                    sm: left-3 sm: bottom-5 md:left-10 md:bottom-13" //responsive
              >
                <span
                  className="uppercase text-white font-bold
                    sm: text-xl md:text-4xl" //responsive
                >
                  MEN WEAR
                </span>
                <p
                  className="text-white font-medium 
                   sm: py-2 md:py-5"
                >
                  Giảm 40k đơn đầu tiên từ 299k | Freeship
                </p>
                <button
                  className="bg-white rounded-full cursor-pointer hover:bg-gray-100
                    sm: px-6 sm: py-2 md:text-xl md:px-10 md:py-3"
                >
                  Mua ngay
                </button>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <div className="relative overflow-hidden !rounded-2xl">
              <Image
                preview={false}
                src="/images/banner/Section_women.webp"
                alt="baner3"
                className="!rounded-2xl transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
              <div
                className="absolute 
                    sm: left-3 sm: bottom-5 md:left-10 md:bottom-13"
              >
                <div
                  className="uppercase bg-[rgb(249_93_3)] bg-opacity-50 text-white font-medium px-2 py-1 inline-block rounded-full
                    sm: text-xs md:text-base"
                >
                  Chính Thức Ra mắt
                </div>
                <br />
                <span
                  className="uppercase text-white font-bold
                    sm: text-xl md:text-4xl" //responsive
                >
                  WOMEN ACTIVE
                </span>
                <p
                  className="text-white font-medium 
                   sm: py-2 md:py-5"
                >
                  Mua 2 giảm thêm 10% | Voucher quà đơn 299k
                </p>
                <button
                  className="bg-white rounded-full cursor-pointer hover:bg-gray-100
                    sm: px-6 sm: py-2 md:text-xl md:px-10 md:py-3"
                >
                  Mua ngay
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </section>
      <Row>
        <Col className="relative overflow-hidden">
          <Image
            src="/images/banner/Casual_-_Desktopsds.webp"
            alt=""
            preview={false}
          />
          <Space
            className="absolute left-10 bottom-13 w-180 mb-6"
            direction="vertical"
            size={'middle'}
          >
            <span className="uppercase text-white text-[80px] font-bold leading-22">
              CASUALWEAR COLLECTION
            </span>
            <p className="text-white text-lg font-medium">
              Giảm 40k đơn từ 299k dành cho khách hàng mua lần đầu tại website!
            </p>
            <button className="bg-white text-xl px-14 py-4 rounded-full cursor-pointer hover:bg-gray-100">
              Mua ngay
            </button>
          </Space>
        </Col>
      </Row>
      <section>
        <ProductCarousel
          title="Sản phẩm mặc hằng ngày"
          seeMoreUrl="/collections/running"
          productList={todayProducts}
        />
      </section>
      <Row>
        <Col className="relative overflow-hidden">
          <Image
            src="/images/banner/Running_-_Desktopz1.webp"
            alt=""
            preview={false}
          />
          <Space
            className="absolute left-10 bottom-13 w-180 mb-6"
            direction="vertical"
            size={'middle'}
          >
            <span className="uppercase text-white text-[80px] font-bold leading-22">
              RUNNING COLLECTION
            </span>
            <p className="text-white text-lg font-medium">
              Giảm 40k đơn từ 299k dành cho khách hàng mua lần đầu tại website!
            </p>
            <button className="bg-white text-xl px-14 py-4 rounded-full cursor-pointer hover:bg-gray-100">
              Mua ngay
            </button>
          </Space>
        </Col>
      </Row>
      <section>
        <ProductCarousel
          title="Sản phẩm chạy bộ"
          seeMoreUrl="/collections/running"
          productList={runningProducts}
        />
      </section>
      <Row className="p-10">
        <Image src="/images/banner/share.png" alt="" preview={false} />
      </Row>
    </div>
  );
};

export default HomePage;
