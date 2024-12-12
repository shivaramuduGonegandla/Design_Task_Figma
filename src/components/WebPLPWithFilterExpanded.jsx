import React from 'react';
import Sidebar from './Sidebar';
import ProductList from '../product/ProductList';

const WebPLPWithFilterExpanded = () => {
  return (
    <div className="plp-container-expanded">
      <div className="sidebar-expanded">
        <Sidebar /> {/* Expanded sidebar */}
      </div>
      <div className="product-list">
        <ProductList /> {/* Same product listing with expanded filter */}
      </div>
    </div>
  );
};

export default WebPLPWithFilterExpanded;
