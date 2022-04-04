import React, { useState } from 'react';
import Dropdown from '../../components/Dropdown';
import TitleHeader from '../../components/TitleHeader';

const Book = () => {
  const [Year, setYear] = useState('2022-2023');
  const [subjects, setSubjects] = useState('Tất cả môn học');
  const [teacher, setTeacher] = useState('Tất cả giảng viên');
  const [status, setStatus] = useState('Tất cả tình trạng');

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
            <div className="book-control-right_search">
              <i className="bx bx-search"></i>
              <input
                type="text"
                placeholder="Tìm kết quả theo tên, lớp, môn học,..."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;
