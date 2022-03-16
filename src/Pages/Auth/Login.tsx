import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { InputChangeEventHandler } from './types';
import iconUser from '../../Assets/images/iconUser.png';
import iconSec from '../../Assets/images/iconSec.png';

const Login = () => {
  const [dataLogin, setDataLogin] = useState({
    nameAccount: '',
    passAccount: '',
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
      <h1 className="auth-form_title">Đăng nhập</h1>
      <div className="auth-form_item">
        <label htmlFor="" className="auth-form_label">
          Tên đăng nhập
        </label>
        <input
          type="text"
          className="auth-form_input"
          value={dataLogin.nameAccount}
          name="nameAccount"
          onChange={handleInput}
        />
        <img src={iconUser} alt="" className="auth-form_inputIcon" />
      </div>
      <div className="auth-form_item last">
        <label htmlFor="" className="auth-form_label">
          Mật khẩu
        </label>
        <input
          type="password"
          className="auth-form_input"
          value={dataLogin.passAccount}
          name="passAccount"
          onChange={handleInput}
        />
        <img src={iconSec} alt="" className="auth-form_inputIcon" />
      </div>
      <Link to="" className="auth-form_forgot">
        Quên mật khẩu?
      </Link>
      <button className="auth-form_btn">Đăng nhập</button>
    </div>
  );
};

export default Login;
