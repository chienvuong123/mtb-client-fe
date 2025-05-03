import React, { useEffect, useState } from 'react';
import { Collapse, Radio, Button, Space, Checkbox } from 'antd';
import type { CheckboxChangeEvent, RadioChangeEvent } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import '@styles/collection-search.css';

interface SearchFilterProps {
  onSearch: (filters: {
    category: string;
    size: string;
    colors: string[];
    materials: string[];
  }) => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({ onSearch }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);

  useEffect(() => {
    onSearch({
      category: selectedCategory,
      size: selectedSize,
      colors: selectedColors,
      materials: selectedMaterials,
    });
  }, [
    selectedCategory,
    selectedSize,
    selectedColors,
    selectedMaterials,
    onSearch,
  ]);

  const onCategoryChange = (e: RadioChangeEvent) => {
    setSelectedCategory(e.target.value);
  };

  const onSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  const onColorSelect = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color],
    );
  };

  const onMaterialChange = (e: CheckboxChangeEvent) => {
    const material = e.target.value;
    setSelectedMaterials((prev) =>
      e.target.checked
        ? [...prev, material]
        : prev.filter((m) => m !== material),
    );
  };

  const sizes = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL'];
  const colors = [
    { name: 'Phối màu', hex: '#1e1e1e' },
    { name: 'Xám', hex: '#808080' },
    { name: 'Trắng', hex: '#FFFFFF' },
    { name: 'Be', hex: '#F5F5DC' },
    { name: 'Xanh lam', hex: '#0000FF' },
    { name: 'Xanh lá', hex: '#008000' },
    { name: 'Xanh ngọc', hex: '#00CED1' },
    { name: 'Đỏ', hex: '#FF0000' },
    { name: 'Cam', hex: '#FFA500' },
    { name: 'Vàng', hex: '#FFFF00' },
    { name: 'Tím', hex: '#800080' },
    { name: 'Nâu', hex: '#A52A2A' },
    { name: 'Hồng', hex: '#FFC0CB' },
    { name: 'Xanh sáng', hex: '#ADD8E6' },
    { name: 'Xanh đậm', hex: '#00008B' },
    { name: 'Đen xám', hex: '#2F2F2F' },
  ];

  const materials = [
    'Cotton',
    'Excool',
    'Modal (gỗ sồi)',
    'Polyester',
    'Recycle',
  ];

  const collapseItems = [
    {
      key: '1',
      label: 'Phù hợp với',
      children: (
        <Radio.Group onChange={onCategoryChange} value={selectedCategory}>
          <Space direction="vertical" className="custom-radio">
            <Radio value="Mặc ở nhà">Mặc ở nhà</Radio>
            <Radio value="Mặc hàng ngày">Mặc hàng ngày</Radio>
            <Radio value="Thể thao">Thể thao</Radio>
          </Space>
        </Radio.Group>
      ),
    },
    {
      key: '2',
      label: 'Kích cỡ',
      children: (
        <Space wrap>
          {sizes.map((size) => (
            <Button
              key={size}
              type={selectedSize === size ? 'primary' : 'default'}
              onClick={() => onSizeSelect(size)}
              className="!text-[#909090] !font-normal"
            >
              {size}
            </Button>
          ))}
        </Space>
      ),
    },
    {
      key: '3',
      label: 'Màu sắc',
      children: (
        <div className="grid gap-3 xl:grid-cols-4 lg:grid-cols-4 grid-cols-1">
          {colors.map((color: { name: string; hex: string }) => (
            <div
              key={color.name}
              className="flex flex-col items-center whitespace-nowrap"
              style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}
            >
              <div
                onClick={() => onColorSelect(color.hex)}
                style={{ backgroundColor: color.hex }}
                className={`cursor-pointer rounded-full w-6 h-6 ${
                  selectedColors.includes(color.hex) || color.name === 'Trắng'
                    ? 'border boder-[#c1c1c1]'
                    : ''
                }`}
              />
              <span className="text-xs font-medium text-[#878787] truncate">
                {color.name}
              </span>
            </div>
          ))}
        </div>
      ),
    },
    {
      key: '4',
      label: 'Chất liệu',
      children: (
        <Space direction="vertical">
          {materials.map((material) => (
            <Checkbox
              key={material}
              value={material}
              onChange={onMaterialChange}
              checked={selectedMaterials.includes(material)}
              className="custom-checkbox !text-[#909090] !font-medium"
            >
              {material}
            </Checkbox>
          ))}
        </Space>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Collapse
        defaultActiveKey={['1']}
        ghost
        expandIcon={({ isActive }) => (
          <DownOutlined
            rotate={isActive ? 180 : 0}
            className="!text-gray-400"
          />
        )}
        expandIconPosition="end"
        items={collapseItems}
      />
    </div>
  );
};

export default SearchFilter;
