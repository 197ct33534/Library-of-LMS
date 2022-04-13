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
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<TemplateAuth></TemplateAuth>}>
          <Route path="restpass" element={<RestPass />}></Route>
          <Route path="" element={<Login />}></Route>
        </Route>
        {/* <Route path="" element={<Navigate to="/auth" replace />} /> */}
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
              <Tittle title="Trang chủ">
                <Course />
              </Tittle>
            }
          ></Route>
          <Route path="book" element={<BookTemplate></BookTemplate>}>
            <Route
              path="listDocument"
              element={<ListDocument></ListDocument>}
            ></Route>
            <Route
              path="detailSubject"
              element={<DetailSubject></DetailSubject>}
            ></Route>
            <Route path="course" element={<BookCourse></BookCourse>}></Route>
            <Route path="" element={<Book></Book>}></Route>
          </Route>
          <Route path="/bell">
            <Route
              path=""
              element={
                <Tittle title="Thông báo">
                  <BellNotify />
                </Tittle>
              }
            ></Route>
            <Route path="setting" element={<BellSetting></BellSetting>}></Route>
          </Route>

          <Route path="/file">
            <Route path="" element={<FileTemplate></FileTemplate>}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
