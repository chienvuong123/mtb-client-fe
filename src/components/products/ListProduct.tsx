// components/ProductCarousel.tsx
import React, { useRef } from 'react';
import { Carousel, Tag } from 'antd';
import { LeftOutlined, RightOutlined, StarFilled } from '@ant-design/icons';
import { CarouselRef } from 'antd/es/carousel';
import { commonSizes } from '@/mocks/mockDataHomePage';
import Image from 'next/image';
import QuickAddToCart from '../features/QuickAddToCartProps';

interface ProductColor {
  color: string;
  name?: string;
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
  colors: ProductColor[];
  hoverImageUrl: string;
}

interface ProductCarouselProps {
  title: string;
  seeMoreUrl: string;
  productList: ProductData[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({
  title,
  seeMoreUrl,
  productList,
}) => {
  const carouselRef = useRef<CarouselRef>(null);

  const nextSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const prevSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  const renderColorCircle = (color: string) => {
    const colorMap: Record<string, string> = {
      black: 'bg-black',
      white: 'bg-white border border-gray-300',
      gray: 'bg-gray-400',
      navy: 'bg-indigo-900',
      purple: 'bg-purple-300',
      lime: 'bg-yellow-400',
      olive: 'bg-olive-700',
      pink: 'bg-pink-200',
      teal: 'bg-teal-400',
      cream: 'bg-amber-500',
    };

    return (
      <div
        className={`sm: w-7 sm: h-4 md:w-10 md:h-5 rounded-full mx-1 ${
          colorMap[color] || color
        }`}
      />
    );
  };

  return (
    <div
      className="w-full 
        sm: p-1 sm: mt-5 md:mt-0 md:p-10" // responesive
    >
      <div className="flex justify-between items-center mb-4">
        <h2
          className="sm:text-lg sm: pl-3 md:pl-0 md:text-2xl
            font-bold uppercase"
        >
          {title}
        </h2>
        <a
          href={seeMoreUrl}
          className="text-black underline font-medium hidden lg:block"
        >
          Xem Thêm
        </a>
      </div>

      <div className="relative">
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black text-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer"
        >
          <LeftOutlined />
        </button>

        <Carousel
          ref={carouselRef}
          dots={false}
          slidesToShow={5}
          slidesToScroll={1}
          infinite
          responsive={[
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 4,
              },
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 2,
              },
            },
          ]}
        >
          {productList.map((product) => (
            <div key={product.id} className="px-2">
              <div className="relative rounded-lg overflow-hidden">
                {/* image */}
                <div className="group relative overflow-hidden">
                  <Image
                    src={product.imageUrl}
                    alt={product.title}
                    width={500}
                    height={500}
                    className="w-full sm: h-[240px] md:h-[260px] lg:h-[350px] object-cover transition-opacity duration-500 group-hover:opacity-0"
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
                        sm:px-1 sm: text-xs md:px-3 md:text-base" //responsive
                    >
                      <span className="font-bold">
                        {product.rating}
                        <StarFilled className="text-xs px-[0.8px]" />
                        <span className="text-[#273BCD]">
                          ({product.reviewCount})
                        </span>
                      </span>
                      {product.isNew && (
                        <Tag className="font-bold !bg-[#273BCD] !rounded-full !text-white">
                          NEW
                        </Tag>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-3">
                  <div className="flex mb-2">
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
                    <span className="font-bold">
                      {product.price.toLocaleString()}đ
                    </span>

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
          ))}
        </Carousel>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black text-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer"
        >
          <RightOutlined />
        </button>
      </div>
      <button className="md:hidden mb-6 border px-4 py-1 font-semibold rounded-full flex items-center justify-center cursor-pointer mx-auto">
        Xem thêm
      </button>
    </div>
  );
};

export default ProductCarousel;
