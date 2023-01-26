import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Product from './components/Product'
import Cart from './components/Cart';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Milk/:id" element={<Product />}></Route>
        <Route path="/Cart/:cartid" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
