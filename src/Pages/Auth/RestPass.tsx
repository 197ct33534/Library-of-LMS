import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { InputChangeEventHandler } from './types';
import iconUser from '../../Assets/images/iconUser.png';
import iconSec from '../../Assets/images/iconSec.png';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validateSchemaAuth = Yup.object().shape({
  nameAccount: Yup.string().required('required'),
  verifiAccount: Yup.string().required('required'),
});
const RestPass = () => {
  const formik = useFormik({
    initialValues: {
      nameAccount: '',
      verifiAccount: '',
    },
    validationSchema: validateSchemaAuth,

    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form className="auth-form" onSubmit={formik.handleSubmit}>
      <h1 className="auth-form_title">Cấp lại mật khẩu</h1>
      <div className="auth-form_item">
        <label htmlFor="" className="auth-form_label">
          Tên đăng nhập
        </label>
        <input
          type="text"
          className={`auth-form_input ${formik.values.nameAccount && 'active'}`}
          value={formik.values.nameAccount}
          name="nameAccount"
          onChange={formik.handleChange}
        />
        <img src={iconUser} alt="" className="auth-form_inputIcon" />
      </div>
      <div className="auth-form_item last">
        <label htmlFor="" className="auth-form_label">
          Mã xác thực
        </label>
        <input
          type="password"
          className={`auth-form_input ${
            formik.values.verifiAccount && 'active'
          }`}
          value={formik.values.verifiAccount}
          name="verifiAccount"
          onChange={formik.handleChange}
        />
        <img src={iconSec} alt="" className="auth-form_inputIcon" />
      </div>
      <Link to="/auth" className="auth-form_forgot">
        &lt; Quay lại trang chủ
      </Link>
      <button
        className={`auth-form_btn ${
          formik.values.nameAccount && formik.values.verifiAccount && 'active'
        }`}
        type="submit"
      >
        Cấp lại mật khẩu
      </button>
    </form>
  );
};

export default RestPass;
