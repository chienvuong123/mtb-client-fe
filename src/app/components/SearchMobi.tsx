import React, { useState, useEffect } from 'react';
import { Col, Flex, Image, Row } from 'antd';
import UIInput from '@/components/ui/UIInput';
import { FaChevronLeft } from 'react-icons/fa';

interface ISearchMobiPage {
  onClose: () => void;
}

const SearchMobiPage: React.FC<ISearchMobiPage> = ({ onClose }) => {
  const [searchValue, setSearchValue] = useState('');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  // Mảng từ khóa tìm kiếm quần áo
  const trendingKeywords = ['Tập gym', 'ECC', 'Áo Basic', 'Jeans', 'Áo khoác'];

  const handleSearch = (keyword: string) => {
    setSearchValue(keyword);
  };

  const handleClearSearch = () => {
    setVisible(false);

    setTimeout(() => {
      onClose();
    }, 300);
  };

  const recentlyViewedProducts = [
    {
      id: 1,
      image: '/images/product/pro11.webp',
      name: 'Quần Shorts Summer Cool 7 inch',
      alt: 'anh-sp-1',
    },
    {
      id: 2,
      image: '/images/product/pro4.webp',
      name: 'Áo Thun Basic Cotton',
      alt: 'anh-sp-2',
    },
    {
      id: 3,
      image: '/images/product/pro8.webp',
      name: 'Quần Jeans Slim Fit',
      alt: 'anh-sp-3',
    },
    {
      id: 4,
      image: '/images/product/pro9.webp',
      name: 'Áo Polo Classic',
      alt: 'anh-sp-4',
    },
  ];

  return (
    <>
      {/* Lớp overlay với hiệu ứng mờ dần */}
      <div
        className={`fixed z-10 w-full h-full bg-[#00000099] transition-opacity duration-300 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Nội dung tìm kiếm với z-index cao hơn và hiệu ứng mờ dần */}
      <div
        className={`relative z-50 transition-all duration-300 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}
      >
        <div className="bg-white p-4">
          <Row>
            <Flex align="center" className="w-full" gap={10}>
              <FaChevronLeft
                className="text-[#7e7e7e] flex-shrink-0"
                onClick={handleClearSearch}
              />
              <div className="w-full">
                <UIInput
                  placeholder="Tìm kiếm sản phẩm..."
                  className="border border-[#eeeeee] outline-none w-full bg-[#f3f5f6] h-12"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </div>
            </Flex>
            <span className="font-medium text-sm mt-8 block tracking-[-0.5]">
              Từ khóa nổi bật hôm nay
            </span>
            <div className="flex flex-wrap gap-2 mt-3">
              {trendingKeywords.map((keyword, index) => (
                <button
                  key={index}
                  onClick={() => handleSearch(keyword)}
                  className="py-2 px-3 rounded-full border border-[#aebbc1] text-xs transition-all cursor-pointer"
                >
                  {keyword}
                </button>
              ))}
            </div>
          </Row>
          <Row className="mt-10">
            <span className="text-sm font-medium tracking-[-0.5]">
              Sản phẩm đã xem gần đây
            </span>
            <div className="mt-2 overflow-x-auto w-full pb-2 mb-20">
              <Row
                gutter={16}
                className="flex-nowrap"
                style={{ minWidth: 'max-content' }}
              >
                {recentlyViewedProducts.map((product) => (
                  <Col
                    className="cursor-pointer"
                    key={product.id}
                    style={{ float: 'none' }}
                  >
                    <Image
                      src={product.image}
                      alt={product.alt}
                      className="rounded-lg"
                      preview={false}
                      width={200}
                    />
                    <span className="font-medium text-xs block">
                      {product.name}
                    </span>
                  </Col>
                ))}
              </Row>
            </div>
          </Row>
        </div>
      </div>
    </>
  );
};

export default SearchMobiPage;
