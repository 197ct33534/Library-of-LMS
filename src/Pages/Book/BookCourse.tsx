import React from 'react';
import TitleHeader from '../../components/TitleHeader';
import Video from './Video';
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import Answer from './Answer';
import NotifySubject from './NotifySubject';
const { TabPane } = Tabs;
const BookCourse = () => {
  return (
    <>
      <TitleHeader
        titlePrimary="Thương mại điện tử"
        title={['Danh sách môn học']}
      />

      <div className="bookCoure">
        <div
          className="bookCourse-left"
          style={{
            width: '1124px',
            height: '510px',
          }}
        >
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
        <div className="bookCouse-right"></div>
      </div>
    </>
  );
};

export default BookCourse;
