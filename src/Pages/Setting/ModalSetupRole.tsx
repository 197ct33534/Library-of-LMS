import { Checkbox, Input } from 'antd';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../Common/Button';
import { setModalRole } from './settingSlice';
const { TextArea } = Input;
const ModalSetupRole = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      nameRole: '',
      description: '',
      Subject: ['Xem'],
      privateFiles: ['Xem'],
      Resources: ['Xem'],
      Exam: ['Xem'],
      Notify: ['Xem'],
      Authorization: ['Xem', 'Chỉnh sửa'],
      userAccount: ['Xem', 'Chỉnh sửa'],
    },
    onSubmit: (value) => {
      console.log(value);
    },
  });
  return (
    <>
      <div className="ModelAvatar">
        <div className="ModelAvatar-RoleManage">
          <h1>Thiết lập vai trò</h1>
          <form onSubmit={formik.handleSubmit}>
            <div className="ModelAvatar-RoleManage_item grid-col-5">
              <label htmlFor="">Tên vai trò:</label>
              <div className="ModelAvatar-RoleManage_item-input">
                <Input
                  value={formik.values.nameRole}
                  name="nameRole"
                  onChange={formik.handleChange}
                />
              </div>
            </div>
            <div className="ModelAvatar-RoleManage_item grid-col-5">
              <label htmlFor="">Mô tả:</label>
              <div className="ModelAvatar-RoleManage_item-input">
                <TextArea
                  value={formik.values.description}
                  name="description"
                  onChange={formik.handleChange}
                />
              </div>
            </div>
            <div className="ModelAvatar-RoleManage_item grid-col-5">
              <label htmlFor="">Môn học:</label>
              <div className="ModelAvatar-RoleManage_item-checkbox">
                <Checkbox.Group
                  name="Subject"
                  value={formik.values.Subject}
                  onChange={(x) => formik.setFieldValue('Subject', [...x])}
                >
                  <Checkbox value="Xem">Xem</Checkbox>

                  <Checkbox value="Chỉnh sửa">Chỉnh sửa</Checkbox>
                </Checkbox.Group>
              </div>
            </div>
            <div className="ModelAvatar-RoleManage_item grid-col-5">
              <label htmlFor="">Tệp riêng tư:</label>
              <div className="ModelAvatar-RoleManage_item-checkbox">
                <Checkbox.Group
                  name="privateFiles"
                  value={formik.values.privateFiles}
                  onChange={(x) => formik.setFieldValue('privateFiles', [...x])}
                >
                  <Checkbox value="Xem">Xem</Checkbox>

                  <Checkbox value="Chỉnh sửa">Chỉnh sửa</Checkbox>
                  <Checkbox value="Xóa">Xóa</Checkbox>
                  <Checkbox value="Thêm mới">Thêm mới</Checkbox>
                  <Checkbox value="Tải xuống">Tải xuống</Checkbox>
                </Checkbox.Group>
              </div>
            </div>
            <hr />
            <div className="ModelAvatar-RoleManage_item grid-col-5">
              <label htmlFor="">Bài giảng/tài nguyên:</label>
              <div className="ModelAvatar-RoleManage_item-checkbox">
                <Checkbox.Group
                  name="Resources"
                  value={formik.values.Resources}
                  onChange={(x) => formik.setFieldValue('Resources', [...x])}
                >
                  <Checkbox value="Xem">Xem</Checkbox>

                  <Checkbox value="Chỉnh sửa">Chỉnh sửa</Checkbox>
                  <Checkbox value="Xóa">Xóa</Checkbox>
                  <Checkbox value="Thêm mới">Thêm mới</Checkbox>
                  <Checkbox value="Tải xuống">Tải xuống</Checkbox>
                  <Checkbox value="Thêm vào môn học">Thêm vào môn học</Checkbox>
                </Checkbox.Group>
              </div>
            </div>
            <hr />
            <div className="ModelAvatar-RoleManage_item grid-col-5">
              <label htmlFor="">Đề thi & bài kiểm tra:</label>
              <div className="ModelAvatar-RoleManage_item-checkbox">
                <Checkbox.Group
                  name="Exam"
                  value={formik.values.Exam}
                  onChange={(x) => formik.setFieldValue('Exam', [...x])}
                >
                  <Checkbox value="Xem">Xem</Checkbox>

                  <Checkbox value="Chỉnh sửa">Chỉnh sửa</Checkbox>
                  <Checkbox value="Xóa">Xóa</Checkbox>
                  <Checkbox value="Thêm mới">Thêm mới</Checkbox>
                  <Checkbox value="Tải xuống">Tải xuống</Checkbox>
                  <Checkbox value="Phê duyệt">Phê duyệt</Checkbox>
                </Checkbox.Group>
              </div>
            </div>
            <hr />
            <div className="ModelAvatar-RoleManage_item grid-col-5">
              <label htmlFor="">Thông báo:</label>
              <div className="ModelAvatar-RoleManage_item-checkbox">
                <Checkbox.Group
                  name="Notify"
                  value={formik.values.Notify}
                  onChange={(x) => formik.setFieldValue('Notify', [...x])}
                >
                  <Checkbox value="Xem">Xem</Checkbox>

                  <Checkbox value="Chỉnh sửa">Chỉnh sửa</Checkbox>
                  <Checkbox value="Xóa">Xóa</Checkbox>
                  <Checkbox value="Thêm mới">Thêm mới</Checkbox>
                  <Checkbox value="Cài đặt">Cài đặt</Checkbox>
                </Checkbox.Group>
              </div>
            </div>
            <hr />
            <div className="ModelAvatar-RoleManage_item grid-col-5">
              <label htmlFor="">Phân quyền:</label>
              <div className="ModelAvatar-RoleManage_item-checkbox">
                <Checkbox.Group
                  name="Authorization"
                  value={formik.values.Authorization}
                  onChange={(x) =>
                    formik.setFieldValue('Authorization', [...x])
                  }
                >
                  <Checkbox value="Xem">Xem</Checkbox>

                  <Checkbox value="Chỉnh sửa">Chỉnh sửa</Checkbox>
                  <Checkbox value="Xóa">Xóa</Checkbox>
                  <Checkbox value="Thêm mới">Thêm mới</Checkbox>
                </Checkbox.Group>
              </div>
            </div>
            <hr />
            <div className="ModelAvatar-RoleManage_item grid-col-5">
              <label htmlFor="">Tài khoản người dùng:</label>
              <div className="ModelAvatar-RoleManage_item-checkbox">
                <Checkbox.Group
                  name="userAccount"
                  value={formik.values.userAccount}
                  onChange={(x) => formik.setFieldValue('userAccount', [...x])}
                >
                  <Checkbox value="Xem">Xem</Checkbox>

                  <Checkbox value="Chỉnh sửa">Chỉnh sửa</Checkbox>
                  <Checkbox value="Xóa">Xóa</Checkbox>
                  <Checkbox value="Thêm mới">Thêm mới</Checkbox>
                </Checkbox.Group>
              </div>
            </div>
            <div className="ModelAvatar-RoleManage_item grid-col-5">
              <label htmlFor=""></label>
              <div className="ModelAvatar-RoleManage_item-checkbox">
                <Button
                  buttonStyle="btn--gray--solid"
                  buttonSize="btn--large"
                  style={{ marginRight: '16px' }}
                  onClick={() => dispatch(setModalRole(false))}
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

export default ModalSetupRole;
