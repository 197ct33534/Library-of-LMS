import { Select } from 'antd';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../../Common/Button';
import { setModalUpFile } from '../teacherSlice';

const ModalBankUp = () => {
  const { Option } = Select;
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      groupSubjectName: 'Văn hoá - Xã hội',
      nameSubject: 'Thương mại điện tử',
    },
    onSubmit: (value) => {
      console.log('data submitted', value);
    },
  });
  return (
    <>
      <div className="ModelAvatar">
        <form onSubmit={formik.handleSubmit} className="ModalAssigment">
          <h1>Tải lên file </h1>
          <div className="grid-col-7 ModalAssigment-warp">
            <strong>Tệp đính kèm:</strong>
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
                Chưa có tệp nào được chọn.
              </i>
            </span>
            <strong>Tải file mẫu:</strong>
            <span
              style={{
                color: '#FF7506',
                display: 'flex',
                alignItems: 'center',
                fontStyle: 'italic',
              }}
            >
              <i
                className="bx bx-download"
                style={{
                  color: '#FF7506',
                  fontSize: '22px',

                  marginRight: '12px',
                }}
              ></i>
              [Tải xuống file mẫu]
            </span>
            <strong>Chọn tổ - bộ môn:</strong>
            <span>
              <Select
                defaultValue={formik.values.groupSubjectName}
                onChange={(value) =>
                  formik.setFieldValue('groupSubjectName', value)
                }
                style={{ width: '100%' }}
              >
                <Option value="Khoa học - Tự nhiên">Khoa học - Tự nhiên</Option>
                <Option value="Văn hoá - Xã hội">Văn hoá - Xã hội</Option>

                <Option value="Sample">Sample</Option>
              </Select>
            </span>
            <strong>Chọn môn học:</strong>
            <span>
              <Select
                defaultValue={formik.values.nameSubject}
                onChange={(value) => formik.setFieldValue('nameSubject', value)}
                style={{ width: '100%' }}
              >
                <Option value="Thương mại điện tử">Thương mại điện tử</Option>
                <Option value="Sinh học">Sinh học</Option>

                <Option value="Sample">Sample</Option>
              </Select>
            </span>
            <strong>Được tạo bởi:</strong>
            <span>Gv.Trần Trung Nghĩa</span>
          </div>
          <div className="ModalAssigment-warp_controler">
            <Button
              buttonStyle="btn--gray--solid"
              buttonSize="btn--large"
              type="submit"
              onClick={() => dispatch(setModalUpFile(false))}
            >
              Huỷ
            </Button>
            <Button
              buttonStyle="btn--primary--solid"
              buttonSize="btn--large"
              type="submit"
            >
              Tải lên
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ModalBankUp;
