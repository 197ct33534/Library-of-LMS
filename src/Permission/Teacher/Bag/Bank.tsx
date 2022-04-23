import { Collapse, Input, Radio, Select, Space, Table } from 'antd';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../Common/Button';
import Search from '../../../components/Search';
import TitleHeader from '../../../components/TitleHeader';
import BankFire from '../../../firebase/Bank';
import { teacherSelector } from '../teacherSelector';
import { setFakeDataExam, setModalUpFile } from '../teacherSlice';
import eye from '../../../Assets/images/eye.png';
import { setModalRemoveFile } from '../teacherSlice';
import { setPageSize } from '../../../Redux/commonSlice';
import { MyPagination } from '../../../Pages/Book/ListDocument';
import Modal from '../../../Common/Modal';
import ModalBankUp from './ModalBankUp';
import { useNavigate } from 'react-router-dom';
interface propQuestion {
  record: any;
}
const Question = (props: propQuestion) => {
  const { record } = props;
  const {
    Question,
    answerA,
    answerB,
    answerC,
    answerD,
    radioResult,
    numQuestion,
  } = record;
  const formik = useFormik({
    initialValues: {
      question: Question,
      answerA: answerA,
      answerB: answerB,
      answerC: answerC,
      answerD: answerD,
      radioResult: radioResult,
    },
    onSubmit: (value) => {
      console.log('data submitted', value);
    },
  });
  return (
    <>
      <form className="question" onSubmit={formik.handleSubmit}>
        <div className="grid-col-6">
          <strong>{numQuestion}</strong>
          <div className="question-item">
            <Input
              name="question"
              value={formik.values.question}
              onChange={formik.handleChange}
            />
          </div>
          <strong>Câu trả lời:</strong>
          <div className="question-item">
            <Radio.Group
              value={formik.values.radioResult}
              onChange={(e) =>
                formik.setFieldValue('radioResult', e.target.value)
              }
            >
              <Space direction="vertical">
                <Radio value="A">
                  <Input
                    name="answerA"
                    value={formik.values.answerA}
                    onChange={formik.handleChange}
                  />
                </Radio>
                <Radio value="B">
                  <Input
                    name="answerB"
                    value={formik.values.answerB}
                    onChange={formik.handleChange}
                  />
                </Radio>
                <Radio value="C">
                  <Input
                    name="answerC"
                    value={formik.values.answerC}
                    onChange={formik.handleChange}
                  />
                </Radio>
                <Radio value="D">
                  <Input
                    name="answerD"
                    value={formik.values.answerD}
                    onChange={formik.handleChange}
                  />
                </Radio>
              </Space>
            </Radio.Group>
          </div>
        </div>
        <div className="question-btn">
          <Button buttonSize="btn--large" buttonStyle="btn--gray--solid">
            Huỷ
          </Button>
          <Button
            buttonSize="btn--large"
            buttonStyle="btn--primary--solid"
            type="submit"
          >
            Lưu
          </Button>
        </div>
      </form>
    </>
  );
};
const SeeQuestion = (props: propQuestion) => {
  const { record } = props;
  const {
    Question,
    answerA,
    answerB,
    answerC,
    answerD,
    radioResult,
    numQuestion,
  } = record;
  return (
    <>
      <div className="SeeQuestion">
        <div className="SeeQuestion-question">
          {`${numQuestion}:  ${Question}`}
        </div>
        <div className="SeeQuestion-answer">A.{answerA}</div>
        <div className="SeeQuestion-answer">B.{answerB}</div>
        <div className="SeeQuestion-answer">C.{answerC}</div>
        <div className="SeeQuestion-answer">D.{answerD}</div>
        <div className="SeeQuestion-question">ĐÁP ÁN: {radioResult}</div>
      </div>
    </>
  );
};
const Bank = () => {
  const { Panel } = Collapse;
  const { Option } = Select;
  const groupSubjectName = [
    'Kinh tế đối ngoại',
    'Công nghệ thông tin',
    'Quan hệ quốc tế',
  ];
  const subjectName = [
    'Thương mại điện tử',
    'Toán nâng cao',
    'Triết học đời sống',
  ];
  const radioLV = ['Thấp', 'Trung bình', 'Cao'];
  const dispatch = useDispatch();
  const teacher = useSelector(teacherSelector);
  const data = teacher.fakedataExam;
  const modalRemoveFile = teacher.modalRemoveFile;
  const [list, setList] = useState(data);
  const [dataClick, setDataClick] = useState({ type: 'see', data: null });
  const navigation = useNavigate();
  const formik = useFormik({
    initialValues: {
      groupSubjectName: 'Công nghệ thông tin',
      subjectName: 'Thương mại điện tử',
      radioLV: 'Thấp',
    },
    onSubmit: (value) => {
      const temp = data.filter(
        (item: {
          radioLV: string;
          subjectName: string;
          groupSubjectName: string;
        }) => {
          return (
            item.radioLV === value.radioLV &&
            item.subjectName === value.subjectName &&
            item.groupSubjectName === value.groupSubjectName
          );
        }
      );
      setList(temp);
    },
    onReset: () => {
      setList(data);
    },
  });
  const [current, setCurrent] = useState(1);
  const getData = (current: number, pageSize: number) => {
    return list.slice((current - 1) * pageSize, current * pageSize);
  };
  const pageSize = 3;
  //get data
  useEffect(() => {
    dispatch(setPageSize(3));
    return () => {
      dispatch(setPageSize(8));
    };
  }, [dispatch]);
  useEffect(() => {
    const getlistDocuments = async () => {
      const datas = await BankFire.getAllBank();
      const dataArray = datas.docs.map((data) => {
        const result = data.data();
        result.key = data.id;
        return result;
      });
      dispatch(setFakeDataExam(dataArray));
      setList(dataArray as []);
    };
    if (list.length <= 1) {
      console.log('rend lan 1 vao redux');

      getlistDocuments();
    }
  }, [dispatch, list]);
  const columns = [
    {
      title: 'STT',
      dataIndex: 'DocumentName',
      key: 'DocumentName',
      render: (text: string) => {
        return <span>{text.split('-')[1]}</span>;
      },
    },
    {
      title: 'Mã câu hỏi',
      dataIndex: 'idQuestion',
      key: 'idQuestion',
      sorter: (a: any, b: any) => a.idQuestion.length - b.idQuestion.length,
    },
    {
      title: 'Độ khó',
      dataIndex: 'radioLV',
      key: 'radioLV',
      sorter: (a: any, b: any) => a.radioLV.length - b.radioLV.length,
    },
    {
      title: 'Được tạo bởi',
      dataIndex: 'Lecturers',
      key: 'Lecturers',
      render: (text: string, record: any) => {
        return (
          <span>
            {text}
            <br /> {record.SentDate}
          </span>
        );
      },
    },
    {
      title: 'Lần cuối sửa đổi',
      dataIndex: 'SentDate',
      key: 'SentDate',
      render: (text: string, record: any) => {
        return (
          <span>
            {record.Lecturers}
            <br />
            {text}
          </span>
        );
      },
    },

    {
      title: '',
      key: 'action',

      render: (record: any) => (
        <span className="warpIconBox">
          <img
            src={eye}
            alt=""
            style={{ cursor: 'pointer' }}
            onClick={() => setDataClick({ type: 'see', data: record })}
          />
          <i
            className="bx bx-edit iconBox"
            onClick={() => setDataClick({ type: 'edit', data: record })}
          ></i>
          <i
            className="bx bx-trash iconBox"
            onClick={() => dispatch(setModalRemoveFile(true))}
          ></i>
        </span>
      ),
    },
  ];
  return (
    <>
      {modalRemoveFile && (
        <Modal
          textSucces="Xác nhận"
          textCancel="Huỷ"
          funcCancel={setModalRemoveFile(false)}
          title="Xóa câu hỏi"
          content="Xác nhận muốn xoá câu hỏi này và toàn bộ thông tin bên trong? Sau khi xoá sẽ không thể hoàn tác."
        />
      )}
      {teacher.modalUpFile && <ModalBankUp />}
      <TitleHeader titlePrimary="Ngân hàng câu hỏi trắc nghiệm" />
      <div className="FileTemplate-control">
        <Button
          buttonSize="btn--large"
          buttonStyle="btn--primary--outline"
          onClick={() => dispatch(setModalUpFile(true))}
        >
          <i
            className="bx bx-upload"
            style={{
              color: '#FF7506',
              paddingRight: '8px',
              fontWeight: '600',
            }}
          ></i>
          Tải lên
        </Button>
        <Button
          buttonSize="btn--large"
          buttonStyle="btn--primary--solid"
          onClick={() => navigation('/bag/addExam')}
        >
          Tạo mới
        </Button>
      </div>
      <div className="book">
        <div className="bank ">
          <div className="bank-left">
            <h1>Bộ lọc câu hỏi</h1>
            <form
              onSubmit={formik.handleSubmit}
              className="bank-left_filter filter"
            >
              <div className="filter-header">Lọc theo dạng</div>
              <div className="filter-body">
                <div className="filter-item">
                  <label htmlFor="">Tổ bộ môn</label>
                  <Select
                    defaultValue={formik.values.groupSubjectName}
                    onChange={(value) => {
                      formik.setFieldValue('groupSubjectName', value);
                    }}
                  >
                    {groupSubjectName.map((item) => (
                      <Option value={item} key={item}>
                        {item}
                      </Option>
                    ))}
                  </Select>
                </div>
                <div className="filter-item">
                  <label htmlFor="">Môn học</label>
                  <Select
                    defaultValue={formik.values.subjectName}
                    onChange={(value) => {
                      formik.setFieldValue('subjectName', value);
                    }}
                  >
                    {subjectName.map((item) => (
                      <Option value={item} key={item}>
                        {item}
                      </Option>
                    ))}
                  </Select>
                </div>
                <div className="filter-item">
                  <label htmlFor="">Độ khó</label>
                  <Radio.Group
                    options={radioLV}
                    onChange={(e) => {
                      formik.setFieldValue('radioLV', e.target.value);
                    }}
                    value={formik.values.radioLV}
                  />
                </div>
                <div className="filter-btn">
                  <Button
                    buttonSize="btn--s"
                    buttonStyle="btn--primary--outline"
                    onClick={formik.handleReset}
                  >
                    Hoàn tác
                  </Button>
                  <Button
                    buttonSize="btn--s"
                    buttonStyle="btn--lightPrimary--solid"
                  >
                    Lọc
                  </Button>
                </div>
              </div>
            </form>
          </div>
          <div className="bank-right">
            <div className="bank-right_header">
              <h1>Danh sách đề thi</h1>
              <Search />
            </div>
            <div className="bank-right_table">
              <Table
                columns={columns}
                dataSource={getData(current, pageSize)}
                pagination={false}
              />
            </div>
            <div className="bank-right_pagination">
              <MyPagination
                total={list.length}
                current={current}
                onChange={setCurrent}
                pageSize={pageSize}
              />
            </div>
            <div className="bank-right_collapse">
              <Collapse
                accordion
                expandIconPosition="right"
                expandIcon={({ isActive }) => {
                  return isActive ? (
                    <i
                      className="bx bx-chevron-up accordionPlus"
                      style={{ color: '#fff' }}
                    ></i>
                  ) : (
                    <i
                      className="bx bx-chevron-down accordionPlus"
                      style={{ color: '#fff' }}
                    ></i>
                  );
                }}
              >
                <Panel header="Nội dung câu hỏi" key="1">
                  {dataClick.data !== null && dataClick.type === 'see' && (
                    <SeeQuestion record={dataClick.data} />
                  )}
                  {dataClick.data !== null && dataClick.type === 'edit' && (
                    <Question record={dataClick.data} />
                  )}
                </Panel>
              </Collapse>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bank;
