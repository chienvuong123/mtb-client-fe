'use client';

import React, { useState } from 'react';
import { Button, Checkbox, Col, Divider, Flex, Image, Row, Select } from 'antd';
import { RiDeleteBinLine } from 'react-icons/ri';
import '@styles/cart.css';

interface CartItemProps {
  item: {
    id: string;
    name: string;
    color: string;
    size: string;
    price: number;
    originalPrice: number;
    quantity: number;
    image: string;
  };
  checked: boolean;
  onCheck: (id: string | number, checked: boolean) => void;
  onQuantityChange: (id: string | number, quantity: number) => void;
  onColorChange: (id: string | number, color: string) => void;
  onSizeChange: (id: string | number, size: string) => void;
  onRemove: (id: string | number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  item,
  checked,
  onCheck,
  onQuantityChange,
  onColorChange,
  onSizeChange,
  onRemove,
}) => {
  const [quantity, setQuantity] = useState<number>(item.quantity);

  const colorOptions = [
    { label: 'Be', value: 'Be' },
    { label: 'Đen', value: 'Đen' },
    { label: 'Trắng', value: 'Trắng' },
  ];

  const sizeOptions = [
    { label: 'S', value: 'S' },
    { label: 'M', value: 'M' },
    { label: 'L', value: 'L' },
    { label: 'XL', value: 'XL' },
    { label: '2XL', value: '2XL' },
  ];

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange(item.id, newQuantity);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(item.id, newQuantity);
    }
  };

  return (
    <>
      <div className="flex items-start space-x-4 py-3 w-full">
        <Checkbox
          checked={checked}
          onChange={(e) => onCheck(item.id, e.target.checked)}
          className="self-start !mt-16 !pr-2"
        />
        <Image
          width={120}
          preview={false}
          src={item.image}
          alt={item.name}
          className="rounded-lg object-cover"
        />
        <Flex align="center" className="flex-1">
          <div className="flex-1">
            <p className="font-medium text-base">{item.name}</p>
            <span className="text-gray-500 text-sm font-medium">
              {item.color} / {item.size}
            </span>
            <Row gutter={8} className="w-full py-3">
              <Col span={9}>
                <Select
                  options={colorOptions}
                  value={item.color}
                  onChange={(value) => onColorChange(item.id, value)}
                  className="custom-rounded-select-cart-item rounded-md w-full"
                />
              </Col>
              <Col span={9}>
                <Select
                  options={sizeOptions}
                  value={item.size}
                  onChange={(value) => onSizeChange(item.id, value)}
                  className="custom-rounded-select-cart-item rounded-md w-full"
                />
              </Col>
            </Row>
            <Button
              type="text"
              icon={<RiDeleteBinLine size={16} />}
              onClick={() => onRemove(item.id)}
              className="text-gray-500 hover:text-gray-700 mt-2"
            >
              Xóa
            </Button>
          </div>
          <div className="flex flex-col items-end">
            <Flex align="center">
              <Flex
                align="center"
                className="rounded-full bg-white border border-gray-300 overflow-hidden"
                style={{ height: 35 }}
              >
                <button
                  onClick={handleDecrease}
                  className="flex items-center justify-center w-10 font-bold text-lg border-0 cursor-pointer"
                >
                  -
                </button>
                <div className="px-2 text-sm">{quantity}</div>
                <button
                  onClick={handleIncrease}
                  className="flex items-center justify-center w-10 font-bold text-lg border-0 cursor-pointer"
                >
                  +
                </button>
              </Flex>
              <div className="text-right ml-4">
                <p className="font-bold text-base">
                  {item.price.toLocaleString()}đ
                </p>
                <p className="text-sm text-[#cccccc] font-medium line-through">
                  {item.originalPrice.toLocaleString()}đ
                </p>
              </div>
            </Flex>
          </div>
        </Flex>
      </div>
      <Divider className="my-0" />
    </>
  );
};

export default CartItem;
