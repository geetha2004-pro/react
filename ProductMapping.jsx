import React from 'react';
import './Product.css'; // Import your CSS

const ProductMapping = ({ data = [] }) => {
  return (
    <div className="row product-container">
      <h1 className="text-center mt-5">Best Product</h1>
      {data.map((items) => (
        <div key={items.id} className="col-md-4 border product-item">
          <img src={items.imgUrl} alt={items.title} className="w-100" />
          <h1>{items.productName}</h1>
          <span>${items.price}</span>
          <span className="ps-5 ms-5">+</span>
        </div>
      ))}
    </div>
  );
};

export default ProductMapping;
