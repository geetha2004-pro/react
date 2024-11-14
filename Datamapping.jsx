// src/components/Datamapping.js
import React from 'react';

const Datamapping = ({ data=[] }) => {
  return (
    <div className='d-flex gap-5 m-5'>
      {data.map((item, index) => (
        <div key={index} className="container" style={{ backgroundColor: item.bg }}>
          <div>{item.icon}</div>
          <h1>{item.title}</h1>
          <p>{item.subtitle}</p>
        </div>
      ))}
    </div>
  );
};

export default Datamapping;
