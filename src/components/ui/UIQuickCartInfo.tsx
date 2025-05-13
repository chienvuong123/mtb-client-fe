import React from 'react';
import { Flex, Image } from 'antd';
import { IoCloseOutline } from 'react-icons/io5';
import Link from 'next/link';
import { useDeleteCart } from '@/lib/api/cartApi';
import { Product } from '@/types/cart';

interface UIQuickCartInfoProps {
  data: Product[];
}

const UIQuickCartInfo: React.FC<UIQuickCartInfoProps> = ({ data }) => {
  const { mutate: deleteCart } = useDeleteCart();

  const handleRemoveProduct = (id: string): void => {
    deleteCart(id);
  };

  const totalPrice: number = data.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0,
  );
  const totalItems: number = data.length;

  return (
    <div
      className="bg-white rounded-xl w-[400px] p-3 border border-[#dbdbdb] mt-6"
      style={{
        boxShadow:
          'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px',
      }}
    >
      <Flex justify="space-between">
        <span className="text-[#a9a9a9] font-medium tracking-tighter">
          Tạm tính:{' '}
          <span className="text-black font-bold">
            {totalPrice.toLocaleString('vi-VN')}đ
          </span>{' '}
          ( {totalItems} sản phẩm )
        </span>
        <Link href="/cart">
          <span className="tracking-tighter font-medium text-[#3b64d2] cursor-pointer">
            Xem tất cả
          </span>
        </Link>
      </Flex>
      <div
        className="mt-2"
        style={{
          maxHeight: data.length > 2 ? '280px' : 'auto',
          overflowY: data.length > 2 ? 'auto' : 'visible',
          scrollbarWidth: 'thin',
        }}
      >
        {data.map((product) => (
          <Flex key={product.id} className="!mt-2" gap={10}>
            <Image
              src={product.image}
              alt={product.name}
              preview={false}
              width={90}
              className="rounded-xl !object-cover"
            />
            <Flex vertical justify="space-evenly" className="flex-1">
              <div>
                <span className="font-bold text-[13px]">{product.name}</span>
                <p className="text-xs font-medium">
                  {product.color} / {product.size}
                </p>
              </div>
              <div>
                <span className="text-lg font-medium">
                  {Number(product.discount_price).toLocaleString()}đ{' '}
                  <span className="text-xs text-[#e3e3e3] line-through">
                    {Number(product.price).toLocaleString()}đ
                  </span>
                </span>
                <p className="text-xs font-medium">x{product.quantity}</p>
              </div>
            </Flex>
            <IoCloseOutline
              className="mt-5 mr-2 text-xl cursor-pointer"
              onClick={() => handleRemoveProduct(product.id)}
            />
          </Flex>
        ))}
      </div>
    </div>
  );
};

export default UIQuickCartInfo;
