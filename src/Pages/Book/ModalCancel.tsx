import { Button, DatePicker, Form, Input, Checkbox } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setModelCancelDocument } from './bookSlice';

const ModalCancel = () => {
  const onFinish = (values: any) => {
    console.log(values);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    const elementTR = document.querySelector('.ant-picker-content thead tr');
    if (elementTR) {
      console.log('dom datepicker 1');
      let nameDay = '';
      const arrayNameDay = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
      for (let i = 0; i < 7; i++) {
        nameDay += `<th>${arrayNameDay[i]}</th>`;
      }
      elementTR.innerHTML = nameDay;
    }
    const elementMonth = document.querySelector(
      '.ant-picker-month-btn'
    ) as HTMLElement;
    if (elementMonth) {
      console.log('dom datepicker 2');

      const arrayNameMoth = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];
      const index = arrayNameMoth.indexOf(elementMonth.outerText) + 1;
      elementMonth.innerHTML = 'Tháng ' + index + ', ';
    }
  }, []);
  return (
    <>
      <div className="ModelAvatar">
        <div className="ModelAvatar-cancel">
          <h1>Hủy phê duyệt tài liệu</h1>
          <Form
            name="nest-messages"
            onFinish={onFinish}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            labelAlign="left"
            labelWrap
          >
            <Form.Item name="date-picker" label="Ngày bắt đầu*">
              <DatePicker format={['DD/MM/YYYY', 'DD/MM/YY']} />
            </Form.Item>
            <Form.Item name="user" label="Người hủy*">
              <Input />
            </Form.Item>
            <Form.Item name="note" label="Ghi chú">
              <Input.TextArea
                maxLength={100}
                style={{ width: '560px', height: '140px' }}
              />
            </Form.Item>
            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 8, span: 16 }}
            >
              <Checkbox>Gửi thông báo cho người tạo</Checkbox>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button
                htmlType="reset"
                className="btn btn--gray--solid btn--large"
                onClick={() => dispatch(setModelCancelDocument(false))}
              >
                Hủy
              </Button>
              <Button
                htmlType="submit"
                className="btn btn--primary--solid btn--large ModelAvatar-cancel_btn"
              >
                Lưu
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default ModalCancel;
