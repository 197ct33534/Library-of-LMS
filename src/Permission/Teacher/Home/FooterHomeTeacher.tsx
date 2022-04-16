import React from 'react';
import MultipleItems from '../../../Pages/Home/MultipleItems';
import StatisticalTeachcer from './StatisticalTeachcer';

const FooterHomeTeacher = () => {
  return (
    <>
      <div className="MultipleItems" style={{ width: 'calc(100% - 700px)' }}>
        <MultipleItems />
        <div className="MultipleItems-note">
          Hiển thị 10 tệp tài liệu đã xem gần đây nhất
        </div>
      </div>
      <StatisticalTeachcer />
    </>
  );
};

export default FooterHomeTeacher;
