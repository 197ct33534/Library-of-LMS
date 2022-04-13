import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../Common/Button';
import { setIsFileRename } from './fileSlice';

const ModalRenameFile = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="ModelAvatar">
        <div className="ModalRenameFile">
          <h1>Đổi tên tệp</h1>
          <div>
            <input type="text" placeholder="GTTMDT01" />
            <span>.docx</span>
          </div>
          <div className="ModelAvatar-notify_btn">
            <Button
              buttonSize="btn--large"
              buttonStyle="btn--gray--solid"
              onClick={() => {
                dispatch(setIsFileRename(false));
              }}
            >
              Hủy
            </Button>
            <Button
              buttonSize="btn--large"
              buttonStyle="btn--primary--solid"
              onClick={() => {
                dispatch(setIsFileRename(false));
              }}
            >
              Lưu
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalRenameFile;
