import React from 'react'

const ArrivalMapping = ({data=[]}) => {
  return (
    <div className='row p-5 border-primary mt-5'>
        <h1 className='text-center'>Best Arrivals</h1>
        {
            data.map((items)=>(
                <div key={items.id} className="col-md-4 mb-4 border">
                    <img src={items.imgUrl} alt={items.title}  className='images w-100 '/>
                    <h1>{items.productName}</h1>
                    <span className='ps-3 ms-3'>${items.price}</span>
                    <span className='ps-5 ms-5'>+</span>
           
                </div>
            ))
        }
    </div>
  )
}

export default ArrivalMapping