import styles from './Skeleton.module.css';

/**
 * CSS-only shimmer skeleton placeholder.
 * @param {{ width: string, height: string, borderRadius: string }} props
 */
function Skeleton({ width, height, borderRadius = '8px' }) {
  return (
    <div
      className={styles.skeleton}
      style={{ width, height, borderRadius }}
      aria-hidden="true"
    />
  );
}

export default Skeleton;
