import React from 'react'

const ProductMapping = ({data=[]}) => {
  return (
    <div className='d-flex row p-5'>
        {data.map((items)=>(
            <div key={items.id} className="col-md-4 mb-4 p-5">
                <img src={items.imgUrl} alt={items.title} className='w-50 ' />
                <h1>{items.productName}</h1>
                <span>${items.price}</span>
                <span className='ps-5 ms-5'>+</span>


            </div>
        ))}
    </div>
  )
}

export default ProductMapping