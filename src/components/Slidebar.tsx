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
import { useSelector } from 'react-redux';
import { authSelector } from '../Pages/Auth/authSelector';

const Slidebar = () => {
  const auth = useSelector(authSelector);
  const per = +auth.idlogin.permission;
  const slidebar = [
    {
      path: 'dashboard',
      imgIcon: home,
      content: 'Trang chủ',
      icon: 'bx bx-home-alt',
      permiss: [1, 2, 3],
    },
    {
      path: 'book',
      imgIcon: book,
      content: 'Quản lý môn học',
      icon: 'bx bx-book-open',
      children: [3].includes(per) && [
        { pathchil: '', title: 'Danh sách môn học' },
        { pathchil: 'listDocument', title: 'Phê duyệt tài liệu môn học' },
      ],
      permiss: [1, 2, 3],
    },
    {
      path: 'file',
      imgIcon: file,
      content: per === 3 ? 'Tệp riêng tư' : 'Bài giảng, tài nguyên',
      icon: 'bx bxs-file-archive',
      children: [2].includes(per) && [
        { pathchil: '', title: 'Tất cả bài giảng' },
        { pathchil: 'listDocument', title: 'Tất cả tài nguyên' },
      ],
      permiss: [2, 3],
    },
    {
      path: 'bag',
      imgIcon: bag,
      content: per === 3 ? 'Ngân hàng đề thi' : 'Đề thi, kiểm tra',
      icon: 'bx bxs-shopping-bag',
      children: [2].includes(per) && [
        { pathchil: '', title: 'Danh sách đề thi & kiểm tra' },
        { pathchil: 'Nganhang', title: 'Ngân hàng câu hỏi' },
      ],
      permiss: [2, 3],
    },
    {
      path: 'bell',
      imgIcon: bell,
      content: 'Thông báo',
      icon: 'bx bx-bell',
      permiss: [1, 2, 3],
    },
    {
      path: 'setting',
      imgIcon: setting,
      content: 'Cài đặt hệ thống',
      icon: 'bx bxs-virus',
      permiss: [3],
    },
    {
      path: 'comment',
      imgIcon: comment,
      content: 'Trợ giúp',
      icon: 'bx bx-reset',
      permiss: [1, 2, 3],
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
    <div className="Slidebar" style={per !== 3 ? { width: '112px' } : {}}>
      <div className="Slidebar-left">
        <div className="Slidebar-logo">
          <img src={logo} alt="" />
        </div>
        <ul className="Slidebar-left_list">
          {slidebar.map((item) => {
            if (item.permiss.includes(per)) {
              return (
                <li key={`slidebar-${item.path}`}>
                  <NavLink
                    to={`/${item.path}`}
                    className={({ isActive }) =>
                      isActive
                        ? 'active Slidebar-left_item'
                        : 'Slidebar-left_item'
                    }
                  >
                    <img src={item.imgIcon} alt="" />
                  </NavLink>
                </li>
              );
            }
            return null;
          })}
        </ul>
      </div>
      {per >= 2 && (
        <div className="Slidebar-right">
          <ul className="Slidebar-right_list">
            {slidebar.map((item) => (
              <li key={`slidebar-right-${item.path}`}>
                <NavLink
                  to={`/${item.path}`}
                  className={({ isActive }) => {
                    return isActive
                      ? 'active Slidebar-right_item'
                      : '  Slidebar-right_item';
                  }}
                >
                  <i className={`${item.icon} Slidebar-right_icon`}></i>
                  <span className="Slidebar-right_content">{item.content}</span>
                </NavLink>
                {item.children &&
                  item.children.map((child) => (
                    <span key={`slidebarChild-${child.title}`}>
                      <NavLink
                        to={`${item.path}/${child.pathchil}`}
                        className="Slidebar-right_itemChil"
                      >
                        {child.title}
                      </NavLink>
                    </span>
                  ))}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Slidebar;
