import React from 'react';

import Datamaping from './Datamaping'; // Correct path to Datamaping
import { SliderData } from './data/sliderData'; // Correct path to sliderData

const Productdata = () => {
  return (
    <div>
      <Datamaping productData={SliderData} />
    </div>
  );
};

export default Productdata;
