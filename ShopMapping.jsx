import React from 'react';
import './Shop.css';

const ShopMapping = ({ data = [] }) => {
  return (
    <div className="container cards ">
      <div className="row">
        {data.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card shadow-sm">
              <img src={product.imgUrl} className="card-img-top" alt={product.title} />
              <div className="card-body text-center">
                <h5 className="card-title">{product.productName}</h5>
                <div className="d-flex justify-content-center mb-2">
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                </div>
                <span className="card-text fw-bold me-5 ">${product.price}</span>
                <button className="btn border rounded-circle ms-5">+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopMapping;
