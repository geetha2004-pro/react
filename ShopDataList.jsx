import React, { useState } from 'react';
import './Shop.css';

const ShopDataList = ({ data }) => {
  // State to store the selected product
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Handle click on a product card to show its details
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className=' details'>
      {/* Display clicked product details at the top if one is selected */}
      {selectedProduct && (
        <div>
        <div className="product-details d-flex border">
          <img src={selectedProduct.imgUrl} alt={selectedProduct.productName} className="product-image border" />
          <div className='p-5'>
          <h3>Product Details</h3>
          <h6><strong>Product Name:</strong> {selectedProduct.productName}</h6>
          <p><strong>Price:</strong> ${selectedProduct.price}</p>
          <button className='btn btn-primary'>add to card</button>
          {/* Add any other related data here */}
          </div>
          </div>
          <div className='d-flex  discription'>
          <p><strong>Description:</strong> {selectedProduct.description || 'No description available'}</p>
          <p><strong>Reviews:</strong> 
          <div className="d-flex">
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                </div>
          </p>
        </div>
        </div>
      )}

      {/* Product list below the details */}
      <div className="productlist row">
        {data.length > 0 ? (
          data.map((product) => (
            <div
              key={product.id}
              className="productcard col-md-4 border"
              onClick={() => handleProductClick(product)} // Add click handler to set the selected product
            >
              <h5 className="text-name">{product.productName}</h5>
              <img
                src={product.imgUrl}
                alt={product.productName}
                className="image"
              />
              <div className="d-flex justify-content-center mb-2">
                {[...Array(5)].map((_, index) => (
                  <i key={index} className="fa-solid fa-star text-warning"></i>
                ))}
              </div>
              <p>Avg Rating: {product.avgRating}</p>
              <div className="d-flex justify-content-between align-items-center">
                <span className="card-text fw-bold">${product.price}</span>
                <button className="btn border rounded-circle">+</button>
              </div>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default ShopDataList;
