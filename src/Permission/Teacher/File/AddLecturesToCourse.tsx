import { Checkbox, Input, Select } from 'antd';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../../Common/Button';
import Dropdown from '../../../components/Dropdown';
import { setModalAddLeactures } from '../teacherSlice';

import TableFile from './TableFile';

const AddLecturesToCourse = () => {
  const dispatch = useDispatch();

  const { Option } = Select;
  function handleChange(value: string) {
    console.log(`selected ${value}`);
  }
  const [state, setState] = useState({
    nameSubject: '',
    ClassChecked: false,
    chooseNameClass: '',
    chooseNameSubject: '',
    title: '',
  });
  const formik = useFormik({
    initialValues: {
      nameSubject: '',
      ClassChecked: false,
      chooseNameClass: '',
      chooseNameSubject: '',
      title: '',
    },
    onSubmit: (value) => {
      console.log('data submit ', value);
    },
  });
  return (
    <>
      <div className="ModelAvatar">
        <form onSubmit={formik.handleSubmit} className="ModalAssigment">
          <h1>Thêm bài giảng vào môn học</h1>
          <TableFile />
          <div
            className="grid-col-7 ModalAssigment-warp"
            style={{ marginBottom: '16px' }}
          >
            <strong>Môn học:</strong>
            <span>
              <Input
                name="nameSubject"
                value={formik.values.nameSubject}
                onChange={formik.handleChange}
              />
            </span>
            <strong>
              <Checkbox
                name="ClassChecked"
                value={formik.values.ClassChecked}
                onChange={formik.handleChange}
              />
              Chọn lớp học:
            </strong>
            <span>
              <Select
                onChange={(value) => {
                  formik.setFieldValue('chooseNameClass', value);
                }}
                style={{ width: '100%' }}
              >
                <Option value="Lớp học cơ bản">Lớp học cơ bản</Option>
                <Option value="Lớp học nâng cao">Lớp học nâng cao</Option>

                <Option value="Lớp học bổ túc văn hóa">
                  Lớp học bổ túc văn hóa
                </Option>
              </Select>
            </span>
            <strong>Chọn chủ đề:</strong>
            <span>
              <Select
                onChange={(value) => {
                  formik.setFieldValue('chooseNameSubject', value);
                }}
                style={{ width: '100%' }}
              >
                <Option value="Chủ đề tự chọn"> Chủ đề tự chọn</Option>
                <Option value="Chủ đề nâng cao"> Chủ đề nâng cao</Option>

                <Option value="Chủ đề bổ túc nâng cao">
                  Chủ đề bổ túc nâng cao
                </Option>
              </Select>
            </span>
            <strong>Tiêu đề bài giảng</strong>
            <span>
              <Input
                name="title"
                value={formik.values.title}
                onChange={formik.handleChange}
              />
            </span>
          </div>
          <div className="ModalAssigment-warp_controler">
            <Button
              buttonStyle="btn--gray--solid"
              buttonSize="btn--large"
              type="submit"
              onClick={() => dispatch(setModalAddLeactures(false))}
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

export default AddLecturesToCourse;
