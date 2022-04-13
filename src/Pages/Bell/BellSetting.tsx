import { Collapse, Switch } from 'antd';
import React from 'react';
import TitleHeader from '../../components/TitleHeader';
const { Panel } = Collapse;
interface header {
  title: string;
  content: string;
}
const Header = (props: header) => {
  const { title, content } = props;
  return (
    <div className="ItemBell-header">
      <h3>{title}</h3>
      <p className="ItemBell-tagP">{content}</p>
    </div>
  );
};
interface ItemBell {
  children: React.ReactNode;
  defaultChecked?: boolean;
}
const ItemBell = (props: ItemBell) => {
  const { children, defaultChecked } = props;
  return (
    <>
      <div className="ItemBell-switch">
        <p className="ItemBell-tagP">{children}</p>
        <Switch defaultChecked={defaultChecked} />
      </div>
    </>
  );
};
const BellSetting = () => {
  return (
    <>
      <TitleHeader
        titlePrimary="Cài đặt thông báo"
        title={['Trang chủ', 'Tất cả thông báo']}
      />
      <div className="book BellSetting">
        <h3>Bạn có thể cài đặt những thông báo sẽ nhận:</h3>
        <Collapse expandIconPosition="right">
          <Panel
            header={
              <Header
                title="Quản lý môn học"
                content="Đây là thông báo từ các thao tác hoặc tương tác có trong danh sách môn học và quản lý môn học."
              />
            }
            key="1"
          >
            <ItemBell defaultChecked>
              Thông báo khi có sự thay đổi nội dung trong môn học
            </ItemBell>
            <hr />
            <ItemBell>
              Thông báo khi có sự thay đổi trong quản lý môn học
            </ItemBell>
          </Panel>

          <Panel
            header={
              <Header
                title="Tệp riêng tư"
                content="Đây là thông báo khi người dùng thao tác trong tệp riêng tư"
              />
            }
            key="2"
          >
            <ItemBell defaultChecked>
              Thông báo khi bạn thêm mới, thay đổi tên, xóa các tệp riêng tư
            </ItemBell>
          </Panel>
          <Panel
            header={
              <Header
                title="Ngân hàng đề thi"
                content="Đây là thông báo khi có đề thi mới được giáo viên tải lên hoặc tạo mới."
              />
            }
            key="3"
          >
            <ItemBell defaultChecked>
              Thông báo khi giảng viên lưu đề thi mới vào hệ thống
            </ItemBell>
            <hr />
            <ItemBell>Thông báo khi Xác nhận hoặc Hủy đề thi</ItemBell>
          </Panel>
          <Panel
            header={
              <Header
                title="Phân quyền "
                content="Đây là thông báo khi có sự thay đổi về vai trò và người dùng."
              />
            }
            key="4"
          >
            <ItemBell defaultChecked>
              Thông báo khi có sự thay đổi trong Danh sách vai trò
            </ItemBell>
            <hr />
            <ItemBell>
              Thông báo khi có sự thay đổi trong Danh sách người dùng
            </ItemBell>
          </Panel>
          <Panel
            header={
              <Header
                title="Tài khoản người dùng"
                content="Đây là thông báo khi có sự thay đổi thông tin tài khoản và mật khẩu"
              />
            }
            key="5"
          >
            <ItemBell defaultChecked>
              Thông báo khi cập nhật thông tin tài khoản
            </ItemBell>
            <hr />
            <ItemBell>Thông báo khi thay đổi mật khẩu</ItemBell>
          </Panel>
        </Collapse>
      </div>
    </>
  );
};

export default BellSetting;
