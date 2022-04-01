import React from 'react';
import Button from '../../Common/Button';
import Avatar from '../../Assets/images/avatar.png';
import camera from '../../Assets/images/camera.png';
import FormInfo from './FormInfo';

const InfoUser = () => {
  return (
    <>
      <div className="info-button">
        <div className="info-change">
          <div className="info-change_button active">Thông tin cá nhân</div>
          <div className="info-change_button ">Thay đổi mật khẩu</div>
        </div>
        <Button
          buttonStyle="buttonStyle"
          buttonSize="btn--medium"
          type="button"
        >
          Chỉnh sửa
        </Button>
      </div>
      <div className="info-card">
        <h2>Thông tin chung</h2>
        <div className="grid-col-3">
          <div className="info-card-avatar">
            <img src={Avatar} alt="" />
            <img src={camera} alt="" />
          </div>
          <FormInfo />
        </div>
      </div>
    </>
  );
};

export default InfoUser;
