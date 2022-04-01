import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import user from '../Assets/images/user_circle.png';
import { authLogout } from '../Pages/Auth/authSlice';
const User = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const handleLogout = () => {
    dispatch(authLogout());
    navigation('/auth');
  };
  return (
    <div className="user">
      <div className="leaderShip">
        <Link to="/info">
          <img src={user} alt="" />
          <span className="leaderShip-name"> Admin</span>
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
