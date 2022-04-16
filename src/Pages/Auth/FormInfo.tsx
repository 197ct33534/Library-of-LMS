import { Formik, Form, Field } from 'formik';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { authSelector } from './authSelector';
import Account from '../../firebase/Account';
import { setSettingAuth, authLogin } from './authSlice';
const FormInfo = (props: { setting: boolean }) => {
  const { setting } = props;
  const listData = useSelector(authSelector);
  const data = listData.idlogin;
  const dispatch = useDispatch();
  const settingAuth = listData.settingAuth;
  return (
    <>
      <Formik
        initialValues={data}
        validationSchema={Yup.object().shape({
          phone: Yup.string()
            .required('required')
            .matches(
              /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
              'Phone number is not valid'
            )
            .min(10, 'to short')
            .max(10, 'to long'),
          email: Yup.string()
            .email('Invalid email format')
            .required('required'),
        })}
        onSubmit={(values: any) => {
          Account.updateAccount(data.id, {
            phone: values.phone,
            email: values.email,
          });
          alert('cập nhật  thành công');
          dispatch(authLogin(values));

          dispatch(setSettingAuth(false));
        }}
      >
        {({ errors, touched }) => (
          <Form className="grid-col-2">
            <div className="form-left">
              <div className="form-info-item">
                <label htmlFor="id">Mã người dùng:</label>
                <Field name="id" disabled placeholder="Mã người dùng" />
              </div>
              <div className="form-info-item">
                <label htmlFor="sex">Giới tính:</label>
                <Field name="sex" as="select" disabled>
                  <option value="Nam">Nam</option>
                  <option value="Nữ">Nữ</option>
                </Field>
              </div>
              <div className="form-info-item">
                <label htmlFor="role">Vai trò:</label>
                <Field name="role" disabled placeholder="Vai trò:" />
              </div>
              <div className="form-info-item">
                <label htmlFor="email">Email:</label>
                <Field
                  name="email"
                  disabled={!setting}
                  className={setting ? 'active' : ''}
                  placeholder="Email:"
                />
              </div>
              {errors.email && touched.email ? (
                <div className="mess-error">{errors.email}</div>
              ) : null}
            </div>
            <div className="form-right">
              <div className="form-info-item">
                <label htmlFor="nameAccount">Tên người dùng:</label>
                <Field
                  name="nameAccount"
                  disabled
                  placeholder="Tên người dùng:"
                />
              </div>
              <div className="form-info-item">
                <label htmlFor="phone">Số điện thoại:</label>
                <Field
                  name="phone"
                  disabled={!setting}
                  style={setting ? { backgroundColor: '#fff' } : {}}
                  placeholder="Số điện thoại:"
                />
              </div>
              {errors.phone && touched.phone ? (
                <div className="mess-error">{errors.phone}</div>
              ) : null}
              <div className="form-info-item">
                <label htmlFor="address">Địa chỉ:</label>
                <Field
                  name="address"
                  disabled
                  as="textarea"
                  placeholder="Địa chỉ:"
                />
              </div>
            </div>
            {settingAuth && (
              <>
                <div className="form-info-control">
                  <button
                    type="reset"
                    className="btn btn--gray--solid btn--medium"
                    onClick={() => dispatch(setSettingAuth(false))}
                  >
                    Hủy
                  </button>
                  <button
                    type="submit"
                    className="btn btn--primary--solid btn--medium"
                  >
                    Lưu
                  </button>
                </div>
              </>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormInfo;
