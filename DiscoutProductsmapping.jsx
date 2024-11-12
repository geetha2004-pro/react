import React from 'react';

const DiscountProductsMapping = ({ data = [] }) => {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id} className="product-item">
          <img src={item.imgUrl} alt={item.productName} className="product-image" />
          <h1>{item.productName}</h1>
          <p>{item.shortDesc}</p>
          <p>Price: ${item.price}</p>
          <p>Discount: {item.discount}%</p>
        </div>
      ))}
    </div>
  );
};

export default DiscountProductsMapping;

