import React from 'react';
import TitleHeader from '../../components/TitleHeader';
import Video from './Video';
import { Tabs, Collapse } from 'antd';
import 'antd/dist/antd.css';
import Answer from './Answer';
import NotifySubject from './NotifySubject';
import play from '../../Assets/images/playColor.png';
import file from '../../Assets/images/fileColor.png';
import parse from 'html-react-parser';

const { Panel } = Collapse;
const { TabPane } = Tabs;

const BookCourse = () => {
  const subjectContent = ` <div className="subjectContent">

  <img src=${play} alt="" />
  <div className="subjectContent-title">
    <h3>1. Giới thiệu về Thương mại Điện tử trong những năm gần đây</h3>
    <span>30 phút</span>
  </div>
</div>
<div className="subjectContent">
<img src=${file} alt="" />

  <div className="subjectContent-title">
    <h3>1. Thương Mại Điện tử đã thay đổi nền kinh tế của thế giới</h3>
    <span>30 phút</span>
  </div>

</div>
<div className="subjectContent-btn">
<button
                  type="button"
                  className="btn btn--lightPrimary--solid btn--small"
                 
                >
                  <i className="bx bx-download"></i>
                  <span>Tải xuống</span>
                </button></div>
`;

  return (
    <>
      <TitleHeader
        titlePrimary="Thương mại điện tử"
        title={['Danh sách môn học']}
      />

      <div className="bookCourse ">
        <div className="bookCourse-left">
          <Video />
          <Tabs defaultActiveKey="1" centered>
            <TabPane tab="Tổng quan" key="1">
              <div className="grid-col-8" style={{ gap: '16px 0' }}>
                <span className="spanTitle">Giảng viên:</span>
                <div className="divContent">Hoa Hoa</div>
                <span className="spanTitle">Mô tả:</span>
                <div className="divContent">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  et vestibulum ante, id malesuada libero. In hac habitasse
                  platea dictumst. Maecenas est erat, volutpat ut hendrerit
                  efficitur, pulvinar vitae nisi. Nam vulputate molestie erat,
                  non vehicula magna dapibus at. Nunc turpis eros, molestie ac
                  augue eu, euismod dignissim massa. Pellentesque purus lacus,
                  gravida eget magna at, fringilla elementum magna.
                </div>
              </div>
            </TabPane>
            <TabPane tab="Hỏi đáp" key="2">
              <Answer />
            </TabPane>
            <TabPane tab="Thông báo môn học" key="3">
              <NotifySubject />
            </TabPane>
          </Tabs>
        </div>
        <div className="bookCourse-right" id="bookCourse-right">
          <h1>Nội dung môn học</h1>
          <Collapse defaultActiveKey={['1']} expandIconPosition="right">
            <Panel
              header="Bài 1: Giới thiệu chung về loremA dog is a type of domesticated animal.
  Known for its loyalty and faithfulness, "
              key="1"
            >
              {parse(subjectContent)}
            </Panel>
            {[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i) => (
              <Panel header={`Bài ${i}: Giới thiệu chung về  `} key={i}>
                {parse(subjectContent)}
              </Panel>
            ))}
          </Collapse>
        </div>
      </div>
    </>
  );
};

export default BookCourse;
