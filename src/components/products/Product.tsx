'use client';

import { Tag } from 'antd';
import { StarFilled } from '@ant-design/icons';
import QuickAddToCart from '../features/QuickAddToCartProps';
import { renderColorCircle } from '@/mocks/mockColor';
import Image from 'next/image';

interface IProductColor {
  color: string;
  name?: string;
}

interface ICommonSizes {
  value: string;
  label: string;
}

interface ProductData {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  imageUrl: string;
  colors: IProductColor[];
  hoverImageUrl: string;
  isBuy?: boolean;
}

interface ProductProps {
  product: ProductData;
  commonSizes?: ICommonSizes[];
}

const Product = ({ product, commonSizes = [] }: ProductProps) => {
  return (
    <div>
      <div className="relative rounded-lg overflow-hidden">
        {/* image */}
        <div className="group relative overflow-hidden">
          <Image
            src={product.imageUrl}
            alt={product.title}
            width={500}
            height={500}
            className="w-full sm: h-[240px] md:h-[260px] lg:h-[280px] xl:h-[350px] object-cover transition-opacity duration-500 group-hover:opacity-0"
          />
          <Image
            src={product.hoverImageUrl}
            alt={product.title}
            width={500}
            height={500}
            className="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
          <QuickAddToCart sizes={commonSizes} />

          {/* Đánh giá */}
          <div className="absolute top-2 left-2 w-full">
            <div
              className="flex items-center justify-between 
                sm:px-1 sm: text-xs md:px-1 md:text-sm lg:px-1 xl:px-2" //responsive
            >
              <span className="font-bold">
                {product.rating}
                <StarFilled className="text-xs px-[0.8px]" />
                <span className="text-[#273BCD]">({product.reviewCount})</span>
              </span>
              {product.isNew && (
                <Tag className="font-bold !bg-[#273BCD] !rounded-full !text-white uppercase">
                  NEW
                </Tag>
              )}
              {product.isBuy && (
                <Tag className="font-bold !bg-black !rounded-full !text-white uppercase">
                  Đáng mua
                </Tag>
              )}
            </div>
          </div>
        </div>

        <div className="p-3">
          <div className="flex mb-2 cursor-pointer">
            {product.colors.map((colorObj, idx) => (
              <div key={idx}>{renderColorCircle(colorObj.color)}</div>
            ))}
          </div>

          <h3
            className="font-medium mb-2 
            sm: text-xs md:text-sm md:line-clamp-2" //responsevie
          >
            {product.title}
          </h3>

          <div
            className="flex items-center 
            sm: text-xs md:text-sm" //reponsive
          >
            <span className="font-bold">{product.price.toLocaleString()}đ</span>

            {product.originalPrice && (
              <>
                {product.discount && (
                  <span className="ml-2 bg-[#273BCD] font-medium text-white px-1 rounded-lg">
                    -{product.discount}%
                  </span>
                )}

                <span className="ml-2 text-gray-400 font-medium line-through">
                  {product.originalPrice.toLocaleString()}đ
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
