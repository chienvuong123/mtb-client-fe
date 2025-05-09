import React, { useRef, useState } from 'react';
import {
  Button,
  Carousel,
  Col,
  Divider,
  Flex,
  Image,
  Radio,
  Row,
  Tag,
} from 'antd';
import { CarouselRef } from 'antd/es/carousel';
import { FaArrowRightLong, FaArrowLeftLong } from 'react-icons/fa6';
import { LuTicketPercent } from 'react-icons/lu';
import { productDeals } from '@/mocks/mockDataCart';
import '@styles/cart.css';
import UIInput from '@/components/ui/UIInput';

// Define types for voucher data
interface VoucherData {
  id: number;
  code: string;
  name: string;
  remaining: number;
  description: string;
  expiry: string;
}

// Mock voucher data
const voucherData: VoucherData[] = [
  {
    id: 1,
    code: 'COOLNEW30K',
    name: 'COOLNEW',
    remaining: 99,
    description:
      '[Khách hàng mới] Giảm 30k cho đơn đầu tiên từ 199k (trừ Outlet, Combo)',
    expiry: '31/05/2025',
  },
  {
    id: 2,
    code: 'COOLNEW35K',
    name: 'COOLNEW',
    remaining: 35,
    description:
      '[Khách hàng mới] Giảm 30k cho đơn đầu tiên từ 199k (trừ Outlet, Combo)',
    expiry: '31/05/2025',
  },
  {
    id: 3,
    code: 'FREESHIP50K',
    name: 'FREESHIP',
    remaining: 27,
    description: 'Miễn phí vận chuyển cho đơn hàng từ 500k',
    expiry: '15/07/2025',
  },
];

const DealsPage: React.FC = () => {
  const carouselRef = useRef<CarouselRef>(null);
  const [voucherCode, setVoucherCode] = useState<string>('');
  const [isButtonActive, setIsButtonActive] = useState<boolean>(false);
  const [selectedVoucherId, setSelectedVoucherId] = useState<number | null>(
    null,
  );

  const onChange = (currentSlide: number): void => {
    console.log(currentSlide);
  };

  const goToPrevious = (): void => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  const goToNext = (): void => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const handleVoucherSelect = (voucher: VoucherData): void => {
    setVoucherCode(voucher.code);
    setIsButtonActive(true);
    setSelectedVoucherId(voucher.id);
  };

  return (
    <div>
      <div className="hidden lg:block">
        <p className="italic pb-3">
          Có <b>15</b> người đang thêm cùng sản phẩm giống bạn vào giỏ hàng.
        </p>
        <Flex
          className="!overflow-x-auto no-scrollbar flex-row"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {voucherData.map((voucher) => {
            const isSelected = selectedVoucherId === voucher.id;
            return (
              <div
                key={voucher.id}
                className="relative bg-[#f1f1f1] h-30 !w-90 rounded-lg overflow-hidden mb-3 mr-3 flex-shrink-0 cursor-pointer"
                onClick={() => handleVoucherSelect(voucher)}
              >
                <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-white rounded-full"></div>
                <div className="absolute left-6 top-0 h-full border-l border-dashed border-[#a8a8a8]">
                  <Flex
                    justify="space-between"
                    className={`bg-[#f1f1f1] ${
                      isSelected ? 'text-[#231f20]' : 'text-[#a8a8a8]'
                    } w-full !p-1`}
                  >
                    <Col span={16}>
                      <span className="">
                        <span
                          className={`uppercase text-base font-medium ${
                            isSelected ? 'font-bold' : ''
                          }`}
                        >
                          {voucher.name}
                        </span>{' '}
                        <span className="text-sm italic">
                          (Còn {voucher.remaining})
                        </span>
                      </span>
                      <p className="text-xs">{voucher.description}</p>
                      <p className="text-xs pt-5">HSD : {voucher.expiry}</p>
                    </Col>
                    <Col span={8} className="flex justify-end text-right">
                      <Flex
                        vertical
                        justify="space-between"
                        className="items-end h-full"
                      >
                        <span></span>
                        <span className="mr-5">
                          <Radio checked={isSelected} />
                        </span>
                        <span
                          className={`text-xs ${
                            isSelected ? 'text-[#1677ff]' : 'text-[#274cd4]'
                          } cursor-pointer`}
                        >
                          Điều kiện
                        </span>
                      </Flex>
                    </Col>
                  </Flex>
                </div>
                <div className="pl-6 pr-4 py-4"></div>
              </div>
            );
          })}
        </Flex>
        <Row gutter={16}>
          <Col md={18}>
            <UIInput
              placeholder="Nhập mã giới thiệu"
              className="!bg-[#eeeeee] !border-0 rounded-full text-sm"
              value={voucherCode}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setVoucherCode(e.target.value)
              }
            />
          </Col>
          <Col md={6}>
            <Button
              className={`!rounded-full !px-4 !py-4.5 ${
                isButtonActive
                  ? '!bg-black !text-white'
                  : '!bg-[#d9d9d9] !text-[#fffffb]'
              } !font-medium`}
            >
              Áp dụng Voucher
            </Button>
          </Col>
        </Row>
      </div>
      <div className="hidden lg:block">
        <Divider style={{ margin: '10px 0' }} className="" />
      </div>
      <div className="border border-[#da2153] w-full rounded-xl mt-4 relative">
        <div className="bg-[#da2153] sm: text-xs lg:text-sm flex items-center py-1 sm: px-3 lg:px-6 sm: w-50 lg:w-65 text-white font-medium rounded-ss-xl rounded-br-xl">
          <LuTicketPercent className="sm: text-2xl lg:text-3xl pr-2" />
          Ưu đãi dành riêng cho bạn
        </div>

        <div className="absolute top-2 right-4 flex space-x-4">
          <button className="cursor-pointer text-lg" onClick={goToPrevious}>
            <FaArrowLeftLong />
          </button>
          <button className="cursor-pointer text-lg" onClick={goToNext}>
            <FaArrowRightLong />
          </button>
        </div>

        <Carousel
          ref={carouselRef}
          afterChange={onChange}
          slidesToShow={1}
          slidesToScroll={1}
          className="sm: px-3 sm: py-3 lg:py-4 lg:px-6"
        >
          {productDeals.map((product) => (
            <Row key={product.id} className="pb-2">
              <div className="!flex space-x-4 sm: border-0 xl:border-r-2 border-gray-300 w-[75%] pr-4">
                <div className="relative">
                  <div className="sm: w-[110px] lg:w-[135px]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      className="!rounded-xl relative cursor-pointer !w-full"
                      preview={false}
                    />
                  </div>
                  <Tag className="!absolute top-2 sm: left-17 lg:left-21 sm: !text-[10px] lg:!text-[12px] !rounded-full !bg-[#fe2359] !text-white !font-bold">
                    {product.discount}
                  </Tag>
                </div>
                <Col span={14}>
                  <h2 className="text-[#231f20] text-sm font-medium">
                    {product.name}
                  </h2>
                  <span className="py-2">
                    <p className="italic font-medium">{product.featured}</p>
                    <p className="font-bold">
                      <span className="text-[#231f20]">{product.price}</span>{' '}
                      <span className="text-[#cccccc] font-bold line-through">
                        {product.oldPrice}
                      </span>
                    </p>
                  </span>
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
