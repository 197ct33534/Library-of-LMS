import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../../Common/Button';

const ControllerDetail = () => {
  const links = [
    {
      content: 'Tổng quan môn học',
      path: '/book/Subject/detailSubject',
    },
    {
      content: 'Danh sách chủ đề',
      path: '/book/Subject/listSubject',
    },
    {
      content: 'Hỏi & đáp',
      path: '/book/Subject/Q&A',
    },
    {
      content: 'Thông báo môn học',
      path: '/book/Subject/announce',
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
