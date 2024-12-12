import React from 'react';
import ProductList from '../product/ProductList';
import Footer from './Footer';
import Header from './Header';

const PhonePLP = () => {
  return (
    <div className="phone-plp-container">
        <Header />
      <ProductList /> 
      <Footer />
    </div>
  );
};

export default PhonePLP;
