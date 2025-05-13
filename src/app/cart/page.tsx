'use client';
import { useEffect, useMemo, useState } from 'react';
import UIInput from '@/components/ui/UIInput';
import UISelector from '@/components/ui/UISelector';
import {
  Button,
  Checkbox,
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
import CartItem from './CartItem';
import DealsPage from './Deals';
import CouponCard from './CouponCard';
import PaymentMethods from './PaymentMethods';
import { HiPercentBadge, HiChevronRight } from 'react-icons/hi2';
import VoucherWalletModal from './VoucherWalletModal';
import RegisterWrapper from '../register/register';
import ConfirmPayment from './ConfirmPayment';
import { useDeleteCart, useListCarts } from '@/lib/api/cartApi';
import { IDiscountDto } from '@/types/discountType';

const { Text, Link } = Typography;

const paymentMethodsToImageMap: Record<string, string> = {
  COD: '/images/payment-methods/pr-1.png',
  MOMO: '/images/payment-methods/momo.png',
  ZALOPAY: '/images/payment-methods/zalo-pay.png',
  VNPAY: '/images/payment-methods/vnpay.png',
};

const CartPage = () => {
  const [accept, setAccept] = useState<boolean>(false);
  const [showReferralCode, setShowReferralCode] = useState<boolean>(false);
  const [imageSrc, setImageSrc] = useState(paymentMethodsToImageMap.COD);
  const [isVoucherWallet, setIsVoucherWallet] = useState<boolean>(false);
  const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [isConfirmPayment, setIsConfirmPayment] = useState<boolean>(false);
  const [shippingFee] = useState<number>(25000);
  const [discount, setDiscount] = useState<number>(0);

  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [isAllChecked, setIsAllChecked] = useState(true);

  const { data } = useListCarts();
  const { mutate: deleteCart } = useDeleteCart();

  const cartData = useMemo(() => {
    return data?.data || [];
  }, [data]);

  useEffect(() => {
    if (cartData.length > 0) {
      const initialCheckedState: Record<string, boolean> = {};
      cartData.forEach((item) => {
        initialCheckedState[item.id] = true;
      });
      setCheckedItems(initialCheckedState); // mặc định checked tất cả
    }
  }, [cartData]);

  // Tính tổng giá trị giỏ hàng với useMemo
  const cartTotal = useMemo(() => {
    return cartData.reduce((acc, item) => {
      if (checkedItems[item.id]) {
        const itemTotal =
          item.product_cart.quantity * Number(item.product_cart.discount_price);
        return acc + itemTotal;
      }
      return acc;
    }, 0);
  }, [cartData, checkedItems]);

  // Tính tổng tiền tiết kiệm giỏ hàng với useMemo
  const totalSavings = useMemo(() => {
    return cartData.reduce((acc, item) => {
      if (checkedItems[item.id]) {
        const itemSavings =
          (Number(item.product_cart.price) -
            Number(item.product_cart.discount_price)) *
          item.product_cart.quantity;

        return acc + (itemSavings > 0 ? itemSavings : 0);
      }
      return acc;
    }, 0);
  }, [cartData, checkedItems]);

  const handleChangeAccept = () => {
    setAccept(!accept);
  };

  const hanldeCloseVoucherWallet = () => {
    setIsVoucherWallet(false);
  };

  const handleColseConfirmPayment = () => {
    setIsConfirmPayment(false);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const handleCheck = (id: string | number, checked: boolean) => {
    setCheckedItems((prev) => {
      const newState = { ...prev, [id]: checked };

      // Check if all items are checked
      const allChecked = cartData.every((item) => newState[item.id]);
      setIsAllChecked(allChecked);

      return newState;
    });
  };

  // Handle "Check All" checkbox
  const handleCheckAll = (checked: boolean) => {
    setIsAllChecked(checked);

    const newState: Record<string, boolean> = {};
    cartData.forEach((item) => {
      newState[item.id] = checked;
    });
    setCheckedItems(newState);
  };

  const handleChangeVoucher = (discount: IDiscountDto) => {
    if (discount.min_order_value <= cartTotal) {
      setDiscount(discount.max_discount);
    } else {
      setDiscount(0);
    }
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

  const handleRemoveItem = (id: string) => {
    deleteCart(id);
  };

  const handlePaymentMethodChange = (value: string) => {
    const src = paymentMethodsToImageMap[value];
    setImageSrc(src);
  };

  const totalDiscountAmount = totalSavings - shippingFee + discount; // Tổng tiền tiết kiệm
  const totalAmount = cartTotal + shippingFee - discount; // Tổng tiền sau khi giảm giá

  return (
    <>
      {isVoucherWallet || isConfirmPayment ? (
        <>
          {isVoucherWallet && (
            <VoucherWalletModal onClose={hanldeCloseVoucherWallet} />
          )}
          {isConfirmPayment && (
            <ConfirmPayment onClose={handleColseConfirmPayment} />
          )}
        </>
      ) : (
        <>
          <div className="sm: p-3 sm: mt-5 lg:mt-0 lg:p-10 sm: mb-40 lg:mb-20">
            <Row gutter={24}>
              <Col xs={0} lg={14}>
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
                <PaymentMethods
                  onSelectPaymentMethod={handlePaymentMethodChange}
                />
              </Col>
              <Col xs={24} lg={10}>
                <h5 className="text-black sm: text-2xl lg:text-3xl font-bold mb-2">
                  Giỏ hàng
                </h5>
                <div className="bg-[#e3e6fa] p-2 rounded-lg flex justify-between">
                  <div>
                    <GiftFilled className="sm: text-lg lg:text-2xl !text-[#273bcd]" />{' '}
                    <span className="text-[#4253d3] sm: text-xs lg:text-sm font-medium">
                      Mua thêm
                      <span className="font-bold text-[#293dcd]">
                        {' '}
                        250.000 đ
                      </span>{' '}
                      để nhận{' '}
                      <span className="font-bold">1 áo tự hào Việt Nam</span>
                    </span>
                  </div>
                  <button className="rounded-full font-medium bg-[#273bcd] text-white sm: px-2 sm: py-1 lg:px-4 lg:py-2 xs: !text-[10px] lg:!text-sm">
                    Mua ngay
                  </button>
                </div>

                <Row>
                  <Col span={16} className="flex space-x-3 mt-4">
                    <Checkbox
                      checked={isAllChecked}
                      onChange={(e) => handleCheckAll(e.target.checked)}
                    />
                    <span className="text-[#acacac] font-medium text-xs pl-2">
                      TẤT CẢ SẢN PHẨM
                    </span>
                    <span className="text-[#acacac] font-medium text-xs">
                      |
                    </span>
                    <span
                      className="text-[#acacac] font-medium text-xs cursor-pointer"
                      onClick={() => handleCheckAll(false)}
                    >
                      XÓA TẤT CẢ
                    </span>
                  </Col>
                  <Col
                    lg={8}
                    className="hidden lg:flex mt-4 justify-end items-center space-x-10"
                  >
                    <span className="text-[#acacac] font-medium text-xs">
                      SỐ LƯỢNG
                    </span>
                    <span className="text-[#acacac] font-medium text-xs">
                      GIÁ
                    </span>
                  </Col>
                </Row>

                <Divider style={{ margin: '8px 0' }} />

                <Row>
                  {cartData.map((item) => (
                    <Col span={24} key={item.id}>
                      <CartItem
                        item={item}
                        key={item.id}
                        checked={checkedItems[item.id] || false}
                        onCheck={handleCheck}
                        onQuantityChange={handleQuantityChange}
                        onColorChange={handleColorChange}
                        onSizeChange={handleSizeChange}
                        onRemove={handleRemoveItem}
                      />
                    </Col>
                  ))}
                </Row>
                {/* ưu đãi dành riêng */}
                <DealsPage
                  onDiscount={handleChangeVoucher}
                  totalPrice={cartTotal}
                />
                {/* Mã giới thiệu */}
                <div className="hidden lg:block">
                  <CouponCard />
                </div>
                <Row>
                  <Col className="w-full p-4 hidden lg:block">
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
                            {cartTotal.toLocaleString()}đ
                          </span>
                          <span className="block font-medium text-xs">
                            (tiết kiệm{' '}
                            <span className="text-[#293dcd]">
                              {totalSavings / 1000}k
                            </span>
                            )
                          </span>
                        </div>
                      </div>

                      {/* Giảm giá */}
                      <div className="flex justify-between items-center pt-1">
                        <span className="text-[#231f20] font-medium text-sm">
                          Giảm giá
                        </span>
                        <span className="text-black font-semibold">
                          {discount.toLocaleString()}đ
                        </span>
                      </div>

                      {/* Phí giao hàng */}
                      <div className="flex justify-between items-center pt-2">
                        <span className="text-[#231f20] font-medium text-sm">
                          Phí giao hàng
                        </span>
                        <span className="text-black font-semibold">
                          +{shippingFee.toLocaleString()}đ
                        </span>
                      </div>
                      <Divider style={{ margin: '10px 2px' }} />
                      <div className="flex justify-between items-center pt-2">
                        <span className="text-[#231f20] font-bold text-base">
                          Tổng
                        </span>
                        <span className="text-black font-bold text-lg text-right">
                          {totalAmount.toLocaleString()}đ
                          <p className="text-[#ec6161] font-medium text-xs">
                            (Đã giảm{' '}
                            <span className="tracking-tight italic">
                              {totalDiscountAmount.toLocaleString()}
                            </span>
                            đ trên giá gốc)
                          </p>
                        </span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <Row className="lg:!hidden fixed bottom-30 w-full z-99 bg-[#eaeefa] border-t border-b border-[#e0e0e0] py-2">
            <Col span={24} className="px-3">
              <Flex align="center" justify="space-between" className="w-full">
                <span className="flex items-center text-[#46474b] font-medium tracking-tight">
                  Đăng nhập để hoàn
                  <span className="font-bold text-black pl-1">
                    {' '}
                    2.000 CoolCash
                  </span>
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
          <Row className="lg:!hidden fixed bottom-20 w-full z-99 bg-white border-t border-b border-[#e0e0e0] py-2">
            <Col span={24} className="px-3">
              <Flex align="center" justify="space-between" className="w-full">
                <span className="flex items-center">
                  <HiPercentBadge size={24} className="mr-1" /> Voucher
                </span>
                <span
                  className="flex items-center"
                  onClick={() => setIsVoucherWallet(true)}
                >
                  Chọn / nhập mã{' '}
                  <HiChevronRight className="text-xl ml-1 text-gray-[#949494]" />
                </span>
              </Flex>
            </Col>
          </Row>
          <Row
            className="fixed bottom-0 left-0 w-full sm: h-20 lg:h-25 z-99 items-center sm: px-3 lg:px-0"
            style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}
          >
            <Col
              xs={0}
              sm={0}
              md={0}
              lg={12}
              xl={12}
              className="bg-[#eaeefa] h-25"
            >
              <Flex
                align="center"
                justify="space-evenly"
                className="w-full h-full"
              >
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
            <Col
              xs={8}
              lg={0}
              className="lg:!hidden sm: !block bg-white h-25 !flex items-center"
            >
              <Checkbox
                checked={isAllChecked}
                onChange={(e) => handleCheckAll(e.target.checked)}
              />
              <span className="pl-2 font-medium">Tất cả</span>
            </Col>
            <Col xs={16} sm={12} lg={12} className="bg-white h-25">
              <Flex
                align="center"
                justify="end"
                gap={8}
                className="w-full h-full pr-4"
              >
                <Col className="flex flex-col justify-end items-end">
                  <div className="hidden lg:block">
                    <Text className="font-medium">
                      Thành tiền
                      <span className="!text-xl !text-[#4168d3] !font-bold">
                        {totalAmount.toLocaleString()}đ
                      </span>
                    </Text>
                  </div>
                  <div className="lg:hidden sm: block mt-3">
                    <Text className="font-medium">
                      <span className="!text-xl !text-[#4168d3] !font-bold">
                        {totalDiscountAmount.toLocaleString()}đ
                      </span>
                      <p className="tracking-tighter font-medium text-end">
                        Tiết kiện
                        {totalDiscountAmount.toLocaleString()}đ
                      </p>
                    </Text>
                  </div>
                  <div className="hidden lg:block text-right">
                    <Link
                      href="#"
                      className="font-bold !underline"
                      onClick={() => setDrawerOpen(true)}
                    >
                      Đăng nhập
                    </Link>{' '}
                    <Text className="font-medium">
                      để hoàn <Text className="font-bold">2.000 CoolCash</Text>{' '}
                      | Tiết kiệm{' '}
                      <Text style={{ fontStyle: 'italic' }}>
                        {totalDiscountAmount.toLocaleString()}đ
                      </Text>
                    </Text>
                  </div>
                </Col>
                <button
                  className="bg-black text-white sm: text-sm lg:text-base rounded-full sm: px-5 sm: py-2 md:px-14 md:py-3 xl:px-20 xl:py-3.5 lg:uppercase font-medium"
                  onClick={() => setIsConfirmPayment(true)}
                >
                  Đặt hàng
                </button>
              </Flex>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default CartPage;
