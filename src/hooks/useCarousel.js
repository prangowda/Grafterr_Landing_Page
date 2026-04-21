import { useState, useCallback } from 'react';

const SWIPE_THRESHOLD = 50;

/**
 * Custom hook for carousel navigation with touch support.
 * @param {Array} items - Array of carousel items
 * @param {number} itemsPerView - Number of items visible at once
 */
export function useCarousel(items, itemsPerView) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);

  const maxIndex = Math.max(0, items.length - itemsPerView);

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  }, []);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  }, [maxIndex]);

  const handleTouchStart = useCallback((e) => {
    setTouchStartX(e.touches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(
    (e) => {
      if (touchStartX === null) return;
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > SWIPE_THRESHOLD) {
        if (diff > 0 && canGoNext) {
          goNext();
        } else if (diff < 0 && canGoPrev) {
          goPrev();
        }
      }
      setTouchStartX(null);
    },
    [touchStartX, canGoNext, canGoPrev, goNext, goPrev]
  );

  const touchHandlers = {
    onTouchStart: handleTouchStart,
    onTouchEnd: handleTouchEnd,
  };

  return {
    currentIndex,
    canGoPrev,
    canGoNext,
    goPrev,
    goNext,
    touchHandlers,
  };
}
