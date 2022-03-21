import React from 'react';
import Slider from 'react-slick';
import play from '../Assets/images/play_Circle.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MultipleRows = () => {
  const datas = [
    {
      idFile: 'WEB23',
      categoryName: 'Web Design',
      fileName: 'Phát triển Website',
      link_video: 'https://www.youtube.com/watch?v=Wy9q22isx3U',
      teachName: 'Hoa Hoa',
    },
    {
      idFile: 'KNM13',
      categoryName: 'Kỹ năng mềm',
      fileName: 'Kỹ năng mềm',
      link_video: 'https://www.youtube.com/watch?v=xGzpzbU-_BY',
      teachName: 'Hoàng An',
    },
    {
      idFile: 'MBA13',
      categoryName: 'Mobile App Design',
      fileName: 'Phát triển Mobile App',
      link_video: 'https://www.youtube.com/watch?v=8124kv-632k',
      teachName: 'Peter',
    },
    {
      idFile: 'DLK4',
      categoryName: 'Toán Đại Số',
      fileName: 'Phương trình bậc 3',
      link_video: 'https://www.youtube.com/watch?v=xV7S8BhIeBo',
      teachName: 'Peter',
    },
    {
      idFile: 'SLGG22',
      categoryName: 'Sinh học',
      fileName: 'Gene trội Gene lặn',
      link_video: 'https://www.youtube.com/watch?v=FXpIoQ_rT_c',
      teachName: 'Trung Nghĩa',
    },
    {
      idFile: 'THZ102',
      categoryName: 'Web Design',
      fileName: 'Làm quen với Tin học',
      link_video: 'https://www.youtube.com/watch?v=Z20edymyQdc',
      teachName: 'Hoa Hoa',
    },
    {
      idFile: 'jsM13',
      categoryName: 'JavaScript ',
      fileName: 'JavaScript Programming',
      link_video: 'https://www.youtube.com/watch?v=jS4aFq5-91M',
      teachName: 'freeCode',
    },
    {
      idFile: 'PYA13',
      categoryName: 'Python ',
      fileName: 'TensorFlow Course',
      link_video: 'https://www.youtube.com/watch?v=qFJeN9V1ZsI',
      teachName: 'Keras',
    },
  ];
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '20px',
    slidesToShow: 3,
    speed: 500,
    rows: datas.length < 8 ? 1 : 2,
    slidesPerRow: 1,
    arrows: false,
  };
  const slider: React.RefObject<Slider> = React.useRef(null);
  const previous = () => {
    if (slider.current) slider.current.slickPrev();
  };

  const next = () => {
    if (slider.current) slider.current.slickNext();
  };
  return (
    <div className="multipleRows">
      <h2 className="multipleRows-title">Tài liệu môn học đã xem gần đây</h2>
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
          <div key={`${item.idFile}-${idx}`}>
            <div className="multipleRows-item">
              <span className="multipleRows-item_img">
                <img
                  src={`https://img.youtube.com/vi/${
                    item.link_video.split('=')[1]
                  }/mqdefault.jpg`}
                  alt=""
                />
                <img src={play} alt="" />
              </span>

              <div className="multipleRows-item_info">
                <div className="multipleRows-item_name">{item.fileName}</div>
                <div className="multipleRows-item_category">
                  {item.categoryName}
                </div>
                <div className="multipleRows-item_id">{item.idFile}</div>
                <div className="multipleRows-item_teacherName">
                  Giảng viên: {item.teachName}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default MultipleRows;
