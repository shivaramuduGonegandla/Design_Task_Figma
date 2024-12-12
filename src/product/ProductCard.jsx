import React from 'react';
import styles from './ProductCard.module.css'; // Correct way to import styles from CSS Module

const ProductCard = ({ product }) => {
  // Check if product is defined and contains necessary properties
  if (!product || !product.image || !product.title || !product.price) {
    return <div>Product information is missing.</div>;
  }

  return (
    <div className={styles.card}> {/* Using the styles defined in the CSS module */}
      <img src={product.image} alt={product.title} className={styles.image} />
      <h2 className={styles.title}>{product.title}</h2>
      <p className={styles.price}>${product.price}</p>
    </div>
  );
};

export default ProductCard;
