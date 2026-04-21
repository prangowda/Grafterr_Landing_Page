import styles from './GradientButton.module.css';

/**
 * Gradient call-to-action button.
 * @param {{ label: string, href: string }} props
 */
function GradientButton({ label, href }) {
  return (
    <a className={styles.gradientButton} href={href} id="cta-button">
      {label}
    </a>
  );
}

export default GradientButton;
