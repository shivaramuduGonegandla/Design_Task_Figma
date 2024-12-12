import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import ProductCard from './product/ProductCard';
import WebPLPHiddenFilter from './components/WebPLPHiddenFilter';
import WebPLPWithFilter from './components/WebPLPWithFilter';
import WebPLPWithFilterExpanded from './components/WebPLPWithFilterExpanded';
import PhonePLP from './components/PhonePLP';

function App() {
  // State to manage which layout to show
  const [layout, setLayout] = useState('withfilter');  // Default layout

  return (
    <Router>
      <Header />
      <Homepage />
      <div className="layout-options">
        <button onClick={() => setLayout('withfilter')}>With Filter</button>
        <button onClick={() => setLayout('withfilterexpanded')}>With Filter Expanded</button>
        <button onClick={() => setLayout('hiddenfilter')}>Hidden Filter</button>
        <button onClick={() => setLayout('phone')}>Phone PLP</button>
      </div>

      {/* Conditionally render based on the selected layout */}
      <div className="main-content">
		
        {layout === 'withfilter' && <WebPLPWithFilter />}
        {layout === 'withfilterexpanded' && <WebPLPWithFilterExpanded />}
        {layout === 'hiddenfilter' && <WebPLPHiddenFilter />}
        {layout === 'phone' && <PhonePLP />}
      </div>

      <Footer />
    </Router>
  );
}

export default App;
