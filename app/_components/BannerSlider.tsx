'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from './BannerSlider.module.css';

const BannerSlider = ({ banners, width = '100%', height = '400px' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [swipeDistance, setSwipeDistance] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => { 
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div 
      className={styles.sliderContainer} 
      ref={sliderRef}
      style={{ width, height }}
    >
      <div 
        className={styles.sliderTrack} 
        style={{ 
          transform: `translateX(calc(-${currentIndex * 100}% - ${swipeDistance}px))`,
          transition: isSwiping ? 'none' : 'transform 0.5s ease-in-out'
        }}
      >
        {banners.map((banner, index) => (
          <div key={index} className={styles.slide}>
            <img src={banner.imageUrl} alt={`Banner ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className={styles.indicators}>
        {banners.map((_, index) => (
          <span
            key={index}
            className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;