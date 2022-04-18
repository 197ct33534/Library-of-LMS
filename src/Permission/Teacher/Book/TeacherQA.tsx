import React, { useState } from 'react';
import Button from '../../../Common/Button';
import Dropdown from '../../../components/Dropdown';
import Search from '../../../components/Search';
import avatar from '../../../Assets/images/Ellipse2.png';
import { useDispatch } from 'react-redux';
import { setIsNotifyRemove } from '../../../Redux/commonSlice';
interface PropsComment {
  children?: React.ReactNode;
}
const Comment = (props: PropsComment) => {
  const handleClickHeart = (e: React.MouseEvent) => {
    const element = e.target as Element;
    const classElement = element.className;
    if (classElement.includes('bxs-heart')) {
      element.className = 'bx bx-heart';
    } else {
      element.className = 'bx bxs-heart';
    }
  };
  const [check, setCheckbox] = useState(false);

  const handleClickWatching = (e: React.MouseEvent) => {
    const element = e.target as HTMLInputElement;
    const text = element.innerText;

    if (text.includes('Hiện')) {
      setCheckbox(true);
      element.innerText = 'Ẩn 2 câu trả lời';
    } else {
      element.innerText = 'Hiện 2 câu trả lời';
      setCheckbox(false);
    }
  };
  const dispatch = useDispatch();
  const handleChangeSelections = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const text = e.target.value;
    switch (text) {
      case 'xóa':
        dispatch(setIsNotifyRemove(true));
        break;

      default:
        break;
    }
  };
  return (
    <div className="TeacherQA-comment">
      <div className="TeacherQA-comment_avatar">
        <img src={avatar} alt="" />
      </div>
      <div className="TeacherQA-comment_warp">
        <div className="TeacherQA-comment_btn">
          <select
            onChange={(e) => handleChangeSelections(e)}
            className="SelectHidden"
            value="&#8942;"
            style={{ padding: '0', transform: 'unset' }}
          >
            <option value="&#8942;">&#8942;</option>

            <option value="xóa">xóa</option>
          </select>
          <i className="bx bx-heart" onClick={(e) => handleClickHeart(e)}></i>
        </div>
        <div className="TeacherQA-comment_info">
          <h1>Melanie</h1>
          <h6>20 tháng 10, 2020 10:14</h6>
          <h2 className="content">
            Tiêu đề: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h2>
          <p className="content">
            Vestibulum viverra, eros et volutpat interdum, leo lectus commodo
            tellus, vitae bibendum est massa in felis. Integer vitae lectus in
            ipsum efficitur bibendum. Proin sed nisi odio. Maecenas sit amet
            rutrum diam. Pellentesque lorem sem, mollis vitae velit in, aliquam
            vehicula dui. Etiam nec mi bibendum, vestibulum magna vel, iaculis
            nibh. Vestibulum in erat eget tortor consectetur fermentum a nec
            ligula. Ut ut eros eu sapien varius tempus. Fusce id erat nisl.
          </p>
          <span
            className="content"
            onClick={(e) => {
              handleClickWatching(e);
            }}
          >
            Hiện 2 câu trả lời
          </span>
          {check && props.children}
        </div>
      </div>
    </div>
  );
};
const TeacherQA = () => {
  const [subject, setSubject] = useState('Thương mại điện tử');
  const [slide, setSlide] = useState('Tất cả bài giảng');
  const [question, setQuestion] = useState('Câu hỏi gần nhất');
  const [fliter, setFilter] = useState('Lọc câu hỏi');

  return (
    <>
      <div className="TeacherQA">
        <div className="TeacherQA-control">
          <Dropdown
            selected={subject}
            setSelected={setSubject}
            options={['Toán cao cấp', 'Đại số ', 'Luật sở hữu trí tuệ']}
          />
          <Dropdown
            selected={slide}
            setSelected={setSlide}
            options={[
              'Giới thiệu chung về T...',
              'Thương mại điện tử',
              'Thương mại điện tử',
            ]}
          />
          <Dropdown
            selected={question}
            setSelected={setQuestion}
            options={[
              'Câu hỏi gần nhất',
              'Câu hỏi đã trả lời ',
              'Câu hỏi chưa trả lời',
            ]}
          />
          <Dropdown
            selected={fliter}
            setSelected={setFilter}
            options={['Câu hỏi tôi hỏi', 'Câu hỏi tôi thích']}
          />
        </div>
        <div className="book">
          <div className="book-control">
            <div className="book-control-left">
              <Search />
            </div>
            <div className="book-control-right">
              <Button
                buttonStyle="btn--lightPrimary--solid"
                buttonSize="btn--small"
              >
                Thêm câu hỏi mới
              </Button>
            </div>
          </div>
        </div>
        <div className="book">
          <Comment>
            <Comment />

            <Comment />
          </Comment>
        </div>
        <div className="book">
          <Comment>
            <Comment />

            <Comment />
          </Comment>
        </div>
        <div className="book">
          <Comment />
        </div>
      </div>
    </>
  );
};

export default TeacherQA;
