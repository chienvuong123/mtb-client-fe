import React from 'react';
import { Col, Image, Row } from 'antd';
import { LuMoveRight } from 'react-icons/lu';
import { categorySport, categorySportGirl } from '@/mocks/mockCategory';

const DropdownSport = () => {
  return (
    <div>
      <Row>
        <Col span={17}>
          <Row className="h-full">
            <Col span={12} className="border-r border-gray-300 !p-6">
              <div className="h-[50%] flex flex-col">
                <h3 className="mb-2 font-bold flex items-center cursor-pointer hover:text-[#273bcd] uppercase">
                  Thể thao nam{' '}
                  <LuMoveRight className="text-[#273bcd] ml-1 text-xl" />
                </h3>
                <Row gutter={[16, 16]} className="flex-1">
                  {categorySport.map((item, index) => (
                    <Col
                      span={12}
                      key={index}
                      className="!flex items-center group cursor-pointer"
                    >
                      <Image
                        src={item.image}
                        alt=""
                        preview={false}
                        width={40}
                        className="!rounded-full !border-2 border-transparent group-hover:border-[#273bcd] transition-all"
                      />
                      <span className="ml-2 text-[#525252] font-medium group-hover:text-[#273bcd] transition-colors">
                        {item.title}
                      </span>
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
            <Col span={12} className="!p-6">
              <div className="h-[50%] flex flex-col">
                <h3 className="mb-2 font-bold flex items-center cursor-pointer hover:text-[#273bcd] uppercase">
                  Thể thao nữ{' '}
                  <LuMoveRight className="text-[#273bcd] ml-1 text-xl" />
                </h3>
                <Row gutter={[16, 16]} className="flex-1">
                  {categorySportGirl.map((item, index) => (
                    <Col
                      span={12}
                      key={index}
                      className="!flex items-center group cursor-pointer"
                    >
                      <Image
                        src={item.image}
                        alt=""
                        preview={false}
                        width={40}
                        className="!rounded-full !border-2 border-transparent group-hover:border-[#273bcd] transition-all"
                      />
                      <span className="ml-2 text-[#525252] font-medium group-hover:text-[#273bcd] transition-colors">
                        {item.title}
                      </span>
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
        </Col>
        <Col span={7} className="border-l border-gray-200 !p-8">
          <div className="relative">
            <Image
              src="/images/sports/bn1.webp"
              alt=""
              preview={false}
              className="!rounded-xl"
            />
            <p className="absolute top-40 left-3 text-white font-medium">
              Áo Polo Nam Thể Thao Promax-S1
            </p>
          </div>
          <div className="relative mt-1">
            <Image
              src="/images/sports/bn2.webp"
              alt=""
              preview={false}
              className="!rounded-xl"
            />
            <p className="absolute top-40 left-3 text-white font-medium">
              Quần Short Nam Thể Thao Promax-S1
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default DropdownSport;
