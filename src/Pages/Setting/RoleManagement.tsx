import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../Common/Button';
import Search from '../../components/Search';
import TablePagination from '../../components/TablePagination';
import TitleHeader from '../../components/TitleHeader';
import Setting from '../../firebase/Setting';

import { settingSelector } from './settingSelector';
import { setDataSetting, setModalRemove, setModalRole } from './settingSlice';

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
      render: (text: string) => {
        return <span className="TableDescript">{text}</span>;
      },
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
            <Search />
          </div>
        </div>
        <TablePagination columns={columns} data={list} checkbox />
      </div>
    </>
  );
};

export default RoleManagement;
