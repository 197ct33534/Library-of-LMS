import React from 'react';
interface PropButton {
  children?: React.ReactNode;
  type: 'button' | 'submit' | 'reset' | undefined;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void | undefined;

  buttonStyle: string;
  buttonSize: string;
}
const STYLES = [
  'btn--primary--solid',
  'btn--gray--solid',

  'btn--warning--solid',
  'btn--danger--solid',
  'btn--success--solid',
  'btn--primary--outline',
  'btn--warning--outline',
  'btn--danger--outline',
  'btn--success--outline',
];
const SIZES = ['btn--medium', 'btn--large', 'btn--XL'];
const Button = (props: PropButton) => {
  const { children, buttonStyle, onClick, buttonSize } = props;
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      onClick={onClick}
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
    >
      {children}
    </button>
  );
};

export default Button;
