import { Radio } from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../../Common/Button';
import { setModalCreateExam } from '../teacherSlice';

const ModalCreateExam = () => {
  const [option, setOption] = useState('Tạo đề thi từ ngân hàng câu hỏi');
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const handleContinue = () => {
    dispatch(setModalCreateExam(false));
    navigation('createExam');
  };
  return (
    <>
      <div className="ModelAvatar">
        <div className="ModalAssigment">
          <h1>Tạo đề thi mới</h1>
          <div className="grid-col-7 ModalAssigment-warp">
            <strong>Cách tạo đề thi:</strong>
            <span>
              <Radio.Group
                options={[
                  'Tạo đề thi từ ngân hàng câu hỏi',
                  'Tạo đề thi mới với câu hỏi mới',
                ]}
                onChange={(e) => setOption(e.target.value)}
                value={option}
              />
            </span>
          </div>

          <div
            className="ModalAssigment-warp_controler"
            style={
              option === 'Tạo đề thi mới với câu hỏi mới'
                ? { visibility: 'visible' }
                : { visibility: 'hidden' }
            }
          >
            <Button
              buttonStyle="btn--gray--solid"
              buttonSize="btn--large"
              type="submit"
              onClick={() => dispatch(setModalCreateExam(false))}
            >
              Huỷ
            </Button>
            <Button
              buttonStyle="btn--primary--solid"
              buttonSize="btn--large"
              type="submit"
              onClick={() => handleContinue()}
            >
              Tiếp tục
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalCreateExam;
