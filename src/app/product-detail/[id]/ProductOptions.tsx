'use client';

import React, { useState } from 'react';
import { Row, Col, Typography, Tooltip } from 'antd';
import { allColors, sizeOptions } from '@/mocks/mockSizeColer';

const { Text, Link } = Typography;

interface ProductColorSizePickerProps {
  onColorChange?: (color: string) => void;
  onSizeChange?: (size: string) => void;
  defaultColor?: string;
  defaultSize?: string;
}

const ProductColorSizePicker: React.FC<ProductColorSizePickerProps> = ({
  onColorChange,
  onSizeChange,
  defaultColor = 'brown',
  defaultSize = 'M',
}) => {
  const [selectedColor, setSelectedColor] = useState<string>(defaultColor);
  const [selectedSize, setSelectedSize] = useState<string>(defaultSize);

  const handleColorSelect = (color: string): void => {
    setSelectedColor(color);
    if (onColorChange) {
      onColorChange(color);
    }
  };

  const handleSizeChange = (size: string): void => {
    setSelectedSize(size);
    if (onSizeChange) {
      onSizeChange(size);
    }
  };

  const selectedColorName =
    allColors.find((color) => color.value === selectedColor)?.name || 'Nâu';

  const selectedColorSize = sizeOptions.find(
    (size) => size.value === selectedSize,
  );

  return (
    <Row gutter={[16, 16]} className="space-y-6">
      <Col span={24}>
        <Text strong className="block mb-2 sm: !text-xs md:!text-sm">
          Màu sắc: <span className="font-bold">{selectedColorName}</span>
        </Text>
        <Row gutter={[8, 8]}>
          {allColors.map((color) => (
            <Col key={color.value} xl={3}>
              <div
                onClick={() => handleColorSelect(color.value)}
                className={`sm: w-10 sm: h-6 xl:w-14 xl:h-8 rounded-full cursor-pointer flex items-center justify-center ${
                  selectedColor === color.value
                    ? 'border-2 border-blue-500 box-border'
                    : 'border border-gray-300'
                }`}
                style={{ backgroundColor: color.hex }}
                aria-label={`Color ${color.name}`}
              />
            </Col>
          ))}
        </Row>
      </Col>

      <Col span={24}>
        <Row justify="space-between" className="mb-2">
          <Col>
            <Text strong className="sm: !text-xs md:!text-sm">
              Kích thước Áo:{' '}
              <span className="font-bold">{selectedColorSize?.label}</span>
              <span>{`(${selectedColorSize?.height} | ${selectedColorSize?.weight})`}</span>
            </Text>
          </Col>
          <Col>
            <Link
              href="#"
              className="!text-blue-700 sm: !text-xs md:!text-sm"
              style={{ textDecoration: 'underline' }}
            >
              Hướng dẫn chọn size
            </Link>
          </Col>
        </Row>
        <Row gutter={[8, 8]}>
          {sizeOptions.map((size) => (
            <Col key={size.value} lg={6} xl={4}>
              <Tooltip
                title={
                  <>
                    {size.height}
                    <br />
                    {size.weight}
                  </>
                }
                placement="bottom"
                styles={{
                  body: {
                    backgroundColor: 'white',
                    color: 'black',
                    fontWeight: 500,
                    paddingLeft: 15,
                    paddingRight: 15,
                  },
                  root: {
                    zIndex: 1000,
                  },
                }}
              >
                <button
                  onClick={() => handleSizeChange(size.value)}
                  className={`sm: w-14 sm: h-8 lg:w-20 lg:h-10 sm: rounded-lg lg:rounded-full cursor-pointer flex items-center justify-center font-medium ${
                    selectedSize === size.value
                      ? 'bg-black text-white'
                      : 'bg-[#d9d9d9] text-black'
                  }`}
                >
                  {size.label}
                </button>
              </Tooltip>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default ProductColorSizePicker;
