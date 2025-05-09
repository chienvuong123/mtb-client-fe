import React, { useState } from 'react';
import { Radio, Typography, Image } from 'antd';
import Link from 'next/link';

const { Text } = Typography;

// Danh sách các phương thức thanh toán
const paymentMethods = [
  {
    value: 'COD',
    label: 'Thanh toán khi nhận hàng',
    image: '/images/payment-methods/pr-1.png',
  },
  {
    value: 'MOMO',
    label: 'Ví MoMo',
    image: '/images/payment-methods/momo.png',
  },
  {
    value: 'ZALOPAY',
    label: 'Thanh toán qua ZaloPay',
    image: '/images/payment-methods/zalo-pay.png',
    description: (
      <div className="flex flex-col md:flex-row items-center pl-2">
        <span className="text-[#7a7a7a] sm: text-[10px] md:text-xs font-medium pr-1">
          Hỗ trợ mọi hình thức thanh toán
        </span>
        <div className="sm: w-40 md:w-64">
          <Image
            src="/images/payment-methods/zl-1.png"
            alt=""
            preview={false}
          />
        </div>
      </div>
    ),
  },
  {
    value: 'VNPAY',
    label: 'Ví điện tự VNPAY',
    image: '/images/payment-methods/vnpay.png',
    description: (
      <div className="flex items-center pl-2">
        <span className="text-[#7a7a7a] sm: text-[10px] md:text-xs font-medium pr-1">
          Quét QR để thanh toán
        </span>
      </div>
    ),
  },
];

interface PaymentMethodsProps {
  onSelectPaymentMethod: (value: string) => void;
}

const PaymentMethods: React.FC<PaymentMethodsProps> = ({
  onSelectPaymentMethod,
}) => {
  const [selectedMethod, setSelectedMethod] = useState<string>('COD');

  const handleSelect = (value: string) => {
    onSelectPaymentMethod(value);
    setSelectedMethod(value);
  };

  return (
    <div className="pt-5">
      <h5 className="text-black sm: text-xl md:text-3xl font-bold mb-5 tracking-tight">
        Hình thức thanh toán
      </h5>
      <Radio.Group value={selectedMethod} className="w-full">
        {paymentMethods.map((method) => (
          <div
            key={method.value}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor =
                '#f2f2f2';
            }}
            onMouseLeave={(e) => {
              if (selectedMethod !== method.value) {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  '#ffffff';
              }
            }}
            onClick={() => handleSelect(method.value)}
            className={`flex justify-start border border-[#e8e8e8] rounded-xl px-4 h-15 mb-2 transition-colors cursor-pointer ${
              selectedMethod === method.value ? 'bg-[#f2f2f2]' : 'bg-white'
            }`}
          >
            <div className="flex items-center gap-2 w-full">
              <Radio
                value={method.value}
                checked={selectedMethod === method.value}
                onChange={() => handleSelect(method.value)}
              />
              <Image
                src={method.image}
                alt={method.label}
                preview={false}
                width={45}
              />
              <div>
                <Text strong className="pl-2">
                  {method.label}
                </Text>
                {method.description && method.description}
              </div>
            </div>
          </div>
        ))}
      </Radio.Group>
      <span className="font-medium md:block hidden">
        Nếu bạn không hài lòng với sản phẩm của chúng tôi? Bạn hoàn toàn có thể
        trả lại sản phẩm. Tìm hiểu thêm{' '}
        <Link href={'#'} className="!text-[#273bcc] font-medium">
          tại đây
        </Link>{' '}
        .
      </span>
    </div>
  );
};

export default PaymentMethods;
