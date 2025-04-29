'use client';

import React, { useState, CSSProperties } from 'react';
import { Image, Row, Col, Button } from 'antd';
import { LeftOutlined, RightOutlined, ExpandOutlined } from '@ant-design/icons';

// Định nghĩa kiểu dữ liệu cho ảnh sản phẩm
interface ProductImage {
  id: number;
  thumbnail: string;
  full: string;
  alt: string;
}

// Props của component
interface ProductGalleryProps {
  images?: ProductImage[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [leftButtonHovered, setLeftButtonHovered] = useState<boolean>(false);
  const [rightButtonHovered, setRightButtonHovered] = useState<boolean>(false);

  // Mẫu dữ liệu ảnh nếu không nhận từ props
  const defaultImages: ProductImage[] = [
    {
      id: 1,
      thumbnail: '/images/product-thumbnail-1.jpg',
      full: '/images/product-full-1.jpg',
      alt: 'Áo thun màu be',
    },
    {
      id: 2,
      thumbnail: '/images/product-thumbnail-2.jpg',
      full: '/images/product-full-2.jpg',
      alt: 'Áo thun màu be - mặt sau',
    },
    {
      id: 3,
      thumbnail: '/images/product-thumbnail-3.jpg',
      full: '/images/product-full-3.jpg',
      alt: 'Áo thun màu be - chi tiết cổ',
    },
    {
      id: 4,
      thumbnail: '/images/product-thumbnail-4.jpg',
      full: '/images/product-full-4.jpg',
      alt: 'Áo thun màu be - chi tiết tay',
    },
    {
      id: 5,
      thumbnail: '/images/product-thumbnail-5.jpg',
      full: '/images/product-full-5.jpg',
      alt: 'Áo thun màu be - phối đồ 1',
    },
    {
      id: 6,
      thumbnail: '/images/product-thumbnail-6.jpg',
      full: '/images/product-full-6.jpg',
      alt: 'Áo thun màu be - phối đồ 2',
    },
  ];

  const productImages: ProductImage[] = images || defaultImages;

  const nextImage = (): void => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === productImages.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevImage = (): void => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? productImages.length - 1 : prevIndex - 1,
    );
  };

  const selectImage = (index: number): void => {
    setCurrentImageIndex(index);
  };

  // Style cho nút điều hướng
  const getNavigationButtonStyle = (isHovered: boolean): CSSProperties => {
    return {
      position: 'absolute' as const,
      bottom: '5%',
      transform: 'translateY(-50%)',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: isHovered ? '#000' : 'rgba(255, 255, 255, 0.7)',
      border: isHovered ? '1px solid #000' : '1px solid #d9d9d9',
      color: isHovered ? '#fff' : 'rgba(0, 0, 0, 0.65)',
      transition: 'all 0.3s',
    };
  };

  // Style cho thumbnails
  const thumbnailStyle = (isActive: boolean): CSSProperties => {
    return {
      marginBottom: '10px',
      cursor: 'pointer',
      border: isActive ? '2px solid #1890ff' : '1px solid #f0f0f0',
      padding: '3px',
    };
  };

  // Style cho container ảnh chính
  const mainImageContainerStyle: CSSProperties = {
    position: 'relative',
  };

  // Style cho mask phóng to
  const maskStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div>
      <Row gutter={[16, 16]} className="flex lg:justify-end mt-5 !relative">
        <Col
          xs={3}
          sm={4}
          md={3}
          lg={2}
          xl={2}
          className="sm: !absolute sm: !z-99 sm: left-6 sm: top-5 lg:!static"
        >
          <div>
            {productImages.map((image, index) => (
              <div
                key={image.id}
                style={thumbnailStyle(index === currentImageIndex)}
                onClick={() => selectImage(index)}
              >
                <Image
                  src={image.thumbnail}
                  alt={image.alt}
                  style={{ width: '100%', display: 'block' }}
                  preview={false}
                />
              </div>
            ))}
          </div>
        </Col>

        <Col xs={24} sm={24} md={24} lg={18} xl={18}>
          <div style={mainImageContainerStyle}>
            <Image
              src={productImages[currentImageIndex].full}
              alt={productImages[currentImageIndex].alt}
              className="w-full sm: !px-3"
              preview={{
                mask: (
                  <div style={maskStyle}>
                    <ExpandOutlined style={{ marginRight: '8px' }} /> Phóng to
                  </div>
                ),
              }}
            />

            <Button
              icon={
                <LeftOutlined
                  style={{
                    color: leftButtonHovered ? '#fff' : 'rgba(0, 0, 0, 0.65)',
                  }}
                />
              }
              onClick={prevImage}
              onMouseEnter={() => setLeftButtonHovered(true)}
              onMouseLeave={() => setLeftButtonHovered(false)}
              style={{
                ...getNavigationButtonStyle(leftButtonHovered),
                right: '16%',
              }}
            />

            <Button
              icon={
                <RightOutlined
                  style={{
                    color: rightButtonHovered ? '#fff' : 'rgba(0, 0, 0, 0.65)',
                  }}
                />
              }
              onClick={nextImage}
              onMouseEnter={() => setRightButtonHovered(true)}
              onMouseLeave={() => setRightButtonHovered(false)}
              style={{
                ...getNavigationButtonStyle(rightButtonHovered),
                right: '5%',
              }}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductGallery;
