import React, { useEffect, useRef } from 'react';
interface props {
  title?: string[];
  titlePrimary: string;
}
const TitleHeader = (props: props) => {
  const { titlePrimary, title } = props;
  const divref = useRef<HTMLDivElement>(null);
  let temp = '';
  const len = title?.length;

  if (title && len) {
    for (let i = 0; i < len; i++) {
      temp += `<span>${title[i]} </span><i class='bx bx-chevron-right'></i>`;
    }
  }
  useEffect(() => {
    if (divref.current) {
      divref.current.innerHTML = temp;
    }
  }, [divref, temp]);
  return (
    <div className="title-header">
      {title ? <div ref={divref} className="title-header_chil"></div> : null}
      <h1>{titlePrimary}</h1>
    </div>
  );
};

export default TitleHeader;
