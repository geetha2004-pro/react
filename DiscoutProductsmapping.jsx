import React from 'react';
// import '../discountproducts/Discount.css'

export const DiscountProductsMapping = ({ data = [] }) => {
  return (
    <div className="row">
      <h1 className='text-center m-5'>New Arrivals</h1>
      {data.map((item) => (
        <div key={item.id} className="col-md-4 mb-4">
          <div className="product-item">
            <img src={item.imgUrl} alt={item.productName} className="product-image w-100" />
            <h1>{item.productName}</h1>
            <p>{item.shortDesc}</p>
            <p>Price: ${item.price}</p>
            <p>Discount: {item.discount}%</p>
          </div>
        </div>
      ))}
    </div>
  );
};




