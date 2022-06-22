import React from 'react';
import {  Route, Routes, BrowserRouter } from 'react-router-dom';
import Main from './pages/Main';
import Services from './pages/Services';
import Cases from './pages/Cases';
import './App.css';


function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />}  />
            <Route path="/services" element={<Services />} />
            <Route path="/cases" element={<Cases />} />
          </Routes>
        </BrowserRouter>


    </div>
  );
}

export default App;
