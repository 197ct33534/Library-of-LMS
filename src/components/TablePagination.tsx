import { Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MyPagination } from '../Pages/Book/ListDocument';
import {
  resetCheckboxTable,
  setCheckboxTable,
  setPageSize,
} from '../Redux/commonSlice';
import { commonSelector } from '../Redux/comonSelector';
interface props {
  data: any[];
  columns: any[];
  checkbox?: boolean;
  hasPagitation?: boolean;
}
const TablePagination = (props: props) => {
  const { data, columns, checkbox, hasPagitation } = props;
  const [current, setCurrent] = useState(1);
  const dispatch = useDispatch();
  const getData = (current: number, pageSize: number, data: any[]) => {
    return data.slice((current - 1) * pageSize, current * pageSize);
  };
  const common = useSelector(commonSelector);
  const pageSize = common.pageSize;
  //handle checkbox

  useEffect(() => {
    return () => {
      console.log('reset CheckboxTable');

      dispatch(resetCheckboxTable());
    };
  }, [dispatch]);

  const selectedRowKeys = common.checkboxTable;

  const onSelectedRowKeysChange = (x: any) => {
    dispatch(setCheckboxTable([...x]));

    console.log('check table ', x);
  };
  return (
    <>
      {checkbox ? (
        <Table
          columns={columns}
          pagination={false}
          dataSource={getData(current, pageSize, data)}
          rowSelection={{ selectedRowKeys, onChange: onSelectedRowKeysChange }}
        />
      ) : (
        <Table
          columns={columns}
          pagination={false}
          dataSource={getData(current, pageSize, data)}
        />
      )}
      {hasPagitation === false ? null : (
        <div className="tablePagiontion">
          <p>
            Hiển thị
            <input
              type="number"
              defaultValue={pageSize}
              onChange={(e) => {
                dispatch(setPageSize(+e.target.value));
              }}
            />
            hàng trong mỗi trang
          </p>
          <MyPagination
            total={data.length}
            current={current}
            onChange={setCurrent}
            pageSize={pageSize}
          />
        </div>
      )}
    </>
  );
};

export default TablePagination;
