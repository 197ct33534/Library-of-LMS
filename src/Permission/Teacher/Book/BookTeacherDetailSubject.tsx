import React from 'react';
import TitleHeader from '../../../components/TitleHeader';
import Overview from '../../../Pages/Book/Overview';
import ControllerDetail from './ControllerDetail';

const BookTeacherDetailSubject = () => {
  return (
    <>
      <TitleHeader
        titlePrimary="Thương mại điện tử"
        title={['Danh sách môn giảng dạy']}
      />
      <ControllerDetail />
      <div className="book">
        <Overview />
      </div>
    </>
  );
};

export default BookTeacherDetailSubject;
