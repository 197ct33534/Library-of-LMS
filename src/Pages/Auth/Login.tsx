import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import iconUser from '../../Assets/images/iconUser.png';
import iconSec from '../../Assets/images/iconSec.png';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { authFetchData, authLogin } from './authSlice';
import Account from '../../firebase/Account';
import { authSelector } from './authSelector';
import { useNavigate } from 'react-router-dom';
const validateSchemaAuth = Yup.object().shape({
  nameAccount: Yup.string().required('required'),
  passAccount: Yup.string().required('required'),
});
const Login = () => {
  const dispatch = useDispatch();
  const listData = useSelector(authSelector);
  const navigation = useNavigate();
  const formik = useFormik({
    initialValues: {
      nameAccount: '',
      passAccount: '',
    },
    validationSchema: validateSchemaAuth,
    onSubmit: (values) => {
      const result = listData.listAuth.find(
        (item) =>
          item.nameAccount === values.nameAccount &&
          item.passAccount === values.passAccount
      );

      if (result) dispatch(authLogin(result));
      navigation('/info');
    },
  });
  useEffect(() => {
    const getAuths = async () => {
      const datas = await Account.getAllAccount();
      const dataArray = datas.docs.map((data) => {
        const result = data.data();
        result.id = data.id;
        return result;
      });

      dispatch(authFetchData(dataArray));
    };
    getAuths();
  }, [dispatch]);
  return (
    <form className="auth-form" onSubmit={formik.handleSubmit}>
      <h1 className="auth-form_title">Đăng nhập</h1>
      <div className="auth-form_item">
        <label htmlFor="" className="auth-form_label">
          Tên đăng nhập
        </label>
        <input
          type="text"
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
