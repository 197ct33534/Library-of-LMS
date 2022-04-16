import { Collapse, Switch } from 'antd';
import React from 'react';
import TitleHeader from '../../components/TitleHeader';
import { Header, ItemBell } from '../../Pages/Bell/BellSetting';
const { Panel } = Collapse;
const BellSettingStudent = () => {
  return (
    <>
      <TitleHeader
        titlePrimary="Cài đặt thông báo"
        title={['Trang chủ', 'Tất cả thông báo']}
      />
      <div className="book BellSetting BellSettingStudent">
        <h3>Bạn có thể cài đặt những thông báo sẽ nhận:</h3>
        <Collapse expandIconPosition="right" accordion>
          <Panel
            header={
              <Header
                title="Hỏi đáp"
                content="Thông báo khi giảng viên đặt câu hỏi hay khi có người khác tương tác với câu hỏi - câu trả lời của bạn."
              />
            }
            key="1"
          >
            <ItemBell defaultChecked>
              Thông báo khi giảng viên đặt câu hỏi trong môn học
            </ItemBell>
            <hr />
            <ItemBell>
              Thông báo khi có người tương tác với câu hỏi - câu trả lời của bạn
            </ItemBell>
            <hr />
            <ItemBell>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et
              vestibulum ante, id malesuada libero.
            </ItemBell>
          </Panel>

          <Panel
            header={
              <Header
                title="Thông báo môn học"
                content="Thông báo khi giảng viên tạo thông báo mới trong môn học"
              />
            }
            key="2"
          >
            <ItemBell defaultChecked>
              Thông báo khi giảng viên tạo thông báo môn học
            </ItemBell>{' '}
            <hr />
            <ItemBell defaultChecked>
              Thông báo khi có người có người bình luận
            </ItemBell>{' '}
            <hr />
            <ItemBell>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et
              vestibulum ante, id malesuada libero.
            </ItemBell>
          </Panel>
          <Panel
            header={
              <Header
                title="Tài khoản người dùng"
                content="Thông báo khi có sự thay đổi thông tin tài khoản và mật khẩu"
              />
            }
            key="3"
          >
            <ItemBell defaultChecked>
              Thông báo khi cập nhật thông tin tài khoản
            </ItemBell>
            <hr />
            <ItemBell>Thông báo khi thay đổi mật khẩu</ItemBell> <hr />
            <ItemBell defaultChecked>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et
              vestibulum ante, id malesuada libero.
            </ItemBell>
          </Panel>
        </Collapse>
      </div>
    </>
  );
};

export default BellSettingStudent;
