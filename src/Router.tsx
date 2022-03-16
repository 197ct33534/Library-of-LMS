import React from 'react';
import { useRoutes } from 'react-router-dom';
import Login from './Pages/Auth/Login';
import TemplateAuth from './Pages/Auth/TemplateAuth';

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
      ],
    },
  ]);
  return routers;
};

export default Router;
