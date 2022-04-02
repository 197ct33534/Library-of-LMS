import { Formik, Form, Field } from 'formik';
import React from 'react';
import * as Yup from 'yup';
const FormInfo = () => {
  return (
    <>
      <Formik
        initialValues={{
          idUser: 'AD1235',
          nameUser: 'admin123',
          sex: 'Nam',
          phone: '0324616485',
          role: 'Quản lý',
          email: 'admin123@school.com.vn',
          address:
            '86/33 Âu Cơ, phường 9, quận Tân Bình, Thành phố Hồ Chí Minh',
        }}
        onSubmit={(values: any) => {
          console.log(values);
        }}
      >
        <Form className="grid-col-2">
          <div className="form-left">
            <div className="form-info-item">
              <label htmlFor="idUser">Mã người dùng:</label>
              <Field name="idUser" disabled placeholder="Mã người dùng" />
            </div>
            <div className="form-info-item">
              <label htmlFor="sex">Giới tính:</label>
              <Field name="sex" as="select">
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
              <Field name="email" disabled placeholder="Email:" />
            </div>
          </div>
          <div className="form-right">
            <div className="form-info-item">
              <label htmlFor="nameUser">Tên người dùng:</label>
              <Field name="nameUser" disabled placeholder="Tên người dùng:" />
            </div>
            <div className="form-info-item">
              <label htmlFor="phone">Số điện thoại:</label>
              <Field name="phone" disabled placeholder="Số điện thoại:" />
            </div>
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
      </Formik>
    </>
  );
};

export default FormInfo;
