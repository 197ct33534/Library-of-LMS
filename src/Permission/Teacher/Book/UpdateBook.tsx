import { Collapse, Input } from 'antd';
import { useFormik } from 'formik';
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../Common/Button';
import TitleHeader from '../../../components/TitleHeader';
import { teacherSelector } from '../teacherSelector';
import { setModalSucess, setTopicList, setUpdatebook } from '../teacherSlice';
import box from '../../../Assets/images/box.png';
import { Link, useNavigate } from 'react-router-dom';
import Success from '../../../Common/Success';
import { CollapseChilren } from './ListSubject';
import { setIsNotifyRemove } from '../../../Redux/commonSlice';
const TopicList = () => {
  const { Panel } = Collapse;

  const formRef = useRef<HTMLFormElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const collapseRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();
  const TopicList = useSelector(teacherSelector).TopicList;
  const handleAddField = () => {
    if (formRef.current) {
      formRef.current.style.display = 'block';
    }
    if (TopicList.length === 0 && divRef.current) {
      divRef.current.style.display = 'none';
    }
  };
  const handleRemoveField = () => {
    if (formRef.current) {
      formRef.current.style.display = 'none';
    }
    if (TopicList.length === 0 && divRef.current) {
      divRef.current.style.display = 'flex';
    }
  };
  const formik1 = useFormik({
    initialValues: {
      label: '',
    },
    onSubmit: (value) => {
      console.log(value);

      handleRemoveField();
      dispatch(setTopicList(value.label));
      value.label = '';
    },
  });
  const navigation = useNavigate();
  const handleChangeSelections = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const text = e.target.value;
    switch (text) {
      case 'Chỉnh sửa':
        navigation('/book/form');

        break;
      case 'Xoá':
        dispatch(setIsNotifyRemove(true));
        break;
      case 'Sao chép':
        const parent = e.target.parentNode;
        if (parent) {
          const parent2 = parent.parentNode;
          if (parent2) {
            const parent3 = parent.parentNode;
            if (parent3) {
              const child = parent3 as HTMLDivElement;
              if (child) {
                const parent4 = child.parentNode?.cloneNode(true);

                if (parent4) {
                  (child.parentNode as HTMLDivElement).after(parent4);
                }
              }
            }
          }
        }

        break;
      default:
        break;
    }
  };
  return (
    <div className="book">
      <form
        className="UpdateBook-addField"
        onSubmit={formik1.handleSubmit}
        ref={formRef}
      >
        <div className="UpdateBook-addField_filed">
          <Input.TextArea
            placeholder="Nhập tiêu đề của chủ đề mới"
            name="label"
            value={formik1.values.label}
            onChange={formik1.handleChange}
            style={{ width: '100%', marginLeft: '0' }}
          />
        </div>
        <div className="UpdateBook-addField_btn">
          <span onClick={() => handleRemoveField()}>Hủy</span>
          <Button
            buttonSize="btn--small"
            buttonStyle="btn--primary--solid"
            type="submit"
          >
            Lưu
          </Button>
        </div>
      </form>

      {TopicList.length === 0 ? (
        <div className="TopicList" ref={divRef}>
          <img src={box} alt="" />
          <h1>Chưa có chủ đề nào.</h1>
          <p>Thêm chủ đề giảng dạy mới cho môn học </p>
          <Button
            buttonStyle="btn--primary--solid"
            buttonSize="btn--small"
            onClick={() => handleAddField()}
          >
            + Thêm chủ đề
          </Button>
        </div>
      ) : (
        <>
          <div ref={collapseRef}>
            <Collapse
              accordion
              className="NoColor primary"
              expandIconPosition="right"
              expandIcon={() => {
                return (
                  <select
                    onChange={(e) => handleChangeSelections(e)}
                    className="SelectHidden2"
                    value="&#8942;"
                  >
                    <option value="&#8942;">&#8942;</option>

                    <option value="Chỉnh sửa">Chỉnh sửa</option>
                    <option value="Sao chép">Sao chép</option>
                    <option value="Xoá">Xoá</option>
                  </select>
                );
              }}
            >
              {TopicList.map((topic, idx) => (
                <Panel header={topic} key={idx}>
                  <Collapse
                    className="NoColor"
                    defaultActiveKey="1"
                    expandIcon={({ isActive }) => {
                      return isActive ? (
                        <i className="bx bx-minus accordionPlus"></i>
                      ) : (
                        <i className="bx bx-plus accordionPlus"></i>
                      );
                    }}
                  >
                    <Panel
                      header="Giới thiệu về thương mại điện tử trong những năm gần đây"
                      key="1"
                    >
                      <CollapseChilren />

                      <Button
                        style={{ marginTop: '24px' }}
                        buttonSize="btn--small"
                        buttonStyle="btn--primary--outline"
                      >
                        + Thêm bài giảng
                      </Button>
                    </Panel>
                    <Panel
                      header="Thương mại điện tử đã thay đổi sự phát triển của nền kinh tế thế giới"
                      key="2"
                    >
                      <CollapseChilren />
                      <Button
                        style={{ marginTop: '24px' }}
                        buttonSize="btn--small"
                        buttonStyle="btn--primary--outline"
                      >
                        + Thêm bài giảng
                      </Button>
                    </Panel>
                  </Collapse>
                </Panel>
              ))}
            </Collapse>
          </div>

          <Button
            buttonSize="btn--small"
            buttonStyle="btn--primary--outline"
            onClick={() => handleAddField()}
          >
            + Thêm mô tả
          </Button>
        </>
      )}
    </div>
  );
};
const SubjectOverview = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
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
  );
};

const UpdateBook = () => {
  const dispatch = useDispatch();
  const state = useSelector(teacherSelector).updatebook;

  const navigation = useNavigate();
  const modalSucess = useSelector(teacherSelector).modalSucess;
  const handleSave = () => {
    dispatch(setModalSucess(true));
    setTimeout(() => {
      dispatch(setModalSucess(false));
      navigation('/book/Subject/detailSubject');
    }, 3000);
  };

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
      {state ? <TopicList /> : <SubjectOverview />}
    </>
  );
};

export default UpdateBook;
