import UIInput from '@/components/ui/UIInput';
import UISelector from '@/components/ui/UISelector';
import { Checkbox, Col, Divider, Flex, Form, Image, Radio, Row } from 'antd';
import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import { RiDiscountPercentFill } from 'react-icons/ri';
import PaymentMethods from './PaymentMethods';
import RegisterWrapper from '../register/page';

interface IConfirmPaymentProps {
  onClose: () => void;
}

const paymentMethodsToImageMap: Record<string, string> = {
  COD: '/images/payment-methods/pr-1.png',
  MOMO: '/images/payment-methods/momo.png',
  ZALOPAY: '/images/payment-methods/zalo-pay.png',
  VNPAY: '/images/payment-methods/vnpay.png',
};

const ConfirmPayment: React.FC<IConfirmPaymentProps> = ({ onClose }) => {
  const [accept, setAccept] = useState<boolean>(false);
  const [imageSrc, setImageSrc] = useState(paymentMethodsToImageMap.COD);
  const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);

  const handleChangeAccept = () => {
    setAccept(!accept);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const handlePaymentMethodChange = (value: string) => {
    const src = paymentMethodsToImageMap[value];
    setImageSrc(src);
  };

  return (
    <div className="py-6 overflow-hidden pb-46">
      <Flex align="center" justify="space-between" className="!px-8">
        <FaArrowLeft
          onClick={onClose}
          className="text-[#2f5acf] text-2xl cursor-pointer"
        />
        <span className="text-2xl">Xác nhận thanh toán</span>
        <span></span>
      </Flex>
      <Divider style={{ margin: '20px 0 20px 0' }} />
      <div className="px-5">
        <h5 className="text-black text-xl font-medium mb-5 tracking-tight">
          Thông tin đặt hàng
        </h5>
        <Form layout="horizontal">
          <Col span={24}>
            <Form.Item className="!mb-3">
              <UIInput
                label="Họ và tên"
                name="name"
                placeholder="Nhập họ và tên của bạn"
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item className="!mb-3">
              <UIInput
                label="Số điện thoại"
                name="phone"
                placeholder="Nhập số điện thoại của bạn"
              />
            </Form.Item>
          </Col>

          <Col md={24}>
            <Form.Item className="!mb-3">
              <UIInput
                label="Email"
                name="email"
                placeholder="Theo dõi đơn hàng sẽ gửi qua Email và ZNS"
              />
            </Form.Item>
          </Col>

          <Col md={24}>
            <Form.Item className="!mb-2">
              <UIInput
                label="Địa chỉ"
                name="address"
                placeholder="Địa chỉ (ví dụ: 103 Vạn Phúc, phường Vạn Phúc)"
              />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item className="!mb-2">
              <UISelector
                options={[
                  { label: 'Thành phố Hà Nội', value: 'HN' },
                  { label: 'Thành phố Hồ Chí Minh', value: 'HCM' },
                ]}
                defaultValue={'HN'}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item className="!mb-2">
              <UISelector
                options={[
                  { label: 'Thanh Xuân', value: 'TX' },
                  { label: 'Cầu Giấy', value: 'CG' },
                ]}
                defaultValue={'TX'}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item className="!mb-3">
              <UISelector
                options={[
                  { label: 'Nam Văn', value: 'TX' },
                  { label: 'Trung Hòa', value: 'CG' },
                ]}
                placeholder="Chọn Phường/Xã"
                className="px-10"
              />
            </Form.Item>
          </Col>

          <Col md={24}>
            <Form.Item className="!mb-3">
              <UIInput
                label="Ghi chú"
                name="note"
                placeholder="Ghi chú thêm (Ví dụ: Giao hàng giờ hành chính)"
              />
            </Form.Item>
          </Col>

          <Row>
            <Col md={24}>
              <Form.Item className="!mb-2">
                <Checkbox onChange={handleChangeAccept}>
                  <span className="font-medium text-[13px]">
                    Gọi cho người khác nhận hàng(nếu có)
                  </span>
                </Checkbox>
              </Form.Item>
            </Col>
            {accept && (
              <Col md={24}>
                <Form
                  layout="vertical"
                  className="bg-[#f5f5f5] rounded-lg !p-4"
                  style={{ rowGap: 0 }}
                >
                  <Form.Item className="!mb-2">
                    <Radio.Group defaultValue="Nam">
                      <Radio value="Nam">Nam</Radio>
                      <Radio value="Nữ">Nữ</Radio>
                    </Radio.Group>
                  </Form.Item>
                  <Row gutter={[0, 8]}>
                    <Col span={24}>
                      <Form.Item className="!mb-0">
                        <UIInput placeholder="Họ tên người nhận" />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item className="!mb-0">
                        <UIInput placeholder="Số điện thoại người nhận" />
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              </Col>
            )}
          </Row>
        </Form>
      </div>
      <Divider className="!border-t-[10px] !border-[#f1f1f1] !my-5" />
      <div className="!w-full px-5">
        <PaymentMethods onSelectPaymentMethod={handlePaymentMethodChange} />
      </div>
      <Divider className="!border-t-[10px] !border-[#f1f1f1] !my-5" />
      <Row className="!px-5">
        <h2 className="font-medium text-xl pb-2 tracking-tight">
          Chi tiết đơn hàng
        </h2>
        <Flex className="!bg-[#f9f9f9] !p-3 w-full rounded-lg" gap={24}>
          <Image
            src="/images/prod/p2.webp"
            alt="don-hang"
            preview={false}
            width={140}
            className="rounded-lg"
          />
          <Flex vertical justify="space-between" className="w-full">
            <div>
              <span className="font-medium text-[15px]">
                Áo Thun Nam Cotton 220GSM
              </span>
              <p className="text-[#727472] font-medium text-[13px]">
                Nâu / 2XL
              </p>
            </div>
            <Flex justify="space-between">
              <span></span>
              <div className="text-right">
                <span>x2</span>
                <p>318.000đ</p>
              </div>
            </Flex>
          </Flex>
        </Flex>
      </Row>
      <Divider className="!border-t-[10px] !border-[#f1f1f1] !my-5" />
      <Flex vertical className="!px-5">
        <span className="text-sm font-semibold">Chi tiết thanh toán</span>
        <div className="flex justify-between items-center pb-4 tracking-tight">
          <span className="text-[#656574] font-medium text-[13px]">
            Tổng tiền
          </span>
          <div className="text-right">
            <span className="block text-black font-semibold">159.000đ</span>
            <span className="block font-medium text-xs">
              (tiết kiệm{' '}
              <span className="text-[#293dcd] font-semibold">20k</span>)
            </span>
          </div>
        </div>

        {/* Giảm giá */}
        <div className="flex justify-between items-center pt-1">
          <span className="text-[#231f20] font-medium text-sm">Giảm giá</span>
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
        <Flex align="center" justify="space-between" className="!pt-2">
          <span className="text-[#231f20] font-bold text-base">Thành tiền</span>
          <div className="text-right">
            <span className="text-black font-bold text-lg">184.000đ</span>
            <p className="text-[#e84d4d] text-xs font-semibold">
              (Đã giảm 40.000đ trên giá gốc)
            </p>
          </div>
        </Flex>
      </Flex>
      <Divider className="!border-t-[10px] !border-[#f1f1f1] !mt-1 !mb-5" />
      <Row>
        <p className="text-[13px] tracking-tight px-5">
          Nếu bạn không hài lòng với sản phẩm của chúng tôi? Bạn hoàn toàn có
          thể trả lại sản phẩm. Tìm hiểu thêm <a href="">tại đây</a>
        </p>
      </Row>
      <Row className="fixed bottom-31 w-full z-99 bg-[#eaeefa] border-t border-b border-[#e0e0e0] py-2">
        <Col span={24} className="px-3">
          <Flex align="center" justify="space-between" className="w-full">
            <span className="flex items-center text-[#46474b] font-medium tracking-tight">
              Đăng nhập để hoàn
              <span className="font-bold text-black pl-1"> 2.000 CoolCash</span>
            </span>
            <span
              className="flex items-center underline text-[#274cd4] font-medium"
              onClick={() => setDrawerOpen(true)}
            >
              Đăng nhập
            </span>
          </Flex>
        </Col>
      </Row>
      <RegisterWrapper open={isDrawerOpen} onClose={closeDrawer} />
      <Row className="fixed bottom-19 w-full z-99 border-t bg-[#eaeefa] border-b border-[#e0e0e0] py-1">
        <Col span={24} className="bg-[#eaeefa]">
          <Flex
            align="center"
            justify="space-between"
            className="w-full h-full"
          >
            <Flex align="center" justify="center" gap={6} className="flex-1">
              <Image src={imageSrc} alt="" preview={false} width={30} />
              {imageSrc === paymentMethodsToImageMap.COD && (
                <span className="font-bold !text-sm">
                  COD{' '}
                  <span className="!font-medium text-xs text-[#7f8188]">
                    thanh toán nhận hàng
                  </span>
                </span>
              )}
            </Flex>

            {/* Divider */}
            <div className="h-10 w-px bg-gray-500 mx-4"></div>

            <span className="text-black font-bold flex items-center flex-1 justify-center">
              <RiDiscountPercentFill className="text-xl mr-2" />
              <span>Voucher</span>
            </span>
          </Flex>
        </Col>
      </Row>
      <Row className="fixed bottom-0 left-0 w-full bg-white sm: h-20 lg:h-25 z-99 items-center sm: px-3 lg:px-0">
        <Col span={24} className="bg-white h-25">
          <Flex
            align="center"
            justify="space-between"
            gap={8}
            className="w-full h-full pr-4"
          >
            <Col className="flex flex-col justify-end">
              <div className="text-left">
                <span className="font-medium">
                  <span className="!text-xl !text-[#4168d3] !font-bold tracking-tight">
                    <span className="text-xs text-black">Thành tiền</span>
                    184.000đ
                  </span>
                  <p className="tracking-tighter font-medium text-left">
                    Tiết kiệm 40.000đ
                  </p>
                </span>
              </div>
            </Col>

            <button className="bg-black text-white sm: text-sm lg:text-base rounded-full sm: px-5 sm: py-2 lg:px-20 lg:py-3.5 lg:uppercase font-medium">
              Đặt hàng
            </button>
          </Flex>
        </Col>
      </Row>
    </div>
  );
};

export default ConfirmPayment;
