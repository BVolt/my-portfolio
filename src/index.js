import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Resume from './Resume/Resume';
import {BrowserRouter, Routes,  Route, Link} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route exact path="/"element={<App />} />
        <Route exact path="/Resume" element={<Resume />} />
      </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
