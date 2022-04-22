import { Input } from 'antd';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../../Common/Button';
import { setUpFile } from '../teacherSlice';

const ModalUpFile = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      saveName: '',
      groupSubjectName: '',
      subjectName: '',
      createdBy: '',
    },
    onSubmit: (value) => {
      console.log('data submit ', value);
    },
  });
  return (
    <>
      <div className="ModelAvatar">
        <form onSubmit={formik.handleSubmit} className="ModalAssigment">
          <h1>Tải tệp lên</h1>
          <div className="grid-col-7 ModalAssigment-warp">
            <strong>Chọn lớp học:</strong>
            <span>
              <Button
                buttonSize="btn--small"
                buttonStyle="btn--lightPrimary--solid"
              >
                <i
                  className="bx bx-upload"
                  style={{
                    color: '#FF7506',
                    paddingRight: '8px',
                    fontWeight: '600',
                  }}
                ></i>
                Tải tệp lên
              </Button>
              <i
                style={{
                  paddingLeft: '8px',
                }}
              >
                Chọn tệp để tải lên
              </i>
            </span>
            <strong>Lưu thành:</strong>
            <span>
              <Input
                name="saveName"
                value={formik.values.saveName}
                onChange={formik.handleChange}
              />
            </span>
            <strong>Chọn tổ bộ môn:</strong>
            <span>
              <Input
                name="groupSubjectName"
                value={formik.values.groupSubjectName}
                onChange={formik.handleChange}
              />
            </span>
            <strong>Chọn môn học:</strong>
            <span>
              <Input
                name="subjectName"
                value={formik.values.subjectName}
                onChange={formik.handleChange}
              />
            </span>
            <strong>Được tạo bởi</strong>
            <span>
              <Input
                name="createdBy"
                value={formik.values.createdBy}
                onChange={formik.handleChange}
              />
            </span>
          </div>
          <div className="ModalAssigment-warp_controler">
            <Button
              buttonStyle="btn--gray--solid"
              buttonSize="btn--large"
              type="submit"
              onClick={() => dispatch(setUpFile(false))}
            >
              Huỷ
            </Button>
            <Button
              buttonStyle="btn--primary--solid"
              buttonSize="btn--large"
              type="submit"
            >
              Lưu
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ModalUpFile;
