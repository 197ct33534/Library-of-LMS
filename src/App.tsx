import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Router from './Router';
import Login from './Pages/Auth/Login';
import RestPass from './Pages/Auth/RestPass';
import TemplateAuth from './Pages/Auth/TemplateAuth';
import Slidebar from './components/Slidebar';
import Template from './Pages/Template';
import Course from './Pages/Home/Course';
import Tittle from './Common/Tittle';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<TemplateAuth></TemplateAuth>}>
          <Route path="restpass" element={<RestPass />}></Route>
          <Route path="" element={<Login />}></Route>
        </Route>

        <Route path="" element={<Template></Template>}>
          <Route
            path="/dashboard"
            element={
              <Tittle title="Trang chủ">
                <Course />
              </Tittle>
            }
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
