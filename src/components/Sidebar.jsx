import React, { useState } from "react";

const Sidebar = () => {
  // State to manage dropdown visibility
  const [dropdownState, setDropdownState] = useState({
    idealFor: false,
    occasion: false,
    work: false,
    fabric: false,
    segment: false,
    suitableFor: false,
    rawMaterials: false,
    pattern: false,
  });

  // Toggle dropdown visibility
  const toggleDropdown = (key) => {
    setDropdownState((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <div className="sidebar-card">
      <h2 className="card-title">Filter Options</h2>
      <ul className="filter-list">
        {/* Dropdown Items */}
        {[
          "IDEAL FOR",
          "OCCASION",
          "WORK",
          "FABRIC",
          "SEGMENT",
          "SUITABLE FOR",
          "RAW MATERIALS",
          "PATTERN",
        ].map((category, index) => {
          const key = category.replace(" ", "").toLowerCase();
          return (
            <li className="filter-item" key={index}>
              <h3 onClick={() => toggleDropdown(key)} className="dropdown-header">
                {category}
                <span className="arrow">
                  {dropdownState[key] ? "▲" : "▼"}
                </span>
              </h3>
              {dropdownState[key] && (
                <ul className="dropdown-content">
                  <li>All</li>
                  {/* Add more options as needed */}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
