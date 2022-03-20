import React, { useState } from 'react';
interface IProps {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  options: string[];
}
const Dropdown = (props: IProps) => {
  const { selected, setSelected, options } = props;
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="dropdown">
      <div
        className="dropdown-btn"
        onClick={(e) => {
          setIsActive(!isActive);
        }}
      >
        <span>{selected}</span>

        <i className="bx bx-chevron-down dropdown-icon"></i>
      </div>
      {isActive && (
        <div className="dropdown-content ">
          {options.map((option) => (
            <div
              key={option}
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
              className={`dropdown-item ${option === selected && 'active'} `}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
