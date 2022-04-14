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
import { MyPagination } from '../Book/ListDocument';
import { bagSelector } from './bagSelector';
import { setDetailExam, setFakeDataBag, setPageSize } from './bagSlice';
import eye from '../../Assets/images/eye.png';
import { useNavigate } from 'react-router-dom';
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
  //   useEffect(() => {
  //     for (let i = 1; i <= 100; i++) {
  //       const random = Math.random();
  //       const data = {
  //         id: `${i}`,
  //         imgSrc: [Doc, Pptx, Xlsx][Math.floor(random * 3)],
  //         typeFile: ['.doc', '.ppt', '.xlsx'][Math.floor(random * 3)],
  //         ExamName: `Kiểm tra chủ đề ${i}`,
  //         subjectsName: nameSubject[Math.floor(random * nameSubject.length)],
  //         Lecturers: nameLecture[Math.floor(random * nameLecture.length)],
  //         ExamForms: i % 2 === 0 ? 'Trắc nghiệm' : 'Tự luận',
  //         ExamTime: [15, 90, 45, 120, 60][Math.floor(random * 5)],
  //         status: [
  //           'Đã tiến hành',
  //           'Chờ phê duyệt',
  //           'Chưa bắt đầu',
  //           'Đang diễn ra',
  //         ][Math.floor(random * 4)],
  //         DocumentApproval: ['Đã duyệt', 'All', 'Đã hủy', 'Chưa phê duyệt'][
  //           Math.floor(random * 4)
  //         ],
  //       };
  //       Bag.addBag(data);
  //     }
  //   }, []);

  // //setup pagination
  // const pageSize = data.pageSize;

  // const [current, setCurrent] = useState(1);
  // const getData = (current: number, pageSize: number) => {
  //   return list.slice((current - 1) * pageSize, current * pageSize);
  // };
  // //handle checkbox

  // const [selectedRowKeys, setselectedRowKeys] = useState<string[] | number[]>(
  //   []
  // );

  // const onSelectedRowKeysChange = (x: any) => {
  //   setselectedRowKeys([...x]);
  //   console.log('check table ', x);
  // };

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
  //setup pagination
  const pageSize = bag.pageSize;

  const [current, setCurrent] = useState(1);
  const getData = (current: number, pageSize: number) => {
    return list.slice((current - 1) * pageSize, current * pageSize);
  };
  //handle checkbox

  const [selectedRowKeys, setselectedRowKeys] = useState<string[] | number[]>(
    []
  );

  const onSelectedRowKeysChange = (x: any) => {
    setselectedRowKeys([...x]);
    console.log('check table ', x);
  };
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
              buttonStyle={'btn--disabled--outline'}
              //   onClick={
              //     selectedRowKeys.length
              //       ? () => {
              //           dispatch(setModelApproval(true));
              //         }
              //       : () => {}
              //   }
            >
              Hủy phê duyệt
            </Button>
            <Button
              type="button"
              buttonSize="btn--large"
              buttonStyle={
                // selectedRowKeys.length
                //   ? 'btn--primary--solid'
                //:
                'btn--disabled--solid'
              }
              //   disabled={selectedRowKeys.length ? true : false}
              //   onClick={
              //     selectedRowKeys.length
              //       ? () => {
              //           dispatch(setModelApproval(true));
              //         }
              //       : () => {}
              // }
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
            <div className="book-control-right_search">
              <i className="bx bx-search"></i>
              <input
                type="text"
                placeholder="Tìm kết quả theo tên, lớp, môn học,..."
              />
            </div>
          </div>
        </div>

        <Table
          columns={columns}
          rowSelection={{ selectedRowKeys, onChange: onSelectedRowKeysChange }}
          dataSource={getData(current, pageSize)}
          pagination={false}
        />
        <div className="tablePagiontion">
          <p>
            Hiển thị
            <input
              type="number"
              value={pageSize}
              onChange={(e) => {
                dispatch(setPageSize(+e.target.value));
              }}
            />
            hàng trong mỗi trang
          </p>
          <MyPagination
            total={list.length}
            current={current}
            onChange={setCurrent}
            pageSize={pageSize}
          />
        </div>
      </div>
    </>
  );
};

export default BagTemplate;
