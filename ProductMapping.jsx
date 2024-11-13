import React from 'react'

const ProductMapping = ({data=[]}) => {
  return (
    <div>
        {data.map((items,index)=>(
            <div key={index}>
                <img src={items.imgurl} alt={items.title} />
            </div>
        ))}
    </div>
  )
}

export default ProductMapping