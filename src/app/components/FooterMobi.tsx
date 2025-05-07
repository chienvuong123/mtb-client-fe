'use client';

import {
  Button,
  Row,
  Col,
  Divider,
  Image,
  Space,
  Typography,
  CollapseProps,
  Collapse,
} from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { usePathname } from 'next/navigation';
import '@styles/activity-notifycation.css';
import { notifications } from '@/mocks/mockNotifications';
import { MdAdd, MdHorizontalRule } from 'react-icons/md';
import '@styles/collapse-custome.css';

const { Title, Text, Paragraph, Link } = Typography;

const FooterMobi = () => {
  const pathname = usePathname();
  const pathsWithoutFooter = ['/cart'];

  const shouldShowFooter = !pathsWithoutFooter.some(
    (path) => pathname === path || pathname?.startsWith(`${path}/`),
  );

  if (!shouldShowFooter) {
    return null;
  }

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: (
        <Title level={5} className="!text-white !font-bold">
          CoolCub
        </Title>
      ),
      children: (
        <Space direction="vertical" size="small">
          <Link className="!text-white !text-xs hover:!text-[#ffff00]">
            Đăng kí thành viên
          </Link>
          <Link className="!text-white !text-xs hover:!text-[#ffff00]">
            Ưu đãi & Đặc quyền
          </Link>
        </Space>
      ),
    },
    {
      key: '2',
      label: (
        <Title level={5} className="!text-white !font-bold">
          Chính sách
        </Title>
      ),
      children: (
        <Space direction="vertical" size="small">
          <Link className="!text-white !text-xs hover:!text-[#ffff00]">
            Chính sách đổi trả 60 ngày
          </Link>
          <Link className="!text-white !text-xs hover:!text-[#ffff00]">
            Chính sách khuyến mại
          </Link>
          <Link className="!text-white !text-xs hover:!text-[#ffff00]">
            Chính sách bảo mật
          </Link>
          <Link className="!text-white !text-xs hover:!text-[#ffff00]">
            Chính sách giao hàng
          </Link>
        </Space>
      ),
    },
    {
      key: '3',
      label: (
        <Title level={5} className="!text-white !font-bold">
          Coolmate.me
        </Title>
      ),
      children: (
        <Space direction="vertical" size="small">
          <Link className="!text-white !text-[13px] hover:!text-[#ffff00]">
            Lịch sử thay đổi website
          </Link>
        </Space>
      ),
    },
    {
      key: '4',
      label: (
        <Title level={5} className="!text-white !font-bold">
          Chăm sóc khách hàng
        </Title>
      ),
      children: (
        <Space direction="vertical" size="small">
          <Link className="!text-white !text-[13px] hover:!text-[#ffff00]">
            Trải nghiệm mua sắm 100% hài lòng
          </Link>
          <Link className="!text-white !text-[13px] hover:!text-[#ffff00]">
            Hỏi đáp - FAQs
          </Link>
        </Space>
      ),
    },
    {
      key: '5',
      label: (
        <Title level={5} className="!text-white !font-bold">
          Kiến thức sắc đẹp
        </Title>
      ),
      children: (
        <Space direction="vertical" size="small">
          <Link className="!text-white !text-[13px] hover:!text-[#ffff00]">
            Hướng dẫn chọn size đồ nam
          </Link>
          <Link className="!text-white !text-[13px] hover:!text-[#ffff00]">
            Hướng dẫn chọn size đồ nữ
          </Link>
          <Link className="!text-white !text-[13px] hover:!text-[#ffff00]">
            Blog
          </Link>
        </Space>
      ),
    },
    {
      key: '6',
      label: (
        <Title level={5} className="!text-white !font-bold">
          Tài liệu - Tuyển dụng
        </Title>
      ),
      children: (
        <Space direction="vertical" size="small">
          <Link className="!text-white !text-[13px] hover:!text-[#ffff00]">
            Tuyển dụng
          </Link>
          <Link className="!text-white !text-[13px] hover:!text-[#ffff00]">
            Đăng ký bản quyền
          </Link>
        </Space>
      ),
    },
    {
      key: '7',
      label: (
        <Title level={5} className="!text-white !font-bold">
          Về COOLMATE
        </Title>
      ),
      children: (
        <Space direction="vertical" size="small">
          <Link className="!text-white !text-[13px] hover:!text-[#ffff00]">
            Quy tắc ứng xử của Coolmate
          </Link>
          <Link className="!text-white !text-[13px] hover:!text-[#ffff00]">
            Coolmate 101
          </Link>
          <Link className="!text-white !text-[13px] hover:!text-[#ffff00]">
            DVKH xuất sắc
          </Link>
          <Link className="!text-white !text-[13px] hover:!text-[#ffff00]">
            Câu chuyện về Coolmate
          </Link>
          <Link className="!text-white !text-[13px] hover:!text-[#ffff00]">
            Nhà máy
          </Link>
          <Link className="!text-white !text-[13px] hover:!text-[#ffff00]">
            Care & Share
          </Link>
          <Link className="!text-white !text-[13px] hover:!text-[#ffff00]">
            Cam kết bền vững
          </Link>
          <Link className="!text-white !text-[13px] hover:!text-[#ffff00]">
            Tầm nhìn 2030
          </Link>
        </Space>
      ),
    },
    {
      key: '8',
      label: (
        <Title level={5} className="!text-white !font-bold">
          Địa chỉ liên hệ
        </Title>
      ),
      children: (
        <Space direction="vertical" size="small">
          <Text className="!text-white">
            <strong>Văn phòng Hà Nội:</strong> Tầng 3 Tòa nhà BRG, KM2, Đường
            Phùng Hưng, Phường Phúc La, Quận Hà Đông, TP. Hà Nội
          </Text>
          <Text className="!text-white !text-[13px]">
            <strong>Trung tâm vận hành Hà Nội:</strong> Lô C8, KCN Lại Yên, Xã
            Lại Yên, Huyện Hoài Đức, Thành phố Hà Nội
          </Text>
          <Text className="!text-white !text-[13px] ">
            <strong>Văn phòng và Trung tâm vận hành TP. HCM:</strong> Lô C3,
            đường D2, KCN Cát Lái, Thạnh Mỹ Lợi, TP. Thủ Đức, TP. Hồ Chí Minh.
          </Text>
          <Text className="!text-white !text-[13px] ">
            <strong>Trung tâm R&D:</strong> T6-01, The Manhattan Vinhomes Grand
            Park, Long Bình, TP. Thủ Đức
          </Text>
        </Space>
      ),
    },
  ];

  return (
    <>
      <div className="bg-[#f1f1f1] sm: mx-3 md:mx-4 xl:mx-10 mb-10 sm: px-7 xl:px-10 py-6 rounded-2xl">
        <Row gutter={[16, 16]}>
          <Col xs={24} lg={14}>
            <span className="sm: text-base md:text-2xl font-bold">
              ĐẶC QUYỀN DÀNH CHO <br className="block sm:hidden" />{' '}
              <span className="text-[#273bcd]">374,790</span> THÀNH VIÊN
              COOLCLUB
            </span>
            <Row gutter={[32, 16]} className="!pt-6">
              <Col xs={24} sm={8}>
                <div className="bg-[#273bcd] p-3 rounded-xl relativesm:h-auto xl:h-auto lg:h-30">
                  <div className="flex flex-col">
                    <p className="text-white font-semibold text-lg tracking-[-1]">
                      Mời bạn bè
                    </p>
                    <p className="text-white font-semibold text-lg tracking-[-1]">
                      hoàn tiền 10% CoolCash
                    </p>
                  </div>
                  <div className="absolute bottom-2 right-6">
                    <Image
                      src="/images/banner/icon1.webp"
                      alt="ban-be"
                      width={25}
                    />
                  </div>
                </div>
              </Col>
              <Col xs={24} sm={8}>
                <div className="bg-[#273bcd] p-3 rounded-xl relative sm:h-auto xl:h-auto lg:h-30">
                  <div className="flex flex-col">
                    <p className="text-white font-semibold text-lg tracking-[-1]">
                      Hoàn tiền đến 7%
                    </p>
                    <p className="text-white font-semibold text-lg tracking-[-1]">
                      (x2 vào thứ 6)
                    </p>
                  </div>
                  <div className="absolute bottom-2 right-2">
                    <Image
                      src="/images/banner/icon2.webp"
                      alt="giam-gia"
                      width={45}
                    />
                  </div>
                </div>
              </Col>
              <Col xs={24} sm={8}>
                <div className="bg-[#273bcd] p-3 rounded-xl relative sm:h-auto xl:h-auto lg:h-30">
                  <div className="flex flex-col">
                    <p className="text-white font-semibold text-lg tracking-[-1]">
                      Quà tặng sinh nhật,
                    </p>
                    <p className="text-white font-semibold text-lg tracking-[-1]">
                      quà dịp đặc biệt
                    </p>
                  </div>
                  <div className="absolute bottom-2 right-2">
                    <Image
                      src="/images/banner/icon3.webp"
                      alt="qua-tang"
                      width={30}
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </Col>

          <Col xs={24} lg={8} className="!flex mx-auto w-full">
            <Space direction="vertical" className="w-full sm: mt-7 md:mt-0">
              <Title className="!text-[#333333] sm: !text-base md:!text-2xl !font-bold text-center ">
                HOẠT ĐỘNG GẦN ĐÂY
              </Title>
              <div className="flex flex-col">
                <div className="activity-notification flex items-center bg-gray-200 h-8">
                  <div className="activity-text flex whitespace-nowrap animate-marquee space-x-3">
                    {notifications.map((item, index) => (
                      <span
                        key={index}
                        className="text-[#505050] sm: text-sm md:text-base font-medium"
                      >
                        {item.name}{' '}
                        <span className="text-black">{item.account}</span>
                      </span>
                    ))}
                  </div>
                </div>
                <div className="activity-notification flex items-center bg-gray-200 h-8">
                  <div className="activity-text flex whitespace-nowrap animate-marquee space-x-3">
                    {notifications.map((item, index) => (
                      <span
                        key={index}
                        className="text-[#505050] sm: text-sm md:text-base font-medium"
                      >
                        {item.name}{' '}
                        <span className="text-black">{item.account}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-2">
                <Button
                  type="primary"
                  size="large"
                  className="!bg-black !font-semibold !rounded-full !px-6 !py-5.5"
                >
                  GIA NHẬP COOLCLUB NGAY →
                </Button>
              </div>
            </Space>
          </Col>
        </Row>
      </div>
      <div className="bg-[#000] text-white px-4 py-8 overflow-hidden">
        <Row gutter={[68, 14]}>
          <Col span={24} className="flex flex-col">
            <Space direction="vertical" size="middle">
              <Space align="center" size="middle">
                <Image
                  preview={false}
                  src="/icons/icon-hotline.svg"
                  alt="Facebook"
                  width={30}
                  className="cursor-pointer"
                />
                <div>
                  <Text className="!text-base !text-white block">Hotline</Text>
                  <Text className="!text-lg !font-bold !text-white">
                    <a href="tel:1900272737" className="!text-white">
                      1900.272737
                    </a>{' '}
                    -{' '}
                    <a href="tel:02877772737" className="!text-white">
                      028.7777.2737
                    </a>
                  </Text>
                  <Text className="!text-white !text-lg !font-bold block">
                    (8:30 - 22:00)
                  </Text>
                </div>
              </Space>

              <Space align="center" size="middle">
                <Image
                  preview={false}
                  src="/icons/icon-email.svg"
                  alt="Facebook"
                  width={30}
                  className="cursor-pointer"
                />
                <div>
                  <Text className="!text-base !text-white block">Email</Text>
                  <Text className="!text-white !text-lg !font-bold block">
                    <a href="mailto:Cool@coolmate.me" className="!text-white">
                      Cool@coolmate.me
                    </a>
                  </Text>
                </div>
              </Space>
            </Space>
            <Divider style={{ borderColor: 'gray', margin: '10px 0' }} />
          </Col>
          <Col span={24}>
            <Title level={4} className="!text-white !font-bold">
              COOLMATE lắng nghe bạn!
            </Title>

            <Paragraph className="!text-white !text-[13px]">
              Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý kiến đóng
              góp từ khách hàng để có thể nâng cấp trải nghiệm dịch vụ và sản
              phẩm tốt hơn nữa.
            </Paragraph>

            <Button
              type="primary"
              size="large"
              className="!text-sm uppercase !bg-white !text-black !rounded-full !px-4 !py-2 flex items-center !font-medium"
            >
              <span className="">Đóng góp ý kiến</span>
              <ArrowRightOutlined />
            </Button>
            <Divider style={{ borderColor: 'gray', margin: '12px 0' }} />
          </Col>
          <Col
            span={24}
            className="!flex !justify-center !items-center space-x-14"
          >
            <Image
              preview={false}
              src="/images/facebook.png"
              alt="Facebook"
              width={30}
              className="cursor-pointer"
            />
            <Image
              preview={false}
              src="/images/zalo.png"
              alt="Zalo"
              width={40}
              className="cursor-pointer"
            />
            <Image
              preview={false}
              src="/images/tiktok.png"
              alt="TikTok"
              width={40}
              className="cursor-pointer"
            />
            <Image
              preview={false}
              src="/images/instar.svg"
              alt="Instagram"
              width={40}
              className="cursor-pointer"
            />
            <Image
              preview={false}
              src="/images/youtube.svg"
              alt="YouTube"
              width={40}
              className="cursor-pointer"
            />
          </Col>
        </Row>
        <Divider style={{ borderColor: 'gray' }} />
        <Row>
          <Col xs={24}>
            <Collapse
              ghost
              expandIcon={({ isActive }) =>
                isActive ? (
                  <MdHorizontalRule className="!text-white !text-xl" />
                ) : (
                  <MdAdd className="!text-white !text-xl" />
                )
              }
              expandIconPosition="end"
              items={items}
              className="custom-collapse"
            />
          </Col>
        </Row>
        <Divider style={{ borderColor: 'gray' }} />
        <Row align="middle" justify="space-between">
          <Col xs={24} lg={16}>
            <Space direction="vertical" size={4}>
              <Space align="center">
                <Text strong className="!text-white text-sm">
                  @ CÔNG TY TNHH FASTECH ASIA
                </Text>
              </Space>
              <Text style={{ color: '#ccc', fontSize: '13px' }}>
                Mã số doanh nghiệp: 0108617038. Giấy chứng nhận đăng ký doanh
                nghiệp do Sở Kế hoạch và Đầu tư TP Hà Nội cấp lần đầu ngày
                20/02/2019.
              </Text>
            </Space>
          </Col>

          <Col xs={24}>
            <Row gutter={16} justify="end">
              <Col>
                <Image
                  preview={false}
                  width={80}
                  src="/images/image-footer1.webp"
                  alt="NCSC Certificate"
                />
              </Col>
              <Col>
                <Image
                  preview={false}
                  width={65}
                  src="/images/image-footer2.webp"
                  alt="DMCA Protected"
                />
              </Col>
              <Col>
                <Image
                  preview={false}
                  width={35}
                  src="/images/image-footer3.png"
                  alt="Trust Certificate"
                />
              </Col>
              <Col>
                <Image
                  preview={false}
                  width={80}
                  src="/images/image-footer4.png"
                  alt="Trust Certificate"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default FooterMobi;
