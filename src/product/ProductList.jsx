import React, { useEffect, useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetching data from FakeStoreAPI
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError('Error fetching products');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  // Function to get only one word
  const getOneWord = (text) => {
    return text.split(' ')[0]; // Split by space and return the first word
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} />
          <h2>{getOneWord(product.title)}</h2> {/* Only one word for title */}
          <p>{getOneWord(product.description)}</p> {/* Only one word for description */}
          <p>
            <strong>Price: </strong>${product.price}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
