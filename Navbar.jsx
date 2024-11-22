import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <img
          src="https://lms.achieversit.com/assets/images/logo.png"
          alt="logo"
          className="navbar-logo"
        />
        <div className="navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/productData">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shop">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Cart
              </Link>
            </li>
            <li className="nav-item mt-2 me-2 ms-2">
              <i className="fa-solid fa-user fa-lg"></i>
            </li>
          </ul>
          <form className="d-flex me-3 me-5 ms-2">
            <Link className="nav-link" to="/">
              <i className="fa-solid fa-cart-shopping fa-lg"></i>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
