import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TablePagination from '../../../components/TablePagination';
import { fileSelector } from '../../../Pages/File/fileSelector';

const TableFile = () => {
  const file = useSelector(fileSelector);

  const [data, setData] = useState(file.fetDataFile.slice(1, 5));
  const handleRemvoeRowData = (record: any) => {
    const newdata = data.filter((item) => item !== record);
    setData(newdata);
  };
  const columns = [
    {
      title: 'Tên file',
      dataIndex: 'nameSubject',
      key: 'nameSubject',

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
      title: 'Loại',
      dataIndex: 'typeFile',
      key: 'typeFile',
      render: (text: string, record: any) => {
        return (
          <>
            <span>{text}</span>
          </>
        );
      },
    },

    {
      title: 'Kích thước',
      dataIndex: 'sizeFile',
      key: 'sizeFile',
    },
    {
      title: '',
      key: 'action',

      render: (record: any) => {
        return (
          <>
            <i
              className="bx bx-x-circle "
              onClick={() => handleRemvoeRowData(record)}
              style={{ color: '#FF7506', cursor: 'pointer', fontSize: '22px' }}
            ></i>
          </>
        );
      },
    },
  ];
  return (
    <>
      <TablePagination columns={columns} data={data} hasPagitation={false} />
    </>
  );
};

export default TableFile;
