'use client';
import { useState } from 'react';
import UIInput from '@/components/ui/UIInput';
import UISelector from '@/components/ui/UISelector';
import { Button, Checkbox, Col, Divider, Form, Radio, Row } from 'antd';
import { GiftFilled } from '@ant-design/icons';
import { cartItems } from '@/mocks/mockDataCart';
import CartItem from './CartItem';

const CartPage = () => {
  const [accept, setAccept] = useState<boolean>(false);
  const [checkedList, setCheckedList] = useState<string[]>([]);
  const [checkAll, setCheckAll] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);

  const handleChangeAccept = () => {
    setAccept(!accept);
  };

  const plainOptions = cartItems.map((item) => item.name);

  const onCheckAllChange = (e: any) => {
    const isChecked = e.target.checked;
    setCheckedList(isChecked ? plainOptions : []);
    setCheckAll(isChecked);
    setIndeterminate(false);
  };

  const onChange = (list: string[]) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };

  const handleClearAll = (): void => {
    setCheckedList([]);
    setCheckAll(false);
    setIndeterminate(false);
  };
  const handleQuantityChange = () => {};
  const handleItemCheck = () => {};
  const handleColorChange = () => {};
  const handleSizeChange = () => {};
  const handleRemoveItem = () => {};
  return (
    <div className="p-10 min-h-screen">
      <Row gutter={24}>
        <Col xs={24} md={14}>
          <h5 className="text-black text-3xl font-bold mb-8">
            Thông tin đặt hàng
          </h5>
          <Form layout="horizontal">
            <Row gutter={[16, 16]} style={{ marginBottom: -5 }}>
              <Col md={16}>
                <Form.Item>
                  <UIInput
                    label="Họ và tên"
                    name="name"
                    placeholder="Nhập họ và tên của bạn"
                  />
                </Form.Item>
              </Col>
              <Col md={8}>
                <Form.Item>
                  <UIInput
                    label="Số điện thoại"
                    name="phone"
                    placeholder="Nhập số điện thoại của bạn"
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={[16, 16]} style={{ marginBottom: -5 }}>
              <Col md={24}>
                <Form.Item>
                  <UIInput
                    label="Email"
                    name="email"
                    placeholder="Theo dõi đơn hàng sẽ gửi qua Email và ZNS"
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={[16, 16]} style={{ marginBottom: -5 }}>
              <Col md={24}>
                <Form.Item>
                  <UIInput
                    label="Địa chỉ"
                    name="address"
                    placeholder="Địa chỉ (ví dụ: 103 Vạn Phúc, phường Vạn Phúc)"
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={[16, 16]} style={{ marginBottom: -5 }}>
              <Col md={8}>
                <Form.Item>
                  <UISelector
                    options={[
                      { label: 'Thành phố Hà Nội', value: 'HN' },
                      { label: 'Thành phố Hồ Chí Minh', value: 'HCM' },
                    ]}
                    defaultValue={'HN'}
                  />
                </Form.Item>
              </Col>
              <Col md={8}>
                <Form.Item>
                  <UISelector
                    options={[
                      { label: 'Thanh Xuân', value: 'TX' },
                      { label: 'Cầu Giấy', value: 'CG' },
                    ]}
                    defaultValue={'TX'}
                  />
                </Form.Item>
              </Col>
              <Col md={8}>
                <Form.Item>
                  <UISelector
                    options={[
                      { label: 'Nam Văn', value: 'TX' },
                      { label: 'Trung Hòa', value: 'CG' },
                    ]}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={[16, 16]} style={{ marginBottom: -5 }}>
              <Col md={24}>
                <Form.Item>
                  <UIInput
                    label="Ghi chú"
                    name="note"
                    placeholder="Ghi chú thêm (Ví dụ: Giao hàng giờ hành chính)"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row style={{ marginBottom: -5 }}>
              <Col md={24}>
                <Form.Item>
                  <Checkbox onChange={handleChangeAccept}>
                    <span className="font-medium">
                      Gọi cho người khác nhận hàng(nếu có)
                    </span>
                  </Checkbox>
                </Form.Item>
              </Col>
              {accept && (
                <Col md={24}>
                  <Form layout="vertical" className="!bg-[#f5f5f5] !rounded-lg">
                    <Form.Item>
                      <Radio.Group defaultValue="Nam">
                        <Radio value="Nam">Nam</Radio>
                        <Radio value="Nữ">Nữ</Radio>
                      </Radio.Group>
                    </Form.Item>
                    <Row gutter={16}>
                      <Col md={12}>
                        <Form.Item>
                          <UIInput placeholder="Họ tên người nhận" />
                        </Form.Item>
                      </Col>
                      <Col md={12}>
                        <Form.Item>
                          <UIInput placeholder="Số điện thoại người nhận" />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Form>
                </Col>
              )}
            </Row>
          </Form>
          <Divider />
        </Col>
        <Col xs={24} md={10}>
          <h5 className="text-black text-3xl font-bold mb-2">Giỏ hàng</h5>
          <div className="bg-[#e3e6fa] p-2 rounded-lg flex justify-between">
            <div>
              <GiftFilled className="text-2xl !text-[#273bcd]" />{' '}
              <span className="text-[#4253d3] font-medium">
                Mua thêm
                <span className="font-bold text-[#293dcd]"> 250.000 đ</span> để
                nhận <span className="font-bold">1 áo tự hào Việt Nam</span>
              </span>
            </div>
            <Button
              className="!rounded-full !font-medium !bg-[#273bcd]"
              type="primary"
            >
              Mua ngay
            </Button>
          </div>
          <div className="p-4 max-w-4xl mx-auto">
            <Row>
              <Col xs={18} className="flex space-x-3">
                <Checkbox
                  indeterminate={indeterminate}
                  onChange={onCheckAllChange}
                  checked={checkAll}
                />
                <span className="text-[#acacac] font-medium text-xs pl-2">
                  TẤT CẢ SẢN PHẨM
                </span>
                <span className="text-[#acacac] font-medium text-xs">|</span>
                <span
                  className="text-[#acacac] font-medium text-xs cursor-pointer"
                  onClick={handleClearAll}
                >
                  XÓA TẤT CẢ
                </span>
              </Col>
              <Col xs={3} className="text-right">
                <span className="text-[#acacac] font-medium text-xs">
                  SỐ LƯỢNG
                </span>
              </Col>
              <Col xs={3} className="text-right">
                <span className="text-[#acacac] font-medium text-xs">GIÁ</span>
              </Col>
            </Row>
            <Divider />

            {/* <Checkbox.Group
              options={plainOptions}
              value={checkedList}
              onChange={onChange}
            > */}
            <Row>
              {cartItems.map((item) => (
                <Col span={24} key={item.id}>
                  <CartItem
                    item={item}
                    checked={checkedList.includes(item.id)}
                    onCheck={handleItemCheck}
                    onQuantityChange={handleQuantityChange}
                    onColorChange={handleColorChange}
                    onSizeChange={handleSizeChange}
                    onRemove={handleRemoveItem}
                  />
                </Col>
              ))}
            </Row>
            {/* </Checkbox.Group> */}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CartPage;
