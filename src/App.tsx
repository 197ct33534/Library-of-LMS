import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './Pages/Auth/Login';
import RestPass from './Pages/Auth/RestPass';
import TemplateAuth from './Pages/Auth/TemplateAuth';

import Template from './Pages/Template';
import Course from './Pages/Home/Course';
import Tittle from './Common/Tittle';
import InfoUser from './Pages/Auth/InfoUser';

import Book from './Pages/Book/Book';
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
          <Route path="book" element={<Book></Book>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
