import React from 'react';
import Datamaping from './Datamaping'; // Ensure this path is correct
// import { SliderData } from '../data/SliderData'; // Ensure this path is correct
import { SliderData } from './Data';
const Productdata = () => {
  return (
    <div>
      {/* Pass SliderData as a prop */}
      <Datamaping productData={SliderData} />

    </div>
  );
};

export default Productdata;
