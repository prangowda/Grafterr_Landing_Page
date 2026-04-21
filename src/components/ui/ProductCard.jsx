import styles from './ProductCard.module.css';

/**
 * Product showcase card with image and name.
 * @param {{ name: string, image: string, alt: string }} props
 */
function ProductCard({ name, image, alt }) {
  return (
    <div className={styles.card} id={`product-card-${name.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className={styles.cardHeader}>
        <h3 className={styles.productName}>{name}</h3>
      </div>
      <img className={styles.cardImage} src={image} alt={alt} loading="lazy" />
    </div>
  );
}

export default ProductCard;
