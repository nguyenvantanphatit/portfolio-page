"use client"
import { useEffect, useRef, useState } from 'react';
import styles from '../Carousel.module.css';
import fruit_strawberry from "../img/fruit_strawberry.png"
const Carousel = () => {
  const listRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const count = 3; // Number of items
  const leftEachItem = 100 / (count - 1);
  const [leftMockup, setLeftMockup] = useState(0);
  const mockupRef = useRef<HTMLDivElement | null>(null);
  const refreshIntervalRef = useRef<number | null>(null);

  useEffect(() => {
    refreshIntervalRef.current = window.setInterval(() => { handleNext(); }, 3000);
    return () => clearInterval(refreshIntervalRef.current as number);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev >= count - 1 ? 0 : prev + 1));
    setLeftMockup((prev) => prev + leftEachItem);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev <= 0 ? count - 1 : prev - 1));
    setLeftMockup((prev) => prev - leftEachItem);
  };

  useEffect(() => {
    const handleCarouselChange = () => {
      const hiddenOld = document.querySelector(`.${styles.hidden}`) as HTMLElement;
      if (hiddenOld) hiddenOld.classList.remove(styles.hidden);

      const activeOld = document.querySelector(`.${styles.active}`) as HTMLElement;
      if (activeOld) {
        activeOld.classList.remove(styles.active);
        activeOld.classList.add(styles.hidden);
      }

      if (listRef.current[activeIndex]) {
        listRef.current[activeIndex]?.classList.add(styles.active);
      }

      if (mockupRef.current) {
        mockupRef.current.style.setProperty('--left', `${leftMockup}%`);
      }

      clearInterval(refreshIntervalRef.current as number);
      refreshIntervalRef.current = window.setInterval(() => { handleNext(); }, 3000);
    };

    handleCarouselChange();
  }, [activeIndex, leftMockup]);

  return (
    <div className={styles.carousel}>
      <div className={styles.list}>
        <div className={`${styles.item} ${styles.active}`} style={{ '--background': '#EA3D41' } as React.CSSProperties} ref={(el) => (listRef.current[0] = el)}>
          <div className={styles.content}>Strawberry</div>
          <img src="/images/caro/fruit_strawberry.png" className={styles.fruit} />
        </div>
        <div className={styles.item} style={{ '--background': '#2D5643' } as React.CSSProperties} ref={(el) => (listRef.current[1] = el)}>
          <div className={styles.content}>Avocado</div>
          <img src="/images/caro/fruit_avocado.png" className={styles.fruit} />
        </div>
        <div className={styles.item} style={{ '--background': '#E7A043' } as React.CSSProperties} ref={(el) => (listRef.current[2] = el)}>
          <div className={styles.content}>Orange</div>
          <img src="/images/caro/fruit_orange.png" className={styles.fruit} />
        </div>
      </div>
      <div className={styles.leaves}></div>
      <div className={styles.mockup} ref={mockupRef}></div>
      <div className={styles.shadow}></div>
      <div className={styles.arrow}>
        <button id="prev" onClick={handlePrev}>{'<'}</button>
        <button id="next" onClick={handleNext}>{'>'}</button>
      </div>
    </div>
  );
};

export default Carousel;
