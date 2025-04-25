import { Drawer } from 'antd';
import React, { useEffect, useState } from 'react';
import { Collapse, Radio, Button, Space, Checkbox } from 'antd';
import type { CheckboxChangeEvent, RadioChangeEvent } from 'antd';
import { DownOutlined, CloseOutlined } from '@ant-design/icons';
import '@styles/collection-search.css';

const { Panel } = Collapse;

interface UIDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSave?: () => void;
}

const UIDrawer: React.FC<UIDrawerProps> = ({ isOpen, onClose, onSave }) => {
  const [open, setOpen] = useState<boolean>(isOpen);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);

  // Control body scroll when drawer opens/closes
  useEffect(() => {
    setOpen(isOpen);

    // Disable body scroll when drawer is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleClose = () => {
    setOpen(false);
    document.body.style.overflow = 'auto';
    onClose();
  };

  const handleSave = () => {
    if (onSave) onSave();
    handleClose();
  };

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

  const resetFilters = () => {
    setSelectedCategory('');
    setSelectedSize('');
    setSelectedColors([]);
    setSelectedMaterials([]);
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

  return (
    <div>
      <Drawer
        title={
          <div className="flex justify-between items-center">
            <button onClick={onClose}>
              <CloseOutlined />
            </button>
            <span className="font-bold text-base">BỘ LỌC</span>
            <Button
              type="link"
              onClick={resetFilters}
              className="text-[#959ee7] !font-medium"
            >
              Xóa lọc
            </Button>
          </div>
        }
        key=""
        placement="bottom"
        closable={false}
        onClose={handleClose}
        open={open}
        height="66vh"
        className="!rounded-t-3xl custosm-drawer"
        bodyStyle={{
          overflowY: 'auto',
          paddingBottom: '64px',
        }}
      >
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
          >
            <Panel header="Phù hợp với" key="1" className="custom-panel">
              <Radio.Group onChange={onCategoryChange} value={selectedCategory}>
                <Space direction="vertical" className="custom-radio">
                  <Radio value="Mặc ở nhà">Mặc ở nhà</Radio>
                  <Radio value="Mặc hàng ngày">Mặc hàng ngày</Radio>
                  <Radio value="Thể thao">Thể thao</Radio>
                </Space>
              </Radio.Group>
            </Panel>
            <Panel header="Kích cỡ" key="2" className="custom-panel">
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
            </Panel>
            <Panel header="Màu sắc" key="3" className="custom-panel">
              <div className="grid gap-3 xs: grid-cols-4 sm: grid-cols-4 grid-cols-1">
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
                        selectedColors.includes(color.hex) ||
                        color.name === 'Trắng'
                          ? 'border boder-[#c1c1c1]'
                          : ''
                      }`}
                    />
                    <span className="text-xs font-medium text-[#878787] truncate pt-2">
                      {color.name}
                    </span>
                  </div>
                ))}
              </div>
            </Panel>
            <Panel header="Chất liệu" key="4" className="custom-panel">
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
            </Panel>
          </Collapse>
        </div>

        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white flex justify-center">
          <button
            onClick={handleSave}
            className="w-full bg-black text-white py-3 rounded-full uppercase"
          >
            Áp dụng
          </button>
        </div>
      </Drawer>
    </div>
  );
};

export default UIDrawer;
