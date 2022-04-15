import React from 'react';
interface props {
  text: string;
}
const Success = (props: props) => {
  const { text } = props;
  return (
    <div className="ModelAvatar">
      <div className="ModelAvatar-notify">
        <span className="ModelAvatar-notify_check">
          <i className="bx bx-check"></i>
        </span>

        <span className="ModelAvatar-notify_content">{text}</span>
      </div>
    </div>
  );
};

export default Success;
