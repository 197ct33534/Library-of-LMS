import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bellSelector } from './bellSelector';
import {
  setAddNotify,
  setFakeData,
  setIsNotifyRemove,
  setIsNotifySystem,
  setIsRead,
} from './bellSlice';
import setting from '../../Assets/images/fi_settings.png';
// import { nameList, imgList } from './fakedata.js';

import Bell from '../../firebase/Bell';
import { Table } from 'antd';
import AddNotify from './AddNotify.js';
import { Link } from 'react-router-dom';
const BellNotify = () => {
  const dispatch = useDispatch();
  const listData = useSelector(bellSelector);
  const list = listData.fakeData;
  const isread = listData.isRead;
  const addNotify = listData.addNotify;
  const state = listData.isNotifySystem;

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
  useEffect(() => {
    // for (let i = 0; i < 100; i++) {
    //   const ran = Math.random();
    //   const data = {
    //     key: i,
    //     nameFriend: nameList[Math.floor(ran * nameList.length)],
    //     imgAvatarFriend: imgList[Math.floor(ran * imgList.length)],
    //     time: new Date(
    //       +new Date() - Math.floor(ran * 10000000000)
    //     ).toLocaleDateString('VN-VI'),
    //   };
    //   Bell.addBell(data);
    // }

    return () => {
      dispatch(setIsNotifySystem(true));
    };
  }, [dispatch]);
  //handle checkbox
  useEffect(() => {
    const list: HTMLElement | null = document.querySelector(
      '.iconDotvertical-list'
    );
    const main = document.querySelector('.main');

    if (list && main) {
      main.addEventListener('mouseover', (e: any) => {
        if (
          e.pageX < 1640 &&
          e.pageX > 1600 &&
          e.pageY > 260 &&
          e.pageY < 320
        ) {
          list.style.opacity = '1';
        } else {
          list.style.opacity = '0';
        }
      });
    }
    return () => {
      if (list && main) {
        main.removeEventListener('mouseover', (e: any) => {
          console.log(e.pageX, e.pageY);

          if (
            e.pageX < 1640 &&
            e.pageX > 1600 &&
            e.pageY > 260 &&
            e.pageY < 320
          ) {
            list.style.opacity = '1';
          } else {
            list.style.opacity = '0';
          }
        });
      }
    };
  }, []);

  const [selectedRowKeys, setselectedRowKeys] = useState<string[] | number[]>(
    []
  );
  const [search, setSearch] = useState('');
  const onSelectedRowKeysChange = (x: any) => {
    setselectedRowKeys([...x]);
  };
  let data;
  data = list.filter((item) => item.nameFriend.toLowerCase().includes(search));

  const columns = [
    {
      title: () => {
        return (
          <div className="book-control-right_search">
            <i className="bx bx-search"></i>
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </div>
        );
      },
      dataIndex: 'nameFriend',
      key: 'nameFriend',
      render: (text: string, record: any) => {
        return {
          children: (
            <div className="bell-item">
              <img src={record.imgAvatarFriend} alt="" />
              <p className={isread ? '' : 'active'}>
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
      title: () => {
        return (
          <div className="iconDotvertical">
            <i className="bx bx-dots-vertical-rounded"></i>
          </div>
        );
      },
      dataIndex: 'time',
      key: 'time',
      render: (text: string) => {
        return <div className="bell-item_time">{text}</div>;
      },
    },
  ];
  const columns2 = [
    {
      title: () => {
        return (
          <div className="book-control-right_search">
            <i className="bx bx-search"></i>
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </div>
        );
      },
      dataIndex: 'nameFriend',
      key: 'nameFriend',
      render: (text: string, record: any, index: number) => {
        const title = [
          '   đã tạo một topic ',
          '   đã tạo một topic ',
          'Thông báo: Điểm kiểm tra môn Lịch Sử đã được cập nhật.',
          '   dolor sit amet, consectetur adipiscing elit. Nam eleifend aliquet enim, a viverra leo malesuada condimentum. Mauris eu semper elit. Nulla id.',
          '   dolor sit amet, consectetur adipiscing elit. Nam eleifend aliquet enim, a viverra leo malesuada condimentum.',
          '   đã tạo một topic ',
          'Thông báo: Điểm kiểm tra môn Lịch Sử đã được cập nhật.',
          '   dolor sit amet, consectetur adipiscing elit. Nam eleifend aliquet enim, a viverra leo malesuada condimentum. Mauris eu semper elit. Nulla id.',
          '   dolor sit amet, consectetur adipiscing elit. Nam eleifend aliquet enim, a viverra leo malesuada condimentum.',
          'Thông báo: Điểm kiểm tra môn Lịch Sử đã được cập nhật.',
          '   dolor sit amet, consectetur adipiscing elit. Nam eleifend aliquet enim, a viverra leo malesuada condimentum. Mauris eu semper elit. Nulla id.',
          '   dolor sit amet, consectetur adipiscing elit. Nam eleifend aliquet enim, a viverra leo malesuada condimentum.',
        ];

        return {
          children: (
            <div className="bell-item">
              <img src={record.imgAvatarFriend} alt="" />
              <p className={isread ? '' : 'active'}>
                <strong>{text}</strong>
                {title[Math.floor(index)]}
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
      title: () => {
        return (
          <div className="iconDotvertical">
            <i className="bx bx-dots-vertical-rounded"></i>
          </div>
        );
      },
      dataIndex: 'time',
      key: 'time',
      render: (text: string) => {
        return <div className="bell-item_time">{text}</div>;
      },
    },
  ];
  return (
    <>
      <div className="info-button">
        <div className="info-change">
          <div
            className={`info-change_button ${state ? 'active' : ''}`}
            onClick={() => dispatch(setIsNotifySystem(true))}
          >
            Thông báo người dùng
          </div>
          <div
            className={`info-change_button ${state ? '' : 'active'}`}
            onClick={() => dispatch(setIsNotifySystem(false))}
          >
            Thông báo hệ thống
          </div>
        </div>
        <div className="info-changeRight">
          <Link to="setting">
            <img
              src={setting}
              alt=""
              style={{ paddingRight: '16px', borderRight: '1px solid #C9C4C0' }}
            />
          </Link>

          <button
            className="btn btn--primary--solid btn--medium"
            style={{ marginLeft: '16px' }}
            onClick={() => dispatch(setAddNotify(true))}
          >
            Thêm thông báo
          </button>
        </div>
      </div>
      {state ? (
        <div className="bell-warp">
          <Table
            rowSelection={{
              selectedRowKeys,
              onChange: onSelectedRowKeysChange,
            }}
            columns={columns}
            dataSource={data}
            scroll={{ y: 709 }}
          />
        </div>
      ) : (
        <div className="bell-warp">
          <Table
            rowSelection={{
              selectedRowKeys,
              onChange: onSelectedRowKeysChange,
            }}
            columns={columns2}
            dataSource={data}
            scroll={{ y: 709 }}
          />
        </div>
      )}
      <ul className="iconDotvertical-list">
        <li onClick={() => dispatch(setIsRead(true))}>Đánh dấu đã đọc</li>
        <li onClick={() => dispatch(setIsNotifyRemove(true))}>xóa</li>
      </ul>
      {addNotify && <AddNotify />}
    </>
  );
};

export default memo(BellNotify);
