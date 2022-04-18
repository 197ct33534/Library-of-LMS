import { Table, Pagination } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Dropdown from '../../components/Dropdown';
import TitleHeader from '../../components/TitleHeader';
import listDocument from '../../firebase/ListDocument';
import { bookSelector } from './bookSelector';
import {
  listDocumentFetchData,
  setModelApproval,
  setModelCancelDocument,
  setPageSize,
  setSeeAdd,
} from './bookSlice';
import 'antd/dist/antd.css';
import eye from '../../Assets/images/eye.png';
import Button from '../../Common/Button';
import TablePagination from '../../components/TablePagination';
import { commonSelector } from '../../Redux/comonSelector';
import Search from '../../components/Search';
interface propPagination {
  total: number;
  onChange: React.Dispatch<React.SetStateAction<number>>;
  current: number;
  pageSize: number;
}
export const MyPagination = (prop: propPagination) => {
  const { onChange, total, current, pageSize } = prop;
  return (
    <Pagination
      onChange={onChange}
      total={total}
      current={current}
      pageSize={pageSize}
    />
  );
};

const ListDocument = () => {
  // useEffect(() => {
  //   for (let i = 1; i <= 100; i++) {
  //     const random = Math.random();
  //     const data = {
  //       id: `${i}`,
  //       DocumentName: `2020-${i}`,
  //       CategoryDocument: i % 2 === 0 ? 'Bài giảng' : 'Tài nguyên',
  //       Lecturers: ['Phạm Thị C', 'Nguyễn Văn A', 'Trần Hoàng A', 'Charlie'][
  //         Math.floor(random * 4)
  //       ],
  //       SentDate: new Date(
  //         +new Date() - Math.floor(random * 10000000000)
  //       ).toLocaleDateString('VN-VI'),
  //       status: ['Đã phê duyệt', 'Chờ phê duyệt', 'Đã hủy'][
  //         Math.floor(random * 3)
  //       ],
  //       DocumentApproval: ['Đã phê duyệt', 'All', 'Đã hủy'][
  //         Math.floor(random * 3)
  //       ],
  //     };
  //     listDocument.addListDocument(data);
  //   }
  // }, []);
  const dispatch = useDispatch();
  const data = useSelector(bookSelector);
  const list = data.listDocument;
  const [status, setStatus] = useState('Tất cả tình trạng');
  //get data
  useEffect(() => {
    const getlistDocuments = async () => {
      const datas = await listDocument.getAllListDocument();
      const dataArray = datas.docs.map((data) => {
        const result = data.data();
        result.key = data.id;
        return result;
      });
      dispatch(listDocumentFetchData(dataArray));
    };
    if (list.length <= 1) {
      console.log('rend lan 1 vao redux');

      getlistDocuments();
    }
  }, [dispatch, list]);
  //colum table
  const columns = [
    {
      title: 'Tên tài liệu',
      dataIndex: 'DocumentName',
      key: 'DocumentName',
      sorter: (a: any, b: any) => a.DocumentName.length - b.DocumentName.length,
    },
    {
      title: 'Phân loại',
      dataIndex: 'CategoryDocument',
      key: 'CategoryDocument',
      sorter: (a: any, b: any) =>
        a.CategoryDocument.length - b.CategoryDocument.length,
    },
    {
      title: 'Giảng viên',
      dataIndex: 'Lecturers',
      key: 'Lecturers',
      sorter: (a: any, b: any) => a.Lecturers.length - b.Lecturers.length,
    },
    {
      title: 'Ngày gửi',
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
        if (text === 'Đã phê duyệt')
          return (
            <Button buttonSize="btn--large" buttonStyle="btn--blue--outline">
              <i
                className="bx bxs-circle"
                style={{ color: '#0B80EC', fontSize: '9px' }}
              ></i>
              {text}
            </Button>
          );
        if (text === 'Chờ phê duyệt')
          return (
            <Button buttonSize="btn--large" buttonStyle="btn--success--outline">
              <i
                className="bx bxs-circle"
                style={{ color: '#3CC13B', fontSize: '9px' }}
              ></i>
              {text}
            </Button>
          );
        return (
          <Button buttonSize="btn--small" buttonStyle="btn--danger--outline">
            <i
              className="bx bxs-circle"
              style={{ color: '#ED2025', fontSize: '9px' }}
            ></i>
            Đã hủy
          </Button>
        );
      },
    },
    {
      title: 'Phê duyệt tài liệu',
      dataIndex: 'DocumentApproval',
      key: 'DocumentApproval',
      sorter: (a: any, b: any) =>
        a.DocumentApproval.length - b.DocumentApproval.length,
      render: (text: string) => {
        if (text === 'All') {
          return (
            <>
              <Button
                buttonSize="btn--small"
                buttonStyle="btn--primary--solid"
                style={{
                  marginRight: '12px',
                }}
                onClick={() => {
                  dispatch(setModelApproval(true));
                }}
              >
                Phê duyệt
              </Button>
              <Button
                buttonSize="btn--small"
                buttonStyle="btn--gray--solid"
                onClick={() => {
                  dispatch(setModelCancelDocument(true));
                }}
              >
                Hủy
              </Button>
            </>
          );
        }
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
      title: '',
      key: 'action',

      render: () => (
        <img
          src={eye}
          alt=""
          onClick={() => {
            dispatch(setSeeAdd(true));
          }}
          style={{ cursor: 'pointer' }}
        />
      ),
    },
  ];
  const checkboxTable = useSelector(commonSelector).checkboxTable;
  return (
    <>
      <TitleHeader
        titlePrimary="Danh sách tài liệu"
        title={['Trang chủ', 'Quản lý môn học']}
      />
      <div className="listDocument">
        <h1>Thương mại điện tử</h1>
        <div className="listDocument-control">
          <i className="bx bx-download"></i>
          <div className="listDocument-control_btn">
            <Button
              type="button"
              buttonSize="btn--large"
              buttonStyle={
                checkboxTable.length
                  ? 'btn--primary--outline'
                  : 'btn--disabled--outline'
              }
              onClick={
                checkboxTable.length
                  ? () => {
                      dispatch(setModelApproval(true));
                    }
                  : () => {}
              }
            >
              Hủy phê duyệt
            </Button>
            <Button
              type="button"
              buttonSize="btn--large"
              buttonStyle={
                checkboxTable.length
                  ? 'btn--primary--solid'
                  : 'btn--disabled--solid'
              }
              disabled={checkboxTable.length ? true : false}
              onClick={
                checkboxTable.length
                  ? () => {
                      dispatch(setModelApproval(true));
                    }
                  : () => {}
              }
            >
              Phê duyệt
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
                options={['Đã phê duyệt', 'Chờ phê duyệt', 'Đã hủy']}
              />
            </div>
          </div>
          <div className="book-control-right">
            <Search />
          </div>
        </div>
        <TablePagination columns={columns} data={list} checkbox />
      </div>
    </>
  );
};

export default ListDocument;
