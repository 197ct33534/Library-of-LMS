import React from 'react';
import Book from '../../firebase/Book';
import 'antd/dist/antd.css';

import { Table } from 'antd';

interface Book {
  columns: any;
  data: any;
}
const TableBook = (props: Book) => {
  const { columns, data } = props;

  return (
    <div style={{ marginTop: '24px' }}>
      {<Table columns={columns} dataSource={data} />}
    </div>
  );
};

export default TableBook;
