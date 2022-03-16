import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
function App() {
  return (
    <BrowserRouter>
      <div className="grid">
        <div className="row">
          <Router />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
