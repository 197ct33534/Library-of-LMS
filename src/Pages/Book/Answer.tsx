import React, { memo, useState } from 'react';
import Button from '../../Common/Button';
import Dropdown from '../../components/Dropdown';
import avatar from '../../Assets/images/avatarComment.png';
import { useDispatch, useSelector } from 'react-redux';
import { bookSelector } from './bookSelector';
import { useFormik } from 'formik';
import { setQuestion } from './bookSlice';
import parse from 'html-react-parser';
const Answer = () => {
  const dispatch = useDispatch();
  const [subjects, setSubjects] = useState('Tất cả môn học');
  const [time, setTime] = useState('Sắp xếp theo mới nhất');
  const [Qa, setQA] = useState('Tất cả tình trạng');
  const state = useSelector(bookSelector);
  const isQuestion = state.isQuestion;
  const formik = useFormik({
    initialValues: {
      titleQues: '',
      contentQuestion: '',
    },

    onSubmit: (values) => {
      console.log(values);
    },
  });
  let temp = '';
  for (let i = 0; i <= 10; i++) {
    temp += `<div className="QA-comments_item">
    <img src=${avatar} alt="" />
    <div className="QA-comments_item__Info">
      <h1>
        <span>Lor</span>
        <strong>Bài 5</strong>
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div>
        <p>
          <i className="bx bxs-heart"></i>
          <span>10</span>
        </p>
        <p>
          <i className="bx bx-comment"></i>
          <span>10</span>
        </p>
      </div>
    </div>
    <span className="QA-comments_item__date">6 ngày trước</span>
  </div>`;
  }
  return (
    <>
      {isQuestion ? (
        <form className="formQuestion" onSubmit={formik.handleSubmit}>
          <div className="formQuestion-item">
            <label htmlFor="titleQues">Tiêu đề câu hỏi</label>
            <input
              type="text"
              name="titleQues"
              value={formik.values.titleQues}
              onChange={formik.handleChange}
            />
          </div>
          <div className="formQuestion-item">
            <label htmlFor="contentQuestion">Nội dung</label>
            <textarea
              name="contentQuestion"
              value={formik.values.contentQuestion}
              onChange={formik.handleChange}
            />
          </div>
          <div className="formQuestion-btn">
            <Button
              buttonStyle="btn--primary--outline"
              buttonSize="btn--s"
              onClick={() => dispatch(setQuestion(false))}
            >
              Hủy
            </Button>
            <Button
              type="submit"
              buttonStyle="btn--primary--solid"
              buttonSize="btn--s"
            >
              Gửi
            </Button>
          </div>
        </form>
      ) : (
        <>
          <div className="controls">
            <div className="controls-select">
              <Dropdown
                selected={subjects}
                setSelected={setSubjects}
                options={[
                  'Thương mại điện tử',
                  'Nguyên lý kế toán',
                  'Hệ thống thông tin',
                  'Luật thương mại',
                  'Ngân hàng ',
                ]}
              />
              <Dropdown
                selected={time}
                setSelected={setTime}
                options={['Sắp xếp theo cũ nhất', 'Nhiều tương tác nhất']}
              />
              <Dropdown
                selected={Qa}
                setSelected={setQA}
                options={[
                  'Câu hỏi mới nhất',
                  'Câu hỏi cũ nhất',
                  'Câu hỏi được quan tâm nhất',
                ]}
              />
            </div>
            <div className="controls-button">
              <Button
                type="button"
                buttonStyle="btn--lightPrimary--solid"
                buttonSize="btn--small"
                style={{
                  fontWeight: '700',
                  fontFamily: 'Source Sans Pro',
                  fontSize: '16px',
                }}
                onClick={() => dispatch(setQuestion(true))}
              >
                Đặt câu hỏi
              </Button>
            </div>
          </div>
          <div className="QA-comments" id="QA-comments">
            <div className="grid-col-2">{parse(temp)}</div>
          </div>
        </>
      )}
    </>
  );
};

export default memo(Answer);
