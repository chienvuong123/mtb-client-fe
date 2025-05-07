import React, { useState, useEffect } from 'react';
import { Col, Flex, Image, Row } from 'antd';
import UIInput from '@/components/ui/UIInput';
import { IoMdClose } from 'react-icons/io';
import { FiSearch } from 'react-icons/fi';

interface ISearchPage {
  onClose: () => void;
}

const SearchPage: React.FC<ISearchPage> = ({ onClose }) => {
  const [searchValue, setSearchValue] = useState('');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  // Mảng từ khóa tìm kiếm quần áo
  const trendingKeywords = [
    'Tập gym',
    'ECC',
    'Áo Basic',
    'Jeans',
    'Áo khoác',
    'Quần',
    'Polo',
    'Áo thun',
  ];

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
        className={`fixed inset-0 z-10 w-full h-full bg-[#00000099] transition-opacity duration-300 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Nội dung tìm kiếm với z-index cao hơn và hiệu ứng mờ dần */}
      <div
        className={`relative z-50 transition-all duration-300 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}
      >
        <div className="bg-white h-26 flex items-center px-4 mb-2.5">
          <Row className="w-full">
            <Flex className="w-full" justify="center" align="center" gap={48}>
              <Col span={8} className="flex items-center relative">
                <FiSearch className="absolute top-4 z-2 text-2xl right-4 text-[#80949d]" />
                <UIInput
                  placeholder="Tìm kiếm sản phẩm..."
                  className="!border-none outline-none w-full !bg-[#eeeeee] !h-13.5"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </Col>
              <Col span={2} className="flex justify-center items-center">
                <IoMdClose
                  className="text-[#666666] cursor-pointer text-3xl"
                  onClick={handleClearSearch}
                />
              </Col>
            </Flex>
          </Row>
        </div>
        <div
          className="bg-white p-4 lg:w-[99%] xl:w-[55%] mx-auto rounded-xl px-15 py-10"
          style={{
            boxShadow:
              'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
          }}
        >
          <div>
            <span className="font-medium text-sm mb-3 block">
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
          </div>
          <div className="mt-10">
            <span className="text-sm font-medium">Sản phẩm đã xem gần đây</span>
            <Row className="mt-3" gutter={16}>
              {recentlyViewedProducts.map((product) => (
                <Col span={6} className="cursor-pointer" key={product.id}>
                  <Image
                    src={product.image}
                    alt={product.alt}
                    className="rounded-xl"
                    preview={false}
                  />
                  <span className="font-medium block mt-2">{product.name}</span>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
