import React from 'react';
import { Col, Flex, Image, Row, Typography } from 'antd';
import { LuMoveRight } from 'react-icons/lu';
import { categoriesMen } from '@/mocks/mockCategory';

const { Text } = Typography;

const DropdownContent = () => {
  return (
    <div>
      <Row>
        <Col span={17}>
          <Flex vertical className="h-full">
            <Flex justify="space-around" className="!py-8 !px-4">
              {categoriesMen.map(({ title, items }) => (
                <Col span={4} key={title}>
                  <h3 className="font-bold mb-4 flex items-center cursor-pointer hover:text-[#273bcd]">
                    {title}{' '}
                    <LuMoveRight className="text-[#273bcd] ml-1 text-xl" />
                  </h3>
                  <ul>
                    {items.map((item, idx) => (
                      <li
                        key={item}
                        className={`py-2 cursor-pointer ${
                          idx === 1 && title === 'TẤT CẢ SẢN PHẨM'
                            ? 'text-black font-bold'
                            : title === 'TẤT CẢ SẢN PHẨM' && idx < 1
                            ? 'font-bold text-[#273bcd]'
                            : 'text-[#525252] font-medium hover:text-[#273bcd]'
                        }`}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </Col>
              ))}
            </Flex>
            <Row
              className="bg-[#f1f1f1] py-5 px-4 w-full mt-auto"
              align="middle"
            >
              <Col
                span={5}
                className="border-r border-gray-400 !flex items-center justify-end pr-8"
              >
                <Text className="!text-[#737373] font-medium">
                  THEO NHU CẦU
                </Text>
              </Col>

              <Col span={18}>
                <div className="flex gap-10 pl-8 items-center">
                  <Col>
                    <Text className="!font-bold cursor-pointer hover:!text-[#273bcd]">
                      ĐỒ LÓT
                    </Text>
                  </Col>
                  <Col>
                    <Text className="!font-bold cursor-pointer hover:!text-[#273bcd]">
                      ĐỒ THỂ THAO
                    </Text>
                  </Col>
                  <Col>
                    <Text className="!font-bold cursor-pointer hover:!text-[#273bcd]">
                      MẶC HÀNG NGÀY
                    </Text>
                  </Col>
                </div>
              </Col>
            </Row>
          </Flex>
        </Col>
        <Col span={7} className="border-l border-gray-200 !p-8">
          <div className="relative">
            <Image src="/images/menu/menu-2.webp" alt="" preview={false} />
            <p className="absolute top-40 left-3 text-white font-medium">
              Áo Sơ Mi Dài Tay Essentials Cotton
            </p>
          </div>
          <div className="relative mt-1">
            <Image src="/images/menu/menu-1.webp" alt="" preview={false} />
            <p className="absolute top-40 left-3 text-white font-medium">
              Quần Jeans Nam siêu nhẹ
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default DropdownContent;
