import React, { useEffect, useState } from 'react';
import TitleHeader from '../../components/TitleHeader';
import app from '../../Assets/images/app.png';
import filter from '../../Assets/images/filter.png';
import listicon from '../../Assets/images/list.png';

import Dropdown from '../../components/Dropdown';
import { MyPagination } from '../../Pages/Book/ListDocument';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { studentSelector } from './studentSelector';
import Student from '../../firebase/student';
import {
  setPageSize,
  setStudentData,
  setTableForm,
  StudentProps,
} from './studentSlice';
import { useNavigate } from 'react-router-dom';
const BookStudent = () => {
  const [subject, setSubjects] = useState('Tên môn học');
  const dispatch = useDispatch();
  const student = useSelector(studentSelector);
  const pageSize = student.pageSize;
  const list: StudentProps[] = student.studentData;
  const tableForm = student.tableForm;
  //    //get data
  useEffect(() => {
    const getStudents = async () => {
      const datas = await Student.getAllStudent();
      const dataArray = datas.docs.map((data) => {
        const result = data.data();
        result.key = data.id;
        return result;
      });
      dispatch(setStudentData(dataArray));
    };
    if (list.length <= 1) {
      console.log('rend lan 1 vao redux');

      getStudents();
    }
  }, [dispatch, list]);

  const columns = [
    {
      render: (record: any) => {
        if (record.hasStart)
          return <i className="bx bxs-star tableIconStart"></i>;
        return <i className="bx bx-star "></i>;
      },
    },
    {
      title: 'Mã môn học',
      dataIndex: 'idSubject',
      key: 'idSubject',
      sorter: (a: any, b: any) => a.idSubject.length - b.idSubject.length,
    },
    {
      title: 'Môn học',
      dataIndex: 'nameSubject',
      key: 'nameSubject',
      sorter: (a: any, b: any) => a.nameSubject.length - b.nameSubject.length,
    },
    {
      title: 'Giảng viên',
      dataIndex: 'teacherSubject',
      key: 'teacherSubject',
      sorter: (a: any, b: any) =>
        a.teacherSubject.length - b.teacherSubject.length,
    },
    {
      render: () => {
        return (
          <>
            <select
              //   onChange={(e) => handleChangeSelections(e)}
              className="SelectHidden"
              value="&#8942;"
            >
              <option value="&#8942;">&#8942;</option>

              <option value="Xem trước">Chi tiết</option>
              <option value="Đổi tên">Tải xuống tài nguyên</option>
            </select>
          </>
        );
      },
    },
  ];
  const [current, setCurrent] = useState(1);
  const getData = (current: number, pageSize: number) => {
    return list.slice((current - 1) * pageSize, current * pageSize);
  };
  const navigation = useNavigate();
  const handleChangeSelections = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const text = e.target.value;
    switch (text) {
      case 'Chi tiết':
        navigation('course');
        return;

      default:
        break;
    }
  };
  return (
    <>
      <TitleHeader titlePrimary="Môn học của tôi" />
      <div className="listDocument">
        <h1>Danh sách môn học</h1>
        <div className="listDocument-control">
          <img
            src={tableForm ? app : listicon}
            alt=""
            onClick={() => dispatch(setTableForm())}
          />
          <img src={filter} alt="" />
        </div>
      </div>
      <div className="book">
        <div className="book-control" style={{ marginBottom: '24px' }}>
          <div className="book-control-left">
            <div className="book-control-left_item">
              <Dropdown
                selected={subject}
                setSelected={setSubjects}
                options={['Thương mại điện tử', 'Luật kinh doanh', 'Kế toán']}
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

        {tableForm ? (
          <>
            <Table
              columns={columns}
              dataSource={getData(current, pageSize)}
              pagination={false}
            />
          </>
        ) : (
          <div className="grid-col-4" style={{ gap: '24px' }}>
            {getData(current, pageSize).map((item, idx) => {
              return (
                <div
                  className="BookStudent-item"
                  key={`BookStudent-item ${idx}`}
                >
                  <div className="grid-col-6">
                    {item.hasStart ? (
                      <i className="bx bxs-star tableIconStart"></i>
                    ) : (
                      <i className="bx bx-star "></i>
                    )}
                    <div className="BookStudent-item_info">
                      <h1>{item.nameSubject}</h1>
                      <h3>{item.teacherSubject}</h3>
                    </div>
                  </div>
                  <select
                    onChange={(e) => handleChangeSelections(e)}
                    className="SelectHidden"
                    value="&#8942;"
                  >
                    <option value="&#8942;">&#8942;</option>

                    <option value="Chi tiết">Chi tiết</option>
                    <option value="Tải xuống tài nguyên">
                      Tải xuống tài nguyên
                    </option>
                  </select>
                </div>
              );
            })}
          </div>
        )}
        <div className="tablePagiontion">
          <p>
            Hiển thị
            <input
              type="number"
              defaultValue={pageSize}
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

export default BookStudent;
