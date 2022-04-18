import React, { useEffect, useState } from 'react';
import Dropdown from '../../../components/Dropdown';
import TitleHeader from '../../../components/TitleHeader';
import eye from '../../../Assets/images/eye.png';
import { Table } from 'antd';
import { commonSelector } from '../../../Redux/comonSelector';
import { useDispatch, useSelector } from 'react-redux';
import { setPageSize } from '../../../Redux/commonSlice';
import { MyPagination } from '../../../Pages/Book/ListDocument';
import { useNavigate } from 'react-router-dom';
import TeacherListDocument from '../../../firebase/TeacherListDocument';
import { teacherSelector } from '../teacherSelector';
import { setAssignment, setFakedataList } from '../teacherSlice';
import Search from '../../../components/Search';
import ModalAssigment from './ModalAssigment';
const NestedTable = () => {
  const expandedRowRender = () => {
    const columns = [
      { title: 'Mã lớp', dataIndex: 'idClass', key: 'idClass' },
      { title: 'Tên lớp', dataIndex: 'nameClass', key: 'nameClass' },
      {
        title: 'Xem chi tiết',

        render: () => (
          <span>
            <img src={eye} alt="" />
          </span>
        ),
      },
    ];

    const data = [];
    for (let i = 1; i < 4; ++i) {
      data.push({
        key: i,
        idClass: 'DLK6102H202' + i,
        nameClass:
          i % 2
            ? 'Thương mại điện tử'
            : i % 3
            ? 'Công nghệ phần mềm'
            : 'Phân tích thiết kế',
      });
    }
    return (
      <Table
        className="TableChildren"
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    );
  };
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const handleChangeSelections = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const text = e.target.value;
    switch (text) {
      case 'Chi tiết môn học':
        navigation('detailSubject');
        return;
      case 'Danh sách tài liệu':
        navigation('listDocument');
        return;

      case 'Phân công tài liệu':
        dispatch(setAssignment(true));
        return;
      default:
        break;
    }
  };

  const teacher = useSelector(teacherSelector);
  const list = teacher.fakedataList;

  useEffect(() => {
    const getlistDocuments = async () => {
      const datas = await TeacherListDocument.getAllTeacherList();
      const dataArray = datas.docs.map((data) => {
        const result = data.data();
        result.key = data.id;
        return result;
      });
      dispatch(setFakedataList(dataArray));
    };
    if (list.length <= 1) {
      console.log('rend lan 1 vao redux');

      getlistDocuments();
    }
  }, [dispatch, list]);

  const columns = [
    {
      title: 'Mã môn học',
      dataIndex: 'idSubject',
      key: 'idSubject',
      sorter: (a: any, b: any) => a.idSubject.length - b.idSubject.length,
    },
    {
      title: 'Tên môn học',
      dataIndex: 'nameSubject',
      key: 'nameSubject',
      sorter: (a: any, b: any) => a.nameSubject.length - b.nameSubject.length,
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
      title: 'Tình trạng',
      dataIndex: 'status',
      key: 'status',
      sorter: (a: any, b: any) => a.status.length - b.status.length,
      render: (text: string) => {
        if (text === 'Đã phê duyệt') {
          return <span className="Table-status green">{text}</span>;
        }
        if (text === 'Đã huỷ') {
          return <span className="Table-status red">{text}</span>;
        }
        return <span className="Table-status blue">{text}</span>;
      },
    },
    {
      title: 'Số tài liệu chờ duyệt',
      dataIndex: 'numberOfDocuments',
      key: 'numberOfDocuments',
    },

    {
      render: () => (
        <select
          onChange={(e) => handleChangeSelections(e)}
          className="SelectHidden"
          value="&#8942;"
          style={{ padding: '0', transform: 'translateX(50%)' }}
        >
          <option value="&#8942;">&#8942;</option>

          <option value="Chi tiết môn học">Chi tiết môn học</option>
          <option value="Danh sách tài liệu">Danh sách tài liệu</option>
          <option value="Phân công tài liệu">Phân công tài liệu</option>
        </select>
      ),
    },
  ];
  const [current, setCurrent] = useState(1);

  const getData = (current: number, pageSize: number, data: any[]) => {
    return data.slice((current - 1) * pageSize, current * pageSize);
  };
  const common = useSelector(commonSelector);
  const pageSize = common.pageSize;

  return (
    <>
      <Table
        columns={columns}
        expandable={{ expandedRowRender }}
        pagination={false}
        dataSource={getData(current, pageSize, list)}
      />
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
          total={list.length}
          current={current}
          onChange={setCurrent}
          pageSize={pageSize}
        />
      </div>
    </>
  );
};
const BookTeacher = () => {
  const [subject, setSubjects] = useState('Xếp theo tên môn học');
  const teacher = useSelector(teacherSelector);
  const assignment = teacher.assignment;
  return (
    <>
      <TitleHeader titlePrimary="Danh sách môn giảng dạy" />
      <div className="book">
        <div className="book-control" style={{ marginBottom: '24px' }}>
          <div className="book-control-left">
            <div className="book-control-left_item">
              <Dropdown
                selected={subject}
                setSelected={setSubjects}
                options={['Xếp theo tên môn học', 'Lần truy cập gần nhất']}
              />
            </div>
          </div>
          <div className="book-control-right">
            <Search />
          </div>
        </div>
        <NestedTable />
      </div>
      {assignment && <ModalAssigment />}
    </>
  );
};

export default BookTeacher;
