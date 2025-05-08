import React, { useState } from 'react';
import { Flex, Image } from 'antd';
import { IoCloseOutline } from 'react-icons/io5';

interface Product {
  id: number;
  name: string;
  color: string;
  size: string;
  price: number;
  originalPrice: number;
  quantity: number;
  image: string;
}

const initialProducts: Product[] = [
  {
    id: 1,
    name: 'Áo Thun Nam Cotton 220GSM',
    color: 'Nâu',
    size: '2XL',
    price: 159000,
    originalPrice: 179000,
    quantity: 1,
    image: '/images/prod/p4.webp',
  },
  {
    id: 2,
    name: 'Áo Thun Nam Slim Fit',
    color: 'Xanh',
    size: 'L',
    price: 189000,
    originalPrice: 209000,
    quantity: 2,
    image: '/images/prod/p1.webp',
  },
  {
    id: 3,
    name: 'Áo Polo Nam Cao Cấp',
    color: 'Đen',
    size: 'M',
    price: 249000,
    originalPrice: 279000,
    quantity: 1,
    image: '/images/prod/p2.webp',
  },
  {
    id: 4,
    name: 'Áo Sơ Mi Nam Dài Tay',
    color: 'Trắng',
    size: 'XL',
    price: 299000,
    originalPrice: 329000,
    quantity: 3,
    image: '/images/prod/p3.webp',
  },
];

const UIQuickCartInfo: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const handleRemoveProduct = (id: number): void => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const totalPrice: number = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0,
  );
  const totalItems: number = products.length;

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
        <span className="tracking-tighter font-medium text-[#3b64d2] cursor-pointer">
          Xem tất cả
        </span>
      </Flex>
      <div
        className="mt-2"
        style={{
          maxHeight: products.length > 2 ? '200px' : 'auto',
          overflowY: products.length > 2 ? 'auto' : 'visible',
          scrollbarWidth: 'thin',
        }}
      >
        {products.map((product) => (
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
                  {product.price.toLocaleString('vi-VN')}đ{' '}
                  <span className="text-xs text-[#e3e3e3] line-through">
                    {product.originalPrice.toLocaleString('vi-VN')}đ
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
