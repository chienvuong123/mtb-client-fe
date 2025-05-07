import { Divider, Flex, Image } from 'antd';
import React from 'react';

interface IproductInfor {
  name: string;
  image: string;
  color: string;
  price: string;
  discount?: string;
}

interface UIQuickCartProps {
  size: string;
  productInfor: IproductInfor;
}

const UIQuickCart: React.FC<UIQuickCartProps> = ({ size, productInfor }) => {
  return (
    <div className="px-4">
      <span className="font-bold">Đã thêm vào giỏ hàng!</span>
      <Divider style={{ margin: '12px 0' }} />
      <Flex gap={8}>
        <Image
          src={productInfor.image}
          alt=""
          preview={false}
          width={90}
          className="rounded-lg"
        />
        <Flex vertical justify="space-between" className="">
          <span className="font-bold">{productInfor?.name}</span>
          <div className="flex flex-col">
            <span>
              {productInfor?.color} / <span className="uppercase">{size}</span>
            </span>
            <span className="text-[#ff4920] text-[13px] font-medium">
              {Number(productInfor?.price)?.toLocaleString('vi-VN')}đ{' '}
              <span className="text-[#c4c4c4] pl-1 line-through">
                {Number(productInfor?.discount)?.toLocaleString('vi-VN')}đ
              </span>
            </span>
          </div>
        </Flex>
      </Flex>
      <button className="border rounded-full flex justify-center w-full py-1.5 font-medium my-4 cursor-pointer hover:bg-black hover:text-white">
        Xem giỏ hàng
      </button>
    </div>
  );
};

export default UIQuickCart;
