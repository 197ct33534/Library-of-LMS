import React from 'react';

import { useDispatch } from 'react-redux';
import Button from './Button';

interface propModal {
  title: string;
  content: string;
  funcCancel: {
    payload: any;
    type: string;
  };
  textCancel: string;
  textSucces: string;
}
const Modal = (props: propModal) => {
  const { title, content, funcCancel, textCancel, textSucces } = props;
  const dispatch = useDispatch();

  return (
    <>
      <div className="ModelAvatar">
        <div className="ModelAvatar-approve">
          <h1>{title}</h1>
          <p>{content}</p>

          <div className="ModelAvatar-notify_btn">
            <Button
              buttonSize="btn--large"
              buttonStyle="btn--gray--solid"
              onClick={() => {
                dispatch(funcCancel);
              }}
            >
              {textCancel}
            </Button>
            <Button
              buttonSize="btn--large"
              buttonStyle="btn--primary--solid"
              onClick={() => {
                dispatch(funcCancel);
              }}
            >
              {textSucces}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
