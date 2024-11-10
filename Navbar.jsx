import React from 'react'


const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <img src="https://lms.achieversit.com/assets/images/logo.png" alt="logo" />
    <div class="navbar justify-content-end" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item" aria-current="page">
          <a class="nav-link active" href="#">Shop</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link active"  aria-current="page" href="#">
          Cart
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" >
    
        <button class="btn"type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar