import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../../Common/Button';

const ControllerDetail = () => {
  const links = [
    {
      content: 'Tổng quan môn học',
      path: '/book/detailSubject',
    },
    {
      content: 'Danh sách chủ đề',
      path: '/book/listSubject',
    },
    {
      content: 'Hỏi & đáp',
      path: '/book/Q&A',
    },
    {
      content: 'Thông báo môn học',
      path: '/book/announce',
    },
  ];
  return (
    <>
      <div className="ControllerDetail">
        <div className="ControllerDetail-left">
          {links.map((link, idx) => (
            <NavLink
              to={link.path}
              key={`${link.content}-idx`}
              className={({ isActive }) => {
                return isActive ? 'active' : '';
              }}
            >
              {link.content}
            </NavLink>
          ))}
          {/* <span className="active">Tổng quan môn học</span>
          <span>Danh sách chủ đề</span>
          <span>Hỏi & đáp</span>
          <span>Thông báo môn học</span> */}
        </div>
        <div className="ControllerDetail-right">
          <Button buttonStyle="btn--primary--solid" buttonSize="btn--large">
            Chỉnh sửa
          </Button>
        </div>
      </div>
    </>
  );
};

export default ControllerDetail;
