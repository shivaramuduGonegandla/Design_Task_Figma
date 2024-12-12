import React, { useState, useEffect } from 'react';

// ItemComponent to display items and filter options
const ItemComponent = ({ items, onFilterChange }) => {
  return (
    <div className="item-container">
      <div className="filter-options">
        <button onClick={() => onFilterChange('')}>Hide Filter</button>
      </div>
      
      {items.map((item) => (
        <div key={item.id} className="item">
          <p>{item.name}</p>
          {/* Add more details as needed */}
        </div>
      ))}
    </div>
  );
};

// RecommendedComponent to display recommended items
const RecommendedComponent = ({ recommendedItems }) => {
  return (
    <div className="recommended-container">
      <h3>Recommended</h3>
      {recommendedItems.map((item) => (
        <div key={item.id} className="recommended-item">
          <p>{item.name}</p>
          {/* Add more details as needed */}
        </div>
      ))}
    </div>
  );
};

// PageComponent to manage data and state
const PageComponent = () => {
  const [items, setItems] = useState([]);
  const [recommendedItems, setRecommendedItems] = useState([]);
  const [filterVisible, setFilterVisible] = useState(true);

  useEffect(() => {
    // Fetch items and recommended items from API
    const fetchData = async () => {
      try {
        const [itemsRes, recommendedRes] = await Promise.all([
          fetch('/api/items'),
          fetch('/api/recommended')
        ]);
        const itemsData = await itemsRes.json();
        const recommendedData = await recommendedRes.json();
        setItems(itemsData);
        setRecommendedItems(recommendedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleFilterChange = (value) => {
    setFilterVisible(value !== '');
  };

  // Filter items based on filterValue
  const filteredItems = items.filter((item) =>
    item.category === (filterVisible ? 'someCategory' : '') || filterVisible
  );

  return (
    <div className="page-container">
      <div className="card-container">
        <div className="card-content">
          {/* Left Section: 3452 Items & Filter Button */}
          <div className="left-section">
            <h5>3452 Items</h5>
            {filterVisible && (
              <button className="filter-button" onClick={() => handleFilterChange('')}>
                Hide Filter
              </button>
            )}
          </div>

          {/* Right Section: Recommended */}
          <div className="right-section">
            <RecommendedComponent recommendedItems={recommendedItems} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageComponent;
