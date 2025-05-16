import UIInput from '@/components/ui/UIInput';
import { useListDiscounts } from '@/lib/api/discountApi';
import { IDiscountDto } from '@/types/discountType';
import { Button, Col, Divider, Flex, Radio, Row } from 'antd';
import dayjs from 'dayjs';
import React, { useMemo, useState } from 'react';
import { FaArrowLeft, FaArrowRightLong } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';

interface IVoucherWalletProps {
  onClose: () => void;
  onDiscount: (discount: IDiscountDto) => void;
  totalPrice: number;
}

const VoucherWalletModal: React.FC<IVoucherWalletProps> = ({
  onClose,
  onDiscount,
  totalPrice,
}) => {
  const [activeTab, setActiveTab] = useState<'1' | '2'>('1');
  const [voucherCode, setVoucherCode] = useState<string>('');
  const [isButtonActive, setIsButtonActive] = useState<boolean>(false);
  const [selectedVoucherId, setSelectedVoucherId] = useState<string | null>(
    null,
  );
  const [message, setMessage] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const { data: listDiscounts } = useListDiscounts();

  const discountData = useMemo(() => {
    return listDiscounts?.data || [];
  }, [listDiscounts]);

  const handleVoucherSelect = (voucher: IDiscountDto): void => {
    setVoucherCode(voucher.code);
    setIsButtonActive(true);
    setSelectedVoucherId(voucher.id);
  };

  const handleApplyVoucher = (): void => {
    const selectedVoucher = discountData.find(
      (voucher) =>
        voucher.id === selectedVoucherId || voucher.code === voucherCode,
    );

    if (!selectedVoucher) {
      setIsButtonActive(false);
      setVoucherCode('');
      setSelectedVoucherId(null);
      return;
    }

    if (selectedVoucher.min_order_value > totalPrice) {
      setMessage(
        `Mã giảm giá ${selectedVoucher.code} chỉ áp dụng cho đơn hàng trên ${selectedVoucher.min_order_value.toLocaleString()}đ`,
      );
    } else {
      setIsSuccess(true);
      onDiscount(selectedVoucher);
      setMessage(`Áp dụng thành công voucher ${selectedVoucher.code}`);
    }
  };

  return (
    <div className="py-6 px-3">
      <Flex align="center" justify="space-between" className="!px-3">
        <FaArrowLeft
          onClick={onClose}
          className="text-[#2f5acf] text-2xl cursor-pointer"
        />
        <span className="text-2xl">Ví Voucher</span>
        <span></span>
      </Flex>
      <div className="mt-5">
        {/* Custom Tabs Header */}
        <Flex className="!px-4">
          <div
            className={`flex-1 text-center py-2.5 font-bold text-sm cursor-pointer transition tracking-tight
              ${
                activeTab === '1'
                  ? 'bg-[#d4e0ff] text-[#2251cf] border-b-4 border-[#2251cf]'
                  : 'bg-white text-black'
              }`}
            onClick={() => setActiveTab('1')}
          >
            Voucher Coolmate
          </div>
          <div
            className={`flex-1 text-center py-2.5 font-bold text-sm cursor-pointer transition tracking-tight
              ${
                activeTab === '2'
                  ? 'bg-[#d4e0ff] text-[#2251cf] border-b-4 border-[#2251cf]'
                  : 'bg-white text-black'
              }`}
            onClick={() => setActiveTab('2')}
          >
            Giới thiệu bạn bè
          </div>
        </Flex>
        {/* Tab Content */}
        <div>
          {activeTab === '1' && (
            <>
              <div className="bg-[#feeee5] px-3 py-2">
                <span className="text-[#b1a6ad] text-[13px] tracking-tight flex items-center justify-between">
                  Mỗi đơn hàng chỉ có thể sử dụng 1 phiếu giảm giá.
                  <IoClose className="text-black text-xl" />
                </span>
              </div>
              <Row gutter={16} className="mt-6 w-full px-3">
                <Col xs={18}>
                  <UIInput
                    placeholder="Nhập mã giảm giá"
                    value={voucherCode}
                    className="!bg-[#eeeeee] !border-0 rounded-full text-sm w-full"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setVoucherCode(e.target.value)
                    }
                  />
                </Col>
                <Col xs={4}>
                  <Button
                    className={`!rounded-full !px-4 !py-4.5 ${
                      isButtonActive
                        ? '!bg-black !text-white'
                        : '!bg-[#d9d9d9] !text-[#fffffb]'
                    } !font-medium`}
                    onClick={handleApplyVoucher}
                    disabled={!isButtonActive}
                  >
                    Áp dụng
                  </Button>
                </Col>
              </Row>
              <div
                className={`font-semibold text-sm tracking-tight text-xs ml-4 mb-10 mt-1.5 ${
                  isSuccess ? 'text-[#4f9f24]' : 'text-[#fc1919]'
                }`}
              >
                {message}
              </div>

              <Divider
                className="!border-t-[10px] !border-[#dddddd]"
                style={{ margin: '8px 0' }}
              />

              <Row className="!px-4">
                <span className="font-bold mb-4">Voucher đề xuất cho bạn</span>
                <Flex
                  className="!overflow-x-auto no-scrollbar flex-row"
                  style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                  }}
                >
                  {discountData.map((voucher) => {
                    const isSelected = selectedVoucherId === voucher.id;
                    return (
                      <div
                        key={voucher.id}
                        className="relative bg-[#f1f1f1] h-30 !w-90 rounded-lg overflow-hidden mb-3 mr-3 flex-shrink-0 cursor-pointer"
                        onClick={() => handleVoucherSelect(voucher)}
                      >
                        <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-white rounded-full"></div>
                        <div className="absolute left-6 top-0 h-full border-l border-dashed border-[#a8a8a8] pl-1.5">
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
                                  {voucher.code}
                                </span>{' '}
                                <span className="text-sm italic">
                                  (Còn {voucher.available_quantity})
                                </span>
                              </span>
                              <p className="text-xs">{voucher.description}</p>
                              <p className="text-xs pt-5">
                                HSD :{' '}
                                {dayjs(voucher.end_date).format('DD/MM/YYYY')}
                              </p>
                            </Col>
                            <Col
                              span={8}
                              className="flex justify-end text-right"
                            >
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
                                    isSelected
                                      ? 'text-[#1677ff]'
                                      : 'text-[#274cd4]'
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
                {discountData.length <= 0 && (
                  <div className="bg-[#feeee5] text-[#f95d2e] text-[13px] font-medium px-2 py-1 rounded-md w-[90%]">
                    ** Đơn hàng chưa thỏa mãn điều kiện áp dụng mã
                  </div>
                )}
                <div className="flex justify-center mt-6 w-full">
                  <span className="text-[#b2b2b4] text-sm tracking-tight text-center">
                    -- Đã hiển thị tất cả voucher thuộc Ví Voucher của bạn --
                  </span>
                </div>
              </Row>
            </>
          )}
          {activeTab === '2' && (
            <>
              <Row gutter={16} className="mt-7 mb-10 w-full">
                <Col xs={18}>
                  <UIInput
                    placeholder="Nhập mã giới thiệu"
                    className="!bg-[#eeeeee] !border-0 rounded-full text-sm w-full"
                  />
                </Col>
                <Col xs={4}>
                  <Button className="!bg-[#d9d9d9] !text-[#fffffb] !font-medium !rounded-full !px-4 !py-4.5">
                    Áp dụng
                  </Button>
                </Col>
              </Row>
              <Divider
                className="!border-t-[10px] !border-[#dddddd]"
                style={{ margin: '8px 0' }}
              />
              <Row className="!px-4">
                <span className="font-bold tracking-tight">
                  Voucher đề xuất cho bạn
                </span>

                <div className="flex justify-center mt-1 w-full">
                  <span className="text-sm tracking-tight text-center">
                    Bạn chưa có mã giới thiệu nào.
                  </span>
                </div>
              </Row>
            </>
          )}
        </div>
      </div>
      <Row className="fixed bottom-0 left-0 w-full h-20 border-t border-[#eeeeee] z-[9999] items-center bg-white">
        <div className="flex justify-center w-full">
          <button
            className="flex items-center bg-black text-white px-16 py-3 rounded-full text-xs font-medium"
            onClick={onClose}
          >
            Tiếp tục thanh toán <FaArrowRightLong className="mt-0.5 ml-2" />
          </button>
        </div>
      </Row>
    </div>
  );
};

export default VoucherWalletModal;
