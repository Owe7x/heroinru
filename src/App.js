import React from 'react';
import {  Route, Routes, BrowserRouter } from 'react-router-dom';
import Main from './pages/Main';
import Services from './pages/Services';
import Cases from './pages/Cases';
import './App.css';
import Form from './pages/Form';
import About from './pages/about';
import Politic from './pages/Politic';


function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />}  />
            <Route path="/services" element={<Services />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/contact" element={<Form />} />
            <Route path="/about" element={<About />} />
            <Route path="/politic" element={<Politic />} />
          </Routes>
        </BrowserRouter>


    </div>
  );
}



export default App;
