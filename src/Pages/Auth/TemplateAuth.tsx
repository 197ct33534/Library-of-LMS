import React from 'react';
import { Outlet } from 'react-router-dom';
import Logo from '../../Assets/images/LogoEducation.png';

const TemplateAuth: React.FC = () => {
  console.log('TemplateAuth didmount');

  return (
    <div className="auth">
      <img src={Logo} alt="" className="auth-logo" />
      <Outlet />
    </div>
  );
};

export default TemplateAuth;
