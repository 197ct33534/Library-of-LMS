import React from 'react';

const Statistical = () => {
  const datas = [
    { content: 'Đang truy cập:', num: '31' },
    { content: 'Lượt truy cập hôm nay:', num: '97' },
    { content: 'Lượt truy cập tuần này:', num: '1,298' },

    { content: 'Lượt truy cập tháng này:', num: '31' },

    { content: 'Tổng lượt truy cập:', num: '31' },
  ];
  return (
    <div className="Statistical">
      <div className="Statistical-title">Thống kê truy cập</div>
      <div className="Statistical-main">
        {datas.map((item, idx) => (
          <div
            className="grid-col-3 Statistical-main-item"
            key={`Statistical-${idx}`}
          >
            <span className="Statistical-main_content">{item.content}</span>
            <span className="Statistical-main_number">{item.num}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistical;
