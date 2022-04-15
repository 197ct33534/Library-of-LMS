import React from 'react';
import Button from '../../Common/Button';
import TitleHeader from '../../components/TitleHeader';
import Avatar from '../../Assets/images/avatar.png';
import camera from '../../Assets/images/camera.png';
import { useDispatch, useSelector } from 'react-redux';
import { setModel } from '../Auth/authSlice';

import { settingSelector } from './settingSelector';
import { setHasUpdate } from './settingSlice';
import { useFormik } from 'formik';
import { Input } from 'antd';
const LibarySystem = () => {
  const dispatch = useDispatch();
  const setting = useSelector(settingSelector);
  const hasUpdate = setting.hasUpdate;

  const formik = useFormik({
    initialValues: {
      schoolCode: '012334488',
      schoolName: 'Tư Thục Tự Quản',
      Website: 'http://thuvientruonghoc.com.vn',
      schoolType: 'Dân lập',
      Principal: 'Trần Trung Nghĩa',
      nameLibrarySystem: 'Thư viện tự túc',
      accessAddress: '233/23 Nguyễn Văn D, phường Tân Phú Quận 9',
      phoneNumber: '01232323445',
      Email: 'email@gmail.com',
      definedLanguage: 'Sample text',
      defaultSchoolyear: 'Sample text',
    },
    onSubmit: (values) => {
      console.log('data submit ', values);
    },
  });
  return (
    <>
      <TitleHeader
        titlePrimary="Thông tin hệ thống thư viện"
        title={['Cài đặt đề thi']}
      />
      <form onSubmit={formik.handleSubmit}>
        <div className="LibarySystem-control">
          {hasUpdate ? (
            <>
              <Button
                buttonStyle="btn--gray--solid"
                buttonSize="btn--large"
                onClick={() => dispatch(setHasUpdate(false))}
                style={{ marginRight: '16px' }}
              >
                Hủy
              </Button>
              <Button
                buttonStyle="btn--primary--solid"
                buttonSize="btn--large"
                type="submit"
                onClick={() => dispatch(setHasUpdate(false))}
                style={{ marginLeft: '16px' }}
              >
                Lưu
              </Button>
            </>
          ) : (
            <Button
              buttonStyle="btn--primary--solid"
              buttonSize="btn--large"
              onClick={() => dispatch(setHasUpdate(true))}
            >
              <i className="bx bx-edit"></i>Chỉnh sửa
            </Button>
          )}
        </div>

        <div className="info-card">
          <h2>Thông tin chung</h2>
          <div className="grid-col-4">
            <div
              className="info-card-avatar"
              onClick={() => dispatch(setModel(true))}
            >
              <span>
                <img src={Avatar} alt="" />
                <img src={camera} alt="" />
              </span>
            </div>
            <div className="FormLibary">
              <div className="grid-col-2">
                <div className="FormLibary-warpInput ">
                  <div className="FormLibary-warpInput_input grid-col-3">
                    <label htmlFor="schoolCode">Mã trường học:</label>
                    <Input
                      name="schoolCode"
                      value={formik.values.schoolCode}
                      onChange={formik.handleChange}
                      disabled={!hasUpdate}
                    />
                  </div>
                  <div className="FormLibary-warpInput_input grid-col-3">
                    <label htmlFor="schoolName">Tên trường học:</label>
                    <Input
                      name="schoolName"
                      value={formik.values.schoolName}
                      onChange={formik.handleChange}
                      disabled={!hasUpdate}
                    />
                  </div>
                  <div className="FormLibary-warpInput_input grid-col-3">
                    <label htmlFor="Website">Website</label>
                    <Input
                      name="Website"
                      value={formik.values.Website}
                      onChange={formik.handleChange}
                      disabled={!hasUpdate}
                    />
                  </div>
                </div>
                <div className="FormLibary-warpInput ">
                  <div className="FormLibary-warpInput_input grid-col-3">
                    <label htmlFor="">Loại trường:</label>

                    <select
                      value={formik.values.schoolType}
                      onChange={formik.handleChange}
                      name="schoolType"
                      disabled={!hasUpdate}
                    >
                      <option value="Dân lập">Dân lập</option>
                      <option value="Nhà nước">Nhà nước</option>
                    </select>
                  </div>
                  <div className="FormLibary-warpInput_input grid-col-3">
                    <label htmlFor="Principal">Hiệu trưởng:</label>
                    <Input
                      name="Principal"
                      value={formik.values.Principal}
                      onChange={formik.handleChange}
                      disabled={!hasUpdate}
                    />
                  </div>
                </div>
              </div>
              <hr />
              <div className="grid-col-2">
                <div className="FormLibary-warpInput ">
                  <div className="FormLibary-warpInput_input grid-col-3">
                    <label htmlFor="nameLibrarySystem">
                      Tên hệ thống thư viện
                    </label>
                    <Input
                      name="nameLibrarySystem"
                      value={formik.values.nameLibrarySystem}
                      onChange={formik.handleChange}
                      disabled={!hasUpdate}
                    />
                  </div>
                  <div className="FormLibary-warpInput_input grid-col-3">
                    <label htmlFor="accessAddress">Địa chỉ truy cập</label>
                    <Input
                      name="accessAddress"
                      value={formik.values.accessAddress}
                      onChange={formik.handleChange}
                      disabled={!hasUpdate}
                    />
                  </div>
                </div>
                <div className="FormLibary-warpInput ">
                  <div className="FormLibary-warpInput_input grid-col-3">
                    <label htmlFor="phoneNumber">Số điện thoại:</label>
                    <Input
                      value={formik.values.phoneNumber}
                      onChange={formik.handleChange}
                      name="phoneNumber"
                      disabled={!hasUpdate}
                    />
                  </div>
                  <div className="FormLibary-warpInput_input grid-col-3">
                    <label htmlFor="Email">Email:</label>
                    <Input
                      name="Email"
                      value={formik.values.Email}
                      onChange={formik.handleChange}
                      disabled={!hasUpdate}
                    />
                  </div>
                </div>
              </div>
              <hr />
              <div className="grid-col-2">
                <div className="FormLibary-warpInput ">
                  <div className="FormLibary-warpInput_input grid-col-3">
                    <label htmlFor="definedLanguage">Ngôn ngữ xác định</label>
                    <select
                      name="definedLanguage"
                      value={formik.values.definedLanguage}
                      onChange={formik.handleChange}
                      disabled={!hasUpdate}
                    >
                      <option value="Tiếng Việt">Tiếng Việt</option>
                      <option value="Tiếng Anh"> Tiếng Anh</option>
                      <option value="Tiếng Trung Quốc">Tiếng Trung Quốc</option>
                      <option value="Tiếng Pháp">Tiếng Pháp</option>
                    </select>
                  </div>
                  <div className="FormLibary-warpInput_input grid-col-3">
                    <label htmlFor="defaultSchoolyear">
                      Niên khóa mặc định
                    </label>
                    <select
                      name="defaultSchoolyear"
                      value={formik.values.defaultSchoolyear}
                      onChange={formik.handleChange}
                      disabled={!hasUpdate}
                    >
                      <option value="2020-2021">2020-2021</option>
                      <option value="2019-2020">2019-2020</option>
                      <option value="2021-2022">2021-2022</option>
                      <option value="2022-2023">2022-2023</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default LibarySystem;
