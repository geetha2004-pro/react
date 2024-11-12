import React from 'react';
import DiscountProductsMapping from './DiscountProductsMapping';
import { discountProducts } from './DiscountProductsData';

const DiscountProducts = () => {
  return (
    <div>
      <DiscountProductsMapping data={discountProducts} />
    </div>
  );
};

export default DiscountProducts;
