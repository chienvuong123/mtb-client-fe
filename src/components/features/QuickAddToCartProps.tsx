'use client';

import { IProduct } from '@/types/ProductType';
import { notification } from 'antd';
import React from 'react';
import UIQuickCart from '../ui/UIQuickCart';
import { useCreateCart } from '@/lib/api/cartApi';
import { ProductCart, Product } from '@/types/cart';

interface Size {
  id: string;
  name: string;
}

type SizeType = Size | string;

interface QuickAddToCartProps {
  sizes: SizeType[];
  product: IProduct;
  selectedColorId?: string | null;
}

const QuickAddToCart: React.FC<QuickAddToCartProps> = ({
  sizes = [],
  product,
  selectedColorId,
}) => {
  const [api, contextHolder] = notification.useNotification();
  const { mutate: addToCart } = useCreateCart();

  const handleAddToCart = (size: SizeType) => {
    const sizeName = typeof size === 'string' ? size : size.name;
    const sizeId = typeof size === 'string' ? size : size.id;

    const imageUrl =
      product.product_images?.find((img) => img.color_id === selectedColorId)
        ?.image_url || '';
    const colorName =
      product.color?.find((c) => c.id === selectedColorId)?.color || '';

    // Dữ liệu hiển thị thông báo nhanh
    const productInfor = {
      image: imageUrl,
      color: colorName,
      name: product.name || '',
      price: product.original_price || '',
      discount: product.discount_price,
    };

    // Dữ liệu cho giỏ hàng chính
    const productCartItem: Product = {
      id: product.id,
      color: colorName,
      discount_price: Number(product.discount_price) || 0,
      id_color: selectedColorId || '',
      id_size: sizeId,
      image: imageUrl,
      name: product.name || '',
      price: Number(product.original_price) || 0,
      quantity: 1,
      size: sizeName,
    };

    // Tạo đối tượng ProductCart để thêm vào giỏ hàng chính
    const cartData: ProductCart = {
      id: product.id,
      product_cart: productCartItem,
      color: [{ value: selectedColorId || '', lable: colorName }],
      size: [{ value: sizeId, lable: sizeName }],
      // id_product: product.id,
      // id_color:,
      // id_size:,
      // quantity: productCartItem.quantity,
    };

    // Thêm vào giỏ hàng chính
    addToCart(cartData);

    // Hiển thị thông báo
    api.open({
      message: undefined,
      description: <UIQuickCart size={sizeName} productInfor={productInfor} />,
      duration: 3,
      closeIcon: false,
      className: '!w-70 !p-0',
    });
  };

  return (
    <>
      {contextHolder}
      <div className="absolute inset-0 flex translate-y-[100%] flex-col items-center justify-end pb-5 text-center transition-all duration-500 group-hover:translate-y-0">
        <div className="bg-[#d9d9d8] w-[80%] p-2 rounded-lg">
          <span className="text-[#231f20] text-sm font-bold">
            Thêm nhanh vào giỏ hàng +
          </span>
          <div className="flex flex-wrap gap-2 mt-4 px-2">
            {sizes.map((size) => (
              <div
                className="bg-white w-11 h-8 rounded-md font-medium flex items-center justify-center cursor-pointer hover:bg-black hover:text-white transition-colors duration-200 uppercase"
                key={typeof size === 'string' ? size : size.id}
                onClick={() => handleAddToCart(size)}
              >
                {typeof size === 'string' ? size : size.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickAddToCart;
