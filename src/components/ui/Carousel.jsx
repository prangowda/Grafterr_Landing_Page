import { useState, useEffect } from 'react';
import { useCarousel } from '../../hooks/useCarousel';
import ProductCard from './ProductCard';
import styles from './Carousel.module.css';

/**
 * Responsive carousel component with arrow navigation and touch support.
 * @param {{ items: Array, config: object }} props
 */
function Carousel({ items, config }) {
  const [itemsPerView, setItemsPerView] = useState(config.itemsPerView.mobile);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width >= 1200) {
        setItemsPerView(config.itemsPerView.desktop);
      } else if (width >= 768) {
        setItemsPerView(config.itemsPerView.tablet);
      } else {
        setItemsPerView(config.itemsPerView.mobile);
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [config.itemsPerView]);

  const { currentIndex, canGoPrev, canGoNext, goPrev, goNext, touchHandlers } =
    useCarousel(items, itemsPerView);

  const slideWidthPercent = 100 / itemsPerView;
  const translateX = -(currentIndex * slideWidthPercent);

  return (
    <div className={styles.carousel} id="product-carousel">
      <div
        className={styles.carouselTrack}
        style={{
          transform: `translateX(${translateX}%)`,
          transitionDuration: `${config.transitionDuration}ms`,
        }}
        {...touchHandlers}
      >
        {items.map((item) => (
          <div
            className={styles.carouselSlide}
            key={item.id}
            style={{ width: `${slideWidthPercent}%` }}
          >
            <ProductCard name={item.name} image={item.image} alt={item.alt} />
          </div>
        ))}
      </div>

      {config.showArrows && (
        <div className={styles.arrowContainer}>
          <button
            className={styles.arrowButton}
            onClick={goPrev}
            disabled={!canGoPrev}
            aria-label="Previous slide"
            id="carousel-prev"
          >
            ←
          </button>
          <button
            className={styles.arrowButton}
            onClick={goNext}
            disabled={!canGoNext}
            aria-label="Next slide"
            id="carousel-next"
          >
            →
          </button>
        </div>
      )}
    </div>
  );
}

export default Carousel;
