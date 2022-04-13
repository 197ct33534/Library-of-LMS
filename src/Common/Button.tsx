import React from 'react';
interface PropButton
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {
  buttonStyle: string;
  buttonSize: string;
  style?: any;
}
// export interface ButtonProps
const STYLES = [
  'btn--primary--solid',
  'btn--gray--solid',
  'btn--lightPrimary--solid',
  'btn--disabled--outline',
  'btn--disabled--solid',
  'btn--success--outline',
  'btn--danger--outline',
  'btn--blue--outline',

  'btn--warning--solid',
  'btn--danger--solid',
  'btn--success--solid',
  'btn--primary--outline',
  'btn--warning--outline',
  'btn--danger--outline',
];
const SIZES = ['btn--medium', 'btn--large', 'btn--small', 'btn--s'];
const Button = (props: PropButton) => {
  const { children, buttonStyle, onClick, buttonSize, style } = props;
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      onClick={onClick}
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
