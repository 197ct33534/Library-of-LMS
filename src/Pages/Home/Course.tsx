import React, { useState } from 'react';
import Dropdown from '../../components/Dropdown';
import MultipleRows from '../../components/MultipleRowsSlick';

const Course = () => {
  const [Year, setYear] = useState('2022-2023');
  const dataCard = [
    { num: '12', content: 'Môn học' },
    { num: '33', content: 'Giảng viên' },
    { num: '13', content: 'Tệp riêng tư' },
    { num: '132', content: 'Đề thi' },
  ];
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
    </>
  );
};

export default Course;
