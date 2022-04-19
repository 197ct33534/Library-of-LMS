import { Input } from 'antd';
import { useFormik } from 'formik';
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../Common/Button';
import TitleHeader from '../../../components/TitleHeader';
import { teacherSelector } from '../teacherSelector';
import { setModalSucess, setUpdatebook } from '../teacherSlice';
import parse from 'html-react-parser';
import { Link, useNavigate } from 'react-router-dom';
import Success from '../../../Common/Success';
const UpdateBook = () => {
  const dispatch = useDispatch();
  const state = useSelector(teacherSelector).updatebook;
  const formRef = useRef<HTMLFormElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const navigation = useNavigate();
  const modalSucess = useSelector(teacherSelector).modalSucess;
  const handleSave = () => {
    dispatch(setModalSucess(true));
    setTimeout(() => {
      dispatch(setModalSucess(false));
      navigation('/book/Subject/detailSubject');
    }, 3000);
  };
  const handleAddField = () => {
    if (formRef.current) {
      formRef.current.style.display = 'block';
    }
  };
  const handleRemoveField = () => {
    if (formRef.current) {
      formRef.current.style.display = 'none';
    }
  };
  const formik = useFormik({
    initialValues: {
      label: '',
      content: '',
    },
    onSubmit: (value) => {
      console.log(value);
      if (divRef.current && formRef.current) {
        const newDiv = document.createElement('div');

        newDiv.innerHTML = `<strong>${value.label}</strong>
        <textarea 
          class="UpdateBook-item_right"
          value=${value.content}
        >${value.content}</textarea>`;
        newDiv.className = 'UpdateBook-item grid-col-8';

        divRef.current.insertBefore(newDiv, formRef.current);
      }

      handleRemoveField();
    },
  });
  return (
    <>
      {modalSucess && (
        <Success text="Gửi lên thành công và đang chờ duyệt..." />
      )}
      <TitleHeader
        titlePrimary="Thương mại điện tử"
        title={['Danh sách môn giảng dạy']}
      />
      <div className="info-button">
        <div className="info-change">
          <div
            className={`info-change_button ${state ? '' : 'active'}`}
            onClick={() => dispatch(setUpdatebook(false))}
          >
            Tổng quan môn học
          </div>
          <div
            className={`info-change_button ${state ? 'active' : ''}`}
            onClick={() => dispatch(setUpdatebook(true))}
          >
            Danh sách chủ đề
          </div>
        </div>
        <div className="info-changeRight UpdateBook-btn">
          <Link to="/book/Subject/detailSubject">
            <Button buttonSize="btn--medium" buttonStyle="btn--gray--solid">
              Huỷ
            </Button>
          </Link>

          <Button
            buttonSize="btn--medium"
            buttonStyle="btn--primary--solid"
            onClick={handleSave}
          >
            Lưu và gửi phê duyệt
          </Button>
        </div>
      </div>
      <div className="book" ref={divRef}>
        <div className="UpdateBook-item grid-col-8">
          <strong>Mã môn học:</strong>
          <span className="UpdateBook-item_right">#DLK6</span>
        </div>
        <div className="UpdateBook-item grid-col-8">
          <strong>Môn học:</strong>
          <span className="UpdateBook-item_right">Thương mại điện tử</span>
        </div>
        <div className="UpdateBook-item grid-col-8">
          <strong>Giảng viên:</strong>
          <span className="UpdateBook-item_right">Hoa Hoa</span>
        </div>
        <div className="UpdateBook-item grid-col-8">
          <strong>Mô tả:</strong>
          <Input.TextArea
            className="UpdateBook-item_right"
            value="Thương mại điện tử, hay còn gọi là e-commerce, e-comm hay EC, là sự mua bán sản phẩm hay dịch vụ trên các hệ thống điện tử như Internet và các mạng máy tính."
          />
        </div>
        <form
          className="UpdateBook-addField"
          onSubmit={formik.handleSubmit}
          ref={formRef}
        >
          <div className="UpdateBook-addField_filed">
            <Input.TextArea
              placeholder="Tiêu đề"
              name="label"
              value={formik.values.label}
              onChange={formik.handleChange}
            />
            <Input.TextArea
              placeholder="Nội dung chi tiết"
              name="content"
              value={formik.values.content}
              onChange={formik.handleChange}
            />
          </div>
          <div className="UpdateBook-addField_btn">
            <span onClick={handleRemoveField}>Hủy</span>
            <Button
              buttonSize="btn--small"
              buttonStyle="btn--primary--solid"
              type="submit"
            >
              Lưu
            </Button>
          </div>
        </form>
        <Button
          buttonSize="btn--small"
          buttonStyle="btn--lightPrimary--solid"
          onClick={handleAddField}
        >
          + Thêm mô tả
        </Button>
      </div>
    </>
  );
};

export default UpdateBook;
