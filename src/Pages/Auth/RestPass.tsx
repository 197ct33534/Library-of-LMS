import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { InputChangeEventHandler } from './types';
import iconUser from '../../Assets/images/iconUser.png';
import iconSec from '../../Assets/images/iconSec.png';

const RestPass = () => {
  const [dataLogin, setDataLogin] = useState({
    nameAccount: '',
    verifiAccount: '',
  });
  const handleInput: InputChangeEventHandler = (evt) => {
    const value = evt.target.value;
    setDataLogin({
      ...dataLogin,
      [evt.target.name]: value,
    });
  };
  return (
    <div className="auth-form">
      <h1 className="auth-form_title">Cấp lại mật khẩu</h1>
      <div className="auth-form_item">
        <label htmlFor="" className="auth-form_label">
          Tên đăng nhập
        </label>
        <input
          type="text"
          className={`auth-form_input ${dataLogin.nameAccount && 'active'}`}
          value={dataLogin.nameAccount}
          name="nameAccount"
          onChange={handleInput}
        />
        <img src={iconUser} alt="" className="auth-form_inputIcon" />
      </div>
      <div className="auth-form_item last">
        <label htmlFor="" className="auth-form_label">
          Mã xác thực
        </label>
        <input
          type="password"
          className={`auth-form_input ${dataLogin.verifiAccount && 'active'}`}
          value={dataLogin.verifiAccount}
          name="verifiAccount"
          onChange={handleInput}
        />
        <img src={iconSec} alt="" className="auth-form_inputIcon" />
      </div>
      <Link to="/auth" className="auth-form_forgot">
        &lt; Quay lại trang chủ
      </Link>
      <button
        className={`auth-form_btn ${
          dataLogin.verifiAccount && dataLogin.nameAccount && 'active'
        }`}
      >
        Cấp lại mật khẩu
      </button>
    </div>
  );
};

export default RestPass;
