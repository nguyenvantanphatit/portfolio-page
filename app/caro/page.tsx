"use client";
import { useEffect, useRef, useState } from 'react';

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
      const hiddenOld = document.querySelector('.hidden') as HTMLElement;
      if (hiddenOld) hiddenOld.classList.remove('hidden');

      const activeOld = document.querySelector('.active') as HTMLElement;
      if (activeOld) {
        activeOld.classList.remove('active');
        activeOld.classList.add('hidden');
      }

      if (listRef.current[activeIndex]) {
        listRef.current[activeIndex]?.classList.add('active');
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
    <div className="carousel">
      <div className="list">
        <div className="item active" style={{ '--background': '#EA3D41' } as React.CSSProperties} ref={(el) => (listRef.current[0] = el)}>
          <div className="content">Strawberry</div>
          <img src="/images/caro/fruit_strawberry.png" className="fruit" />
        </div>
        <div className="item" style={{ '--background': '#2D5643' } as React.CSSProperties} ref={(el) => (listRef.current[1] = el)}>
          <div className="content">Avocado</div>
          <img src="/images/caro/fruit_avocado.png" className="fruit" />
        </div>
        <div className="item" style={{ '--background': '#E7A043' } as React.CSSProperties} ref={(el) => (listRef.current[2] = el)}>
          <div className="content">Orange</div>
          <img src="/images/caro/fruit_orange.png" className="fruit" />
        </div>
      </div>
      <div className="leaves"></div>
      <div className="mockup" ref={mockupRef}></div>
      <div className="shadow"></div>
      <div className="arrow">
        <button id="prev" onClick={handlePrev}>{'<'}</button>
        <button id="next" onClick={handleNext}>{'>'}</button>
      </div>
    </div>
  );
};

export default Carousel;
