import React from 'react';
import Sidebar from './Sidebar';
import ProductList from '../product/ProductList';

const WebPLPWithFilter = () => {
  return (
    <div className="plp-container">
      <div className="sidebar">
        <Sidebar /> {/* Sidebar with filters */}
      </div>
      <div className="product-list">
        <ProductList /> {/* Products with filter */}
      </div>
    </div>
  );
};

export default WebPLPWithFilter;
