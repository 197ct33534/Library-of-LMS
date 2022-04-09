import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import Slidebar from '../components/Slidebar';
import User from '../components/User';
import { authSelector } from './Auth/authSelector';
import ModelAvatar from './Auth/ModelAvatar';
import { bookSelector } from './Book/bookSelector';
import ModalApprove from './Book/ModalApprove';
import ModalCancel from './Book/ModalCancel';
import ModalSeeAdd from './Book/ModalSeeAdd';
const Template = () => {
  console.log('template didmouted');
  const listData = useSelector(authSelector);
  const book = useSelector(bookSelector);
  const modelApproval = book.modelApproval;
  const modelCancelDocument = book.modelCancelDocument;
  const seeAdd = book.seeAdd;

  const model = listData.model;
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
      {modelApproval && <ModalApprove />}
      {modelCancelDocument && <ModalCancel />}
      {seeAdd && <ModalSeeAdd />}

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
