import React, { useState } from 'react';
import '../discountproducts/Discount.css';
import ArrivalsData from '../arrivals/ArrivalsData';

export const DiscountProductsMapping = ({ data = [] }) => {
  const[count,setcount]=useState()
  const increament=()=>{
    setcount(count +1)
  }
  const amount=()=>{
    setcount()
  }
  return (
    <div className="container ">
      <h1 className="text-center mt-5 mb-5">Best Discount</h1>
      <div className="row">
        {data.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="product-item">
              <p className="bg-dark text-white rounded-pill percentage mt-1 p-2">
                {item.discount}% off
              </p>
              <img src={item.imgUrl} alt={item.productName} className="product-image" />
              <h3 className="product-name mt-3">{item.productName}</h3>
              <div className='d-flex'>
              <i class="fa-solid fa-star text-warning"></i>
              <i class="fa-solid fa-star text-warning"></i>              
              <i class="fa-solid fa-star text-warning"></i>
              <i class="fa-solid fa-star text-warning"></i>
              <i class="fa-solid fa-star text-warning"></i>
              <i class="fa-solid fa-star text-warning"></i>
              </div>
              <div className="d-flex justify-content-between align-items-center p-2">
                <span className="product-price" onClick={amount}>${count}{item.price}</span>
                <button className="text-control" onClick={increament}>+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ArrivalsData />
    </div>
  );
};
