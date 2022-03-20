import React from 'react';

const Statistical = () => {
  return (
    <div className="Statistical">
      <div className="Statistical-title">Thống kê truy cập</div>
      <div className="Statistical-main">
        <div className="grid-col-3">
          <span className="Statistical-main_content">Đang truy cập:</span>
          <span className="Statistical-main_number">31</span>
        </div>
        <div className="grid-col-3">
          <span className="Statistical-main_content">
            Lượt truy cập hôm nay:
          </span>
          <span className="Statistical-main_number">97</span>
        </div>
      </div>
    </div>
  );
};

export default Statistical;
