import { Checkbox } from 'antd';

import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../../Common/Button';
import { setAssignment } from '../teacherSlice';

const ModalAssigment = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="ModelAvatar">
        <div className="ModalAssigment">
          <h1>Phân công tài liệu môn học </h1>
          <div className="grid-col-7 ModalAssigment-warp">
            <strong>Mã môn học:</strong>
            <span>#DLK6</span>
            <strong>Môn học:</strong>
            <span>Thương mại điện tử</span>
            <strong>Giảng viên:</strong>
            <span>Hoa Hoa</span>
          </div>
          <p>Phân công vào các lớp giảng dạy</p>
          <div className="grid-col-7 ModalAssigment-warp">
            <strong>
              <Checkbox>
                <span>Tất cả lớp học</span>
              </Checkbox>
            </strong>
            <span>
              <select placeholder="Please select">
                <option value="Hệ thống thông tin kinh doanh 1">
                  Hệ thống thông tin kinh doanh 1
                </option>
                <option value="Ngân hàng 1">Ngân hàng 1</option>
                <option value="Thương mại điện tử 1">
                  Thương mại điện tử 1
                </option>
              </select>
            </span>
            <strong>Chọn bài giảng:</strong>
            <span>
              <select placeholder="Please select">
                <option value="Hệ thống thông tin kinh doanh 1">
                  Hệ thống thông tin kinh doanh 1
                </option>
                <option value="Ngân hàng 1">Ngân hàng 1</option>
                <option value="Thương mại điện tử 1">
                  Thương mại điện tử 1
                </option>
              </select>
            </span>
            <strong>Tất cả lớp học</strong>
            <span>
              <select placeholder="Please select">
                <option value="Hệ thống thông tin kinh doanh 1">
                  Hệ thống thông tin kinh doanh 1
                </option>
                <option value="Ngân hàng 1">Ngân hàng 1</option>
                <option value="Thương mại điện tử 1">
                  Thương mại điện tử 1
                </option>
              </select>
            </span>
          </div>
          <div className="ModalAssigment-warp_controler">
            <Button
              buttonStyle="btn--gray--solid"
              buttonSize="btn--large"
              type="submit"
              onClick={() => dispatch(setAssignment(false))}
            >
              Huỷ
            </Button>
            <Button
              buttonStyle="btn--primary--solid"
              buttonSize="btn--large"
              type="submit"
            >
              Lưu
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalAssigment;
