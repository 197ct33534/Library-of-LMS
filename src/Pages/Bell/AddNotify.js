import React, { memo, useEffect, useState } from 'react';
import { Checkbox, Input, Select, Form } from 'antd';
import Editor from './Editor.js';

import { useDispatch } from 'react-redux';
import { setAddNotify } from './bellSlice.tsx';
import Button from '../../Common/Button.tsx';
import { useFormik } from 'formik';
const { Option } = Select;
const AddNotify = () => {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState('');
  const children = [];
  for (let i = 0; i < 10; i++) {
    children.push(<Option key={i}>Nguyen van {i}</Option>);
  }
  const formik = useFormik({
    initialValues: {
      title: '',
      content: '',
      choseClass: '',
      choseMultiClass: [],
      choseStudent: false,
    },
    onSubmit: (values) => {
      console.log('data submit:', { ...values, content: data });
    },
  });
  useEffect(() => {
    setEditorLoaded(true);
  }, []);
  const style = {
    width: '100%',

    borderRadius: '8px',
    marginBottom: '18px',
    height: '40px',
  };
  const dispath = useDispatch();

  return (
    <>
      <form className="addNotify" onSubmit={formik.handleSubmit}>
        <div className="addNotify-header">
          <h1>Gửi thông báo mới</h1>
          <i
            className="bx bx-x"
            onClick={() => dispath(setAddNotify(false))}
          ></i>
        </div>
        <div className="addNotify-body">
          <h4>Chọn lớp giảng dạy</h4>
          <Select
            style={style}
            placeholder="Tất cả các lớp"
            name="choseClass"
            onChange={(values) => (formik.values.choseClass = values)}
          >
            <Option value="Lớp nâng cao">Lớp nâng cao</Option>
            <Option value="Lớp căn bản">Lớp căn bản</Option>
            <Option value="Sample">Sample</Option>
          </Select>

          <Checkbox
            name="choseStudent"
            onChange={(e) => {
              formik.values.choseStudent = e.target.checked;
            }}
          >
            Chọn học viên
          </Checkbox>

          <Select
            mode="multiple"
            name="choseMultiClass"
            onChange={(values) => (formik.values.choseMultiClass = values)}
            style={style}
            placeholder="Please select"
          >
            {children}
          </Select>

          <Input
            placeholder="Chủ đề"
            style={style}
            name="title"
            onChange={formik.handleChange}
            value={formik.values.title}
          />

          <Editor
            name="content"
            onChange={(data) => {
              setData(data);
            }}
            editorLoaded={editorLoaded}
          />

          <Button
            buttonSize="btn--large"
            buttonStyle="btn--primary-solid"
            style={{ margin: '20px 0', transform: 'translateX(100%)' }}
            type="submit"
          >
            Gửi
          </Button>
        </div>
      </form>
    </>
  );
};

export default memo(AddNotify);
