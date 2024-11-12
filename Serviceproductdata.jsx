// src/components/Serviceproductdata.js
import React from 'react';
import Datamapping from './Datamapping';
import { serviceData } from '../data/serviceData';

const Serviceproductdata = () => {
  return (
    <div>
      <Datamapping data={serviceData} />
    </div>
  );
};

export default Serviceproductdata;
