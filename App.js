// src/App.js
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './header/Navbar';
import Footer from './header/Footer';
import Productdata from './header/Productdata';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  
import { DiscountProducts } from './discountproducts/DiscoutProducts';
import Serviceproductdata from './servicedata/Serviceproductdata';
import ProductData from './header/product/ProductData';
import ArrivalsData from './arrivals/ArrivalsData';


function App() {
  return (
    <>
    <div className="App">
      <Navbar />
      <Productdata />
      <Serviceproductdata />
      <DiscountProducts />   
      <ArrivalsData />
      <ProductData />
      <Footer />
    </div>
    </>
  );
}

export default App;
