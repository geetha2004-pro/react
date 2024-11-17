import React, { useState } from 'react';
import './Shop.css';
import ShopDataList from './ShopDataList';
import { productsList } from './ShopData';

const Shop = () => {
  // State to manage the search term
  const [searchTerm, setSearchTerm] = useState('');

  // Filter products based on the search term
  const filteredProducts = productsList.filter(product =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase()) // Case-insensitive search
  );

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <div className="shop-page">
        <h1 className="text-center text-light pt-5">Products</h1>
        <nav className="navbar navbarr navbar-expand-lg">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle category"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Filter by Category
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">Sofa</a></li>
                  <li><a className="dropdown-item" href="/">Chair</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/">Mobile</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control searchbar"
                type="search"
                placeholder="Search"
                value={searchTerm} // Bind input value to the search term
                onChange={handleSearchChange} // Update search term as user types
              />
              <i className="fa-solid fa-magnifying-glass text-light-emphasis search"></i>
            </form>
          </div>
        </nav>
      </div>
      {/* Pass the filtered products to ShopDataList */}
      <ShopDataList data={filteredProducts} />
    </div>
  );
};

export default Shop;
