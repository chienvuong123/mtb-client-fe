import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
import QuickAddToCart from '../features/QuickAddToCartProps';
import { StarFilled } from '@ant-design/icons';
import { IProduct } from '@/types/ProductType';
import { Image, Tag } from 'antd';

interface ProductCardProps {
  product: IProduct;
  onColorChange?: (productId: string, colorId: string) => void;
  initialColorId?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onColorChange,
  initialColorId,
}) => {
  const [selectedColorId, setSelectedColorId] = useState<string>('');
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    if (initialColorId) {
      setSelectedColorId(initialColorId);
    } else {
      const mainImage = product.product_images?.find(
        (img) => img.is_main === 'true',
      );
      const defaultColorId =
        mainImage?.color_id || product.product_images?.[0]?.color_id || '';

      setSelectedColorId(defaultColorId);
    }
  }, [product, initialColorId]);

  // Xử lý chọn màu sắc
  const handleColorSelection = (colorId: string) => {
    setSelectedColorId(colorId);

    if (onColorChange) {
      onColorChange(product.id, colorId);
    }
  };

  // Tìm hình ảnh dựa trên màu đã chọn
  const mainImage =
    product.product_images?.find(
      (img) =>
        img.color_id === selectedColorId ||
        (img.is_main === 'true' && !selectedColorId),
    ) || product.product_images?.[0];

  return (
    <div key={product?.id} className="px-2">
      <div className="relative rounded-lg overflow-hidden">
        <div
          className="group relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="w-full sm: h-[250px] md:h-[300px] lg:h-[250px] xl:h-[300px] 2xl:h-[430px] rounded-xl overflow-hidden">
            <Image
              src={isHovered ? mainImage?.image_hover : mainImage?.image_url}
              alt="anh_san_pham"
              preview={false}
              className="!w-full !h-full object-cover rounded-xl"
            />
          </div>
          <QuickAddToCart
            sizes={product.size}
            product={product}
            selectedColorId={selectedColorId}
          />
          {/* Đánh giá */}
          <div className="absolute top-2 left-2 w-full">
            <div
              className="flex items-center justify-between 
                sm:px-1 sm: text-xs md:px-1 md:text-sm lg:px-1 xl:px-2" //responsive
            >
              <span className="font-bold">
                {product.avg_rating}
                <StarFilled className="text-xs px-[0.8px]" />
                <span className="text-[#273BCD]">({product.rating_count})</span>
              </span>
              {product.isNew && (
                <Tag className="font-bold !text-[10px] !bg-[#273BCD] !rounded-full !text-white uppercase">
                  NEW
                </Tag>
              )}
              {product.isBuy && (
                <Tag className="font-bold !text-[10px] !bg-black !rounded-full !text-white uppercase">
                  Đáng mua
                </Tag>
              )}
            </div>
          </div>
        </div>

        <div className="pt-3">
          <div className="flex mb-2">
            {product?.color?.map((colorObj) => (
              <span
                key={colorObj.id}
                onClick={() => handleColorSelection(colorObj.id)}
                className={`sm: w-7 sm: h-4 md:w-9 md:h-4.5 rounded-full mr-2 cursor-pointer ${
                  selectedColorId === colorObj.id
                    ? ' border-1 border-black'
                    : ''
                }`}
                style={{
                  backgroundImage: `url(${colorObj.color_img})`,
                  backgroundSize: 'cover',
                }}
              />
            ))}
          </div>

          <h3 className="font-medium mb-2 sm: text-xs md:text-sm md:line-clamp-2">
            {product?.name}
          </h3>

          <div className="flex items-center sm: text-xs md:text-sm">
            <span className="font-bold">
              {Number(product?.original_price)?.toLocaleString('vi-VN')}đ
            </span>

            {product?.discount_price && (
              <>
                {product?.discount && (
                  <span className="ml-2 bg-[#273BCD] font-medium text-white px-1 rounded-lg">
                    -{product?.discount}%
                  </span>
                )}

                <span className="ml-2 text-gray-400 font-medium line-through">
                  {Number(product?.discount_price)?.toLocaleString('vi-VN')}đ
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
