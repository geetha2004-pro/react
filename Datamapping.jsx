// src/components/Datamapping.js
import React from 'react';

const Datamapping = ({ data=[] }) => {
  return (
    <div className='d-flex gap-3'>
      {data.map((item, index) => (
        <div key={index} className=" p-2 container" style={{ backgroundColor: item.bg }}>
          <div>{item.icon}</div>
          <div>{item.bg}</div>
          <h1>{item.title}</h1>
          <p>{item.subtitle}</p>
        </div>
      ))}
    </div>
  );
};

export default Datamapping;
