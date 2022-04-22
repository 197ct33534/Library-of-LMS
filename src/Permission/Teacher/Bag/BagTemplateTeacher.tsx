import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../../Common/Button';
import Modal from '../../../Common/Modal';
import Dropdown from '../../../components/Dropdown';
import Search from '../../../components/Search';
import TablePagination from '../../../components/TablePagination';
import TitleHeader from '../../../components/TitleHeader';
import Bag from '../../../firebase/Bag';
import { bagSelector } from '../../../Pages/Bag/bagSelector';
import { setFakeDataBag } from '../../../Pages/Bag/bagSlice';
import { setSeeAdd } from '../../../Pages/Book/bookSlice';
import { setIsFileRename } from '../../../Pages/File/fileSlice';
import { teacherSelector } from '../teacherSelector';
import {
  setModalCreateExam,
  setModalDownFile,
  setModalRemoveFile,
  setModalUpFile,
  setUpFile,
} from '../teacherSlice';
import ModalCreateExam from './ModalCreateExam';
import ModalUpFile from './ModalUpFile';

const BagTemplateTeacher = () => {
  const dispatch = useDispatch();
  const bag = useSelector(bagSelector);
  const teacher = useSelector(teacherSelector);
  const list = bag.fakeDataBag;
  const [subject, setSubjects] = useState('Chọn tổ bộ môn');
  const [subject2, setSubjects2] = useState('Chọn môn');
  const navigation = useNavigate();
  const handleChangeSelections = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const text = e.target.value;
    switch (text) {
      case 'Xem chi tiết':
        navigation('detail');
        return;
      case 'Tải xuống':
        dispatch(setModalDownFile(true));
        return;
      case 'Đổi tên':
        dispatch(setIsFileRename(true));
        return;
      case 'Xóa file':
        dispatch(setModalRemoveFile(true));
        return;
      case 'Gửi phê duyệt':
        dispatch(setModalUpFile(true));
        return;
      default:
        break;
    }
  };
  //get data
  useEffect(() => {
    const getlistDocuments = async () => {
      const datas = await Bag.getAllBag();
      const dataArray = datas.docs.map((data) => {
        const result = data.data();
        result.key = data.id;
        return result;
      });
      dispatch(setFakeDataBag(dataArray));
    };
    if (list.length <= 1) {
      console.log('rend lan 1 vao redux');

      getlistDocuments();
    }
  }, [dispatch, list]);
  const columns = [
    {
      title: 'Loại file',
      dataIndex: 'imgSrc',
      key: 'imgSrc',
      sorter: (a: any, b: any) => a.imgSrc.length - b.imgSrc.length,
      render: (text: string) => {
        return (
          <>
            <span className="FileTable-warpImg">
              <img src={text} alt="" />
            </span>
          </>
        );
      },
    },
    {
      title: 'Tên đề thi',
      dataIndex: 'ExamName',
      key: 'ExamName',
      sorter: (a: any, b: any) => a.ExamName.length - b.ExamName.length,
      render: (text: string, record: any) => {
        return (
          <>
            <span>
              {text}
              {record.typeFile}
            </span>
          </>
        );
      },
    },
    {
      title: 'Hình thức',
      dataIndex: 'ExamForms',
      key: 'ExamForms',
      sorter: (a: any, b: any) => a.ExamForms.length - b.ExamForms.length,
    },
    {
      title: 'Thời lượng',
      dataIndex: 'ExamTime',
      key: 'ExamTime',
      sorter: (a: any, b: any) => a.ExamTime.length - b.ExamTime.length,
      render: (text: string) => {
        return <span>{text} phút</span>;
      },
    },
    {
      title: 'Môn học',
      dataIndex: 'subjectsName',
      key: 'subjectsName',
      sorter: (a: any, b: any) => a.subjectsName.length - b.subjectsName.length,
    },
    {
      title: 'Thời gian tạo',
      dataIndex: 'SentDate',
      key: 'SentDate',
      sorter: (a: any, b: any) => a.SentDate.length - b.SentDate.length,
    },

    {
      title: 'Tình trạng',
      dataIndex: 'status',
      key: 'status',
      sorter: (a: any, b: any) => a.status.length - b.status.length,

      render: (text: string) => {
        return (
          <span
            style={{
              color: '#7C7C7C',
              fontFamily: 'Source Sans Pro',
              fontStyle: 'italic',
              fontSize: '16px',
            }}
          >
            {text}
          </span>
        );
      },
    },

    {
      key: 'action',

      render: () => {
        return (
          <>
            <select
              onChange={(e) => handleChangeSelections(e)}
              className="SelectHidden"
              value="&#8942;"
              style={{ textAlign: 'center', transform: 'unset' }}
            >
              <option value="&#8942;">&#8942;</option>

              <option value="Xem chi tiết">Xem chi tiết</option>
              <option value="Đổi tên">Đổi tên</option>
              <option value="Tải xuống">Tải xuống</option>
              <option value="Gửi phê duyệt">Gửi phê duyệt</option>
              <option value="Xóa file">Xóa file</option>
            </select>
          </>
        );
      },
    },
  ];
  return (
    <>
      <TitleHeader titlePrimary="Danh sách đề thi và kiểm tra" />
      <div className="listDocument">
        <h1>Danh sách tài nguyên</h1>
        <div className="listDocument-control">
          <i
            className="bx bx-download"
            onClick={() => dispatch(setModalDownFile(true))}
          ></i>
          <div className="listDocument-control_btn">
            <Button
              // type="button"
              buttonSize="btn--large"
              buttonStyle="btn--primary--outline"
              onClick={() => dispatch(setUpFile(true))}
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
            <Button
              // type="button"
              buttonSize="btn--large"
              buttonStyle="btn--primary--solid"
              onClick={() => dispatch(setModalCreateExam(true))}
            >
              Tạo mới
            </Button>
          </div>
        </div>
      </div>
      <div className="book">
        <div className="book-control" style={{ marginBottom: '24px' }}>
          <div className="book-control-left">
            <div className="book-control-left_item">
              <Dropdown
                selected={subject}
                setSelected={setSubjects}
                options={[
                  'Công nghệ thông tin',
                  'Tài chính kế toán',
                  'Xã hội học',
                  'Luật thương mại',
                ]}
              />
            </div>
            <div className="book-control-left_item">
              <Dropdown
                selected={subject2}
                setSelected={setSubjects2}
                options={['Toán học', 'Hóa học', 'Vật lí']}
              />
            </div>
          </div>
          <div className="book-control-right">
            <Search />
          </div>
        </div>
        <TablePagination columns={columns} data={list} />
      </div>
      {teacher.modalCreateExam && <ModalCreateExam />}
      {teacher.UpFile && <ModalUpFile />}
      {teacher.modalDownFile && (
        <Modal
          title="Tải xuống đề thi"
          content="Xác nhận muốn tải xuống đề thi này và toàn bộ thông tin, các file chứa bên trong."
          textCancel="Hủy"
          textSucces="Xác nhận"
          funcCancel={setModalDownFile(false)}
        />
      )}
      {teacher.modalRemoveFile && (
        <Modal
          title="Xóa đề thi"
          content="Xác nhận muốn xoá đề thi này và toàn bộ thông tin bên trong? Sau khi xoá sẽ không thể hoàn tác."
          textCancel="Huỷ"
          textSucces="Xác nhận"
          funcCancel={setModalRemoveFile(false)}
        />
      )}
      {teacher.modalUpFile && (
        <Modal
          title="Gửi phê duyệt"
          content="Xác nhận muốn gửi đề thi này và toàn bộ thông tin, các file chứa bên trong để được phê duyệt."
          textCancel="Huỷ"
          textSucces="Xác nhận"
          funcCancel={setModalUpFile(false)}
        />
      )}
    </>
  );
};

export default BagTemplateTeacher;
