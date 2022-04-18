import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '../../../Common/Button';
import Dropdown from '../../../components/Dropdown';
import TitleHeader from '../../../components/TitleHeader';
import { teacherSelector } from '../teacherSelector';
import TablePagination from '../../../components/TablePagination';

const ListDocumentTeacher = () => {
  const [status, setStatus] = useState('Tất cả tình trạng');
  // const dispatch = useDispatch();
  const teacher = useSelector(teacherSelector);
  const list = teacher.fakedataList;
  const columns = [
    {
      title: 'Tên tài liệu',
      dataIndex: 'nameSubject',
      key: 'nameSubject',
      sorter: (a: any, b: any) => a.nameSubject.length - b.nameSubject.length,
    },
    {
      title: 'Phân loại',
      dataIndex: 'typeDocument',
      key: 'typeDocument',
      sorter: (a: any, b: any) => a.typeDocument.length - b.typeDocument.length,
    },
    {
      title: 'Ngày gửi phê duyệt',
      dataIndex: 'SentDate',
      key: 'SentDate',
      sorter: (a: any, b: any) => a.SentDate.length - b.SentDate.length,
    },
    {
      title: 'Người phê duyệt',
      dataIndex: 'approver',
      key: 'approver',
      sorter: (a: any, b: any) => a.approver.length - b.approver.length,
    },
    {
      title: 'Tình trạng phê duyệt',
      dataIndex: 'status',
      key: 'status',
      sorter: (a: any, b: any) => a.status.length - b.status.length,
      render: (text: string) => {
        if (text === 'Đã phê duyệt') {
          return <span className="Table-status green">{text}</span>;
        }
        if (text === 'Đã huỷ') {
          return <span className="Table-status red">{text}</span>;
        }
        return <span className="Table-status blue">{text}</span>;
      },
    },
    {
      title: 'Ghi chú',
      dataIndex: 'note',
      key: 'note',
      render: (text: string) => {
        return <span className="Table-status red">{text}</span>;
      },
    },
  ];
  return (
    <>
      <TitleHeader
        titlePrimary="Danh sách tài liệu"
        title={['Danh sách môn giảng dạy']}
      />
      <div className="listDocument">
        <h1>Thương mại điện tử</h1>
        <div className="listDocument-control">
          <i className="bx bx-trash" style={{ color: '#C9C4C0' }}></i>
          <div className="listDocument-control_btn">
            <Button
              type="button"
              buttonSize="btn--large"
              //   buttonStyle={
              //     selectedRowKeys.length
              //       ? 'btn--primary--outline'
              //       : 'btn--disabled--outline'
              //   }
              buttonStyle="btn--primary--outline"

              //   onClick={
              //     selectedRowKeys.length
              //       ? () => {
              //           dispatch(setModelApproval(true));
              //         }
              //       : () => {}
              //   }
            >
              Tải xuống
            </Button>
            <Button
              type="button"
              buttonSize="btn--large"
              //   buttonStyle={
              //     selectedRowKeys.length
              //       ? 'btn--primary--solid'
              //       : 'btn--disabled--solid'
              //   }
              buttonStyle="btn--primary--solid"
              //   disabled={selectedRowKeys.length ? true : false}
              //   onClick={
              //     selectedRowKeys.length
              //       ? () => {
              //           dispatch(setModelApproval(true));
              //         }
              //       : () => {}
              //   }
            >
              <i className="bx bx-plus" style={{ color: '#fff' }}></i>Thêm mới
            </Button>
          </div>
        </div>
      </div>
      <div className="book">
        <div className="book-control" style={{ marginBottom: '24px' }}>
          <div className="book-control-left">
            <span style={{ marginRight: '8px' }}>Tình trạng</span>
            <div className="book-control-left_item">
              <Dropdown
                selected={status}
                setSelected={setStatus}
                options={['Đã phê duyệt', 'Chờ phê duyệt']}
              />
            </div>
          </div>
          <div className="book-control-right">
            <div className="book-control-right_search">
              <i className="bx bx-search"></i>
              <input
                type="text"
                placeholder="Tìm kết quả theo tên, lớp, môn học,..."
              />
            </div>
          </div>
        </div>
        <TablePagination data={list} columns={columns} checkbox />
      </div>
    </>
  );
};

export default ListDocumentTeacher;
