import React, { memo } from 'react';
import avatar from '../../Assets/images/avatarComment.png';
import parse from 'html-react-parser';
const NotifySubject = () => {
  let temp = '';
  for (let i = 0; i <= 10; i++) {
    temp += `<div className="grid-col-3">
        <div className="NotifySubject-head">
          <img src=${avatar} alt="" />
          <div className="NotifySubject-head_info">
            <h1>Trần Nguyễn Phú Phong</h1>
            <div>
              <span>Giáo viên</span>
              <i className="bx bxs-circle"></i>
              <span>6 giờ trước</span>
            </div>
          </div>
        </div>
        <div className="NotifySubject-body">
          <h1>LỊCH KIỂM TRA 1 TIẾT</h1>
          <div className="NotifySubject-body_warp">
            <p>
              <strong>Thời gian:</strong> Thứ 5 ngày 20 tháng 01 năm 2021
            </p>
            <p>
              <strong>Hình thức:</strong> Tự Luận
            </p>
          </div>
          <p>
            <strong>Nội dung:</strong> Nội dung kiểm tra tổng hợp từ bài đầu
            tiên đến bài ở tiết sau cùng
          </p>
        </div>
      </div>`;
  }
  return (
    <>
      <div className="NotifySubject" id="NotifySubject">
        {parse(temp)}
      </div>
    </>
  );
};

export default memo(NotifySubject);
