// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Nav from './components/Nav';
import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Cart';
import Login from './components/Login';
import Signup from './components/Signup';
import Help from './components/Help';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
     
        <div className="min-h-screen">
       
          <Routes>
            <Route path="/" element={<><Nav /><Home /><Footer /></>} />
            <Route path="/products" element={<><Nav/><Products /><Footer /></>} />
            <Route path="/cart" element={<><Nav/><Cart /><Footer /></>} />
            <Route path="/login" element={<><Nav/><Login /><Footer /></>} />
            <Route path="/signup" element={<><Nav/><Signup /><Footer /></>} />
            <Route path="/help" element={<><Nav/><Help /><Footer /></>} />
          </Routes>
        </div>
     
    </ThemeProvider>
  );
}

export default App;