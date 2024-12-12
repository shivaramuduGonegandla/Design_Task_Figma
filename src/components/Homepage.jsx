import React from "react";

import PageComponent from "../pages/PageComponent";

const Homepage = () => {
  return (
    <>
      <div className="homepage-container">
        <div className="content">
          <h1 className="title">DISCOVER OUR PRODUCTS</h1>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
          </p>
        </div>
      </div>

      <div className="main-content">
        <PageComponent />
      </div>

    </>
  );
};

export default Homepage;
