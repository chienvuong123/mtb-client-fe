import { useState } from 'react';
import {
  Col,
  Flex,
  Image,
  Rate,
  Row,
  List,
  Dropdown,
  MenuProps,
  Card,
} from 'antd';
import { Checkbox } from 'antd';
import { CaretDownOutlined, SearchOutlined } from '@ant-design/icons';
import UIInput from '@/components/ui/UIInput';
import { reviews } from '@/mocks/mockComment';

const CommentPage = () => {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const handleCheckboxChange = (rating: number): void => {
    setSelectedRating(rating === selectedRating ? null : rating);
  };

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: 'Đánh giá: Cao đến thấp',
    },
    {
      key: '2',
      label: 'Đánh giá: Thập đến cao',
    },
  ];

  const filterItems: MenuProps['items'] = [
    {
      key: '1',
      label: '5 Sao',
    },
    {
      key: '2',
      label: '4 Sao',
    },
    {
      key: '3',
      label: '3 Sao',
    },
    {
      key: '4',
      label: '2 Sao',
    },
    {
      key: '5',
      label: '1 Sao',
    },
    {
      key: '6',
      label: 'Có hình ảnh',
    },
    {
      key: '7',
      label: 'Đã phản hồi',
    },
  ];

  return (
    <Row gutter={[24, 0]}>
      <Col xs={24} sm={24} lg={6} className="xl:!pr-18">
        <Flex vertical gap={24}>
          <h2 className="sm: text-xl md:text-2xl lg:text-4xl font-semibold">
            ĐÁNH GIÁ SẢN PHẨM
          </h2>
          <Col xs={0} sm={0} md={0} lg={24} xl={24}>
            <UIInput
              placeholder="Tìm kiếm đánh giá"
              prefix={<SearchOutlined className="text-xl" />}
            />
          </Col>

          <Col xs={0} sm={0} md={0} lg={24}>
            <div>
              <p className="text-[#a3a3a3] font-bold mb-2">
                Phân loại xếp hạng
              </p>

              <Flex vertical gap={8}>
                <Checkbox
                  checked={selectedRating === 5}
                  onChange={() => handleCheckboxChange(5)}
                >
                  <span className="text-gray-500 font-medium pr-1">5</span>
                  <Rate
                    disabled
                    defaultValue={5}
                    style={{ color: '#333333', fontSize: 18 }}
                  />
                </Checkbox>

                <Checkbox
                  checked={selectedRating === 4}
                  onChange={() => handleCheckboxChange(4)}
                >
                  <span className="text-gray-500 font-medium pr-1">4</span>
                  <Rate
                    disabled
                    defaultValue={4}
                    style={{ color: '#333333', fontSize: 18 }}
                  />
                </Checkbox>

                <Checkbox
                  checked={selectedRating === 3}
                  onChange={() => handleCheckboxChange(3)}
                >
                  <span className="text-gray-500 font-medium pr-1">3</span>
                  <Rate
                    disabled
                    defaultValue={3}
                    style={{ color: '#333333', fontSize: 18 }}
                  />
                </Checkbox>

                <Checkbox
                  checked={selectedRating === 2}
                  onChange={() => handleCheckboxChange(2)}
                >
                  <span className="text-gray-500 font-medium pr-1">2</span>
                  <Rate
                    disabled
                    defaultValue={2}
                    style={{ color: '#333333', fontSize: 18 }}
                  />
                </Checkbox>

                <Checkbox
                  checked={selectedRating === 1}
                  onChange={() => handleCheckboxChange(1)}
                >
                  <span className="text-gray-500 font-medium pr-1">1</span>
                  <Rate
                    disabled
                    defaultValue={1}
                    style={{ color: '#333333', fontSize: 18 }}
                  />
                </Checkbox>
              </Flex>
            </div>
            <Flex
              align="center"
              gap={4}
              className="bg-[#e3e6fa] text-[#273bcd] !px-2 !py-1 rounded-lg !my-8"
            >
              <Image
                src="/images/product-detail/down.png"
                alt=""
                preview={false}
                width={40}
              />
              <span className="text-[13px] font-medium">
                CheckCác review đều đến từ khách hàng đã thực sự mua hàng của
                Coolmate
              </span>
            </Flex>
            <div>
              <p className="text-[#a3a3a3] font-bold mb-2">Lọc phản hồi</p>

              <Flex vertical gap={8}>
                <Checkbox
                  checked={selectedRating === 5}
                  onChange={() => handleCheckboxChange(5)}
                >
                  <span className="text-gray-500 font-medium pr-1">
                    Đã phản hồi
                  </span>
                </Checkbox>

                <Checkbox
                  checked={selectedRating === 4}
                  onChange={() => handleCheckboxChange(4)}
                >
                  <span className="text-gray-500 font-medium pr-1">
                    Có hình ảnh
                  </span>
                </Checkbox>
              </Flex>
            </div>
          </Col>
        </Flex>
      </Col>
      <Col lg={18} className="sm: mt-2 lg:mt-[-20px]">
        <Flex vertical align="flex-start">
          <div className="flex items-center space-x-2">
            <h1 className="sm: text-4xl lg:text-[80px] font-bold">4.9</h1>
            <Rate
              disabled
              defaultValue={4.9}
              allowHalf
              style={{ color: '#ffb402' }}
              className="sm: !text-2xl lg:!text-4xl"
            />
          </div>
          <p className="text-[#737373] font-medium sm: text-xs lg:text-sm">
            Dựa trên 221 đánh giá đến từ khách hàng
          </p>
        </Flex>

        <div className="mt-4 block lg:hidden">
          <UIInput
            placeholder="Tìm kiếm đánh giá"
            prefix={<SearchOutlined className="text-xl" />}
          />
          <div className="w-[40%] mt-2">
            <Dropdown
              menu={{ items: filterItems }}
              placement="bottom"
              trigger={['click']}
            >
              <div className="flex items-center justify-between border border-[#e7ecf3] py-2.5 px-4 rounded-full bg-white text-[#737373] font-normal">
                <span>Lọc đánh giá</span>
                <CaretDownOutlined />
              </div>
            </Dropdown>
          </div>
        </div>

        <div className="mt-10">
          <Flex
            align="center"
            justify="space-between"
            className="!hidden lg:!flex"
          >
            <p className="text-[#737373] font-medium">
              Hiển thị đánh giá <span className="font-bold">1-10</span>
            </p>
            <Col span={5} style={{ textAlign: 'right' }}>
              <Dropdown menu={{ items }} placement="bottom" trigger={['click']}>
                <div className="flex items-center justify-between border border-[#e7ecf3] py-2.5 px-4 rounded-full bg-white text-[#737373] font-normal">
                  <span>Sắp xếp</span>
                  <CaretDownOutlined />
                </div>
              </Dropdown>
            </Col>
          </Flex>
          <List
            itemLayout="vertical"
            dataSource={reviews}
            split={false}
            renderItem={(item) => (
              <List.Item style={{ padding: '6px 0', margin: '0' }}>
                <Card>
                  <div>
                    <strong className="text-base">{item.email}</strong>{' '}
                    <span className="text-[#dadada]">• </span>{' '}
                    <span className="text-[#a3a3a3] font-medium">
                      {item.date}
                    </span>
                  </div>
                  <Rate
                    disabled
                    defaultValue={item.rating}
                    style={{ color: '#333333', fontSize: 18 }}
                  />
                  <p>{item.comment}</p>
                </Card>
              </List.Item>
            )}
          />
          <div className="w-full flex justify-center font-medium mt-10">
            &lt; 1/23 &gt;
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default CommentPage;
