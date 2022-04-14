import React, { useEffect } from 'react';
import Button from '../../Common/Button';
import Avatar from '../../Assets/images/avatar.png';
import camera from '../../Assets/images/camera.png';
import FormInfo from './FormInfo';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector } from './authSelector';
import { setInfoAuth, setModel, setSettingAuth } from './authSlice';
import FormChangePass from './FormChangePass';

const InfoUser = () => {
  const listData = useSelector(authSelector);
  const state = listData.infoAuth;
  const setting = listData.settingAuth;

  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(setInfoAuth(true));
    };
  }, []);
  return (
    <>
      <div className="info-button">
        <div className="info-change">
          <div
            className={`info-change_button ${state ? 'active' : ''}`}
            onClick={() => dispatch(setInfoAuth(true))}
          >
            Thông tin cá nhân
          </div>
          <div
            className={`info-change_button ${state ? '' : 'active'}`}
            onClick={() => dispatch(setInfoAuth(false))}
          >
            Thay đổi mật khẩu
          </div>
        </div>
        {state && (
          <button
            className="btn btn--primary--solid btn--medium"
            onClick={() => dispatch(setSettingAuth(true))}
          >
            Chỉnh sửa
          </button>
        )}
      </div>
      <div className="info-card">
        <h2>{state ? 'Thông tin chung' : 'Thay đổi mật khẩu'}</h2>
        {state ? (
          <div className="grid-col-3">
            <div
              className="info-card-avatar"
              onClick={() => dispatch(setModel(true))}
            >
              <span>
                <img src={Avatar} alt="" />
                <img src={camera} alt="" />
              </span>
            </div>
            <FormInfo setting={setting} />
          </div>
        ) : (
          <FormChangePass />
        )}
      </div>
    </>
  );
};

export default InfoUser;
