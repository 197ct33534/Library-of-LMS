import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../Common/Button';
import TablePagination from '../../components/TablePagination';
import { fileSelector } from './fileSelector';
import { setIsFileDownload } from './fileSlice';

const ModalDowload = () => {
  const dispatch = useDispatch();
  const selector = useSelector(fileSelector);
  const [data, setData] = useState(selector.fetDataFile.slice(1, 6));
  //   const data = selector.fetDataFile.slice(1, 6);
  const handleRemvoeRowData = (record: any) => {
    const newdata = data.filter((item) => item !== record);
    setData(newdata);
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
      title: 'Kích thước',
      dataIndex: 'sizeFile',
      key: 'sizeFile',
      sorter: (a: any, b: any) => a.sizeFile.length - b.sizeFile.length,
    },
    {
      title: '',
      key: 'action',

      render: (record: any) => {
        return (
          <>
            <i
              className="bx bx-x actionDelete"
              onClick={() => handleRemvoeRowData(record)}
            ></i>
          </>
        );
      },
    },
  ];

  return (
    <>
      <div className="ModelAvatar">
        <div className="ModalDowload">
          <h1>Thêm tệp</h1>
          <TablePagination
            columns={columns}
            data={data}
            checkbox
            hasPagitation={false}
          />

          <div className="ModalDowload-btn">
            <Button
              buttonSize="btn--medium"
              buttonStyle="btn--gray--solid"
              onClick={() => dispatch(setIsFileDownload(false))}
            >
              Huỷ
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalDowload;
