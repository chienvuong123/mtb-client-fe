import React, { useEffect, useRef, useState } from 'react';
import { Carousel, Tag } from 'antd';
import { StarFilled } from '@ant-design/icons';
import { CarouselRef } from 'antd/es/carousel';
import Image from 'next/image';
import QuickAddToCart from '../features/QuickAddToCartProps';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa6';
import { IProduct } from '@/types/ProductType';

interface ProductCarouselProps {
  title: string;
  seeMoreUrl: string;
  productList: IProduct[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({
  title,
  seeMoreUrl,
  productList,
}) => {
  const carouselRef = useRef<CarouselRef>(null);
  const [selectedColors, setSelectedColors] = useState<Record<string, string>>(
    {},
  );

  useEffect(() => {
    const initialSelectedColors: Record<string, string> = {};

    productList?.forEach((product) => {
      // Tìm màu mặc định (is_main = true) hoặc màu đầu tiên
      const mainImage = product.product_images?.find(
        (img) => img.is_main === 'true',
      );
      const defaultColorId =
        mainImage?.color_id || product.product_images?.[0]?.color_id || '';

      if (defaultColorId) {
        initialSelectedColors[product.id] = defaultColorId;
      }
    });

    setSelectedColors(initialSelectedColors);
  }, [productList]);

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

  const handleColorSelection = (productId: string, colorId: string) => {
    setSelectedColors((prev) => ({
      ...prev,
      [productId]: colorId,
    }));
  };

  return (
    <div className="w-full sm: p-1 sm: mt-5 md:mt-5 xl:mt-0 md:p-4 xl:p-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="sm:text-lg sm: pl-3 md:pl-0 md:text-2xl font-bold uppercase">
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
          <FaArrowLeft />
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
          {productList?.map((product) => {
            const selectedColorId = selectedColors[product.id];
            const mainImage =
              product.product_images?.find(
                (img) =>
                  img.color_id === selectedColorId ||
                  (img.is_main === 'true' && !selectedColorId),
              ) || product.product_images?.[0];

            return (
              <div key={product?.id} className="px-2">
                <div className="relative rounded-lg overflow-hidden">
                  <div className="group relative overflow-hidden">
                    <Image
                      src={mainImage?.image_url}
                      alt={'anh_san_pham'}
                      width={500}
                      height={500}
                      className="w-full sm: h-[240px] md:h-[260px] lg:h-[350px] xl:h-[350px] 2xl:h-[450px] !object-cover transition-opacity duration-500 group-hover:opacity-0 !rounded-xl"
                    />
                    <Image
                      src={mainImage?.image_hover}
                      alt={'anh_san_pham_hover'}
                      width={500}
                      height={500}
                      className="w-full h-full !object-cover absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                    <QuickAddToCart
                      sizes={product.size}
                      product={product}
                      selectedColorId={selectedColorId}
                    />

                    {/* Đánh giá */}
                    <div className="absolute top-2 left-2 w-full">
                      <div className="flex items-center justify-between sm:px-1 sm: text-xs md:px-3 md:text-base">
                        <span className="font-bold">
                          {product?.avg_rating}
                          <StarFilled className="text-xs px-[0.8px]" />
                          <span className="text-[#273BCD]">
                            ({product?.rating_count})
                          </span>
                        </span>
                        {product?.isNew && (
                          <Tag className="font-bold !bg-[#273BCD] !rounded-full !text-white">
                            NEW
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
                          onClick={() =>
                            handleColorSelection(product.id, colorObj.id)
                          }
                          className={`sm: w-7 sm: h-4 md:w-10 md:h-5 rounded-full mr-2 cursor-pointer ${
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
                        {Number(product?.original_price)?.toLocaleString(
                          'vi-VN',
                        )}
                        đ
                      </span>

                      {product?.discount_price && (
                        <>
                          {product?.discount && (
                            <span className="ml-2 bg-[#273BCD] font-medium text-white px-1 rounded-lg">
                              -{product?.discount}%
                            </span>
                          )}

                          <span className="ml-2 text-gray-400 font-medium line-through">
                            {Number(product?.discount_price)?.toLocaleString(
                              'vi-VN',
                            )}
                            đ
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black text-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer"
        >
          <FaArrowRight />
        </button>
      </div>
      <button className="md:hidden my-6 border px-4 py-1 font-semibold rounded-full flex items-center justify-center cursor-pointer mx-auto">
        Xem thêm
      </button>
    </div>
  );
};

export default ProductCarousel;
