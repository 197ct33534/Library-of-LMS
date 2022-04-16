import { Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../Common/Button';
import Dropdown from '../../components/Dropdown';
import TitleHeader from '../../components/TitleHeader';
import FileDocument from '../../firebase/File';
import { setSeeAdd } from '../Book/bookSlice';
import { MyPagination } from '../Book/ListDocument';
import { fileSelector } from './fileSelector';
import {
  setFetDataFile,
  setIsFileDownload,
  setIsFileRemove,
  setIsFileRename,
  setPageSize,
} from './fileSlice';

const FileTemplate = () => {
  const [choseFile, setChoseFile] = useState('Thể loại');
  const dispatch = useDispatch();
  const file = useSelector(fileSelector);
  const list = file.fetDataFile;
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
  //
  const handleChangeSelections = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const text = e.target.value;
    console.log(text);

    switch (text) {
      case 'Đổi tên':
        dispatch(setIsFileRename(true));

        return;
      case 'Xem trước':
        dispatch(setSeeAdd(true));

        return;
      case 'Xóa':
        dispatch(setIsFileRemove(true));
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
            >
              <option value="&#8942;">&#8942;</option>

              <option value="Xem trước">Xem trước</option>
              <option value="Đổi tên">Đổi tên</option>
              <option value="Tải xuống">Tải xuống</option>
              <option value="Xóa">Xóa</option>
            </select>
          </>
        );
      },
    },
  ];
  //setup pagination
  const pageSize = file.pageSize;

  const [current, setCurrent] = useState(1);
  const getData = (current: number, pageSize: number) => {
    return list.slice((current - 1) * pageSize, current * pageSize);
  };
  const [selectedRowKeys, setselectedRowKeys] = useState<string[] | number[]>(
    []
  );

  const onSelectedRowKeysChange = (x: any) => {
    setselectedRowKeys([...x]);
  };
  return (
    <>
      <TitleHeader
        titlePrimary="Tất cả các tệp"
        title={['Trang chủ', 'Tệp riêng tư']}
      ></TitleHeader>
      <div className="FileTemplate-control">
        <span>
          <i className="bx bx-download"></i>
        </span>

        <Button
          buttonSize="btn--large"
          buttonStyle="btn--primary--solid"
          onClick={() => dispatch(setIsFileDownload(true))}
        >
          Đăng tải
        </Button>
      </div>
      <div className="book">
        <div className="book-control" style={{ marginBottom: '24px' }}>
          <div className="book-control-left">
            <div className="book-control-left_item">
              <Dropdown
                selected={choseFile}
                setSelected={setChoseFile}
                options={['Mp4', 'Pptx', 'Doc', 'Mp3', 'Xlsx ']}
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

export default FileTemplate;
