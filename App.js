// src/App.js
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './header/Navbar';
import Footer from './header/Footer';
import Productdata from './header/Productdata';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  
import Cart from '../src/cart/Cart';
import Shop from './shop/Shop';
import { Route, Routes } from 'react-router-dom';
import CartPage from './data/CartPage';



function App() {
  return (
    <>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='productdata' element={<Productdata />} />
        <Route path='shop' element={<Shop />}/>
        <Route path='cart' element={  <Cart />} />
        <Route path='cartpage' element={  <CartPage />} />
      </Routes>
      <Footer />
    </div>
    </>
  );
}

export default App;
