import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../Common/Button';
import { setIsNotifyRemove } from './bellSlice';

const ModalNotifyRemove = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="ModelAvatar">
        <div className="ModelAvatar-approve">
          <h1>Xóa</h1>
          <p>
            Xác nhận muốn xoá những thông tin đã chọn? Sau khi xoá sẽ không thể
            hoàn tác.
          </p>

          <div className="ModelAvatar-notify_btn">
            <Button
              buttonSize="btn--large"
              buttonStyle="btn--gray--solid"
              onClick={() => {
                dispatch(setIsNotifyRemove(false));
              }}
            >
              Huỷ
            </Button>
            <Button
              buttonSize="btn--large"
              buttonStyle="btn--primary--solid"
              onClick={() => {
                dispatch(setIsNotifyRemove(false));
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

export default ModalNotifyRemove;
