'use client';

import React from 'react';
import { Button, Checkbox, Col, Divider, Flex, Image, InputNumber } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import UISelector from '@/components/ui/UISelector';

interface CartItemProps {
  item: {
    id: string | number;
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
  const colorOptions = [
    { label: 'Nâu', value: 'Nâu' },
    { label: 'Đen', value: 'Đen' },
    { label: 'Nâu đậm', value: 'Nâu đậm' },
  ];

  const sizeOptions = [
    { label: 'S', value: 'S' },
    { label: 'M', value: 'M' },
    { label: 'L', value: 'L' },
    { label: 'XL', value: 'XL' },
    { label: '2XL', value: '2XL' },
  ];

  const handleQuantityChange = (value: number | null) => {
    if (value !== null) {
      onQuantityChange(item.id, value);
    }
  };

  return (
    <>
      <div className="flex items-start space-x-4 py-3 w-full">
        <div className="flex items-start pt-1">
          <Checkbox
            checked={checked}
            onChange={(e) => onCheck(item.id, e.target.checked)}
          />
        </div>

        <Flex gap={12} className="flex-1">
          <Image
            width={130}
            preview={false}
            src={item.image}
            alt={item.name}
            className="rounded-lg object-cover"
          />

          <div className="flex flex-col flex-1">
            <p className="font-medium text-sm mb-1">{item.name}</p>
            <span className="text-gray-500 text-xs mb-3">
              {item.color} / {item.size}
            </span>

            <div className="flex !space-x-2 mb-2">
              <Col span={6}>
                <UISelector
                  options={colorOptions}
                  value={item.color}
                  onChange={(value) => onColorChange(item.id, value)}
                />
              </Col>
              <Col span={6}>
                <UISelector
                  options={sizeOptions}
                  value={item.size}
                  onChange={(value) => onSizeChange(item.id, value)}
                />
              </Col>
            </div>
          </div>
        </Flex>

        <div className="flex flex-col items-end space-y-2">
          <div className="flex items-center border rounded-full overflow-hidden">
            <Button
              type="text"
              className="border-0 flex items-center justify-center w-8 h-8"
              onClick={() =>
                handleQuantityChange(Math.max(1, item.quantity - 1))
              }
            >
              -
            </Button>
            <InputNumber
              min={1}
              value={item.quantity}
              onChange={handleQuantityChange}
              controls={false}
              className="w-12 border-0 text-center"
            />
            <Button
              type="text"
              className="border-0 flex items-center justify-center w-8 h-8"
              onClick={() => handleQuantityChange(item.quantity + 1)}
            >
              +
            </Button>
          </div>

          <div className="text-right">
            <div className="font-semibold">{item.price.toLocaleString()}đ</div>
            {item.originalPrice > item.price && (
              <div className="text-gray-400 line-through text-sm">
                {item.originalPrice.toLocaleString()}đ
              </div>
            )}
          </div>

          <Button
            type="text"
            icon={<DeleteOutlined />}
            onClick={() => onRemove(item.id)}
            className="text-gray-500 hover:text-gray-700 p-0"
          />
        </div>
      </div>
      <Divider className="my-0" />
    </>
  );
};

export default CartItem;
