import Carousel from '../ui/Carousel';
import FloatingShape from '../ui/FloatingShape';
import Skeleton from '../ui/Skeleton';
import styles from './FeaturesSection.module.css';

/**
 * Features section with title, subtitle, divider, floating shapes, and product carousel.
 * @param {{ data: object | null, loading: boolean }} props
 */
function FeaturesSection({ data, loading }) {
  if (loading || !data) {
    return (
      <section className={styles.featuresSection} id="features-section">
        <div className={styles.container}>
          <div className={styles.titleArea}>
            <Skeleton width="50%" height="42px" borderRadius="8px" />
            <div style={{ marginTop: '12px' }}>
              <Skeleton width="40%" height="42px" borderRadius="8px" />
            </div>
          </div>
          <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'center' }}>
            <Skeleton width="60%" height="18px" borderRadius="4px" />
          </div>
          <div className={styles.skeletonCards} style={{ marginTop: '48px' }}>
            {[1, 2, 3].map((i) => (
              <div className={styles.skeletonCard} key={i}>
                <Skeleton width="100%" height="340px" borderRadius="16px" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const { featuresSection, carousel } = data;

  return (
    <section className={styles.featuresSection} id="features-section">
      {/* Floating decorative shapes */}
      <FloatingShape
        type="circle"
        color="#3B82F6"
        size={28}
        position={{ top: '12%', left: '10%' }}
      />
      <FloatingShape
        type="rectangle"
        color="#F97316"
        size={22}
        position={{ top: '15%', right: '10%' }}
      />

      <div className={`${styles.container} ${styles.fadeIn}`}>
        <div className={styles.titleArea}>
          <h2 className={styles.sectionTitle}>
            {featuresSection.titlePrefix}
            <span className={styles.titleAccent}>{featuresSection.titleAccent}</span>
            {featuresSection.titleSuffix}
            <br />
            {featuresSection.titleLine2}
          </h2>
        </div>

        <p className={styles.subtitle}>{featuresSection.subtitle}</p>

        <div className={styles.divider}>
          <div className={styles.dividerLine} />
          <div className={styles.dividerPill} />
          <div className={styles.dividerLine} />
        </div>

        <Carousel items={featuresSection.products} config={carousel} />
      </div>
    </section>
  );
}

export default FeaturesSection;
