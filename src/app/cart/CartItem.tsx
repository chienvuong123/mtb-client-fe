'use client';

import React, { useState } from 'react';
import { Checkbox, Col, Divider, Flex, Image, Row, Select } from 'antd';
import { RiDeleteBinLine } from 'react-icons/ri';
import '@styles/cart.css';
import { ProductCart } from '@/types/cart';

interface CartItemProps {
  item: ProductCart;
  checked: boolean;
  onCheck: (id: string | number, checked: boolean) => void;
  onQuantityChange: (id: string | number, quantity: number) => void;
  onColorChange: (id: string | number, color: string) => void;
  onSizeChange: (id: string | number, size: string) => void;
  onRemove: (id: string) => void;
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
  const [quantity, setQuantity] = useState<number>(item.product_cart.quantity);

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
          onChange={(e) => onCheck(item?.id, e.target.checked)}
          className="self-start !mt-16 !pr-2"
        />
        <Col className="sm: w-36 lg:w-32">
          <Image
            preview={false}
            src={item?.product_cart.image}
            alt={item?.product_cart.name}
            className="rounded-lg !object-cover"
          />
        </Col>
        <Flex
          align="center"
          className="flex flex-col sm:flex-col md:flex-row flex-1"
        >
          <div className="w-full">
            <p className="font-medium xl:text-base">
              {item?.product_cart.name}
            </p>
            <span className="text-gray-500 sm: text-xs xl:text-sm font-medium">
              {item?.product_cart.color} / {item?.product_cart.size}
            </span>
            <Row gutter={[8, 8]} className="w-full py-3 items-center">
              <Col xs={9} sm={9} md={4} lg={10} xl={6}>
                <Select
                  options={item?.color}
                  value={item?.product_cart.color}
                  onChange={(value) => onColorChange(item?.id, value)}
                  className="custom-rounded-select-cart-item rounded-md w-full"
                />
              </Col>
              <Col xs={9} sm={9} md={4} lg={10} xl={6}>
                <Select
                  options={item?.size}
                  value={item?.product_cart.size}
                  onChange={(value) => onSizeChange(item?.id, value)}
                  className="custom-rounded-select-cart-item rounded-md w-full"
                />
              </Col>
              <Col xs={24} xl={12} className="flex min-w-0">
                <Flex align="center" className="w-full lg:justify-end">
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
                      {(
                        Number(item.product_cart.price) * quantity
                      ).toLocaleString()}
                      đ
                    </p>
                    {item.product_cart.discount_price && (
                      <p className="text-sm text-[#cccccc] font-medium line-through">
                        {(
                          Number(item.product_cart.discount_price) * quantity
                        ).toLocaleString()}
                        đ
                      </p>
                    )}
                  </div>
                </Flex>
              </Col>
            </Row>
            <div
              className="flex items-center space-x-1 hover:text-gray-700 cursor-pointer"
              onClick={() => onRemove(item.id)}
            >
              <RiDeleteBinLine size={16} />
              <span className="font-medium">Xóa</span>
            </div>
          </div>
        </Flex>
      </div>
      <Divider style={{ margin: '8px 0' }} />
    </>
  );
};

export default CartItem;
