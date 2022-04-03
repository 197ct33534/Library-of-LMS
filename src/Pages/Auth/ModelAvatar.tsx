import React, { useEffect, useState } from 'react';
import globe from '../../Assets/images/globe.png';
import Avatar from '../../Assets/images/avatar.png';
import Button from '../../Common/Button';
import { setModel } from './authSlice';
import { useDispatch } from 'react-redux';

const ModelAvatar = () => {
  const dispatch = useDispatch();
  const [rangeVal, setRange] = useState(0);
  const [success, setSuccess] = useState(false);
  const avatar = document.getElementById('avatarInfo');
  const handlezoomIn = () => {
    return rangeVal >= 9 ? rangeVal : setRange(rangeVal + 1);
  };
  const handlezoomOut = () => {
    return rangeVal === 0 ? rangeVal : setRange(rangeVal - 1);
  };
  useEffect(() => {
    if (avatar) {
      avatar.style.transform = `scale(1.${rangeVal})`;
      // console.log(rangeVal);
    }
  }, [avatar, rangeVal]);
  // const reader = new FileReader();
  // const img = document.getElementById('fileImg');
  // if (img) {
  //   img.addEventListener('change', (e: any) => {
  //     const file = e.target.files[0];
  //     // todo: use file pointer
  //     console.log('file', file);
  //     reader.readAsDataURL(file);
  //     // console.log('file', file);
  //     reader.addEventListener('load', (event: any) => {
  //       console.log('file2', event.target);

  //       //   console.log('123');
  //       const url = event.target.results;
  //       console.log('file3', URL.createObjectURL(url));
  //       //   if (avatar) {
  //       //     avatar.src = URL.createObjectURL(url);
  //       //   }
  //     });
  //   });
  // }
  const handleSave = () => {
    setSuccess(true);
    const id = setTimeout(() => {
      setSuccess(false);
      dispatch(setModel(false));
    }, 3000);
  };
  return (
    <div className="ModelAvatar">
      {success ? (
        <div className="ModelAvatar-notify">
          <span className="ModelAvatar-notify_check">
            <i className="bx bx-check"></i>
          </span>

          <span className="ModelAvatar-notify_content">
            Cập nhật ảnh đại diện thành công!
          </span>
        </div>
      ) : (
        <div className="ModelAvatar-card">
          <h1 className="ModelAvatar-card_title">Tải lên ảnh đại diện</h1>
          <div className="ModelAvatar-card_content">
            <img src={globe} alt="" />
            <span>Ảnh đại diện của học viên sẽ được hiển thị công khai.</span>
          </div>
          <div className="ModelAvatar-card_avatar">
            <img src={Avatar} alt="" id="avatarInfo" />
          </div>

          <div className="ModelAvatar-size">
            <span className="ModelAvatar-size_btn" onClick={handlezoomOut}>
              -
            </span>
            <input
              type="range"
              id="zoomImg"
              name="zoomImg"
              min="0"
              max="9"
              step="1"
              value={rangeVal}
              onInput={(e) => {
                setRange(+e.currentTarget.value);
              }}
            ></input>
            <span className="ModelAvatar-size_btn" onClick={handlezoomIn}>
              +
            </span>
          </div>
          <div className="ModelAvatar-upload">
            <label htmlFor="fileImg">Chọn tệp tải lên...</label>
            <input type="file" name="fileImg" id="fileImg" />
          </div>

          <div className="ModelAvatar-control">
            <Button
              type="reset"
              buttonStyle="btn--gray--solid"
              buttonSize="btn--medium"
              onClick={() => dispatch(setModel(false))}
            >
              Hủy
            </Button>
            <Button
              type="submit"
              buttonStyle="btn--primary--solid"
              buttonSize="btn--medium"
              onClick={handleSave}
            >
              Lưu
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModelAvatar;
