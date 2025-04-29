import { useState } from 'react';
import { Col, Divider, Flex, Image, List, Row } from 'antd';
import Link from 'next/link';

const DescribePage = () => {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);

    if (showFullContent) {
      window.scrollTo({
        top: 1300,
        behavior: 'smooth',
      });
    }
  };

  const data = [
    {
      label: 'CHẤT LIỆU',
      value: ['100% Cotton', 'Vải 220gsm dày dặn'],
    },
    {
      label: 'KIỂU DÁNG',
      value: ['Regular fit'],
    },
    {
      label: 'PHÙ HỢP',
      value: ['Mặc hàng ngày', 'Người mẫu: 186cm - 77kg, mặc áo 2XL'],
    },
    {
      label: 'TÍNH NĂNG',
      value: ['Bề mặt vải mềm mịn và ít xù lông'],
    },
  ];

  const washingSteps = [
    'Giặt áo ở nhiệt độ dưới 40 độ C để giữ màu áo không bị phai và hư hỏng',
    'Phân loại màu áo và không giặt chung với áo trắng để tránh phai màu',
    'Nếu áo bị bẩn, hãy ngâm với nước giặt trong 30 phút rồi vò nhẹ phần bị bẩn trước khi đem đi giặt',
    'Không sử dụng chất tẩy giặt quá mạnh',
  ];

  const storingSteps = [
    'Tránh phơi áo thun nam Cotton 220GSM trực tiếp dưới ánh nắng mặt trời',
    'Lộn trái áo trước khi phơi để tránh bị phai màu',
    'Gấp gọn hoặc treo nằm ngang trong tủ quần áo, tránh nơi ẩm mốc.',
  ];

  const policySteps = [
    'Miễn phí vận chuyển cho đơn hàng từ 200K.',
    '60 Ngày đổi trả miễn phí bất kỳ lý do gì. (Xem thêm Chính sách đổi trả tại đây).',
    'Dịch vụ chăm sóc khách hàng chu đáo, tận tình từ 8:30 - 22:00 mỗi ngày.',
    'Tích lũy nhận hoàn tiền CoolCash khi trở thành Hội viên CoolClub (Áp dụng khi mua hàng tại website). ​',
  ];

  return (
    <Row className="bg-[#f2f2f2] sm: py-6 md:py-8 lg:py-10 sm: px-3 md:px-10 lg:px-16 xl:px-24 mt-10">
      <Col span={24}>
        <Flex
          justify="center"
          className="w-full sm: text-xl md:text-2xl lg:text-3xl font-bold uppercase !mb-7"
        >
          MÔ TẢ SẢN PHẨM
        </Flex>
      </Col>

      <Col xs={24} sm={24} md={10} lg={10} xl={10}>
        <Flex justify="space-around">
          <Flex vertical gap={4} align="center">
            <Image
              src="/images/product-detail/mt-icon-1.png"
              alt=""
              preview={false}
              className="rounded-xl sm: !w-13 md:!w-15 lg:!w-17"
            />
            <span className="font-bold text-base">Thấm hút</span>
          </Flex>
          <Flex vertical gap={4} align="center">
            <Image
              src="/images/product-detail/mt-icon-2.png"
              alt=""
              preview={false}
              className="rounded-xl sm: !w-13 md:!w-15 lg:!w-17"
            />
            <span className="font-bold text-base">Chống xù lông</span>
          </Flex>
          <Flex vertical gap={4} align="center">
            <Image
              src="/images/product-detail/mt-icon-3.png"
              alt=""
              preview={false}
              className="rounded-xl sm: !w-13 md:!w-15 lg:!w-17"
            />
            <span className="font-bold text-base">Thoải mái</span>
          </Flex>
        </Flex>

        <Col xs={24} sm={24} md={0} lg={0} xl={0} className="mt-4">
          <Image
            src="/images/product-detail/mt-1.png"
            alt=""
            preview={false}
            className="rounded-xl"
          />
        </Col>

        <Col xs={24} sm={24} md={20} className="mt-6 sm: px-5 md:mx-auto">
          {data.map((item, index) => (
            <div key={index}>
              <Row className="mb-4">
                <Col span={6}>
                  <span className="text-[#818da4] font-medium text-xs">
                    {item.label}
                  </span>
                </Col>
                <Col span={18}>
                  {item.value.map((line, idx) => (
                    <div
                      key={idx}
                      className="text-[#5c636f] font-medium text-sm"
                    >
                      {line}
                    </div>
                  ))}
                </Col>
              </Row>
              <Divider style={{ margin: '8px 0' }} />
            </div>
          ))}
          <span className="text-[#525252] font-bold text-base">
            * Proudly Made In Vietnam
          </span>
        </Col>
      </Col>
      <Col xs={0} sm={0} md={14}>
        <Image
          src="/images/product-detail/mt-1.png"
          alt=""
          preview={false}
          className="rounded-xl"
        />
      </Col>

      {!showFullContent ? (
        <Col span={24} className="relative mt-6">
          <div
            className="relative"
            style={{
              position: 'relative',
              overflow: 'hidden',
              maxHeight: '90px',
            }}
          >
            <p className="text-[#5c636f] font-medium text-sm">
              Sở hữu nhiều tính năng nổi bật từ chất liệu tới màu sắc, áo thun
              nam cotton 220GSM Coolmate chính là sự lựa chọn hoàn hảo cho chàng
              mỗi khi trời nóng nực. Cùng tìm hiểu ngay những lý do bạn nên sở
              hữu ngay ít nhất 1 chiếc áo này trong tủ đồ của mình nhé.
            </p>
            <Col span={18} className="mx-auto mt-4">
              <Image
                src="/images/product-detail/mt-2.jpg"
                alt=""
                preview={false}
              />
            </Col>
            <div
              className="absolute bottom-0 left-0 right-0 h-16"
              style={{
                background:
                  'linear-gradient(to bottom, rgba(242, 242, 242, 0), rgba(242, 242, 242, 1))',
              }}
            />
          </div>
          <div className="flex justify-center mt-6">
            <button
              onClick={toggleContent}
              className="bg-white hover:bg-gray-100 border border-gray-300 font-medium text-gray-700 rounded-full px-10 py-2.5 cursor-pointer"
            >
              XEM THÊM
            </button>
          </div>
        </Col>
      ) : (
        <>
          <Col span={24} className="mt-10">
            <p className="text-[#5c636f] font-medium text-sm">
              Sở hữu nhiều tính năng nổi bật từ chất liệu tới màu sắc, áo thun
              nam cotton 220GSM Coolmate chính là sự lựa chọn hoàn hảo cho chàng
              mỗi khi trời nóng nực. Cùng tìm hiểu ngay những lý do bạn nên sở
              hữu ngay ít nhất 1 chiếc áo này trong tủ đồ của mình nhé.
            </p>
            <Col xl={18} className="mx-auto mt-4">
              <Image
                src="/images/product-detail/mt-2.jpg"
                alt=""
                preview={false}
              />
            </Col>
          </Col>
          <Col className="mt-4" span={24}>
            <h2 className="font-bold text-xl text-[#231f20]">
              Đặc điểm nổi bật Áo thun nam Cotton 220gsm
            </h2>
            <h3 className="font-bold text-base py-3 text-[#231f20]">
              1. Thiết kế basic tinh tế dễ mặc
            </h3>
            <p className="text-[#5c636f] font-medium text-sm">
              Kiểu dáng áo thun cổ tròn cơ bản, thiết kế tinh tế nhưng không lỗi
              mốt, là sự lựa chọn tuyệt vời cho nam giới. Thiết kế tối giản dễ
              mặc, dễ phối với nhiều phong cách, phù hợp với nhiều dáng người.
            </p>
            <Col xl={18} className="mx-auto mt-4">
              <Image
                src="/images/product-detail/mt-3.webp"
                alt=""
                preview={false}
              />
            </Col>
          </Col>
          <Col span={24}>
            <h3 className="font-bold text-base py-3 text-[#231f20]">
              2. Chất liệu 100% cotton cao cấp
            </h3>
            <p className="text-[#5c636f] font-medium text-sm">
              Chất liệu cotton cao cấp thấm hút, khô thoáng, mang lại cảm giác
              mềm mại và thoáng mát tối đa cho làn da. Đặc biệt, trọng lượng
              220gsm (220gr/m2) dày dặn, chắc tay, mặc cực thích, tránh bai giãn
              khi sử dụng lâu dài.
            </p>
            <Col xl={18} className="mx-auto mt-4">
              <Image
                src="/images/product-detail/mt-4.jpg"
                alt=""
                preview={false}
              />
            </Col>
          </Col>
          <Col span={24}>
            <h3 className="font-bold text-base py-3 text-[#231f20]">
              3. Nhiều màu sắc lựa chọn
            </h3>
            <p className="text-[#5c636f] font-medium text-sm">
              12 màu sắc cơ bản dễ lựa chọn cho nam giới, giúp chàng thay đổi
              màu sắc hằng ngày theo ý muốn, thêm nhiều phong cách outfit đa
              dạng hơn, bớt sự nhàm chán.
            </p>
            <Col xl={18} className="mx-auto mt-4">
              <Flex vertical gap={16}>
                <Image
                  src="/images/product-detail/mt-5.jpg"
                  alt=""
                  preview={false}
                />
                <Image
                  src="/images/product-detail/mt-6.jpg"
                  alt=""
                  preview={false}
                />
                <Image
                  src="/images/product-detail/mt-7.webp"
                  alt=""
                  preview={false}
                />
              </Flex>
            </Col>
          </Col>
          <Col className="mt-4" span={24}>
            <h2 className="font-bold text-xl text-[#231f20]">
              Bảng size Áo thun nam Cotton 220gsm
            </h2>
            <p className="text-[#5c636f] font-medium text-sm pt-3">
              Mặc áo thun đúng size không chỉ giúp nam giới tự tin, thoải mái
              trong mọi chuyển động, mà còn góp phần tôn lên những đường cong
              nam tính của phái mạnh. Để chọn được chiếc quần lót nam siêu nhẹ
              phù hợp nhất, vui lòng tham khảo bảng size chi tiết dưới đây của
              Coolmate:
            </p>
            <Col span={24} className="mx-auto my-4">
              <Image
                src="/images/product-detail/size.jpg"
                alt=""
                preview={false}
              />
            </Col>
            <span className="text-[#5c636f] text-base">
              =&gt;&gt; Tham khảo thêm tại
              <Link
                href="https://www.coolmate.me/size-chart"
                target="_blank"
                className="text-blue-500 ml-1"
              >
                https://www.coolmate.me/size-chart
              </Link>
            </span>
          </Col>
          <Col className="mt-4" span={24}>
            <h2 className="font-bold text-xl text-[#231f20]">
              Cách giặt và bảo quản Áo thun nam Cotton 220gsm
            </h2>
            <p className="text-[#5c636f] font-medium text-sm pt-3">
              Để giữ gìn áo thun nam Cotton bền bỉ và giảm thiểu việc phai màu
              sau một thời gian sử dụng, chàng nên lưu ngay những mẹo giặt và
              bảo quản dưới đây.
            </p>
          </Col>
          <Col span={24}>
            <h3 className="font-bold text-lg text-[#231f20] mt-4">
              Cách giặt áo thun nam Cotton 220GSM:
            </h3>
            <List
              dataSource={washingSteps}
              renderItem={(item) => (
                <List.Item style={{ border: 'none', padding: '2px 20px' }}>
                  <span className="text-[#5c636f] font-medium text-sm">
                    <span className="text-xl pr-2">&bull;</span> {item}
                  </span>
                </List.Item>
              )}
            />

            <h3 className="font-bold text-lg text-[#231f20] mt-4">
              Cách bảo quản áo thun nam Cotton 220GSM:
            </h3>
            <List
              dataSource={storingSteps}
              renderItem={(item) => (
                <List.Item style={{ border: 'none', padding: '2px 20px' }}>
                  <span className="text-[#5c636f] font-medium text-sm flex items-center">
                    <span className="text-xl pr-2">&bull;</span> {item}
                  </span>
                </List.Item>
              )}
            />
            <h2 className="font-bold text-2xl text-[#231f20] mt-4">
              Câu hỏi thường gặp
            </h2>
            <h3 className="font-bold text-lg text-[#231f20] mt-4">
              1. Áo cotton có bị co rút, mất phom dáng sau nhiều lần giặt không?
            </h3>
            <p className="text-[#5c636f] font-medium text-sm">
              Sản phẩm được xử lý công nghệ hiện đại, hạn chế tối đa sự co rút
              kích thước sau khi giặt giũ.
            </p>
            <h3 className="font-bold text-lg text-[#231f20] mt-4">
              2. Chất liệu cotton có đảm bảo an toàn cho làn da nhạy cảm không?
            </h3>
            <p className="text-[#5c636f] font-medium text-sm">
              Cotton 100% nguyên chất là chất liệu hoàn toàn tự nhiên, thân
              thiện và an toàn cho mọi làn da.
            </p>
            <h3 className="font-bold text-lg text-[#231f20] mt-4">
              3. Áo có mau phai màu sau một thời gian sử dụng không?
            </h3>
            <p className="text-[#5c636f] font-medium text-sm">
              Với công nghệ nhuộm hiện đại, màu sắc của áo được đảm bảo bền đẹp
              lâu dài.
            </p>
            <h3 className="font-bold text-lg text-[#231f20] mt-4">
              4. Áo thun cotton này có thấm hút mồ hôi tốt khi hoạt động, vận
              động không?
            </h3>
            <p className="text-[#5c636f] font-medium text-sm">
              Chất liệu cotton tự nhiên có khả năng thấm hút ẩm mồ hôi rất tốt,
              luôn giữ cơ thể khô thoáng.
            </p>
            <h3 className="font-bold text-xl text-[#231f20] mt-4">
              Chính sách mua hàng tại Coolmate
            </h3>
            <List
              dataSource={policySteps}
              renderItem={(item) => (
                <List.Item style={{ border: 'none', padding: '2px 20px' }}>
                  <span className="text-[#5c636f] font-medium text-sm flex items-center">
                    <span className="text-xl pr-2">&bull;</span> {item}
                  </span>
                </List.Item>
              )}
            />
            <Col xl={18} className="mt-4">
              <Image
                src="/images/product-detail/mt-8.webp"
                alt=""
                preview={false}
              />
            </Col>
          </Col>
          <Col className="mt-6 ml-6">
            <p className="text-[#5c636f] font-medium md:text-base pb-3">
              Mua sắm online đa kênh tiện lợi: website coolmate.me,
              <span className="text-[#2f5acf] underline cursor-pointer">
                Shopee Mall, Lazada Mall, Tik Tok Shop.
              </span>
              ,
            </p>
            <p className="text-[#5c636f] font-medium md:text-base">
              Theo dõi kênh{' '}
              <span className="text-[#2f5acf] underline cursor-pointer">
                Zalo OA Coolmate
              </span>{' '}
              để cập nhật tình trạng tiếp nhận đơn hàng và các chương trình
              khuyến mãi.
            </p>
          </Col>
          <Col span={24} className="!flex justify-center mt-16">
            <button
              onClick={toggleContent}
              className="bg-white hover:bg-gray-100 border border-gray-300 font-medium text-gray-700 rounded-full px-10 py-2.5 cursor-pointer"
            >
              THU LẠI
            </button>
          </Col>
        </>
      )}
    </Row>
  );
};

export default DescribePage;
