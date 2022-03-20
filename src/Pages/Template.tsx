import React from 'react';
import Slidebar from '../components/Slidebar';
import User from '../components/User';
interface propsTemplate {
  title: string;
  children: React.ReactNode;
}
const Template = (props: propsTemplate) => {
  const { title, children } = props;
  return (
    <>
      <Slidebar />
      <div className="grid main">
        <div className="row">
          <User />
        </div>
        <div className="row">
          <h1 className="title">{title}</h1>
        </div>
        <div className="row">{children}</div>
      </div>
    </>
  );
};

export default Template;
