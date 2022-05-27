import React from 'react';

import { Counter } from './features/counter/Counter';
import './App.css';

import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Login from './components/login';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />  
          <Routes>
          <Route path="/Detail" element={<Detail/>} />
          <Route path='/' element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          </Routes>
        </Router>      
    </div>
  );
}

export default App;