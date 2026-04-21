import { useContent } from './hooks/useContent';
import HeroSection from './components/sections/HeroSection';
import FeaturesSection from './components/sections/FeaturesSection';
import styles from './App.module.css';

function App() {
  const { heroData, featuresData, loading, error, retry } = useContent();

  if (error) {
    return (
      <div className={styles.app}>
        <div className={styles.errorContainer}>
          <p className={styles.errorMessage}>Failed to load content</p>
          <button className={styles.retryButton} onClick={retry} id="retry-button">
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.app}>
      <HeroSection data={heroData} loading={loading} />
      <FeaturesSection data={featuresData} loading={loading} />
    </div>
  );
}

export default App;
