import styles from './GradientText.module.css';

/**
 * Renders text with a blue-to-orange gradient.
 * @param {{ children: React.ReactNode }} props
 */
function GradientText({ children }) {
  return <span className={styles.gradientText}>{children}</span>;
}

export default GradientText;
