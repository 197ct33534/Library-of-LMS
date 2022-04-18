import React from 'react';
import { Outlet } from 'react-router-dom';
import TitleHeader from '../../../components/TitleHeader';

import ControllerDetail from './ControllerDetail';

const BookTeacherDetailSubject = () => {
  return (
    <>
      <TitleHeader
        titlePrimary="Thương mại điện tử"
        title={['Danh sách môn giảng dạy']}
      />
      <ControllerDetail />
      <Outlet />
    </>
  );
};

export default BookTeacherDetailSubject;
