import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../../Common/Button';
import Dropdown from '../../../components/Dropdown';

import { setAddLesson } from '../teacherSlice';
import TableFile from './TableFile';

const AddLesson = () => {
  const dispatch = useDispatch();
  const [subject, setSubjects] = useState('Tùy chọn môn học');

  return (
    <>
      <div className="ModelAvatar">
        <div className="ModalAssigment">
          <h1>Thêm bài giảng</h1>
          <div
            className="grid-col-7 ModalAssigment-warp"
            style={{ marginBottom: '16px' }}
          >
            <strong>Chọn môn học:</strong>
            <span>
              <Dropdown
                selected={subject}
                setSelected={setSubjects}
                options={[
                  'Văn học tự chọn',
                  'Hóa học vô cơ',
                  'Vật lý điện tử hạt nhân',
                ]}
              />
            </span>
            <strong></strong>
            <span>
              <Button
                type="button"
                buttonSize="btn--small"
                buttonStyle="btn--lightPrimary--solid"
              >
                <i
                  className="bx bx-upload"
                  style={{
                    color: '#FF7506',
                    paddingRight: '8px',
                    fontWeight: '600',
                  }}
                ></i>
                Tải lên
              </Button>
            </span>
          </div>
          <TableFile />
          <div className="ModalAssigment-warp_controler">
            <Button
              buttonStyle="btn--gray--solid"
              buttonSize="btn--large"
              type="submit"
              onClick={() => dispatch(setAddLesson(false))}
            >
              Huỷ
            </Button>
            <Button
              buttonStyle="btn--primary--solid"
              buttonSize="btn--large"
              type="submit"
            >
              Lưu
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddLesson;
