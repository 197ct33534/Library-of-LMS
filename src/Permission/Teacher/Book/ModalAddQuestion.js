import { Input } from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../../Common/Button';
import Editor from '../../../Pages/Bell/Editor';
import { setModalAddQuestion } from '../teacherSlice';

const ModalAddQuestion = () => {
  const dispatch = useDispatch();

  const [editorLoaded, setEditorLoaded] = useState(false);
  const [content, setContent] = useState('');
  useEffect(() => {
    setEditorLoaded(true);
  }, []);
  const formik = useFormik({
    initialValues: {
      title: '',
      classSelect: '',
      chudeSelect: '',
      slideSelect: '',
    },
    onSubmit: (value) => {
      console.log('data submit', { ...value, content });
    },
  });
  return (
    <>
      <div className="ModelAvatar">
        <form onSubmit={formik.handleSubmit} className="ModalAssigment">
          <h1>Tạo câu hỏi cho học viên</h1>
          <div
            className="grid-col-7 ModalAssigment-warp"
            style={{ marginBottom: '16px' }}
          >
            <strong>Tiêu đề (tóm tắt):</strong>
            <span>
              <Input
                name="title"
                onChange={formik.handleChange}
                value={formik.values.title}
              />
            </span>
            <strong>Chi tiết (tuỳ chọn):</strong>
            <span className="ModalAssigment-warp-checkeditor">
              <Editor
                name="content"
                onChange={(content) => setContent(content)}
                editorLoaded={editorLoaded}
              />
            </span>
          </div>

          <div className="grid-col-7 ModalAssigment-warp">
            <strong>Lớp giảng dạy:</strong>
            <span>
              <select
                placeholder="Please select"
                name="classSelect"
                defaultValue={formik.values.classSelect}
                onChange={formik.handleChange}
              >
                <option value="Lớp nâng cao">Lớp nâng cao</option>
                <option value="Lớp căn bản">Lớp căn bản</option>
                <option value="Sample">Sample</option>
              </select>
            </span>
            <strong>
              <Checkbox>
                <span>Chủ đề</span>
              </Checkbox>
            </strong>
            <span>
              <select
                placeholder="Please select"
                name="chudeSelect"
                defaultValue={formik.values.chudeSelect}
                onChange={formik.handleChange}
              >
                <option value="Tuỳ chọn chủ đề">Tuỳ chọn chủ đề</option>
                <option value="Thương mại điện tử">Thương mại điện tử</option>
                <option value="Giới thiệu chung về Thương mại Điện tử">
                  Giới thiệu chung về Thương mại Điện tử
                </option>
                <option value=" Sample">Sample</option>
              </select>
            </span>

            <strong>Tất cả lớp học</strong>
            <span>
              <select
                placeholder="Please select"
                name="slideSelect"
                defaultValue={formik.values.slideSelect}
                onChange={formik.handleChange}
              >
                <option value=" Tuỳ chọn bài giảng">Tuỳ chọn bài giảng</option>
                <option value="Giới thiệu về thương mại điện tử trong những năm gần đây">
                  Giới thiệu về thương mại điện tử trong những năm gần đây
                </option>
                <option value="Thương mại điện tử đã thay đổi sự phát triển của nền kinh tế thế giới">
                  Thương mại điện tử đã thay đổi sự phát triển của nền kinh tế
                  thế giới
                </option>
                <option value="Sample">Sample</option>
              </select>
            </span>
          </div>
          <div className="ModalAssigment-warp_controler">
            <Button
              buttonStyle="btn--gray--solid"
              buttonSize="btn--large"
              type="submit"
              onClick={() => dispatch(setModalAddQuestion(false))}
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

export default ModalAddQuestion;
