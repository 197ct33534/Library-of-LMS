import React from 'react';
interface propsTemplate {
  title: string;
  children: React.ReactNode;
}
const Tittle = (props: propsTemplate) => {
  const { title, children } = props;
  return (
    <>
      <div className="row">
        <h1 className="title">{title}</h1>
      </div>
      <div className="row">{children}</div>
    </>
  );
};

export default Tittle;
