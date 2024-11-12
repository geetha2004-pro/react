// src/App.js
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './header/Navbar';
import Footer from './header/Footer';
import Productdata from './header/Productdata';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Include this for Bootstrap JS functionality
import Datamapping from './servicedata/Datamapping';
import { DiscountProducts } from './discountproducts/DiscoutProducts';


function App() {
  return (
    <>
    <div className="App">
      <Navbar />
      <Productdata />
      <Datamapping />
      <DiscountProducts />   
      <Footer />
    </div>
    </>
  );
}

export default App;
