import { Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import union from '../../Assets/images/Union.png';
import eye from '../../Assets/images/eye.png';
import { useSelector } from 'react-redux';
import { authSelector } from './authSelector';
import { useNavigate } from 'react-router-dom';
import Account from '../../firebase/Account';

const FormChangePass = () => {
  const listData = useSelector(authSelector);
  const navigation = useNavigate();

  const token = listData.idlogin;

  function myFunction(tagname: string) {
    const x = document.querySelector(
      `input[name=${tagname}]`
    ) as HTMLInputElement | null;
    if (x) {
      if (x.type === 'text') x.type = 'password';
      else if (x.type === 'password') {
        x.type = 'text';
      }
    }
  }

  return (
    <>
      <Formik
        initialValues={{ currentPass: '', newPass: '', reNewPass: '' }}
        validationSchema={Yup.object().shape({
          newPass: Yup.string()
            .required('Password is required')
            .matches(
              /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/,
              'Password must contain at least 8 characters, one uppercase, one number and one special case character'
            ),
          reNewPass: Yup.string().oneOf(
            [Yup.ref('newPass'), null],
            'Passwords must match'
          ),
        })}
        onSubmit={(values) => {
          const result = listData.listAuth.find(
            (item) =>
              item.id === token.id && item.passAccount === values.currentPass
          );
          if (result) {
            Account.updateAccount(token.id, { nameAccount: values.newPass });
            alert('cập nhật mật khẩu thành công');
            navigation('/auth');
          } else {
            alert('mật khẩu hiện tại không hợp lệ');
          }
        }}
      >
        {({ errors, touched }) => (
          <Form className="form-info-changePass">
            <div className="grid-col-5">
              <div className="form-info-warp">
                <div className="form-info-item">
                  <label htmlFor="currentPass">Mã người dùng:</label>
                  <Field name="currentPass" type="password"></Field>
                  <img
                    src={eye}
                    alt=""
                    onClick={() => myFunction('currentPass')}
                  />
                </div>

                <div className="form-info-item">
                  <label htmlFor="currentPass">Mật khẩu mới:</label>
                  <Field name="newPass" type="password"></Field>
                  <img src={eye} alt="" onClick={() => myFunction('newPass')} />
                </div>

                {errors.newPass && touched.newPass ? (
                  <div className="mess-error">{errors.newPass}</div>
                ) : null}
                <div className="form-info-item">
                  <label htmlFor="currentPass">Nhập lại mật khẩu mới:</label>
                  <Field name="reNewPass" type="password"></Field>
                  <img
                    src={eye}
                    alt=""
                    onClick={() => myFunction('reNewPass')}
                  />
                </div>

                {errors.reNewPass && touched.reNewPass ? (
                  <div className="mess-error">{errors.reNewPass}</div>
                ) : null}
              </div>
              <div className="form-info-note">
                <img src={union} alt="" />
                <ul>
                  Mật khẩu phải có ít nhất 8 ký tự bao gồm:
                  <li>-Chữ cái</li>
                  <li>-Số </li>
                  <li>-Chữ cái viết hoa </li>
                  <li>-Chữ cái viế thường</li>
                  <li>-Các ký tự đặc biệt như ! ~ / ) * ^ $ &...</li>
                </ul>
              </div>
            </div>
            <div className="form-info-control">
              <button type="reset" className="btn btn--gray--solid btn--medium">
                Hủy
              </button>
              <button
                type="submit"
                className="btn btn--primary--solid btn--medium"
              >
                Lưu
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormChangePass;
