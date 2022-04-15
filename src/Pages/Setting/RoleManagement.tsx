import { Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../Common/Button';
import TitleHeader from '../../components/TitleHeader';
import Setting from '../../firebase/Setting';
import { MyPagination } from '../Book/ListDocument';
import { settingSelector } from './settingSelector';
import {
  setDataSetting,
  setModalRemove,
  setModalRole,
  setPageSize,
} from './settingSlice';

const RoleManagement = () => {
  const dispatch = useDispatch();
  const Set = useSelector(settingSelector);
  const list = Set.dataSetting;

  //get data
  useEffect(() => {
    const getSettings = async () => {
      const datas = await Setting.getAllSetting();
      const dataArray = datas.docs.map((data) => {
        const result = data.data();
        result.key = data.id;
        return result;
      });
      dispatch(setDataSetting(dataArray));
    };
    if (list.length <= 1) {
      console.log('rend lan 1 vao redux');

      getSettings();
    }
  }, [dispatch, list]);
  const columns = [
    {
      title: 'Tên nhóm',
      dataIndex: 'nameRole',
      key: 'nameRole',
      sorter: (a: any, b: any) => a.nameRole.length - b.nameRole.length,
    },
    {
      title: 'Mô tả',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Lần cập nhật cuối',
      dataIndex: 'SentDate',
      key: 'SentDate',
      sorter: (a: any, b: any) => a.SentDate.length - b.SentDate.length,
    },
    {
      render: () => {
        return (
          <span className="RoleManagement-action">
            <i
              className="bx bx-edit"
              onClick={() => dispatch(setModalRole(true))}
            ></i>
            <i
              className="bx bx-trash"
              onClick={() => dispatch(setModalRemove(true))}
            ></i>
          </span>
        );
      },
    },
  ];
  //setup pagination
  const pageSize = Set.pageSize;

  const [current, setCurrent] = useState(1);
  const getData = (current: number, pageSize: number) => {
    return list.slice((current - 1) * pageSize, current * pageSize);
  };
  //handle checkbox

  const [selectedRowKeys, setselectedRowKeys] = useState<string[] | number[]>(
    []
  );

  const onSelectedRowKeysChange = (x: any) => {
    setselectedRowKeys([...x]);
    console.log('check table ', x);
  };
  return (
    <>
      <TitleHeader titlePrimary="Quản lý vai trò" title={['Cài đặt đề thi']} />
      <div className="RoleManagement-control">
        <h1>Danh sách các nhóm người dùng</h1>
        <Button
          buttonStyle="btn--primary--solid"
          buttonSize="btn--large"
          onClick={() => dispatch(setModalRole(true))}
        >
          <i>+</i>Thêm vai trò
        </Button>
      </div>
      <div className="book">
        <div
          className="book-control"
          style={{ marginBottom: '24px', justifyContent: 'flex-end' }}
        >
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
        <Table
          columns={columns}
          rowSelection={{ selectedRowKeys, onChange: onSelectedRowKeysChange }}
          dataSource={getData(current, pageSize)}
          pagination={false}
        />
        <div className="tablePagiontion">
          <p>
            Hiển thị
            <input
              type="number"
              value={pageSize}
              onChange={(e) => {
                dispatch(setPageSize(+e.target.value));
              }}
            />
            hàng trong mỗi trang
          </p>
          <MyPagination
            total={list.length}
            current={current}
            onChange={setCurrent}
            pageSize={pageSize}
          />
        </div>
      </div>
    </>
  );
};

export default RoleManagement;
