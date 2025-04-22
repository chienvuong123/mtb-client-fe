// components/QuickAddToCart.tsx
import React from 'react';

interface Size {
  value: string;
  label: string;
}

type SizeType = Size | string;

interface QuickAddToCartProps {
  sizes: SizeType[];
  onSizeSelect?: (size: SizeType) => void;
}

const QuickAddToCart: React.FC<QuickAddToCartProps> = ({
  sizes = [],
  onSizeSelect = () => {},
}) => {
  return (
    <div className="absolute inset-0 flex translate-y-[100%] flex-col items-center justify-end pb-5 text-center transition-all duration-500 group-hover:translate-y-0">
      <div className="bg-[#d9d9d8] w-[80%] p-2 rounded-lg">
        <span className="text-[#231f20] text-sm font-bold">
          Thêm nhanh vào giỏ hàng +
        </span>
        <div className="grid grid-cols-4 gap-2 mt-4 px-2">
          {sizes.map((size) => (
            <div
              className="bg-white w-11 h-8 rounded-md font-medium flex items-center justify-center cursor-pointer hover:bg-black hover:text-white transition-colors duration-200"
              key={typeof size === 'string' ? size : size.value}
              onClick={() => onSizeSelect(size)}
            >
              {typeof size === 'string' ? size : size.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickAddToCart;
