import React from 'react';
import { Link } from 'react-router-dom';

import iconUser from '../../Assets/images/iconUser.png';
import iconSec from '../../Assets/images/iconSec.png';
import { useFormik } from 'formik';
import * as Yup from 'yup';
const validateSchemaAuth = Yup.object().shape({
  nameAccount: Yup.string().required('required'),
  passAccount: Yup.string().required('required'),
});
const Login = () => {
  const formik = useFormik({
    initialValues: {
      nameAccount: '',
      passAccount: '',
    },
    validationSchema: validateSchemaAuth,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form className="auth-form" onSubmit={formik.handleSubmit}>
      <h1 className="auth-form_title">Đăng nhập</h1>
      <div className="auth-form_item">
        <label htmlFor="" className="auth-form_label">
          Tên đăng nhập
        </label>
        <input
          type="text"
          // ${dataLogin.nameAccount && 'active'}
          className={`auth-form_input ${
            formik.values.nameAccount ? 'active' : ''
          }`}
          value={formik.values.nameAccount}
          name="nameAccount"
          onChange={formik.handleChange}
        />
        <img src={iconUser} alt="" className="auth-form_inputIcon" />
      </div>
      <div className="auth-form_item last">
        <label htmlFor="" className="auth-form_label">
          Mật khẩu
        </label>
        <input
          type="password"
          // {dataLogin.passAccount && 'active'}
          className={`auth-form_input ${
            formik.values.passAccount ? 'active' : ''
          }`}
          value={formik.values.passAccount}
          name="passAccount"
          onChange={formik.handleChange}
        />
        <img src={iconSec} alt="" className="auth-form_inputIcon" />
      </div>
      <Link to="/auth/restpass" className="auth-form_forgot">
        Quên mật khẩu?
      </Link>
      <button className="auth-form_btn active" type="submit">
        Đăng nhập
      </button>
    </form>
  );
};

export default Login;
