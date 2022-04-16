import React, { useEffect } from 'react';
import TitleHeader from '../../components/TitleHeader';
import BarChart from './BarChart.js';

import SliderStudent from './SliderStudent';
import bar from '../../Assets/images/bar.png';
import parse from 'html-react-parser';
const HomeStudent = () => {
  useEffect(() => {
    const inputArray: NodeListOf<HTMLInputElement> = document.querySelectorAll(
      '.HomeStudent-right_item__info-input'
    );
    inputArray.forEach((inputItem) => {
      inputItem.style.backgroundSize = +inputItem.defaultValue + '% 100%';
    });
  }, []);
  let item = '';
  for (let i = 1; i <= 10; i++) {
    item += ` <div className="HomeStudent-right_item">
    <div className="grid-col-6">
      <img src=${bar} alt="" />
      <div className="HomeStudent-right_item__info">
        <p>
          <strong>Toán Đại số</strong>
          <span>${i} giờ</span>
        </p>
        <input
          type="range"
          defaultValue=${Math.floor(Math.random() * 100) + 1}
          className="HomeStudent-right_item__info-input"
        />
      </div>
    </div>
  </div>`;
  }
  return (
    <div className="HomeStudent">
      <TitleHeader titlePrimary="Trang chủ" />
      <SliderStudent />
      <div className="grid-col-2">
        <div className="HomeStudent-left">
          <h1 className="titleMini">Thống kê học tập</h1>
          <h3>
            <i className="bx bx-chevron-left"></i>2-9/11/2020
            <i className="bx bx-chevron-right"></i>
          </h3>

          <BarChart />

          <h5>
            <span>Tổng tuần:</span>12 giờ 30 phút
          </h5>
        </div>
        <div className="HomeStudent-right">
          <h1 className="titleMini">Môn học nhiều nhất</h1>
          <div className="grid-col-2">{parse(item)}</div>
        </div>
      </div>
    </div>
  );
};

export default HomeStudent;
