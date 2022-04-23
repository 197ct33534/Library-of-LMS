import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './Pages/Auth/Login';
import RestPass from './Pages/Auth/RestPass';
import TemplateAuth from './Pages/Auth/TemplateAuth';

import Template from './Pages/Template';
import Course from './Pages/Home/Course';
import Tittle from './Common/Tittle';
import InfoUser from './Pages/Auth/InfoUser';
import BookTemplate from './Pages/Book/BookTemple';

import Book from './Pages/Book/Book';
import ListDocument from './Pages/Book/ListDocument';
import DetailSubject from './Pages/Book/DetailSubject';
import BookCourse from './Pages/Book/BookCourse';
import BellNotify from './Pages/Bell/BellNotify';
import BellSetting from './Pages/Bell/BellSetting';
import FileTemplate from './Pages/File/FileTemplate';
import BagTemplate from './Pages/Bag/BagTemplate';
import BagDetail from './Pages/Bag/BagDetail';
import SettingTemplate from './Pages/Setting/SettingTemplate';
import LibarySystem from './Pages/Setting/LibarySystem';
import RoleManagement from './Pages/Setting/RoleManagement';
import UserManagement from './Pages/Setting/UserManagement';
import Comment from './Pages/Comment.js';
import { useSelector } from 'react-redux';
import { authSelector } from './Pages/Auth/authSelector';
import HomeStudent from './Permission/Student/HomeStudent';
import BookStudent from './Permission/Student/BookStudent';
import BellSettingStudent from './Permission/Student/BellSettingStudent';

import FooterCourse from './Pages/Home/FooterCourse';
import FooterHomeTeacher from './Permission/Teacher/Home/FooterHomeTeacher';
import BookTeacher from './Permission/Teacher/Book/BookTeacher';
import BookTeacherDetailSubject from './Permission/Teacher/Book/BookTeacherDetailSubject';
import ListSubject from './Permission/Teacher/Book/ListSubject';
import ListDocumentTeacher from './Permission/Teacher/Book/ListDocumentTeacher';
import Overview from './Pages/Book/Overview';
import TeacherQA from './Permission/Teacher/Book/TeacherQA';
import AnnounceBook from './Permission/Teacher/Book/AnnounceBook';
import UpdateBook from './Permission/Teacher/Book/UpdateBook';
import FormAddDocument from './Permission/Teacher/Book/FormAddDocument.js';
import FileTemplateTeacher from './Permission/Teacher/File/FileTemplateTeacher';
import BagTemplateTeacher from './Permission/Teacher/Bag/BagTemplateTeacher';
import CreateExam from './Permission/Teacher/Bag/CreateExam';
import Bank from './Permission/Teacher/Bag/Bank';
function App() {
  const auth = useSelector(authSelector);
  const permission = +auth.idlogin.permission;

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<TemplateAuth></TemplateAuth>}>
            <Route path="restpass" element={<RestPass />}></Route>
            <Route path="" element={<Login />}></Route>
          </Route>

          <Route path="" element={<Template></Template>}>
            <Route
              path="info"
              element={
                <Tittle title="Thông tin người dùng">
                  <InfoUser />
                </Tittle>
              }
            ></Route>

            <Route
              path="dashboard"
              element={
                permission === 3 ? (
                  <Tittle title="Trang chủ">
                    <Course>
                      <FooterCourse />
                    </Course>
                  </Tittle>
                ) : permission === 2 ? (
                  <Tittle title="Trang chủ">
                    <Course>
                      <FooterHomeTeacher />
                    </Course>
                  </Tittle>
                ) : (
                  <HomeStudent />
                )
              }
            ></Route>
            {permission === 3 && (
              <Route path="book" element={<BookTemplate></BookTemplate>}>
                <Route
                  path="listDocument"
                  element={<ListDocument></ListDocument>}
                ></Route>
                <Route
                  path="detailSubject"
                  element={<DetailSubject></DetailSubject>}
                ></Route>
                <Route
                  path="course"
                  element={<BookCourse></BookCourse>}
                ></Route>
                <Route path="" element={<Book></Book>}></Route>
              </Route>
            )}
            {permission === 1 && (
              <Route path="book">
                <Route path="course" element={<BookCourse />} />
                <Route path="" element={<BookStudent />} />
              </Route>
            )}
            {permission === 2 && (
              <Route path="book">
                <Route path="Subject" element={<BookTeacherDetailSubject />}>
                  <Route
                    path="detailSubject"
                    element={
                      <div className="book">
                        <Overview />
                      </div>
                    }
                  />
                  <Route path="listSubject" element={<ListSubject />} />
                  <Route path="Q&A" element={<TeacherQA />} />
                  <Route path="announce" element={<AnnounceBook />} />
                </Route>
                <Route path="form" element={<FormAddDocument />} />

                <Route path="update" element={<UpdateBook />} />
                <Route path="course" element={<BookCourse />} />
                <Route path="listDocument" element={<ListDocumentTeacher />} />
                <Route path="" element={<BookTeacher />} />
              </Route>
            )}

            <Route path="bell">
              <Route
                path=""
                element={
                  <Tittle title="Thông báo">
                    <BellNotify />
                  </Tittle>
                }
              ></Route>
              <Route
                path="setting"
                element={
                  permission === 3 ? (
                    <BellSetting></BellSetting>
                  ) : (
                    <BellSettingStudent />
                  )
                }
              ></Route>
            </Route>
            {permission === 3 && (
              <Route path="file">
                <Route path="" element={<FileTemplate />}></Route>
              </Route>
            )}
            {permission === 2 && (
              <Route path="file">
                <Route path="" element={<FileTemplateTeacher />}></Route>
              </Route>
            )}
            {permission === 3 && (
              <Route path="bag">
                <Route path="" element={<BagTemplate></BagTemplate>}></Route>
                <Route path="detail" element={<BagDetail></BagDetail>}></Route>
              </Route>
            )}
            {permission === 2 && (
              <Route path="bag">
                <Route
                  path="createExam"
                  element={<CreateExam addQuestion={false} />}
                />
                <Route
                  path="addExam"
                  element={<CreateExam addQuestion={true} />}
                />
                <Route path="detail" element={<BagDetail />} />
                <Route path="bank" element={<Bank />} />

                <Route path="" element={<BagTemplateTeacher />} />
              </Route>
            )}
            <Route path="setting">
              <Route
                path=""
                element={<SettingTemplate></SettingTemplate>}
              ></Route>
              <Route
                path="libarySystem"
                element={<LibarySystem></LibarySystem>}
              ></Route>
              <Route
                path="roleManage"
                element={<RoleManagement></RoleManagement>}
              ></Route>
              <Route
                path="userManage"
                element={<UserManagement></UserManagement>}
              ></Route>
            </Route>
            <Route path="comment" element={<Comment />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
