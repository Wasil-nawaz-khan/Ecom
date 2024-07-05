import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Cart from './components/Cart';
import Products from './components/Products';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import ErrorPage from './components/ErrorPage';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={
                                  <ProtectedRoute>
                                  <Cart />
                                  </ProtectedRoute>
          }
        />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      
    </Router>
  );
};

export default App;
