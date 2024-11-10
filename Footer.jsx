import React from 'react'

const Footer = () => {
  return (
    <div className='d-flex bg-primary'>
        <div className='footer m-5'>
            <h5 className='text-light'>Mart</h5>
            <p className="para text-white-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aspernatur ea deserunt dicta rem sit iste placeat? Exercitationem sint pariatur quae officiis praesentium earum dolorem consequuntur nulla! Quae, ad ullam.</p>
            {/* <p className="para"></p>
            <p className="para"></p>
            <p className="para"></p>
            <p className="para"></p> */}
        </div>
        <div className='footer m-5'>
        <h5 className='text-light pe-2'>About Us</h5>
            <p className="para text-white-50">Careers</p>
            <p className="para text-white-50">Our Stores</p>
            <p className="para text-white-50">our Cares</p>
            <p className="para text-white-50">Terms&Conditions</p>
            <p className="para text-white-50">Privacy&Policy</p>
        </div>
        <div className='footer m-5 '>
        <h5 className='text-light pe-5'>Customer Care</h5>
            <p className="para text-white-50">Help Center</p>
            <p className="para text-white-50">How to Buy</p>
            <p className="para text-white-50">Track Your Order</p>
            <p className="para text-white-50">Corporate&Bulk</p>
            <p className="para text-white-50">Purchasing</p>
            <p className="para text-white-50">Returns&refunds</p>
        </div>
        <div className='footer m-5'>
        <h5 className='text-light'>Contact Us</h5>
            <p className="para text-white-50">70 Washingtons Square</p>
            <p className="para text-white-50">South New York,NY 10012.</p>
            <p className="para text-white-50">Unistad States</p>
            <p className="para text-white-50">Email:example@gmail.com</p>
            <p className="para text-white-50">Phone:11123456780</p>
        </div>
    </div>
  )
}

export default Footer