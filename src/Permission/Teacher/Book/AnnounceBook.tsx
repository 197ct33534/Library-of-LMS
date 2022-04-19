import { Table } from 'antd';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../Common/Button';
import Dropdown from '../../../components/Dropdown';

import Bell from '../../../firebase/Bell';
import AddNotify from '../../../Pages/Bell/AddNotify';
import { bellSelector } from '../../../Pages/Bell/bellSelector';
import { setAddNotify, setFakeData } from '../../../Pages/Bell/bellSlice';

const AnnounceBook = () => {
  const [search, setSearch] = useState('');
  const [nameClass, setNameClass] = useState('Tất cả các lớp');
  const dispatch = useDispatch();
  const listData = useSelector(bellSelector);
  const addNotify = listData.addNotify;
  let list = listData.fakeData;
  const columns = [
    {
      dataIndex: 'nameFriend',
      key: 'nameFriend',
      render: (text: string, record: any) => {
        return {
          children: (
            <div className="bell-item">
              <img src={record.imgAvatarFriend} alt="" />
              <p>
                <strong>{text}</strong>
                đã nhắc đến bạn trong một bình luận
              </p>
            </div>
          ),
          props: {
            colSpan: 3,
          },
        };
      },
    },
    {
      dataIndex: 'time',
      key: 'time',
      render: (text: string) => {
        return <div className="bell-item_time">{text}</div>;
      },
    },
  ];
  useEffect(() => {
    const getBells = async () => {
      const datas = await Bell.getAllBell();
      const dataArray = datas.docs.map((data) => {
        const result = data.data();
        result.id = data.id;
        return result;
      });
      dispatch(setFakeData(dataArray));
    };
    if (list.length <= 1) {
      console.log('bell rend lan 1 vao redux');

      getBells();
    }
  }, [dispatch, list]);

  list = list.filter((item) => item.nameFriend.toLowerCase().includes(search));

  return (
    <>
      <div className="book">
        <div className="book-control" style={{ marginBottom: '24px' }}>
          <div className="book-control-left">
            <span style={{ marginRight: '8px' }}>Chọn lớp</span>
            <div className="book-control-left_item">
              <Dropdown
                selected={nameClass}
                setSelected={setNameClass}
                options={['Sample', 'Lớp nâng cao', 'Lớp căn bản']}
              />
            </div>
            <div className="book-control-right_search">
              <i className="bx bx-search"></i>
              <input
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />
            </div>
          </div>
          <div className="book-control-right">
            <Button
              buttonSize="btn--small"
              buttonStyle="btn--lightPrimary--solid"
              onClick={() => dispatch(setAddNotify(true))}
            >
              Tạo thông báo mới
            </Button>
          </div>
        </div>
        <div className="bell-warp">
          <Table
            columns={columns}
            dataSource={list}
            scroll={{ y: 709 }}
            pagination={false}
          />
        </div>
      </div>
      {addNotify && <AddNotify />}
    </>
  );
};

export default AnnounceBook;
