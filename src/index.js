import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Resume from './Components/Resume/Resume';
import {BrowserRouter, Routes,  Route} from 'react-router-dom';


//Render routes and components
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
