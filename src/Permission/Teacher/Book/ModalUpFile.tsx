import { Input, Radio, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Search from '../../../components/Search';
import { fileSelector } from '../../../Pages/File/fileSelector';
import FileDocument from '../../../firebase/File';
import { setFetDataFile } from '../../../Pages/File/fileSlice';
import Button from '../../../Common/Button';
import { setModalUpFile } from '../teacherSlice';

const ModalUpFile = () => {
  const [option, setOption] = useState('Tài nguyên');
  const onChange = (e: any) => {
    console.log('radio checked ', e.target.value);

    setOption(e.target.value);
  };
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
      title: 'Được tạo bởi',
      dataIndex: 'nameOther',
      key: 'nameOther',
      sorter: (a: any, b: any) => a.nameOther.length - b.nameOther.length,
    },

    {
      title: 'Kích thước',
      dataIndex: 'sizeFile',
      key: 'sizeFile',
      sorter: (a: any, b: any) => a.sizeFile.length - b.sizeFile.length,
    },
  ];
  const [selectedRowKeys, setselectedRowKeys] = useState<string[] | number[]>(
    []
  );
  const onSelectedRowKeysChange = (x: any) => {
    setselectedRowKeys([...x]);
  };
  return (
    <>
      <div className="ModelAvatar">
        <div className="ModalUpFile">
          <h1>Bộ chọn tệp</h1>
          <div className="ModalUpFile-control">
            <Radio.Group
              options={['Tải tệp lên', 'Bài giảng', 'Tài nguyên']}
              onChange={(e) => onChange(e)}
              value={option}
            />
          </div>
          {option === 'Tải tệp lên' && (
            <>
              <h6 className="content">Đính kèm</h6>
              <div className="grid-col-4">
                <Button
                  buttonSize="btn--small"
                  buttonStyle="btn--lightPrimary--solid"
                >
                  Chọn tệp tải lên...
                </Button>
                <span className="content ModalUpFile-item_right">
                  Chưa có tệp nào được chọn
                </span>
              </div>
              <div className="grid-col-4">
                <strong className="content">Lưu thành:</strong>
                <div className="ModalUpFile-item_right">
                  <Input />
                </div>
              </div>
              <div className="grid-col-4">
                <strong className="content">Được tạo bởi:</strong>
                <div className="ModalUpFile-item_right">
                  <Input />
                </div>
              </div>
            </>
          )}
          {option === 'Bài giảng' && (
            <>
              <h6 className="content">Tùy chọn các tài liệu</h6>
              <Search />
              <Table
                rowSelection={{
                  selectedRowKeys,
                  onChange: onSelectedRowKeysChange,
                }}
                columns={columns}
                dataSource={list}
                scroll={{ y: 400 }}
                pagination={false}
              />
            </>
          )}
          {option === 'Tài nguyên' && (
            <>
              <h6 className="content">Tùy chọn các tài liệu</h6>
              <Search />
              <Table
                rowSelection={{
                  selectedRowKeys,
                  onChange: onSelectedRowKeysChange,
                }}
                columns={columns}
                dataSource={[]}
                scroll={{ y: 400 }}
                pagination={false}
              />
            </>
          )}
          <div className="ModalUpFile-control">
            <Button
              buttonSize="btn--small"
              buttonStyle="btn--primary-solid"
              onClick={() => dispatch(setModalUpFile(false))}
            >
              Đăng tải tệp này
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalUpFile;
