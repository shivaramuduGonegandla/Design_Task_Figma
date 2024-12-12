import React from 'react';
import ProductList from '../product/ProductList';

const WebPLPHiddenFilter = () => {
  return (
    <div className="plp-container-hidden">
      <div className="product-list">
        <ProductList /> {/* Products without filter visible */}
      </div>
    </div>
  );
};

export default WebPLPHiddenFilter;
