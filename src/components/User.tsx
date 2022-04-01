import React from 'react';
import { Link } from 'react-router-dom';
import user from '../Assets/images/user_circle.png';
const User = () => {
  return (
    <div className="user">
      <div className="leaderShip">
        <Link to="/info">
          <img src={user} alt="" />
          <span className="leaderShip-name"> Admin</span>
        </Link>
        <span className="leaderShip-dividingLine"></span>
        <span className="leaderShip-logout">Đằng xuất</span>
      </div>
    </div>
  );
};

export default User;
