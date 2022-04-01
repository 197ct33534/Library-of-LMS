import React, { memo } from 'react';
import Slider from 'react-slick';
import word from '../../Assets/images/word.png';
import ex from '../../Assets/images/ex.png';
import mp3 from '../../Assets/images/mp3.png';
import pp from '../../Assets/images/pp.png';

const MultipleItems = () => {
  const datas = [
    {
      img: word,
      name: 'Thương mại điện tử là gì.docx',
      timer: '12:01 12/12/2020',
      cate: 'Thương mại điện tử',
      teacherName: 'Hoa Hoa',
    },
    {
      img: pp,
      name: 'Lịch sử mỹ thuật từ thế kỉ V ...',
      timer: '12:01 12/12/2020',
      cate: 'Lịch sử mỹ thuật',
      teacherName: 'Ms.Yến',
    },
    {
      img: ex,
      name: 'Danh sách ôn tập.xlsx',
      timer: '12:01 10/11/2020',
      cate: 'Ngữ Văn ',
      teacherName: 'Nguyễn Hoa',
    },
    {
      img: mp3,
      name: 'Bài giảng toán tiết 1.mp3',
      timer: '12:01 10/11/2020',
      cate: 'Toán Đại Số  ',
      teacherName: 'ABC',
    },
  ];
  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 3,
  };
  const slider: React.RefObject<Slider> = React.useRef(null);
  const previous = () => {
    if (slider.current) slider.current.slickPrev();
  };

  const next = () => {
    if (slider.current) slider.current.slickNext();
  };
  console.log('MultipleItems didmount');

  return (
    <div className="multipleRows">
      <h2 className="multipleRows-title">Tệp riêng tư tải lên gần đây</h2>
      <div className="multipleRows-controler">
        <button onClick={previous}>
          <i className="bx bxs-chevron-left"></i>
        </button>
        <button onClick={next}>
          <i className="bx bxs-chevron-right"></i>
        </button>
      </div>

      <Slider {...settings} ref={slider}>
        {datas.map((item, idx) => (
          <div key={`${item.name}-${idx}`}>
            <div className="multipleRows-item">
              <span className="multipleRows-item_img">
                <img src={item.img} alt="" />
                {/* <img src={play} alt="" /> */}
              </span>

              <div className="multipleRows-item_info">
                <div className="multipleRows-item_name">{item.name}</div>
                <div className="multipleRows-item_category">{item.timer}</div>
                <div className="multipleRows-item_id">{item.cate}</div>
                <div className="multipleRows-item_teacherName">
                  Giảng viên: {item.teacherName}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default memo(MultipleItems);
