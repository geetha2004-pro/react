// src/App.js
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './header/Navbar';
import Footer from './header/Footer';
import Productdata from './header/Productdata';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  
import Shop from './shop/Shop';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='shop' element={<Shop />}/>
        <Route path='productdata' element={<Productdata />} />
      </Routes>
      <Footer />
    </div>
    </>
  );
}

export default App;
