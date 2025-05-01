'use client';

import {
  Button,
  Row,
  Col,
  Divider,
  Image,
  Space,
  Typography,
  Card,
} from 'antd';
import {
  ArrowRightOutlined,
  MailOutlined,
  PhoneOutlined,
} from '@ant-design/icons';
import { usePathname } from 'next/navigation';

const { Title, Text, Paragraph, Link } = Typography;

const Footer = () => {
  const pathname = usePathname();
  const pathsWithoutFooter = ['/cart'];

  const shouldShowFooter = !pathsWithoutFooter.some(
    (path) => pathname === path || pathname?.startsWith(`${path}/`),
  );

  if (!shouldShowFooter) {
    return null;
  }

  return (
    <>
      <div className="bg-[#f1f1f1]">
        <Row gutter={[16, 16]} align="middle">
          {/* Left Section */}
          <Col xs={24} lg={16}>
            <Title level={5} style={{ fontWeight: 'bold' }}>
              ĐẶC QUYỀN DÀNH CHO{' '}
              <span style={{ color: '#374790' }}>374,790</span> THÀNH VIÊN
              COOLCLUB
            </Title>
            <Row gutter={[16, 16]} style={{ marginTop: '16px' }}>
              <Col xs={24} sm={8}>
                <Card
                  style={{
                    backgroundColor: '#374790',
                    color: 'white',
                    borderRadius: '8px',
                    textAlign: 'center',
                  }}
                  bordered={false}
                >
                  <Text style={{ color: 'white', fontWeight: 'bold' }}>
                    Mời bạn bè
                  </Text>
                  <br />
                  <Text style={{ color: 'white' }}>hoàn tiền 10% CoolCash</Text>
                </Card>
              </Col>
              <Col xs={24} sm={8}>
                <Card
                  style={{
                    backgroundColor: '#374790',
                    color: 'white',
                    borderRadius: '8px',
                    textAlign: 'center',
                  }}
                  bordered={false}
                >
                  <Text style={{ color: 'white', fontWeight: 'bold' }}>
                    Hoàn tiền đến 7%
                  </Text>
                  <br />
                  <Text style={{ color: 'white' }}>(X2 vào thứ 6)</Text>
                </Card>
              </Col>
              <Col xs={24} sm={8}>
                <Card
                  style={{
                    backgroundColor: '#374790',
                    color: 'white',
                    borderRadius: '8px',
                    textAlign: 'center',
                  }}
                  bordered={false}
                >
                  <Text style={{ color: 'white', fontWeight: 'bold' }}>
                    Quà tặng sinh nhật
                  </Text>
                  <br />
                  <Text style={{ color: 'white' }}>quà dịp đặc biệt</Text>
                </Card>
              </Col>
            </Row>
          </Col>

          {/* Right Section */}
          <Col xs={24} lg={8}>
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
              <Title level={5} style={{ fontWeight: 'bold' }}>
                HOẠT ĐỘNG GẦN ĐÂY
              </Title>
              <Text>
                <strong>350</strong> Trung Phạm vừa được cộng{' '}
                <strong>14.000 CoolCash</strong> từ ĐH <strong>#7xxx476</strong>
              </Text>
              <Text>
                <strong>Thảo Hoàng</strong> vừa được nhận 1 phần quà sinh nhật
              </Text>
              <Button
                type="primary"
                size="large"
                style={{
                  backgroundColor: 'black',
                  borderColor: 'black',
                  borderRadius: '8px',
                  fontWeight: 'bold',
                }}
              >
                GIA NHẬP COOLCLUB NGAY →
              </Button>
            </Space>
          </Col>
        </Row>
      </div>
      <div className="hidden lg:block bg-[#000] text-white px-12 py-8">
        <Row gutter={[68, 14]}>
          <Col span={9}>
            <Title level={3} className="!text-white !font-bold">
              COOLMATE lắng nghe bạn!
            </Title>

            <Paragraph className="!text-white text-base pb-6">
              Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý kiến đóng
              góp từ khách hàng để có thể nâng cấp trải nghiệm dịch vụ và sản
              phẩm tốt hơn nữa.
            </Paragraph>

            <Button
              type="primary"
              size="large"
              className="text-base uppercase !bg-[#2f5acf] !rounded-full !px-10 !py-7 flex items-center space-x-3 !font-medium"
            >
              <span style={{ marginRight: '8px' }}>Đóng góp ý kiến</span>
              <ArrowRightOutlined />
            </Button>
          </Col>

          <Col span={6} className="flex flex-col">
            <Space direction="vertical" size="middle">
              <Space align="center" size="middle">
                <PhoneOutlined className="text-3xl" />
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
                <MailOutlined className="text-3xl" />
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
          </Col>

          <Col
            span={9}
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
          <Col xs={24} sm={12} md={6} lg={4}>
            <Title level={5} className="!text-white !font-bold">
              COOLCLUB
            </Title>
            <Space direction="vertical" size="small">
              <Link className="!text-white !text-[13px] hover:!text-[#ffff00]">
                Đăng kí thành viên
              </Link>
              <Link className="!text-white !text-[13px] hover:!text-[#ffff00]">
                Ưu đãi & Đặc quyền
              </Link>
            </Space>

            <Title level={5} className="!text-white mt-8 pb-3">
              TÀI LIỆU - TUYỂN DỤNG
            </Title>
            <Space direction="vertical" size="small">
              <Link className="!text-white !text-[13px] hover:!text-[#ffff00]">
                Tuyển dụng
              </Link>
              <Link className="!text-white !text-[13px] hover:!text-[#ffff00]">
                Đăng ký bản quyền
              </Link>
            </Space>
          </Col>

          {/* CHÍNH SÁCH Column */}
          <Col xs={24} sm={12} md={6} lg={5}>
            <Title level={5} className="!text-white pb-3">
              CHÍNH SÁCH
            </Title>
            <Space direction="vertical" size="small">
              <Link className="!text-white !text-[13px] hover:!text-[#ffff00]">
                Chính sách đổi trả 60 ngày
              </Link>
              <Link className="!text-white !text-[13px] hover:!text-[#ffff00]">
                Chính sách khuyến mãi
              </Link>
              <Link className="!text-white !text-[13px] hover:!text-[#ffff00]">
                Chính sách bảo mật
              </Link>
              <Link className="!text-white !text-[13px] hover:!text-[#ffff00]">
                Chính sách giao hàng
              </Link>
            </Space>

            <Title level={5} className="!text-white mt-8 pb-3">
              COOLMATE.ME
            </Title>
            <Space direction="vertical" size="small">
              <Link className="!text-white !text-[13px] hover:!text-[#ffff00]">
                Lịch sử thay đổi website
              </Link>
            </Space>
          </Col>

          {/* CHĂM SÓC KHÁCH HÀNG Column */}
          <Col xs={24} sm={12} md={6} lg={5}>
            <Title level={5} className="!text-white pb-3">
              CHĂM SÓC KHÁCH HÀNG
            </Title>
            <Space direction="vertical" size="small">
              <Link className="!text-white !text-[13px] hover:!text-[#ffff00]">
                Trải nghiệm mua sắm 100% hài lòng
              </Link>
              <Link className="!text-white !text-[13px] hover:!text-[#ffff00]">
                Hỏi đáp - FAQs
              </Link>
            </Space>

            <Title level={5} className="!text-white mt-8 pb-3">
              KIẾN THỨC MẶC ĐẸP
            </Title>
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
          </Col>

          {/* VỀ COOLMATE Column */}
          <Col xs={24} sm={12} md={6} lg={5}>
            <Title level={5} className="!text-white pb-3">
              VỀ COOLMATE
            </Title>
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
          </Col>

          {/* ĐỊA CHỈ LIÊN HỆ Column */}
          <Col xs={24} md={12} lg={5}>
            <Title level={5} className="!text-white pb-3">
              ĐỊA CHỈ LIÊN HỆ
            </Title>
            <Space direction="vertical" size="small">
              <Text className="!text-white">
                <strong>Văn phòng Hà Nội:</strong> Tầng 3 Tòa nhà BRG, KM2,
                Đường Phùng Hưng, Phường Phúc La, Quận Hà Đông, TP. Hà Nội
              </Text>
              <Text className="!text-white !text-[13px]">
                <strong>Trung tâm vận hành Hà Nội:</strong> Lô C8, KCN Lại Yên,
                Xã Lại Yên, Huyện Hoài Đức, Thành phố Hà Nội
              </Text>
              <Text className="!text-white !text-[13px] ">
                <strong>Văn phòng và Trung tâm vận hành TP. HCM:</strong> Lô C3,
                đường D2, KCN Cát Lái, Thạnh Mỹ Lợi, TP. Thủ Đức, TP. Hồ Chí
                Minh.
              </Text>
              <Text className="!text-white !text-[13px] ">
                <strong>Trung tâm R&D:</strong> T6-01, The Manhattan Vinhomes
                Grand Park, Long Bình, TP. Thủ Đức
              </Text>
            </Space>
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

          <Col xs={24} lg={8}>
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

export default Footer;
