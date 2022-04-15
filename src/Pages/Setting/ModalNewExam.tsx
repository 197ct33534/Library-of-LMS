import { Input } from 'antd';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../Common/Button';
import { setModalNewExam } from './settingSlice';
interface Settings {
  data?: any;
}
const ModalNewExam = (props: Settings) => {
  const { data } = props;
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      idUser: data ? data.id : '',
      nameUser: data ? data.userName : '',
      Email: data ? data.email : '',
      nameRole: 'Admin',
    },
    onSubmit: (value) => {
      console.log(value);
    },
  });
  return (
    <>
      <div className="ModelAvatar">
        <div className="ModalNewExam">
          <h1>Thêm lịch thi mới</h1>
          <form action="" onSubmit={formik.handleSubmit}>
            <div className="grid-col-5">
              <label htmlFor="idUser">Mã người dùng:</label>
              <div className="ModalNewExam-item">
                <Input
                  name="idUser"
                  value={formik.values.idUser}
                  onChange={formik.handleChange}
                />
              </div>
              <label htmlFor="nameUser">Tên:</label>
              <div className="ModalNewExam-item">
                <Input
                  name="nameUser"
                  value={formik.values.nameUser}
                  onChange={formik.handleChange}
                />
              </div>
              <label htmlFor="Email">Email:</label>
              <div className="ModalNewExam-item">
                <Input
                  name="Email"
                  value={formik.values.Email}
                  onChange={formik.handleChange}
                />
              </div>
              <label htmlFor="">Tên vai trò:</label>
              <div className="ModalNewExam-item">
                <select
                  name="nameRole"
                  onChange={formik.handleChange}
                  value={formik.values.nameRole}
                >
                  <option value="Nhân viên">Nhân viên</option>
                  <option value="Quản lý">Quản lý</option>
                  <option value="Học viên">Học viên</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>
              <label htmlFor=""></label>
              <div className="ModalNewExam-item">
                <Button
                  buttonStyle="btn--gray--solid"
                  buttonSize="btn--large"
                  style={{ marginRight: '16px' }}
                  onClick={() => dispatch(setModalNewExam(false))}
                >
                  Huỷ
                </Button>
                <Button
                  buttonStyle="btn--primary--solid"
                  buttonSize="btn--large"
                  style={{ marginLeft: '16px' }}
                  type="submit"
                >
                  Lưu
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ModalNewExam;
