import styles from './FloatingShape.module.css';

/**
 * Renders an absolutely positioned decorative shape.
 * @param {{ type: 'circle' | 'rectangle', color: string, size: number, position: object }} props
 */
function FloatingShape({ type, color, size, position }) {
  const shapeClass = type === 'circle' ? styles.circle : styles.rectangle;

  return (
    <div
      className={`${styles.shape} ${shapeClass}`}
      style={{
        ...position,
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
      }}
      aria-hidden="true"
    />
  );
}

export default FloatingShape;
