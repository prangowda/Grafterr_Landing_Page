import GradientText from '../ui/GradientText';
import GradientButton from '../ui/GradientButton';
import FloatingShape from '../ui/FloatingShape';
import Skeleton from '../ui/Skeleton';
import styles from './HeroSection.module.css';

/**
 * Hero section with headline, subheadline, CTA, and floating shapes.
 * @param {{ data: object | null, loading: boolean }} props
 */
function HeroSection({ data, loading }) {
  if (loading || !data) {
    return (
      <section className={styles.heroSection} id="hero-section">
        <div className={styles.heroContent}>
          <div className={styles.skeletonGroup}>
            <Skeleton width="70%" height="56px" borderRadius="8px" />
            <Skeleton width="60%" height="56px" borderRadius="8px" />
            <Skeleton width="80%" height="20px" borderRadius="4px" />
            <Skeleton width="180px" height="50px" borderRadius="50px" />
          </div>
        </div>
      </section>
    );
  }

  const { hero, navigation } = data;

  return (
    <section className={styles.heroSection} id="hero-section">
      {hero.shapes.map((shape, index) => (
        <FloatingShape
          key={index}
          type={shape.type}
          color={shape.color}
          size={shape.size}
          position={shape.position}
        />
      ))}

      <div className={`${styles.heroContent} ${styles.fadeIn}`}>
        <h1>
          <span className={styles.headlinePrefix}>{hero.headlinePrefix}</span>
          <span className={styles.headlineGradient}>
            <GradientText>{hero.headlineGradient}</GradientText>
          </span>
        </h1>

        <p
          className={styles.subheadline}
          dangerouslySetInnerHTML={{ __html: hero.subheadline }}
        />

        <div className={styles.ctaWrapper}>
          <GradientButton label={hero.cta.label} href={hero.cta.href} />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
