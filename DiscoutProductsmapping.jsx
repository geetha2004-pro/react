import React from 'react';
import '../discountproducts/Discount.css';

export const DiscountProductsMapping = ({ data = [] }) => {
  return (
    <div className="row">
      <h1 className="text-center mt-5 mb-3">Best Discount</h1>
      {data.map((item) => (
        <div key={item.id} className="col-md-4 border mb-2">
          <div className="product-item pb-3 mb-3">
            <p className="bg-dark text-white rounded-pill percentage mt-5 ps-2">
              {item.discount}% off
            </p>
            <img src={item.imgUrl} alt={item.productName} className="product-image" />
            <h1>{item.productName}</h1>
            <div className="d-flex justify-content-between align-items-center p-1">
              <span>${item.price}</span>
              <span className="text-control p-2">+</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};



