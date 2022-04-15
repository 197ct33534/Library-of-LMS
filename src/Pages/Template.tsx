import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import Modal from '../Common/Modal';
import Slidebar from '../components/Slidebar';
import User from '../components/User';
import { authSelector } from './Auth/authSelector';
import ModelAvatar from './Auth/ModelAvatar';

import { bellSelector } from './Bell/bellSelector';
import { setIsNotifyRemove } from './Bell/bellSlice';

import { bookSelector } from './Book/bookSelector';
import { setModelApproval } from './Book/bookSlice';

import ModalCancel from './Book/ModalCancel';
import ModalSeeAdd from './Book/ModalSeeAdd';
import { fileSelector } from './File/fileSelector';
import { setIsFileRemove } from './File/fileSlice';
import ModalDowload from './File/ModalDowload';
import ModalRenameFile from './File/ModalRenameFile';
import ModalSetupRole from './Setting/ModalSetupRole';
import { settingSelector } from './Setting/settingSelector';
import { setModalRemove } from './Setting/settingSlice';
const Template = () => {
  console.log('template didmouted');
  const listData = useSelector(authSelector);
  const model = listData.model;

  const book = useSelector(bookSelector);
  const modelApproval = book.modelApproval;
  const modelCancelDocument = book.modelCancelDocument;
  const seeAdd = book.seeAdd;

  const bell = useSelector(bellSelector);
  const isNotifyRemove = bell.isNotifyRemove;

  const file = useSelector(fileSelector);
  const isFileRemove = file.isFileRemove;
  const isFileRename = file.isFileRename;
  const isFileDowload = file.isFileDowload;

  const setting = useSelector(settingSelector);
  const modalRole = setting.modalRole;
  const modalRemove = setting.modalRemove;

  const navigation = useNavigate();

  useEffect(() => {
    if (!listData.idlogin.id) {
      console.log('chua co id');

      navigation('/auth');
    }
  }, [listData, navigation]);
  return (
    <>
      {model && <ModelAvatar />}

      {modelApproval && (
        <Modal
          title="Phê duyệt"
          content=" Xác nhận muốn phê duyệt đề thi này và các thông tin bên trong? Sau
          khi phê duyệt sẽ không thể hoàn tác."
          textSucces=" Xác nhận"
          textCancel="Huỷ"
          funcCancel={setModelApproval(false)}
        />
      )}

      {modelCancelDocument && <ModalCancel />}
      {seeAdd && <ModalSeeAdd />}

      {isNotifyRemove && (
        <Modal
          title="Xóa"
          content=" Xác nhận muốn xoá những thông tin đã chọn? Sau khi xoá sẽ không thể
          hoàn tác."
          textSucces=" Xác nhận"
          textCancel="Huỷ"
          funcCancel={setIsNotifyRemove(false)}
        />
      )}
      {isFileRemove && (
        <Modal
          title="Xác nhận xóa"
          content="Bạn có chắc chắn muốn xóa tệp này khỏi thư viện không?"
          textSucces="Xoá"
          textCancel="Huỷ"
          funcCancel={setIsFileRemove(false)}
        />
      )}
      {isFileRename && <ModalRenameFile />}
      {isFileDowload && <ModalDowload />}

      {modalRole && <ModalSetupRole />}
      {modalRemove && (
        <Modal
          title="Xóa vai trò"
          content="Xác nhận muốn xoá vai trò này và toàn bộ thông tin bên trong? Sau khi xoá sẽ không thể hoàn tác."
          textSucces="Xác nhận"
          textCancel="Huỷ"
          funcCancel={setModalRemove(false)}
        />
      )}
      <Slidebar />
      <div className="grid main">
        <div className="row">
          <User />
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Template;
