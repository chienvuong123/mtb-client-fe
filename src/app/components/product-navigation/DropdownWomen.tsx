import React from 'react';
import { Col, Flex, Image, Row } from 'antd';
import { LuMoveRight } from 'react-icons/lu';
import { categoriesWomen } from '@/mocks/mockCategory';

const DropdownWomen = () => {
  return (
    <div>
      <Row>
        <Col span={17}>
          <Flex vertical className="h-full">
            <Flex justify="space-around" className="!py-8 !px-4">
              {categoriesWomen.map(({ title, items }) => (
                <Col span={4} key={title}>
                  <h3 className="font-bold mb-4 flex items-center cursor-pointer hover:text-[#273bcd]">
                    {title}{' '}
                    <LuMoveRight className="text-[#273bcd] ml-1 text-xl" />
                  </h3>
                  <ul>
                    {items.map((item) => (
                      <li
                        key={item}
                        className={`py-2 cursor-pointer text-[#525252] font-medium hover:text-[#273bcd]`}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </Col>
              ))}
            </Flex>
          </Flex>
        </Col>
        <Col span={7} className="border-l border-gray-200 !p-8">
          <div className="relative">
            <Image src="/images/menu/menu-3.webp" alt="" preview={false} />
            <p className="absolute top-40 left-3 text-white font-medium uppercase">
              Coolmate Active for Women
            </p>
          </div>
          <div className="relative mt-1">
            <Image src="/images/menu/menu-4.webp" alt="" preview={false} />
            <p className="absolute top-40 left-3 text-white font-medium uppercase">
              Quần Legging Yoga Ribbed
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default DropdownWomen;
