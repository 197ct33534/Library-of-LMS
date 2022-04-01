import React from 'react';
import { Outlet } from 'react-router-dom';
import Slidebar from '../components/Slidebar';
import User from '../components/User';
const Template = () => {
  console.log('template didmouted');

  return (
    <>
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
