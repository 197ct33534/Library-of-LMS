import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import user from '../Assets/images/user_circle.png';
import { authSelector } from '../Pages/Auth/authSelector';
import { authLogout } from '../Pages/Auth/authSlice';
const User = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const auth = useSelector(authSelector).idlogin;
  const handleLogout = () => {
    dispatch(authLogout());
    navigation('/auth');
  };
  return (
    <div className="user">
      <div className="leaderShip">
        <Link to="/info">
          <img src={user} alt="" />
          <span className="leaderShip-name">
            {auth.nameAccount.toUpperCase()}
          </span>
        </Link>
        <span className="leaderShip-dividingLine"></span>
        <span className="leaderShip-logout" onClick={handleLogout}>
          Đằng xuất
        </span>
      </div>
    </div>
  );
};

export default User;
