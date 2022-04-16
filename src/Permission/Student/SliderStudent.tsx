import React, { useEffect } from 'react';
import Slider from 'react-slick';
import word from '../../Assets/images/word.png';
import ex from '../../Assets/images/ex.png';
import mp3 from '../../Assets/images/mp3.png';
import pp from '../../Assets/images/pp.png';
import { Link } from 'react-router-dom';
const SliderStudent = () => {
  const datas = [
    {
      img: mp3,
      name: '1. Giới thiệu về cột sống Giới thiệu về cột sốngGiới thiệu về cột sống',
      header: 'Kỹ năng mềm',
      footer: 'Bài 5: Lorem Ipsum Dolem',
      progress: 80,
    },
    {
      img: pp,
      name: '3. Không biết ghi gì',
      header: 'Toán đại số',
      footer: 'Bài 1: Lorem Ipsum Dolem',
      progress: 50,
    },
    {
      img: word,
      name: '2. Nguyên tắc thiết kế',
      header: 'Thiết kế App',
      footer: 'Bài 2: Lorem Ipsum Dolem',
      progress: 10,
    },
    {
      img: ex,
      name: '1. Giới thiệu về cột sống',
      header: 'Kế toán',
      footer: 'Bài 5: Lorem Ipsum Dolem',
      progress: 10,
    },
    {
      img: mp3,
      name: '6. Giới thiệu về cột sống',
      header: 'Kỹ năng mềm',
      footer: 'Bài 5: Lorem Ipsum Dolem',
      progress: 60,
    },
    {
      img: pp,
      name: '6. Không biết ghi gì',
      header: 'Toán đại số',
      footer: 'Bài 1: Lorem Ipsum Dolem',
      progress: 21,
    },
    {
      img: word,
      name: '12. Nguyên tắc thiết kế',
      header: 'Thiết kế App',
      footer: 'Bài 12: Lorem Ipsum Dolem',
      progress: 11,
    },
    {
      img: ex,
      name: '3. Giới thiệu về cột sống',
      header: 'Kế toán',
      footer: 'Bài 5: Lorem Ipsum Dolem',
      progress: 30,
    },
  ];
  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };
  const slider: React.RefObject<Slider> = React.useRef(null);
  const previous = () => {
    if (slider.current) slider.current.slickPrev();
  };

  const next = () => {
    if (slider.current) slider.current.slickNext();
  };

  useEffect(() => {
    const inputArray: NodeListOf<HTMLInputElement> = document.querySelectorAll(
      '.SliderStudent-item_info-progress-input'
    );
    inputArray.forEach((inputItem) => {
      //   console.log('', inputItem.defaultValue);
      inputItem.style.backgroundSize = +inputItem.defaultValue + '% 100%';
    });
  }, []);
  return (
    <>
      <div className="multipleRows sliderStudent">
        <h2 className="multipleRows-title">Môn đang học</h2>
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
            <Link to="/book" key={`${item.name}-${idx}`}>
              <div className="SliderStudent-item grid-col-7">
                <span className="SliderStudent-item_img">
                  <img src={item.img} alt="" />
                  {/* <img src={play} alt="" /> */}
                </span>

                <div className="SliderStudent-item_info">
                  <div className="SliderStudent-item_header">{item.header}</div>
                  <div className="SliderStudent-item_name">{item.name}</div>
                  <div className="SliderStudent-item_footer">{item.footer}</div>
                </div>
                <div className="SliderStudent-item_info-progress">
                  <input
                    type="range"
                    className="SliderStudent-item_info-progress-input"
                    defaultValue={+item.progress}
                    min="0"
                    max="100"
                  />
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default SliderStudent;
