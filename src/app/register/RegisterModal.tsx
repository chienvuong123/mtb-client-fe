'use client';

import React, { useState } from 'react';
import { Col, Flex, Image, Modal, Row } from 'antd';
import UIInput from '@/components/ui/UIInput';

interface ICenteredModalProps {
  open: boolean;
  onClose: () => void;
}

const RegisterPage: React.FC<ICenteredModalProps> = ({ open, onClose }) => {
  const [isRegister, setIsRegiter] = useState<boolean>(false);
  const [isForgotPassword, setIsForgotPassword] = useState<boolean>(false);

  const handleLogin = () => {
    setIsRegiter(!isRegister);
  };

  const handleForgotPassword = () => {
    setIsForgotPassword(true);
  };

  const handleClose = () => {
    onClose();
    setIsForgotPassword(false);
  };

  const handleGoogleLogin = () => {
    window.location.href =
      'https://accounts.google.com/o/oauth2/v2/auth?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=email%20profile&prompt=select_account';
  };

  // Handle Facebook Login
  const handleFacebookLogin = () => {
    window.location.href =
      'https://www.facebook.com/v12.0/dialog/oauth?client_id=YOUR_APP_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=email,public_profile';
  };

  return (
    <Modal
      open={open}
      onCancel={handleClose}
      footer={null}
      closable={true}
      closeIcon={
        <div className="absolute top-0 right-0 rounded-full bg-black w-10 h-10 flex items-center justify-center cursor-pointer">
          <span className="text-white text-2xl">×</span>
        </div>
      }
      width={550}
      centered
      className="custom-modal"
    >
      {!isForgotPassword ? (
        <>
          <div className="p-2">
            {/* Logo */}
            <div className="mb-6">
              <Image
                src="/images/login/icon.webp"
                alt="ưu đãi"
                preview={false}
              />
            </div>

            {/* Main heading */}
            <h2 className="text-3xl font-bold mb-6">
              Rất nhiều đặc quyền và quyền lợi mua sắm đang chờ bạn
            </h2>

            {/* Benefits */}
            <Flex gap={10} className="!mb-6">
              <Image
                src="/images/login/icon-2.webp"
                alt="ưu đãi"
                preview={false}
                width={150}
              />
              <Image
                src="/images/login/icon-3.webp"
                alt="quà tặng"
                preview={false}
                width={150}
              />
              <Image
                src="/images/login/icon-4.webp"
                alt="hoàn tiền"
                preview={false}
                width={150}
              />
            </Flex>

            {/* Login options */}
            <Flex align="center" gap={10}>
              <p className="text-[#525252] font-bold">Đăng nhập bằng:</p>
              <div className="flex gap-2">
                <div
                  className="border rounded-xl w-12 h-12 flex items-center justify-center cursor-pointer"
                  onClick={handleGoogleLogin}
                >
                  <Image
                    src="/images/login/google.png"
                    alt="Google"
                    className="mr-2"
                    preview={false}
                    width={30}
                  />
                </div>
                <div
                  className="border rounded-xl w-12 h-12 flex items-center justify-center cursor-pointer"
                  onClick={handleFacebookLogin}
                >
                  <Image
                    src="/images/login/facebook.png"
                    alt="Facebook"
                    className="mr-2"
                    preview={false}
                    width={18}
                  />
                </div>
              </div>
            </Flex>

            {/* Or login with email */}
            <Row className="my-4">
              <p className="text-[#525252] font-medium text-base mb-4">
                Hoặc đăng nhập tài khoản:
              </p>
              {isRegister && (
                <Flex className="w-full" gap={8}>
                  <Col span={12} className="mb-4">
                    <UIInput placeholder="Email/SĐT của bạn" className="h-12" />
                  </Col>
                  <Col span={12}>
                    <UIInput placeholder="Mật khẩu" className="h-12" />
                  </Col>
                </Flex>
              )}
              <Col span={24} className="mb-4">
                <UIInput placeholder="Email/SĐT của bạn" className="h-12" />
              </Col>
              <Col span={24}>
                <UIInput placeholder="Mật khẩu" className="h-12" />
              </Col>
            </Row>

            {/* Login button */}
            <button className="w-full bg-black uppercase text-white p-3.5 rounded-full font-medium my-3">
              {isRegister ? 'Đăng kí tài khoản' : 'Đăng nhập'}
            </button>

            {/* Register and forgot password */}
            <div className="flex justify-between text-[#3554cf] font-medium">
              <span className="cursor-pointer" onClick={handleLogin}>
                {isRegister ? 'Đăng nhập' : 'Đăng ký'}
              </span>
              <span className="cursor-pointer" onClick={handleForgotPassword}>
                Quên mật khẩu
              </span>
            </div>
          </div>
        </>
      ) : (
        <>
          <div>
            <div className="flex justify-center">
              <h2 className="text-3xl font-bold mb-8">Cấp lại mật khẩu</h2>
            </div>
            <Row>
              <Col span={24}>
                <UIInput placeholder="Email/SĐT của bạn" className="h-12" />
              </Col>
              <button className="w-full bg-black text-white hover:bg-[#d9d9d9] hover:text-black p-2 rounded-full font-medium my-3">
                Kiểm tra
              </button>
            </Row>
          </div>
        </>
      )}
    </Modal>
  );
};

export default RegisterPage;
