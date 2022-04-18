import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Dropdown from '../../components/Dropdown';
import TitleHeader from '../../components/TitleHeader';
import { bookSelector } from './bookSelector';

import BookFire from '../../firebase/Book';
import { Link } from 'react-router-dom';

import TablePagination from '../../components/TablePagination';
import { bookFetchData } from './bookSlice';
import Search from '../../components/Search';

const Book = () => {
  const [Year, setYear] = useState('2022-2023');
  const [subjects, setSubjects] = useState('Tất cả môn học');
  const [teacher, setTeacher] = useState('Tất cả giảng viên');
  const [status, setStatus] = useState('Tất cả tình trạng');
  const dispatch = useDispatch();
  const data = useSelector(bookSelector);
  const listBook = data.listBook;
  const columns = [
    {
      title: 'Mã môn học',
      dataIndex: 'subjectID',
      key: 'subjectID',
      sorter: (a: any, b: any) => a.subjectID.length - b.subjectID.length,
    },
    {
      title: 'Tên môn học',
      dataIndex: 'subjectTitle',
      key: 'subjectTitle',
      sorter: (a: any, b: any) => a.subjectTitle.length - b.subjectTitle.length,
      render: (text: string, record: any) => (
        <Link to="detailSubject" key={`Link_${record.subjectID}`}>
          {record.subjectTitle}
        </Link>
      ),
    },
    {
      title: 'Giảng viên',
      dataIndex: 'Lecturers',
      key: 'Lecturers',
      sorter: (a: any, b: any) => a.Lecturers.length - b.Lecturers.length,
    },
    {
      title: 'Số tài liệu chờ duyệt',
      dataIndex: 'numberOfDocuments',
      key: 'numberOfDocuments',
    },
    {
      title: 'Số tài liệu chờ duyệt',
      dataIndex: 'StatusOfCourse',
      key: 'StatusOfCourse',
      sorter: (a: any, b: any) =>
        a.StatusOfCourse.length - b.StatusOfCourse.length,
      render: (text: string, record: any) => (
        <span
          key={`span_${record.subjectID}`}
          className={text === 'Đã phê duyệt' ? 'light status' : 'status'}
        >
          {text}
        </span>
      ),
    },
    {
      title: 'Ngày gửi phê duyệt',
      dataIndex: 'dateOfSubmission',
      key: 'dateOfSubmission',
      sorter: (a: any, b: any) =>
        a.dateOfSubmission.length - b.dateOfSubmission.length,
    },
    {
      title: '',
      key: 'action',
      render: (text: string, record: any) => (
        <Link to="listDocument" key={`LinkAction_${record.subjectID}`}>
          <i
            className="bx bx-list-ul"
            style={{
              color: '#FF7506',
              cursor: 'pointer',
              fontSize: '18px',
              fontWeight: 'bold',
            }}
          ></i>
        </Link>
      ),
    },
  ];
  useEffect(() => {
    const getBooks = async () => {
      const datas = await BookFire.getAllBook();
      const dataArray = datas.docs.map((data) => {
        const result = data.data();
        result.id = data.id;
        return result;
      });

      dispatch(bookFetchData(dataArray));
    };
    if (listBook.length <= 1) {
      console.log('rend lan 1 vao redux');

      getBooks();
    }
  }, [dispatch, listBook]);

  return (
    <>
      <TitleHeader
        titlePrimary="Danh sách môn học"
        title={['Quản lý học viên']}
      />
      <div className="course">
        <div className="course-schoolYear">
          <span>Niên khóa</span>
          <Dropdown
            selected={Year}
            setSelected={setYear}
            options={['2020-2021', '2015-2016', '2018-2019']}
          />
        </div>
      </div>

      <div className="book">
        <div className="book-control">
          <div className="book-control-left">
            <div className="book-control-left_item">
              <span>Môn học</span>
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
            </div>
            <div className="book-control-left_item">
              <span>Giảng viên</span>
              <Dropdown
                selected={teacher}
                setSelected={setTeacher}
                options={['Nguyễn Văn C', 'Nguyễn Văn A', 'Văn Thị B']}
              />
            </div>
            <div className="book-control-left_item">
              <span>Tình trạng tài liệu</span>
              <Dropdown
                selected={status}
                setSelected={setStatus}
                options={['Đã phê duyệt', 'Chờ phê duyệt']}
              />
            </div>
          </div>
          <div className="book-control-right">
            <Search />
          </div>
        </div>
        <TablePagination columns={columns} data={listBook} />
      </div>
    </>
  );
};

export default Book;
