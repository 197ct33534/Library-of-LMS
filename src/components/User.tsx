import React from 'react';
import user from '../Assets/images/user_circle.png';
const User = () => {
  return (
    <div className="user">
      <div className="leaderShip">
        <img src={user} alt="" />

        <span className="leaderShip-name">Admin</span>
        <span className="leaderShip-dividingLine"></span>
        <span className="leaderShip-logout">Đằng xuất</span>
      </div>
    </div>
  );
};

export default User;
