import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import Slidebar from '../components/Slidebar';
import User from '../components/User';
import { authSelector } from './Auth/authSelector';
import ModelAvatar from './Auth/ModelAvatar';
const Template = () => {
  console.log('template didmouted');
  const listData = useSelector(authSelector);
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
