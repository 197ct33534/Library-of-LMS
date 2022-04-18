import { Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../Common/Button';
import Dropdown from '../../components/Dropdown';
import TitleHeader from '../../components/TitleHeader';
// import Doc from '../../Assets/images/word.png';
// import Pptx from '../../Assets/images/pp.png';
// import Xlsx from '../../Assets/images/ex.png';
import Bag from '../../firebase/Bag';
import { setModelApproval, setModelCancelDocument } from '../Book/bookSlice';

import { bagSelector } from './bagSelector';
import { setDetailExam, setFakeDataBag } from './bagSlice';
import eye from '../../Assets/images/eye.png';
import { useNavigate } from 'react-router-dom';
import TablePagination from '../../components/TablePagination';
import { commonSelector } from '../../Redux/comonSelector';
import Search from '../../components/Search';
const BagTemplate = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const bag = useSelector(bagSelector);
  const list = bag.fakeDataBag;
  const [status, setStatus] = useState('Tất cả tình trạng');
  const [Year, setYear] = useState('2022-2023');
  const [subjects, setSubjects] = useState('Tất cả môn học');
  const [teacher, setTeacher] = useState('Tất cả giảng viên');
  const nameLecture = ['GV.Nguyễn Văn C', 'GV.Nguyễn Văn A', 'GV.Văn Thị B'];
  const nameSubject = [
    'Thương mại điện tử',
    'Nguyên lý kế toán',
    'Hệ thống thông tin',
    'Luật thương mại',
    'Ngân hàng ',
    'Toán Đại Số',
    'Toán Hình Học',
  ];
  const handleClickEye = (record: any) => {
    dispatch(setDetailExam(record));
    navigation('detail');
  };

  //get data
  useEffect(() => {
    const getlistDocuments = async () => {
      const datas = await Bag.getAllBag();
      const dataArray = datas.docs.map((data) => {
        const result = data.data();
        result.key = data.id;
        return result;
      });
      dispatch(setFakeDataBag(dataArray));
    };
    if (list.length <= 1) {
      console.log('rend lan 1 vao redux');

      getlistDocuments();
    }
  }, [dispatch, list]);

  const columns = [
    {
      title: 'Loại file',
      dataIndex: 'imgSrc',
      key: 'imgSrc',
      sorter: (a: any, b: any) => a.imgSrc.length - b.imgSrc.length,
      render: (text: string) => {
        return (
          <>
            <span className="FileTable-warpImg">
              <img src={text} alt="" />
            </span>
          </>
        );
      },
    },
    {
      title: 'Tên đề thi',
      dataIndex: 'ExamName',
      key: 'ExamName',
      sorter: (a: any, b: any) => a.ExamName.length - b.ExamName.length,
      render: (text: string, record: any) => {
        return (
          <>
            <span>
              {text}
              {record.typeFile}
            </span>
          </>
        );
      },
    },
    {
      title: 'Môn học',
      dataIndex: 'subjectsName',
      key: 'subjectsName',
      sorter: (a: any, b: any) => a.subjectsName.length - b.subjectsName.length,
    },
    {
      title: 'Giảng viên',
      dataIndex: 'Lecturers',
      key: 'Lecturers',
    },
    {
      title: 'Hình thức',
      dataIndex: 'ExamForms',
      key: 'ExamForms',
      sorter: (a: any, b: any) => a.ExamForms.length - b.ExamForms.length,
    },
    {
      title: 'Thời lượng',
      dataIndex: 'ExamTime',
      key: 'ExamTime',
    },
    {
      title: 'Tình trạng',
      dataIndex: 'status',
      key: 'status',
      render: (text: string) => {
        return (
          <span
            style={{
              color: '#7C7C7C',
              fontFamily: 'Source Sans Pro',
              fontStyle: 'italic',
              fontSize: '16px',
            }}
          >
            {text}
          </span>
        );
      },
    },

    {
      title: 'Phê Duyệt',
      dataIndex: 'DocumentApproval',
      key: 'DocumentApproval',
      sorter: (a: any, b: any) =>
        a.DocumentApproval.length - b.DocumentApproval.length,
      render: (text: string) => {
        if (text === 'All') {
          return (
            <>
              <Button
                buttonSize="btn--small"
                buttonStyle="btn--primary--solid"
                style={{
                  marginRight: '12px',
                }}
                onClick={() => {
                  dispatch(setModelApproval(true));
                }}
              >
                Phê duyệt
              </Button>
              <Button
                buttonSize="btn--small"
                buttonStyle="btn--gray--solid"
                onClick={() => {
                  dispatch(setModelCancelDocument(true));
                }}
              >
                Hủy
              </Button>
            </>
          );
        } else if (text === 'Đã duyệt') {
          <span
            style={{
              color: '#2EACEE;',
              fontFamily: 'Source Sans Pro',
              fontStyle: 'italic',
              fontSize: '16px',
            }}
          >
            {text}
          </span>;
        }
        return (
          <span
            style={{
              color: '#7C7C7C',
              fontFamily: 'Source Sans Pro',
              fontStyle: 'italic',
              fontSize: '16px',
            }}
          >
            {text}
          </span>
        );
      },
    },
    {
      title: '',
      key: 'action',

      render: (record: any) => (
        <img
          src={eye}
          alt=""
          onClick={() => {
            handleClickEye(record);
          }}
          style={{ cursor: 'pointer' }}
        />
      ),
    },
  ];
  const common = useSelector(commonSelector);
  const checkboxTable = common.checkboxTable;
  return (
    <>
      <TitleHeader titlePrimary="Tất cả các tệp"></TitleHeader>
      <div className="listDocument">
        <h1>Danh sách đề thi</h1>
        <div className="listDocument-control">
          <i className="bx bx-download"></i>
          <div className="listDocument-control_btn">
            <Button
              type="button"
              buttonSize="btn--large"
              buttonStyle={
                checkboxTable.length
                  ? 'btn--primary--outline'
                  : 'btn--disabled--outline'
              }
              onClick={
                checkboxTable.length
                  ? () => {
                      dispatch(setModelCancelDocument(true));
                    }
                  : () => {}
              }
            >
              Hủy phê duyệt
            </Button>
            <Button
              type="button"
              buttonSize="btn--large"
              buttonStyle={
                checkboxTable.length
                  ? 'btn--primary--solid'
                  : 'btn--disabled--solid'
              }
              disabled={checkboxTable.length ? true : false}
              onClick={
                checkboxTable.length
                  ? () => {
                      dispatch(setModelApproval(true));
                    }
                  : () => {}
              }
            >
              Phê duyệt
            </Button>
          </div>
        </div>
      </div>
      <div className="book">
        <div className="book-control" style={{ marginBottom: '24px' }}>
          <div className="book-control-left">
            <div className="book-control-left_item">
              <Dropdown
                selected={status}
                setSelected={setStatus}
                options={['Đã phê duyệt', 'Chờ phê duyệt']}
              />
            </div>
            <div className="book-control-left_item">
              <Dropdown
                selected={Year}
                setSelected={setYear}
                options={['2020-2021', '2015-2016', '2018-2019']}
              />
            </div>
            <div className="book-control-left_item">
              <Dropdown
                selected={subjects}
                setSelected={setSubjects}
                options={nameSubject}
              />
            </div>
            <div className="book-control-left_item">
              <Dropdown
                selected={teacher}
                setSelected={setTeacher}
                options={nameLecture}
              />
            </div>
          </div>
          <div className="book-control-right">
            <Search />
          </div>
        </div>
        <TablePagination columns={columns} data={list} checkbox />
      </div>
    </>
  );
};

export default BagTemplate;
