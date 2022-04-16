import React from 'react';
import MultipleItems from './MultipleItems';
import Statistical from './Statistical';

const FooterCourse = () => {
  return (
    <>
      <Statistical />
      <div className="MultipleItems">
        <MultipleItems />
        <div className="MultipleItems-note">
          Hiển thị 10 tệp tài liệu đã xem gần đây nhất
        </div>
      </div>
    </>
  );
};

export default FooterCourse;
