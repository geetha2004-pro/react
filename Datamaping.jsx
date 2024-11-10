import React from 'react';

const Datamaping = ({ productData }) => {
  return (
    <div>
      {productData.map((item) => (
        <div className="container" key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.desc}</p>
          <img src={item.cover} alt={item.title} />
        </div>
      ))}
    </div>
  );
};

export default Datamaping;

