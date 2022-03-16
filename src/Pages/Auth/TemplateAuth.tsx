import React from 'react';
import Logo from '../../Assets/images/LogoEducation.png';
type Props = { children: React.ReactNode };
const TemplateAuth: React.FC<Props> = ({ children }) => {
  return (
    <div className="auth">
      <img src={Logo} alt="" className="auth-logo" />
      {children}
    </div>
  );
};

export default TemplateAuth;
