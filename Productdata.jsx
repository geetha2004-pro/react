import React from 'react';
import Datamaping from './Datamaping';
import { SliderData } from './Data';

const Productdata = () => {
  return (
    <div>
      <Datamaping productData={SliderData} />
    </div>
  );
};

export default Productdata;
