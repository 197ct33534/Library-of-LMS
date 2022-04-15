import { Input } from 'antd';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Common/Button.tsx';

import Editor from './Bell/Editor.js';
import { setModalComment } from './Setting/settingSlice';
const Comment = () => {
  const [content, setContent] = useState('');
  const [editorLoaded, setEditorLoaded] = useState(false);
  useEffect(() => {
    setEditorLoaded(true);
  }, []);
  const formik = useFormik({
    initialValues: {
      title: 'Chủ đề ...',
      content: content,
    },
    onSubmit: (value) => {
      console.log('data submit ', { ...value, content: content });
    },
  });

  const dispath = useDispatch();
  const handleSave = () => {
    dispath(setModalComment(true));

    setTimeout(() => {
      dispath(setModalComment(false));
    }, 3000);
  };

  return (
    <>
      <div className="book Comment-warp">
        <div className="Comment">
          <h1 className="title">Bạn có thắc mắc?</h1>
          <h3>Chúng tôi sẽ phản hồi bạn trong thời gian sớm nhất có thể.</h3>
          <h6>
            Các thắc mắc sẽ được gửi vào mail của admin cụ thể là mail của đội
            phát triển hệ thống của Alta Software nhằm hỗ trợ và giải đáp kịp
            thời.
          </h6>
          <form onSubmit={formik.handleSubmit}>
            <Input
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
            />
            <Editor
              name="content"
              onChange={(content) => setContent(content)}
              editorLoaded={editorLoaded}
            />
            <Button
              buttonStyle="btn--primary--solid"
              butttonSize="btn--large"
              type="button"
              onClick={() => handleSave()}
            >
              Gửi
            </Button>
          </form>
        </div>
        <div className="Comment-rectangle"></div>
        <div className="Comment-info">
          <h1>Thông tin</h1>
          <div className="grid-col-6">
            <i className="bx bx-location-plus"></i>
            <div className="Comment-info-item">
              <ul>
                <li>
                  <strong>CN1:</strong>86/33 Âu Cơ, Phường 9, Quận Tân Bình
                </li>
                <li>
                  <strong>CN2:</strong>86/33 Âu Cơ, Phường 9, Quận Tân Bình
                </li>
                <strong>CN3:</strong>86/33 Âu Cơ, Phường 9, Quận Tân Bình
                <li></li>
              </ul>
            </div>
            <i className="bx bx-phone"></i>
            <div className="Comment-info-item">
              <ul>
                <li>(028) 2243 6888</li>
                <li>(028) 6268 1426</li>
              </ul>
            </div>
            <i className="bx bx-envelope"></i>
            <div className="Comment-info-item">
              <ul>
                <li>media_infor@alta.com.vn</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;
