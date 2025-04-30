import React, { useRef } from 'react';
import { Button, Carousel, Col, Divider, Image, Row, Select, Tag } from 'antd';
import { CarouselRef } from 'antd/es/carousel';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { LuTicketPercent } from 'react-icons/lu';
import { productDeals } from '@/mocks/mockDataCart';
import '@styles/cart.css';
import UIInput from '@/components/ui/UIInput';

const DealsPage = () => {
  const carouselRef = useRef<CarouselRef>(null);

  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const goToPrevious = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  const goToNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  return (
    <div>
      <p className="italic pb-3">
        Có <b>15</b> người đang thêm cùng sản phẩm giống bạn vào giỏ hàng.
      </p>
      <Row gutter={16}>
        <Col md={18}>
          <UIInput
            placeholder="Nhập mã giới thiệu"
            className="!bg-[#eeeeee] !border-0 rounded-full text-sm"
          />
        </Col>
        <Col md={6}>
          <Button className="!bg-[#d9d9d9] !text-[#fffffb] !font-medium !rounded-full !px-4 !py-4.5">
            Áp dụng Voucher
          </Button>
        </Col>
      </Row>
      <Divider style={{ margin: '10px 0' }} />
      <div className="border border-[#da2153] w-full rounded-xl mt-4 relative">
        <div className="bg-[#da2153] flex items-center py-1 px-6 w-65 text-white font-medium rounded-ss-xl rounded-br-xl">
          <LuTicketPercent className="text-3xl pr-2" />
          Ưu đãi dành riêng cho bạn
        </div>

        <div className="absolute top-2 right-4 flex space-x-4">
          <button className="cursor-pointer text-lg" onClick={goToPrevious}>
            <ArrowLeftOutlined />
          </button>
          <button className="cursor-pointer text-lg" onClick={goToNext}>
            <ArrowRightOutlined />
          </button>
        </div>

        <Carousel
          ref={carouselRef}
          afterChange={onChange}
          slidesToShow={1}
          slidesToScroll={1}
          className="py-4 px-6"
        >
          {productDeals.map((product) => (
            <Row key={product.id} className="pb-2">
              <div className="!flex space-x-4 border-r-2 border-gray-300 w-[75%] pr-4">
                <div className="relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="!rounded-xl relative cursor-pointer"
                    width={135}
                    preview={false}
                  />
                  <Tag className="!absolute top-2 left-21 !rounded-full !bg-[#fe2359] !text-white !font-bold">
                    {product.discount}
                  </Tag>
                </div>
                <Col span={14}>
                  <h2 className="text-[#231f20] text-sm font-medium">
                    {product.name}
                  </h2>
                  <Select
                    defaultValue={product.options[0]?.value}
                    onChange={(value) => handleChange(value)}
                    options={product.options}
                    style={{ width: 120 }}
                    className="custom-rounded-select-deals !w-full !my-2"
                  />
                  <p className="italic font-medium">{product.featured}</p>
                  <p className="font-bold">
                    <span className="text-[#231f20]">{product.price}</span>{' '}
                    <span className="text-[#cccccc] font-bold line-through">
                      {product.oldPrice}
                    </span>
                  </p>
                  <button className="bg-black text-white text-base font-medium px-5 py-1.5 rounded-full hover:bg-[#2f5acf] cursor-pointer mt-3">
                    Lấy ngay
                  </button>
                </Col>
              </div>
            </Row>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default DealsPage;
