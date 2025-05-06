'use client';

import CustomBreadcrumb from '@/components/common/CustomBreadcrumb';
import {
  Carousel,
  Col,
  Collapse,
  CollapseProps,
  Divider,
  Flex,
  Image,
  Rate,
  Row,
  Tag,
  Tooltip,
} from 'antd';
import {
  CrownTwoTone,
  ShareAltOutlined,
  ShoppingCartOutlined,
  TruckOutlined,
} from '@ant-design/icons';
import ProductGallery from './ProductGallery';
import ProductColorSizePicker from './ProductOptions';
import { useState } from 'react';
import { product, viewedProductData } from '@/mocks/mockSizeColer';
import { DownOutlined } from '@ant-design/icons';
import Product from '@/components/products/Product';
import { commonSizes, todayProducts } from '@/mocks/mockDataHomePage';
import CommentPage from './Comment';
import DescribePage from './Describe';

const { Panel } = Collapse;

const breadcrumbItems = [
  { title: 'Trang chủ', href: '/' },
  { title: 'Đồ Nam', href: '/do-nam' },
  { title: 'Áo Nam', href: '/ao-nam' },
  { title: 'Áo Thun Nam' },
];

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'This is panel header 1',
    children: <p>{text}</p>,
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p>{text}</p>,
  },
];

const ProductDetailPage = () => {
  const handleColorChange = (color: string) => {
    console.log('Selected color:', color);
  };

  const handleSizeChange = (size: string) => {
    console.log('Selected size:', size);
  };

  const [quantity, setQuantity] = useState<number>(2);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  <Collapse items={items} defaultActiveKey={['1']} />;

  return (
    <div className="overflow-hidden">
      <Col sm={24} lg={12}>
        <div className="flex sm: px-3 lg:justify-center mt-5">
          <CustomBreadcrumb items={breadcrumbItems} />
        </div>
      </Col>
      <Row>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <ProductGallery images={product.images} />
        </Col>
        <Col
          xs={24}
          sm={24}
          md={11}
          lg={11}
          xl={9}
          className="sm: !px-3 lg:!pl-4"
        >
          <h1 className="mt-5 sm: text-lg lg:text-2xl font-bold">
            Áo Thun Nam Cotton 220GSM
          </h1>
          <span className="font-medium text-[#0009]">100% Cotton</span>
          <Flex align="center" gap={16}>
            <Flex align="center" gap={4}>
              <Rate
                allowHalf
                defaultValue={4.5}
                style={{ color: '#000000', fontSize: 18 }}
              />
              <span className="font-medium">(4.9)</span>
            </Flex>
            <Flex align="center" gap={4} className="!py-4">
              <ShareAltOutlined style={{ color: '#2b3fce' }} />
              <span className="text-[#2b3fce] font-medium">Chia sẻ</span>
            </Flex>
          </Flex>
          <Flex vertical gap={4}>
            <del className="text-[#c4c4c6] font-medium lg:text-base">
              179.000đ
            </del>
            <Flex
              gap={14}
              align="center"
              className="font-bold sm: text-lg lg:text-2xl"
            >
              <span>159.000đ</span>
              <Tag color="#273bcd" className="xl:!text-lg">
                -11%
              </Tag>
            </Flex>
            <Flex gap={6} align="center">
              <TruckOutlined className="text-lg" />
              <span>Freeship đơn trên 200K</span>
            </Flex>
          </Flex>
          <Flex align="center" gap={10} className="!mt-6">
            <span className="text-[#0009] font-medium sm: text-xs lg:text-base">
              Mã giảm giá
            </span>
            <Tooltip
              placement="bottom"
              arrow={false}
              title={
                <div className="text-center text-sm leading-5 py-1">
                  <div className="mt-1">
                    Nhập <b>NEW40</b> <span>(còn 9187 lượt)</span>
                  </div>
                  <div>
                    Giảm 40k đơn từ 299k dành cho khách hàng mua lần đầu tại
                    website
                  </div>
                </div>
              }
              styles={{
                body: {
                  backgroundColor: 'white',
                  color: 'black',
                  fontWeight: 500,
                  width: 500,
                  marginTop: '8px',
                },
                root: {
                  zIndex: 1000,
                },
              }}
            >
              <div className="bg-[#ffebdf] text-[#f9640d] font-medium px-4 py-1 rounded-lg cursor-pointer">
                Giảm 40k
              </div>
            </Tooltip>
          </Flex>
          <Image
            preview={false}
            src="/images/product-detail/banner.webp"
            alt="khuyen-mai"
            className="!rounded-lg mt-7"
          />
          <Col className="mt-6">
            <ProductColorSizePicker
              onColorChange={handleColorChange}
              onSizeChange={handleSizeChange}
              defaultColor="brown"
              defaultSize="M"
            />
          </Col>
          <div className="flex items-center mt-6 relative">
            <Flex
              align="center"
              className="rounded-full bg-[#525252] overflow-hidden z-99"
            >
              <button
                onClick={handleDecrease}
                className="flex items-center text-white justify-center h-10 w-10 font-bold text-lg m-0 p-0 border-0 cursor-pointer"
              >
                -
              </button>

              <div className="lg:px-4 py-2 text-white font-bold text-lg">
                {quantity}
              </div>

              <button
                onClick={handleIncrease}
                className="flex items-center text-white justify-center h-10 w-10 font-bold text-lg m-0 p-0 border-0 cursor-pointer"
              >
                +
              </button>
            </Flex>

            <button
              className="group absolute right-0 w-full bg-black hover:bg-[#d9d9d9] hover:text-black font-medium text-white text-sm rounded-full h-11 flex items-center justify-center cursor-pointer"
              style={{ flex: 1 }}
            >
              <ShoppingCartOutlined className="mr-2 text-xl !text-white group-hover:!text-black" />
              Chọn kích thước áo
            </button>
          </div>
          <Divider style={{ margin: '8px 0' }} />
          <Flex justify="center">
            <span className="font-bold md:text-base underline decoration-solid">
              Mô tả sản phẩm
            </span>
          </Flex>
          <div className="bg-[#f1f3ff] rounded-xl sm: my-3 lg:my-5">
            <Collapse
              ghost
              expandIcon={({ isActive }) => (
                <DownOutlined rotate={isActive ? 180 : 0} />
              )}
              expandIconPosition="end"
            >
              <Panel
                header={
                  <Flex align="center" gap={8} className="!pb-1">
                    <div className="w-fit p-0.5 rounded-sm border border-blue-500 flex justify-center item-center">
                      <CrownTwoTone />
                    </div>
                    <span className="font-medium">
                      Được hoàn lên đến <b>12.000</b> CoolCash.
                    </span>
                    <span className="font-semibold text-[#273bcd]">
                      Chi tiết
                    </span>
                  </Flex>
                }
                key="1"
              >
                <div className="font-medium">
                  <p className="mt-[-20px] text-[13.5px]">
                    <hr className="text-gray-300 pb-2" />
                    Đây là số CoolCash ước tính bạn sẽ được hoàn lại khi mua sản
                    phẩm hôm nay, tương ứng với quyền lợi hạng
                    <Image
                      src="/images/product-detail/bk.webp"
                      alt="bk"
                      preview={false}
                      width={85}
                    />
                  </p>
                  <p className="text-[13.5px] pt-4">
                    CoolCash có giá trị như tiền mặt dùng để mua hàng tại
                    website Coolmate.me{' '}
                    <span className="text-[#273bcd] font-bold">Đăng nhập</span>{' '}
                    hoặc{' '}
                    <span className="text-[#273bcd] font-bold">Đăng ký</span>{' '}
                    ngay để kiểm tra mức hoàn tiền chính xác nhất dành cho bạn.
                  </p>
                </div>
              </Panel>
            </Collapse>
          </div>
          <Flex align="center" gap={8}>
            <Image
              src="/images/product-detail/logoZalo.svg"
              alt=""
              width={30}
              preview={false}
            />
            <span className="font-medium text-[#273bcd]">
              Chat để được Coolmate tư vấn ngay (8:30 - 22:00)
            </span>
          </Flex>
          <div className="return-policy sm: mt-4 lg:mt-6">
            <Row gutter={[16, 14]} justify="space-between">
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <Flex align="center" gap={4}>
                  <Image
                    src="/images/product-detail/icon1.svg"
                    alt=""
                    width={35}
                    preview={false}
                  />
                  <span className="font-medium sm: text-[11px] lg:text-[13px]">
                    Đổi trả cực dễ chỉ cần số điện thoại
                  </span>
                </Flex>
              </Col>

              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <Flex align="center" gap={4}>
                  <Image
                    src="/images/product-detail/icon2.svg"
                    alt=""
                    width={35}
                    preview={false}
                  />
                  <span className="font-medium sm: text-[11px] lg:text-[13px]">
                    60 ngày đổi trả vì bất kỳ lý do gì
                  </span>
                </Flex>
              </Col>

              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <Flex align="center" gap={4}>
                  <Image
                    src="/images/product-detail/icon3.svg"
                    alt=""
                    width={45}
                    preview={false}
                  />
                  <span className="font-medium sm: text-[11px] lg:text-[13px]">
                    Hotline 1900.27.27.37 hỗ trợ từ 8h30 - 22h mỗi ngày
                  </span>
                </Flex>
              </Col>

              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <Flex align="center" gap={4}>
                  <Image
                    src="/images/product-detail/icon4.svg"
                    alt=""
                    width={45}
                    preview={false}
                  />
                  <span className="font-medium sm: text-[11px] lg:text-[13px]">
                    Đến tận nơi nhận hàng trả, hoàn tiền trong 24h
                  </span>
                </Flex>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <DescribePage />
      <Row className="bg-[#f9f9f9] mt-10 sm: px-2 sm: py-4 md:p-3 lg:p-5 xl:p-10 mb-10">
        <Flex
          justify="center"
          className="w-full sm: text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold uppercase"
        >
          GỢI Ý SẢN PHẨM
        </Flex>
        <Col span={24} className="sm: mt-4 md:mt-6 lg:mt-10">
          <Carousel
            dots={false}
            slidesToShow={5}
            slidesToScroll={1}
            infinite
            responsive={[
              {
                breakpoint: 1025,
                settings: {
                  slidesToShow: 4,
                },
              },
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                },
              },
              {
                breakpoint: 640,
                settings: {
                  slidesToShow: 2,
                },
              },
            ]}
          >
            {todayProducts.map((product) => (
              <div key={product.id} className="px-2">
                <Product product={product} commonSizes={commonSizes} />
              </div>
            ))}
          </Carousel>
        </Col>
      </Row>
      <div className="bg-[#f9f9f9] sm: p-3 xl:p-10">
        <CommentPage />
      </div>
      <Row className="bg-[#f9f9f9] sm: px-2 sm: py-4 md:p-3 lg:p-5 xl:p-10 mb-10">
        <Flex
          justify="center"
          className="w-full sm: text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold uppercase"
        >
          Sản Phẩm Bạn Đã Xem
        </Flex>
        <Col span={24} className="sm: mt-4 md:mt-6 lg:mt-10">
          <Carousel
            dots={false}
            slidesToShow={5}
            slidesToScroll={1}
            infinite
            responsive={[
              {
                breakpoint: 1025,
                settings: {
                  slidesToShow: 4,
                },
              },
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                },
              },
              {
                breakpoint: 640,
                settings: {
                  slidesToShow: 2,
                },
              },
            ]}
          >
            {viewedProductData.map((product) => (
              <div key={product.id} className="px-2">
                <Product product={product} commonSizes={commonSizes} noHover />
              </div>
            ))}
          </Carousel>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetailPage;
