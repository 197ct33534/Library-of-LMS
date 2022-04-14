import React from 'react';
import TitleHeader from '../../components/TitleHeader';

const SettingTemplate = () => {
  return (
    <>
      <TitleHeader titlePrimary="Cài đặt hệ thống" />
      <div className="grid-col-2 SettingTemplate">
        <div className="SettingTemplate-card">
          <h1>Thông tin hệ thống</h1>
          <p>Các thông tin cơ bản của hệ thống thư viện trực tuyến</p>
        </div>
        <div className="SettingTemplate-card">
          <h1>Quản lý người dùng</h1>
          <p>Thông tin của người dùng trong hệ thống</p>
        </div>
        <div className="SettingTemplate-card">
          <h1>Quản lý vài trò</h1>
          <p>Tạo, phân quyền và quản lý các vai trò hệ thống của thư viện</p>
        </div>
      </div>
    </>
  );
};

export default SettingTemplate;