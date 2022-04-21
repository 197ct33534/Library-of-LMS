import { Checkbox, Dropdown, Input, Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import Button from '../../../Common/Button';
import TitleHeader from '../../../components/TitleHeader';
import Editor from '../../../Pages/Bell/Editor';
import tep from '../../../Assets/images/tep.png';
import cloud from '../../../Assets/images/cloud_up.png';
import { setModalUpFile } from '../teacherSlice';
import { useDispatch, useSelector } from 'react-redux';
import { teacherSelector } from '../teacherSelector';
import ModalUpFile from './ModalUpFile';

const menu = (
  <Menu>
    <Menu.Item>
      <Checkbox>Tất cả lớp học</Checkbox>
    </Menu.Item>
    <Menu.Item>
      <Checkbox>Hệ thống thông tin kinh doanh 1</Checkbox>
    </Menu.Item>
    <Menu.Item>
      <Checkbox>Ngân hàng 1</Checkbox>
    </Menu.Item>
    <Menu.Item>
      <Checkbox>Thương mại điện tử 1</Checkbox>
    </Menu.Item>
  </Menu>
);
const FormAddDocument = () => {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [note, setNote] = useState('');
  useEffect(() => {
    setEditorLoaded(true);
  }, []);
  const dispath = useDispatch();
  const modalUpFile = useSelector(teacherSelector).modalUpFile;
  return (
    <>
      {modalUpFile && <ModalUpFile />}
      <TitleHeader
        titlePrimary="Thương mại điện tử"
        title={['Danh sách môn giảng dạy']}
      />
      <div className="info-card" style={{ marginTop: '32px' }}>
        <h2>Thông tin chung</h2>
        <div className="FormAddDocument">
          <div className="grid-col-8">
            <strong>Tiêu đề*</strong>
            <div className="FormAddDocument-item">
              <Input />
            </div>

            <strong>Ghi chú</strong>
            <div className="FormAddDocument-item">
              <Editor
                name="note"
                onChange={(note) => {
                  setNote(note);
                }}
                editorLoaded={editorLoaded}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="info-card">
        <h2>Nội dung bài giảng</h2>
        <div className="FormAddDocument">
          <div className="grid-col-8">
            <strong>Bài giảng*</strong>
            <div className="FormAddDocument-item">
              <div className="collapseChilren-file_item">
                <div>
                  <img src={tep} alt="" />
                  <p>HTKL_KT45P_10A1.doc</p>
                </div>
                <Button
                  type="button"
                  buttonStyle="btn--lightPrimary--solid"
                  buttonSize="btn--small"
                >
                  <i className="bx bx-download"></i>
                  <span>Tải xuống</span>
                </Button>
              </div>
              <p className="content" style={{ fontStyle: 'italic' }}>
                Kiểu file .pdf .jpeg .png .jpg với dung lượng tối đa là 100 MB.
              </p>
              <div
                className="FormAddDocument-item_upload"
                onClick={() => dispath(setModalUpFile(true))}
              >
                <img src={cloud} alt="" />
                <p>Có thể thêm tập tin bằng cách kéo thả</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="info-card">
        <h2>Phân công bài giảng</h2>
        <div className="FormAddDocument">
          <div className="grid-col-8">
            <strong>
              <Checkbox></Checkbox>Lớp học
            </strong>
            <div className="FormAddDocument-item">
              <Dropdown overlay={menu}>
                <Input />
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormAddDocument;
