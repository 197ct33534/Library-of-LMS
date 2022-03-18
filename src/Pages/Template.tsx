import React from 'react';
import Slidebar from '../components/Slidebar';
import User from '../components/User';

const Template = () => {
  return (
    <div>
      <Slidebar />
      <div className="grid main">
        <div className="row">
          <User />
        </div>
      </div>
    </div>
  );
};

export default Template;
