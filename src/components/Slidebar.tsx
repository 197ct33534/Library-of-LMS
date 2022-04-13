import React, { useEffect } from 'react';
import logo from '../Assets/images/logo.png';
import home from '../Assets/images/iconhome.png';
import book from '../Assets/images/iconbook.png';
import file from '../Assets/images/iconfile.png';
import bag from '../Assets/images/iconbag.png';
import bell from '../Assets/images/iconbell.png';
import setting from '../Assets/images/iconsettings.png';
import comment from '../Assets/images/iconcommentquestion.png';
import { NavLink } from 'react-router-dom';

const Slidebar = () => {
  const slidebar = [
    {
      path: 'dashboard',
      imgIcon: home,
      content: 'Trang chủ',
      icon: 'bx bx-home-alt',
    },
    {
      path: 'book',
      imgIcon: book,
      content: 'Quản lý môn học',
      icon: 'bx bx-book-open',
      children: [
        { pathchil: '', title: 'Danh sách môn học' },
        { pathchil: 'listDocument', title: 'Phê duyệt tài liệu môn học' },
      ],
    },
    {
      path: 'file',
      imgIcon: file,
      content: 'Tệp riêng tư',
      icon: 'bx bxs-file-archive',
    },
    {
      path: 'bag',
      imgIcon: bag,
      content: 'Ngân hàng đề thi',
      icon: 'bx bxs-shopping-bag',
    },
    { path: 'bell', imgIcon: bell, content: 'Thông báo', icon: 'bx bx-bell' },
    {
      path: 'setting',
      imgIcon: setting,
      content: 'Cài đặt hệ thống',
      icon: 'bx bxs-virus',
    },
    {
      path: 'comment',
      imgIcon: comment,
      content: 'Trợ giúp',
      icon: 'bx bx-reset',
    },
  ];
  console.log('slidebar didmount');

  useEffect(() => {
    let SlidebarRight: HTMLElement | null =
      document.querySelector('.Slidebar-right');
    const main = document.querySelector('.main');
    const Slidebar: HTMLElement | null = document.querySelector('.Slidebar');

    const arrayItem = document.querySelectorAll('.Slidebar-left_item');
    arrayItem.forEach((item, index) => {
      item.addEventListener('mouseover', () => {
        if (SlidebarRight && Slidebar) {
          SlidebarRight.style.display = 'block';
          Slidebar.style.zIndex = '200';
        }
      });
    });

    if (main && Slidebar) {
      main.addEventListener('mouseover', (e: any) => {
        if (SlidebarRight && e.pageX > 190 && Slidebar) {
          SlidebarRight.style.display = 'none';
          Slidebar.style.zIndex = '0';
        }
      });
    }

    return () => {
      arrayItem.forEach((item, index) => {
        item.removeEventListener('mouseover', () => {
          if (SlidebarRight && Slidebar) {
            SlidebarRight.style.display = 'block';
            Slidebar.style.zIndex = '200';
          }
        });
      });

      if (main && Slidebar) {
        main.removeEventListener('mouseover', (e: any) => {
          if (SlidebarRight && e.pageX > 215 && Slidebar) {
            SlidebarRight.style.display = 'none';
            Slidebar.style.zIndex = '0';
          }
        });
      }
    };
  }, []);
  return (
    <div className="Slidebar">
      <div className="Slidebar-left">
        <div className="Slidebar-logo">
          <img src={logo} alt="" />
        </div>
        <ul className="Slidebar-left_list">
          {slidebar.map((item) => (
            <li key={`slidebar-${item.path}`}>
              <NavLink
                to={`/${item.path}`}
                className={({ isActive }) =>
                  isActive ? 'active Slidebar-left_item' : 'Slidebar-left_item'
                }
              >
                <img src={item.imgIcon} alt="" />
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="Slidebar-right">
        <ul className="Slidebar-right_list">
          {slidebar.map((item) => (
            <li key={`slidebar-right-${item.path}`}>
              <NavLink
                to={`/${item.path}`}
                className={({ isActive }) =>
                  isActive
                    ? 'active Slidebar-right_item'
                    : 'Slidebar-right_item'
                }
              >
                <i className={`${item.icon} Slidebar-right_icon`}></i>
                <span className="Slidebar-right_content">{item.content}</span>
              </NavLink>
              {item.children &&
                item.children.map((child) => (
                  <NavLink
                    to={`${item.path}/${child.pathchil}`}
                    className="Slidebar-right_itemChil"
                    key={`slidebarChild-${child.title}`}
                  >
                    {child.title}
                  </NavLink>
                ))}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Slidebar;
