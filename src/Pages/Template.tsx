import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import Modal from '../Common/Modal';
import Success from '../Common/Success';
import Slidebar from '../components/Slidebar';
import User from '../components/User';
import { setIsNotifyRemove } from '../Redux/commonSlice';
import { commonSelector } from '../Redux/comonSelector';
import { authSelector } from './Auth/authSelector';
import ModelAvatar from './Auth/ModelAvatar';

import { bellSelector } from './Bell/bellSelector';

import { bookSelector } from './Book/bookSelector';
import { setModelApproval } from './Book/bookSlice';

import ModalCancel from './Book/ModalCancel';
import ModalSeeAdd from './Book/ModalSeeAdd';
import { fileSelector } from './File/fileSelector';
import { setIsFileRemove } from './File/fileSlice';
import ModalDowload from './File/ModalDowload';
import ModalRenameFile from './File/ModalRenameFile';
import ModalNewExam from './Setting/ModalNewExam';
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

  const file = useSelector(fileSelector);
  const isFileRemove = file.isFileRemove;
  const isFileRename = file.isFileRename;
  const isFileDowload = file.isFileDowload;

  const setting = useSelector(settingSelector);
  const modalRole = setting.modalRole;
  const modalRemove = setting.modalRemove;
  const modalNewExam = setting.modalNewExam;
  const modalComment = setting.modalComment;

  const common = useSelector(commonSelector);
  const isNotifyRemove = common.isNotifyRemove;

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
      {modalComment && <Success text="Ch??ng t??i s??? ph???n h???i s???m nh???t!" />}
      {modelApproval && (
        <Modal
          title="Ph?? duy???t"
          content=" X??c nh???n mu???n ph?? duy???t ????? thi n??y v?? c??c th??ng tin b??n trong? Sau
          khi ph?? duy???t s??? kh??ng th??? ho??n t??c."
          textSucces=" X??c nh???n"
          textCancel="Hu???"
          funcCancel={setModelApproval(false)}
        />
      )}

      {modelCancelDocument && <ModalCancel />}
      {seeAdd && <ModalSeeAdd />}

      {isNotifyRemove && (
        <Modal
          title="X??a"
          content=" X??c nh???n mu???n xo?? nh???ng th??ng tin ???? ch???n? Sau khi xo?? s??? kh??ng th???
          ho??n t??c."
          textSucces=" X??c nh???n"
          textCancel="Hu???"
          funcCancel={setIsNotifyRemove(false)}
        />
      )}
      {isFileRemove && (
        <Modal
          title="X??c nh???n x??a"
          content="B???n c?? ch???c ch???n mu???n x??a t???p n??y kh???i th?? vi???n kh??ng?"
          textSucces="Xo??"
          textCancel="Hu???"
          funcCancel={setIsFileRemove(false)}
        />
      )}
      {isFileRename && <ModalRenameFile />}
      {isFileDowload && <ModalDowload />}

      {modalRole && <ModalSetupRole />}
      {modalRemove && (
        <Modal
          title="X??a vai tr??"
          content="X??c nh???n mu???n xo?? vai tr?? n??y v?? to??n b??? th??ng tin b??n trong? Sau khi xo?? s??? kh??ng th??? ho??n t??c."
          textSucces="X??c nh???n"
          textCancel="Hu???"
          funcCancel={setModalRemove(false)}
        />
      )}
      {modalNewExam.type && <ModalNewExam data={modalNewExam.record} />}

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
