'use client';

import { useState, useEffect } from 'react';
import { Row, Col, Flex } from 'antd';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import '../../styles/nav.css';

interface ClientLayoutProps {
  children: React.ReactNode;
}

function ClientLayout({ children }: ClientLayoutProps) {
  const [scrolled, setScrolled] = useState(false);
  console.log(scrolled);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Header */}
      <div
        className={`transition-all duration-300 ease-in-out 
            `}
        //     ${
        //   scrolled
        //     ? '-translate-x-full opacity-0 overflow-hidden'
        //     : 'translate-x-0 opacity-100'}
      >
        <Header />
      </div>

      {/* Navigation */}
      <div className="sticky top-0 z-50">
        <Nav />
      </div>

      <div
        className={`transition-all duration-300 ease-in-out 
            `}
        //     ${
        //   scrolled
        //     ? '-translate-x-full opacity-0 overflow-hidden'
        //     : 'translate-x-0 opacity-100'}
      >
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
      <Footer />
    </>
  );
}

export default ClientLayout;
