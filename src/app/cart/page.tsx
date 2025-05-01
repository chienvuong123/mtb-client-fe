'use client';
import { useState } from 'react';
import UIInput from '@/components/ui/UIInput';
import UISelector from '@/components/ui/UISelector';
import {
  Button,
  Checkbox,
  CheckboxChangeEvent,
  Col,
  Divider,
  Flex,
  Form,
  Image,
  Radio,
  Row,
  Typography,
} from 'antd';
import { GiftFilled } from '@ant-design/icons';
import { cartItems } from '@/mocks/mockDataCart';
import CartItem from './CartItem';
import DealsPage from './Deals';
import CouponCard from './CouponCard';
import PaymentMethods from './PaymentMethods';

const { Text, Link } = Typography;

const paymentMethodsToImageMap: Record<string, string> = {
  COD: '/images/payment-methods/pr-1.png',
  MOMO: '/images/payment-methods/momo.png',
  ZALOPAY: '/images/payment-methods/zalo-pay.png',
  VNPAY: '/images/payment-methods/vnpay.png',
};

const CartPage = () => {
  const [accept, setAccept] = useState<boolean>(false);
  const [checkedList, setCheckedList] = useState<string[]>([]);
  const [checkAll, setCheckAll] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [showReferralCode, setShowReferralCode] = useState<boolean>(false);
  const [imageSrc, setImageSrc] = useState(paymentMethodsToImageMap.COD);

  const handleChangeAccept = () => {
    setAccept(!accept);
  };

  const plainOptions = cartItems.map((item) => item.name);

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    const isChecked = e.target.checked;
    setCheckedList(isChecked ? plainOptions : []);
    setCheckAll(isChecked);
    setIndeterminate(false);
  };

  const handleClearAll = (): void => {
    setCheckedList([]);
    setCheckAll(false);
    setIndeterminate(false);
  };

  const handleItemCheck = (id: string | number, checked: boolean) => {
    console.log(id, checked);
  };

  const handleQuantityChange = (id: string | number, quantity: number) => {
    console.log(id, quantity);
  };

  const handleColorChange = (id: string | number, color: string) => {
    console.log(id, color);
  };

  const handleSizeChange = (id: string | number, size: string) => {
    console.log(id, size);
  };

  const handleRemoveItem = (id: string | number) => {
    console.log(id);
  };

  const handlePaymentMethodChange = (value: string) => {
    const src = paymentMethodsToImageMap[value];
    setImageSrc(src);
  };

  return (
    <>
      <div className="p-10 min-h-screen mb-20">
        <Row gutter={24}>
          <Col xs={24} md={14}>
            <h5 className="text-black text-3xl font-bold mb-8">
              Thông tin đặt hàng
            </h5>
            <Form layout="horizontal">
              <Row gutter={[16, 16]} style={{ marginBottom: -5 }}>
                <Col md={16}>
                  <Form.Item>
                    <UIInput
                      label="Họ và tên"
                      name="name"
                      placeholder="Nhập họ và tên của bạn"
                    />
                  </Form.Item>
                </Col>
                <Col md={8}>
                  <Form.Item>
                    <UIInput
                      label="Số điện thoại"
                      name="phone"
                      placeholder="Nhập số điện thoại của bạn"
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={[16, 16]} style={{ marginBottom: -5 }}>
                <Col md={24}>
                  <Form.Item>
                    <UIInput
                      label="Email"
                      name="email"
                      placeholder="Theo dõi đơn hàng sẽ gửi qua Email và ZNS"
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={[16, 16]} style={{ marginBottom: -5 }}>
                <Col md={24}>
                  <Form.Item>
                    <UIInput
                      label="Địa chỉ"
                      name="address"
                      placeholder="Địa chỉ (ví dụ: 103 Vạn Phúc, phường Vạn Phúc)"
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={[16, 16]} style={{ marginBottom: -5 }}>
                <Col md={8}>
                  <Form.Item>
                    <UISelector
                      options={[
                        { label: 'Thành phố Hà Nội', value: 'HN' },
                        { label: 'Thành phố Hồ Chí Minh', value: 'HCM' },
                      ]}
                      defaultValue={'HN'}
                    />
                  </Form.Item>
                </Col>
                <Col md={8}>
                  <Form.Item>
                    <UISelector
                      options={[
                        { label: 'Thanh Xuân', value: 'TX' },
                        { label: 'Cầu Giấy', value: 'CG' },
                      ]}
                      defaultValue={'TX'}
                    />
                  </Form.Item>
                </Col>
                <Col md={8}>
                  <Form.Item>
                    <UISelector
                      options={[
                        { label: 'Nam Văn', value: 'TX' },
                        { label: 'Trung Hòa', value: 'CG' },
                      ]}
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={[16, 16]} style={{ marginBottom: -5 }}>
                <Col md={24}>
                  <Form.Item>
                    <UIInput
                      label="Ghi chú"
                      name="note"
                      placeholder="Ghi chú thêm (Ví dụ: Giao hàng giờ hành chính)"
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row style={{ marginBottom: -5 }}>
                <Col md={24}>
                  <Form.Item>
                    <Checkbox onChange={handleChangeAccept}>
                      <span className="font-medium">
                        Gọi cho người khác nhận hàng(nếu có)
                      </span>
                    </Checkbox>
                  </Form.Item>
                </Col>
                {accept && (
                  <Col md={24}>
                    <Form
                      layout="vertical"
                      className="!bg-[#f5f5f5] !rounded-lg !h-30 !mt-[-15px] !p-4"
                    >
                      <Form.Item>
                        <Radio.Group defaultValue="Nam">
                          <Radio value="Nam">Nam</Radio>
                          <Radio value="Nữ">Nữ</Radio>
                        </Radio.Group>
                      </Form.Item>
                      <Row gutter={16} className="!pt-4">
                        <Col md={12}>
                          <Form.Item>
                            <UIInput placeholder="Họ tên người nhận" />
                          </Form.Item>
                        </Col>
                        <Col md={12}>
                          <Form.Item>
                            <UIInput placeholder="Số điện thoại người nhận" />
                          </Form.Item>
                        </Col>
                      </Row>
                    </Form>
                  </Col>
                )}
              </Row>
            </Form>
            <Divider />
            <PaymentMethods onSelectPaymentMethod={handlePaymentMethodChange} />
          </Col>
          <Col xs={24} md={10}>
            <h5 className="text-black text-3xl font-bold mb-2">Giỏ hàng</h5>
            <div className="bg-[#e3e6fa] p-2 rounded-lg flex justify-between">
              <div>
                <GiftFilled className="text-2xl !text-[#273bcd]" />{' '}
                <span className="text-[#4253d3] font-medium">
                  Mua thêm
                  <span className="font-bold text-[#293dcd]">
                    {' '}
                    250.000 đ
                  </span>{' '}
                  để nhận{' '}
                  <span className="font-bold">1 áo tự hào Việt Nam</span>
                </span>
              </div>
              <Button
                className="!rounded-full !font-medium !bg-[#273bcd]"
                type="primary"
              >
                Mua ngay
              </Button>
            </div>

            <Row>
              <Col span={16} className="flex space-x-3 mt-4">
                <Checkbox
                  indeterminate={indeterminate}
                  onChange={onCheckAllChange}
                  checked={checkAll}
                />
                <span className="text-[#acacac] font-medium text-xs pl-2">
                  TẤT CẢ SẢN PHẨM
                </span>
                <span className="text-[#acacac] font-medium text-xs">|</span>
                <span
                  className="text-[#acacac] font-medium text-xs cursor-pointer"
                  onClick={handleClearAll}
                >
                  XÓA TẤT CẢ
                </span>
              </Col>
              <Col
                xs={8}
                className="mt-4 !flex justify-end items-center space-x-10"
              >
                <span className="text-[#acacac] font-medium text-xs">
                  SỐ LƯỢNG
                </span>
                <span className="text-[#acacac] font-medium text-xs">GIÁ</span>
              </Col>
            </Row>

            <Divider style={{ margin: '8px 0' }} />

            <Row>
              {cartItems.map((item) => (
                <Col span={24} key={item.id}>
                  <CartItem
                    item={item}
                    key={item.id}
                    checked={checkedList.includes(item.name)}
                    onCheck={handleItemCheck}
                    onQuantityChange={handleQuantityChange}
                    onColorChange={handleColorChange}
                    onSizeChange={handleSizeChange}
                    onRemove={handleRemoveItem}
                  />
                </Col>
              ))}
            </Row>
            {/* ưu đãi dành riêng */}
            <DealsPage />
            {/* Mã giới thiệu */}
            <CouponCard />
            <Row>
              <Col className="w-full p-4">
                <div>
                  <Flex align="center" gap={8}>
                    <h3 className="font-bold text-lg mb-2">
                      Mã giới thiệu bạn bè
                    </h3>
                    {!showReferralCode && (
                      <button
                        onClick={() => setShowReferralCode(true)}
                        className="text-[#293dcd] text-base border font-medium rounded-full px-3 py-1 cursor-pointer"
                      >
                        Nhập mã
                      </button>
                    )}
                  </Flex>
                  {showReferralCode && (
                    <Row gutter={16}>
                      <Col md={20}>
                        <UIInput
                          placeholder="Nhập mã giới thiệu"
                          className="!bg-[#eeeeee] !border-0 rounded-full text-sm"
                        />
                      </Col>
                      <Col md={4}>
                        <Button className="!bg-[#d9d9d9] !text-[#fffffb] !font-medium !rounded-full !px-4 !py-4.5">
                          Áp dụng
                        </Button>
                      </Col>
                    </Row>
                  )}
                </div>
                <Divider style={{ margin: '10px 2px' }} />
                <div className="">
                  <div className="flex justify-between items-center pb-4">
                    <span className="text-[#231f20] font-medium text-sm">
                      Tạm tính
                    </span>
                    <div className="text-right">
                      <span className="block text-black font-semibold">
                        159.000đ
                      </span>
                      <span className="block font-medium text-xs">
                        (tiết kiệm <span className="text-[#293dcd]">20k</span>)
                      </span>
                    </div>
                  </div>

                  {/* Giảm giá */}
                  <div className="flex justify-between items-center pt-1">
                    <span className="text-[#231f20] font-medium text-sm">
                      Giảm giá
                    </span>
                    <span className="text-black font-semibold">0đ</span>
                  </div>

                  {/* Phí giao hàng */}
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-[#231f20] font-medium text-sm">
                      Phí giao hàng
                    </span>
                    <span className="text-black font-semibold">+25.000đ</span>
                  </div>
                  <Divider style={{ margin: '10px 2px' }} />
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-[#231f20] font-bold text-base">
                      Tổng
                    </span>
                    <span className="text-black font-bold text-lg">
                      184.000đ
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <Row>
        <div
          className="fixed bottom-0 left-0 w-full h-25 z-[9999] flex"
          style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}
        >
          <Col span={12} className="bg-[#eaeefa] h-25 !flex !items-center">
            <Flex align="center" justify="space-evenly" className="w-full">
              <Flex align="center" gap={6}>
                <Image src={imageSrc} alt="" preview={false} width={40} />
                {imageSrc === paymentMethodsToImageMap.COD && (
                  <Text className="font-bold !text-lg">
                    COD{' '}
                    <span className="!font-medium text-base text-[#7f8188]">
                      thanh toán khi nhận hàng
                    </span>
                  </Text>
                )}
              </Flex>
              <div className="h-10 w-px bg-gray-500"></div>
              <span className="text-[#4168d3] font-bold">
                Chưa dùng voucher
              </span>
            </Flex>
          </Col>
          <Col span={12} className="bg-white h-25 !flex !items-center">
            <Flex justify="end" gap={8} className="w-full">
              <Col className="!flex !flex-col justify-end items-end">
                <div>
                  <Text className="font-medium">
                    Thành tiền{' '}
                    <span className="!text-xl !text-[#4168d3] !font-bold">
                      184.000đ
                    </span>
                  </Text>
                </div>
                <div>
                  <Link href="#" className="font-bold !underline">
                    Đăng nhập
                  </Link>{' '}
                  <Text className="font-medium">
                    để hoàn <Text className="font-bold">2.000 CoolCash</Text> |
                    Tiết kiệm <Text>0đ</Text>
                  </Text>
                </div>
              </Col>
              <button className="bg-[#c8102e] text-[#f9b804] text-base rounded-full px-14 py-3.5 uppercase font-medium">
                Đặt hàng
              </button>
            </Flex>
          </Col>
        </div>
      </Row>
    </>
  );
};

export default CartPage;
