import React from 'react';
import { useRoutes } from 'react-router-dom';
import Login from './Pages/Auth/Login';
import RestPass from './Pages/Auth/RestPass';
import TemplateAuth from './Pages/Auth/TemplateAuth';
import Course from './Pages/Home/Course';
import Template from './Pages/Template';

const Router = () => {
  let routers = useRoutes([
    {
      path: '/auth',
      children: [
        {
          path: '',
          element: (
            <TemplateAuth>
              <Login />
            </TemplateAuth>
          ),
        },
        {
          path: 'restpass',
          element: (
            <TemplateAuth>
              <RestPass />
            </TemplateAuth>
          ),
        },
      ],
    },
    {
      path: '/dashboard',
      element: (
        <Template title="Trang chủ">
          <Course></Course>
        </Template>
      ),
    },
  ]);
  return routers;
};

export default Router;
