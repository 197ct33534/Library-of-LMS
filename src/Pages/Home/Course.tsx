import React, { useState } from 'react';
import Dropdown from '../../components/Dropdown';
import MultipleRows from '../../components/MultipleRowsSlick';

interface props {
  children: React.ReactNode;
}
const Course = (props: props) => {
  const { children } = props;
  const [Year, setYear] = useState('2022-2023');
  const dataCard = [
    { num: '12', content: 'Môn học' },
    { num: '33', content: 'Giảng viên' },
    { num: '13', content: 'Tệp riêng tư' },
    { num: '132', content: 'Đề thi' },
  ];
  console.log('dashboard didmount');

  return (
    <>
      <div className="course">
        <div className="course-schoolYear">
          <span>Niên khóa</span>
          <Dropdown
            selected={Year}
            setSelected={setYear}
            options={['2020-2021', '2015-2016', '2018-2019']}
          />
        </div>
        {dataCard.map((card, idx) => (
          <div
            className={`course-card ${idx % 2 !== 0 && 'blue'}`}
            key={`card-${idx}`}
          >
            <h3 className="course-card_number">{card.num}</h3>
            <div className="course-card_content">{card.content}</div>
          </div>
        ))}
      </div>
      <MultipleRows />
      <div className="course-footer">{children}</div>
    </>
  );
};

export default Course;
