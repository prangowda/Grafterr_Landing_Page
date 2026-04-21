import { useState, useEffect, useCallback } from 'react';
import { fetchHeroContent, fetchFeaturesContent } from '../services/api';

/**
 * Custom hook that fetches all page content in parallel.
 * Returns heroData, featuresData, loading state, error state, and retry function.
 */
export function useContent() {
  const [heroData, setHeroData] = useState(null);
  const [featuresData, setFeaturesData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadContent = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const [heroResult, featuresResult] = await Promise.all([
        fetchHeroContent(),
        fetchFeaturesContent(),
      ]);

      setHeroData(heroResult);
      setFeaturesData(featuresResult);
    } catch (err) {
      setError(err.message || 'Failed to load content');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadContent();
  }, [loadContent]);

  return {
    heroData,
    featuresData,
    loading,
    error,
    retry: loadContent,
  };
}
