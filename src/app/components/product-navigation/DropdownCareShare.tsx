import React from 'react';
import { Col, Image, Row } from 'antd';
import { LuMoveRight } from 'react-icons/lu';

const DropdownCareShare = () => {
  return (
    <div>
      <Row>
        <Col span={14} className="!p-10">
          <p className="text-[#525252] font-medium text-center">
            Coolmate cam kết dành 10% doanh thu từ sản phẩm “Care & Share” đóng
            góp vào quỹ để tổ chức các hoạt động thiện nguyện dành cho trẻ em có
            hoàn cảnh khó khăn.
          </p>
          <div className="mt-5">
            <Image src="/images/menu/icon1.webp" alt="" preview={false} />
          </div>
          <div className="w-full flex justify-center mt-12">
            <button className="bg-[#273bcd] flex text-base uppercase items-center rounded-full border-0 px-6 py-2 text-white cursor-pointer">
              Care & Share <LuMoveRight className="text-xl ml-3" />
            </button>
          </div>
        </Col>
        <Col span={10} className="border-l border-gray-200 !p-6">
          <Image
            src="/images/menu/banner.webp"
            alt=""
            preview={false}
            className=""
          />
        </Col>
      </Row>
    </div>
  );
};

export default DropdownCareShare;
