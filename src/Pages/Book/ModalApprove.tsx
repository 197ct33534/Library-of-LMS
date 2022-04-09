import React from 'react';
import Button from '../../Common/Button';
import { useDispatch } from 'react-redux';
import { setModelApproval } from './bookSlice';
const ModalApprove = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="ModelAvatar">
        <div className="ModelAvatar-approve">
          <h1>Phê duyệt</h1>
          <p>
            Xác nhận muốn phê duyệt đề thi này và các thông tin bên trong? Sau
            khi phê duyệt sẽ không thể hoàn tác.
          </p>

          <div className="ModelAvatar-notify_btn">
            <Button
              buttonSize="btn--large"
              buttonStyle="btn--gray--solid"
              onClick={() => {
                dispatch(setModelApproval(false));
              }}
            >
              Huỷ
            </Button>
            <Button
              buttonSize="btn--large"
              buttonStyle="btn--primary--solid"
              onClick={() => {
                dispatch(setModelApproval(false));
              }}
            >
              Xác nhận
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalApprove;
