'use client';

import { useState, useEffect } from 'react';
import { Row, Col, Flex, Image, Tooltip } from 'antd';
import { usePathname } from 'next/navigation';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import { FaChevronUp } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import { RiCloseLargeFill } from 'react-icons/ri';
import '@styles/nav.css';
import FooterMobi from './FooterMobi';

interface ClientLayoutProps {
  children: React.ReactNode;
}

function ClientLayout({ children }: ClientLayoutProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [showContact, setShowContact] = useState<boolean>(false);
  const pathname = usePathname();

  // Danh sách các đường dẫn không hiển thị nút cuộn lên đầu và Zalo
  const pathsWithoutButtons = ['/cart', '/checkout'];

  // Kiểm tra xem có nên hiển thị các nút không
  const shouldShowButtons = !pathsWithoutButtons.some(
    (path) => pathname === path || pathname?.startsWith(`${path}/`),
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > window.innerHeight / 3);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className="transition-all duration-300 ease-in-out">
        <Header />
      </div>

      <div className="sticky top-0 z-50">
        <Nav />
      </div>
      <div className="transition-all duration-300 ease-in-out ">
        <Row>
          <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
            <Flex className="flex-promotion" align="center" justify="center">
              <span className="text-promotion">
                Giảm 40k đơn từ 299k dành cho khách hàng mua lần đầu tại
                website!
              </span>
            </Flex>
          </Col>
        </Row>
      </div>

      {/* Main Content */}
      <div>{children}</div>

      {/* Footer */}
      <div className="hidden lg:block">
        <Footer />
      </div>
      <div className="lg:hidden sm: block">
        <FooterMobi />
      </div>

      {/* Chỉ hiển thị các nút khi shouldShowButtons là true */}
      {shouldShowButtons && (
        <Flex
          align="center"
          justify="space-between"
          className="fixed bottom-15 left-4 right-4 px-4 z-50"
        >
          <div
            className={`bg-[#2f5acf] p-3 rounded-full w-12 h-12 flex items-center justify-center cursor-pointer transition-opacity duration-700 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={scrollToTop}
          >
            <FaChevronUp className="text-white text-xl" />
          </div>
          {showContact ? (
            <Flex
              align="center"
              vertical
              gap={12}
              className="absolute bottom-2 right-0"
            >
              <a
                href="https://zalo.me/1517736583279228381"
                target="_blank"
                className="sm: w-12 sm: h-12 lg:w-14 lg:h-14 rounded-full !bg-white shadow-lg border border-gray-200 flex items-center justify-center cursor-pointer"
              >
                <Image
                  src="/images/banner/zalo.svg"
                  alt="zalo"
                  width={35}
                  preview={false}
                />
              </a>
              <Tooltip
                placement="left"
                title={
                  <div className="flex items-center gap-1">
                    <FaPhone className="text-[#2f5acf]" />
                    <span className="text-[#2f5acf] font-bold">
                      1900.272737
                    </span>
                  </div>
                }
                color="white"
              >
                <a
                  href="tel:1900272737"
                  className="sm: w-12 sm: h-12 lg:w-14 lg:h-14 rounded-full !bg-[#2f5acf] shadow-lg flex items-center justify-center"
                >
                  <FaPhone className="text-white sm: text-xl lg:text-2xl" />
                </a>
              </Tooltip>
              <div
                className="sm: w-12 sm: h-12 lg:w-14 lg:h-14 rounded-full bg-[#2f5acf] shadow-lg flex items-center justify-center cursor-pointer"
                onClick={() => setShowContact(false)}
              >
                <RiCloseLargeFill className="text-white sm: text-2xl lg:text-3xl" />
              </div>
            </Flex>
          ) : (
            <div
              onClick={() => setShowContact(true)}
              className="relative inline-block cursor-pointer transition duration-700 ease-in-out"
            >
              <div className="sm: w-12 sm: h-12 lg:w-16 lg:h-16 rounded-full overflow-hidden relative shadow-lg border border-gray-200">
                <div className="absolute top-0 left-0 w-full h-full bg-[#f0ff97]">
                  <div className="flex flex-col items-center justify-center h-full text-[#2f5acf]">
                    <FaPhone className="text-[#2f5acf] sm: text-xs lg:text-sm mt-4 sm: mr-6 lg:mr-8" />
                    <div className="sm: text-[8px] xl:text-[10px] font-medium mr-2">
                      Hotline
                    </div>
                  </div>
                </div>

                <div
                  className="absolute top-0 left-0 w-full h-full bg-[#2f5acf]"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
                >
                  <div className="flex items-center justify-center h-full text-white">
                    <div className="font-bold text-sm sm: ml-4 lg:ml-6 mb-4 sm: text-[10px] lg:text-sm">
                      Zalo
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Flex>
      )}
    </>
  );
}

export default ClientLayout;
