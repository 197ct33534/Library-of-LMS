import React from 'react';
import { useSelector } from 'react-redux';
import Button from '../../Common/Button';
import TitleHeader from '../../components/TitleHeader';
import { bagSelector } from './bagSelector';
import FormExam from './FormExam';
import { useDispatch } from 'react-redux';
import { setModelCancelDocument, setModelApproval } from '../Book/bookSlice';
const BagDetail = () => {
  const bag = useSelector(bagSelector);
  const detailExam = bag.detailExam;
  const { subjectsName, ExamTime, ExamForms, Lecturers } = detailExam;
  const dispatch = useDispatch();
  return (
    <>
      <TitleHeader
        title={['Ngân hàng đề thi']}
        titlePrimary="Chi tiết đề thi"
      />
      <div className="BagDetail">
        <div className=" grid-col-3">
          <div className="grid-col-2">
            <strong>Môn học:</strong>
            <span>{subjectsName}</span>
            <strong>Thời lượng:</strong>
            <span>{ExamTime} phút</span>
          </div>
          <div className="grid-col-2">
            <strong>Tên đề thi:</strong>
            <span>{`Kiểm tra ${ExamTime} phút`}</span>
            <strong>Hình thức:</strong>
            <span>{ExamForms}</span>
          </div>
          <div className="grid-col-2">
            <strong>Giáo viên đào tạo:</strong>
            <span>{Lecturers}</span>
            <strong>Ngày tạo:</strong>
            <span>24/02/2021</span>
          </div>
        </div>

        <div className="BagDetail-controlBtn">
          <Button
            type="button"
            buttonSize="btn--large"
            buttonStyle={'btn--primary--outline'}
            onClick={() => dispatch(setModelCancelDocument(true))}
          >
            Hủy phê duyệt
          </Button>
          <Button
            type="button"
            buttonSize="btn--large"
            buttonStyle={'btn--primary--solid'}
            onClick={() => dispatch(setModelApproval(true))}
          >
            Phê duyệt
          </Button>
        </div>
      </div>
      <FormExam />
    </>
  );
};

export default BagDetail;
