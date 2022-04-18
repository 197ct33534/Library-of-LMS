import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TitleHeader from '../../components/TitleHeader';
import { settingSelector } from './settingSelector';
import Button from '../../Common/Button';
import Setting from '../../firebase/Setting';
import {
  setDataSetting,
  setModalNewExam,
  setModalRemove,
} from './settingSlice';

import Dropdown from '../../components/Dropdown';
import Search from '../../components/Search';
import TablePagination from '../../components/TablePagination';

const UserManagement = () => {
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
      title: 'Mã người dùng',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Tên',
      dataIndex: 'userName',
      key: 'userName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Tên vai trò',
      dataIndex: 'nameRole',
      key: 'nameRole',
    },

    {
      render: (record: any) => {
        return (
          <span className="RoleManagement-action">
            <i
              className="bx bx-edit"
              onClick={() =>
                dispatch(setModalNewExam({ type: true, record: record }))
              }
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

  const [status, setStatus] = useState('Chọn vai trò');
  return (
    <>
      <TitleHeader
        titlePrimary="Người dùng hệ thống"
        title={['Cài đặt hệ thống']}
      />
      <div className="RoleManagement-control">
        <h1>Danh sách người dùng trên hệ thống</h1>
        <Button
          buttonStyle="btn--primary--solid"
          buttonSize="btn--large"
          onClick={() => dispatch(setModalNewExam({ type: true }))}
        >
          <i>+</i>Thêm mới
        </Button>
      </div>
      <div className="book">
        <div className="book-control" style={{ marginBottom: '24px' }}>
          <div className="book-control-left">
            <div className="book-control-left_item">
              <Dropdown
                selected={status}
                setSelected={setStatus}
                options={['Quản trị viên', 'Học sinh', 'Giáo viên']}
              />
            </div>
          </div>
          <div className="book-control-right">
            <Search />
          </div>
        </div>
        <TablePagination columns={columns} data={list} />
      </div>
    </>
  );
};

export default UserManagement;
