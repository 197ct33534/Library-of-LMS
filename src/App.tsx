import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Router from './Router';
import Login from './Pages/Auth/Login';
import RestPass from './Pages/Auth/RestPass';
import TemplateAuth from './Pages/Auth/TemplateAuth';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<TemplateAuth></TemplateAuth>}>
          <Route path="restpass" element={<RestPass />}></Route>
          <Route path="" element={<Login />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
