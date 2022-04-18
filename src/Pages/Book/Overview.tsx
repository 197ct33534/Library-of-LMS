import React from 'react';

const Overview = () => {
  return (
    <>
      <div className="overview">
        <h2 className="overview-title">Tổng quan</h2>
        <div className="grid-col-4">
          <div className="overview-row">
            <strong>Mã môn học:</strong>
            <span>2020-6A1</span>
          </div>
          <div className="overview-row">
            <strong>Giảng viên:</strong>
            <span>Lớp học căn bản</span>
          </div>
          <div className="overview-row">
            <strong>Môn học:</strong>
            <span>Thương mại điện tử</span>
          </div>
          <div className="overview-row">
            <strong>Mô tả:</strong>
            <span>
              Thương mại điện tử, hay còn gọi là e-commerce, e-comm hay EC, là
              sự mua bán sản phẩm hay dịch vụ trên các hệ thống điện tử như
              Internet và các mạng máy tính.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
