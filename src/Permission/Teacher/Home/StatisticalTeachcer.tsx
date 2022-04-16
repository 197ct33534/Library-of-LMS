import React from 'react';
import Ellipse1 from '../../../Assets/images/Ellipse1.png';
import Ellipse2 from '../../../Assets/images/Ellipse2.png';
import Ellipse3 from '../../../Assets/images/Ellipse3.png';
import Ellipse4 from '../../../Assets/images/Ellipse4.png';
import Ellipse5 from '../../../Assets/images/Ellipse5.png';
const StatisticalTeachcer = () => {
  const datas = [
    {
      imgSrc: Ellipse1,
      name: 'Trung Nghĩa',
      content: 'đã thích một bình luận của bạn.',
      time: '10 phút trước',
    },
    {
      imgSrc: Ellipse2,
      name: 'Thanh Toàn',
      content: ' đã nhắc đến bạn trong một bình luận.',
      time: '1 tiếng trước  04:53',
    },
    {
      imgSrc: Ellipse3,
      name: 'Thành Trung',
      content: 'đã thêm một lớp học mới cho bạn.',
      time: '7 tiếng trước 12:20',
    },
    {
      imgSrc: Ellipse4,
      name: 'Thanh Toàn',
      content: ' đã nhắc đến bạn trong một bình luận.',
      time: '30 tháng 12, 2020',
    },
    {
      imgSrc: Ellipse5,
      name: 'Cô Hằng',
      content: ' đã nhắc đến bạn trong một bình luận.',
      time: '15 tháng 12, 2020',
    },
  ];
  return (
    <>
      <div
        className="Statistical StatisticalTeachcer"
        style={{ width: '700px' }}
      >
        <div className="Statistical-title">Thông báo chưa đọc</div>
        <div className="Statistical-main">
          {datas.map((item, idx) => (
            <div
              className="grid-col-8 Statistical-main-item"
              key={`Statistical-${idx}`}
            >
              <img src={item.imgSrc} alt="" />
              <span className="Statistical-main_content">{`${item.name} ${item.content}`}</span>
              <span className="Statistical-main_time">{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StatisticalTeachcer;
