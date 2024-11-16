import React from 'react'
import './Shop.css';
import ShopDataList from './ShopDataList';

const Shop = () => {
  return (
    <div>
<div className='shop-page'>
  <h1 className='text-center text-light pt-5'>Product</h1>
<nav class="navbar navbarr navbar-expand-lg ">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle category" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Filter by Category
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex" >
        <input class="form-control searchbar" type="search" placeholder="Search" /><i class="fa-solid fa-magnifying-glass text-light-emphasis search"></i>
        {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
      </form>
    </div>
 
</nav>
</div>
<ShopDataList />

    </div>
  )
}

export default Shop