import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../Common/Button';
import Search from '../../../components/Search';
import TablePagination from '../../../components/TablePagination';
import TitleHeader from '../../../components/TitleHeader';
import { fileSelector } from '../../../Pages/File/fileSelector';
import FileDocument from '../../../firebase/File';
import { setFetDataFile, setIsFileRename } from '../../../Pages/File/fileSlice';
import Dropdown from '../../../components/Dropdown';

import { teacherSelector } from '../teacherSelector';
import {
  setAddLesson,
  setModalAddLeactures,
  setModalDownFile,
  setModalRemoveFile,
} from '../teacherSlice';
import Modal from '../../../Common/Modal';
import AddLesson from './AddLesson';
import { setSeeAdd } from '../../../Pages/Book/bookSlice';
import AddLecturesToCourse from './AddLecturesToCourse';
const FileTemplateTeacher = () => {
  const dispatch = useDispatch();
  const file = useSelector(fileSelector);
  const list = file.fetDataFile;
  const [status, setStatus] = useState('Chọn tổ bộ môn');

  const teacher = useSelector(teacherSelector);

  //get data
  useEffect(() => {
    const getFileDocuments = async () => {
      const datas = await FileDocument.getAllFileDocument();
      const dataArray = datas.docs.map((data) => {
        const result = data.data();
        result.key = data.id;
        return result;
      });
      dispatch(setFetDataFile(dataArray));
    };
    if (list.length <= 1) {
      console.log('rend lan 1 vao redux');

      getFileDocuments();
    }
  }, [dispatch, list]);
  const handleChangeSelections = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const text = e.target.value;
    switch (text) {
      case 'Xem chi tiết':
        dispatch(setSeeAdd(true));
        return;
      case 'Đổi tên':
        dispatch(setIsFileRename(true));
        return;
      case 'Tải xuống':
        dispatch(setModalDownFile(true));
        return;
      case 'Xóa file':
        dispatch(setModalRemoveFile(true));
        return;
      case 'Thêm vào môn học':
        dispatch(setModalAddLeactures(true));
        return;
      default:
        break;
    }
  };
  const columns = [
    {
      title: 'Thể loại',
      dataIndex: 'imgSRC',
      key: 'imgSRC',
      sorter: (a: any, b: any) => a.imgSRC.length - b.imgSRC.length,
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
      title: 'Tên',
      dataIndex: 'nameFile',
      key: 'nameFile',
      sorter: (a: any, b: any) => a.nameFile.length - b.nameFile.length,
      render: (text: string, record: any) => {
        return (
          <>
            <span>{text}.</span>
            <span>{record.typeFile}</span>
          </>
        );
      },
    },
    {
      title: 'Môn học',
      dataIndex: 'nameSubject',
      key: 'nameSubject',
      sorter: (a: any, b: any) => a.nameSubject.length - b.nameSubject.length,
    },
    {
      title: 'Người chỉnh sửa',
      dataIndex: 'nameOther',
      key: 'nameOther',
      sorter: (a: any, b: any) => a.nameOther.length - b.nameOther.length,
    },
    {
      title: 'Ngày sửa lần cuối',
      dataIndex: 'timer',
      key: 'timer',
      sorter: (a: any, b: any) => a.timer.length - b.timer.length,
    },
    {
      title: 'Kích thước',
      dataIndex: 'sizeFile',
      key: 'sizeFile',
      sorter: (a: any, b: any) => a.sizeFile.length - b.sizeFile.length,
    },
    {
      title: '',
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
              <option value="Thêm vào môn học">Thêm vào môn học</option>
              <option value="Xóa file">Xóa file</option>
            </select>
          </>
        );
      },
    },
  ];

  return (
    <>
      {teacher.addLesson && <AddLesson />}
      {teacher.modalAddLeactures && <AddLecturesToCourse />}
      <TitleHeader
        titlePrimary="Tất cả bài giảng"
        title={['Trang chủ', 'Bài giảng và tài nguyên']}
      />
      <div className="listDocument">
        <h1>Danh sách tài nguyên</h1>
        <div className="listDocument-control">
          <i
            className="bx bx-download"
            onClick={() => dispatch(setModalDownFile(true))}
          ></i>
          <div className="listDocument-control_btn">
            <Button
              type="button"
              buttonSize="btn--large"
              buttonStyle="btn--primary--solid"
              onClick={() => dispatch(setAddLesson(true))}
            >
              <i
                className="bx bx-upload"
                style={{
                  color: '#fff',
                  paddingRight: '8px',
                  fontWeight: '600',
                }}
              ></i>
              Tải lên
            </Button>
          </div>
        </div>
      </div>
      <div className="book">
        <div className="book-control" style={{ marginBottom: '24px' }}>
          <div className="book-control-left">
            <div className="book-control-left_item">
              <Dropdown
                selected={status}
                setSelected={setStatus}
                options={[
                  'Công nghệ thông tin',
                  'Tài chính kế toán',
                  'Xã hội học',
                ]}
              />
            </div>
          </div>
          <div className="book-control-right">
            <Search />
          </div>
        </div>
        <TablePagination columns={columns} data={list} checkbox />
      </div>
      {teacher.modalDownFile && (
        <Modal
          title="Tải xuống bài giảng"
          content="Xác nhận muốn tải xuống bài giảng này và toàn bộ thông tin bên trong."
          textCancel="Huỷ"
          textSucces="Xác nhận"
          funcCancel={setModalDownFile(false)}
        />
      )}
      {teacher.modalRemoveFile && (
        <Modal
          title="Xóa bài giảng"
          content="Xác nhận muốn xoá bài giảng này và toàn bộ thông tin bên trong? Sau khi xoá sẽ không thể hoàn tác."
          textCancel="Huỷ"
          textSucces="Xác nhận"
          funcCancel={setModalRemoveFile(false)}
        />
      )}
    </>
  );
};

export default FileTemplateTeacher;
