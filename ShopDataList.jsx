import React from 'react'
import ShopMapping from './ShopMapping'
import { productsList } from './ShopData'

const ShopDataList = () => {
  return (
    <div>
       <ShopMapping data={productsList}/>
    </div>
  )
}

export default ShopDataList