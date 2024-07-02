"use client"
import { useState } from 'react';

const images = [
  'https://api.echomedi.com/uploads/Ellipse_30_a977481ba6.jpg',
  'https://api.echomedi.com/uploads/Ellipse_30_a977481ba6.jpg',
  'https://api.echomedi.com/uploads/Ellipse_30_a977481ba6.jpg',
  'https://api.echomedi.com/uploads/Ellipse_30_a977481ba6.jpg',
  'https://api.echomedi.com/uploads/Ellipse_30_a977481ba6.jpg',
  'https://api.echomedi.com/uploads/Ellipse_30_a977481ba6.jpg',
];

const Slider = () => {
  const [rotate, setRotate] = useState(0);
  const [active, setActive] = useState(0);
  const countItem = 6;
  const rotateAdd = 360 / countItem;

  const nextSlider = () => {
    setActive(active + 1 > countItem - 1 ? 0 : active + 1);
    setRotate(rotate + rotateAdd);
  };

  const prevSlider = () => {
    setActive(active - 1 < 0 ? countItem - 1 : active - 1);
    setRotate(rotate - rotateAdd);
  };

  return (
    <div className="slider">
      <div className="images" style={{ transform: `rotate(${rotate}deg)` }}>
        {images.map((src, index) => (
          <div key={index} className="item" style={{ transform: `rotate(${index * rotateAdd}deg)` }}>
            <img src={src} alt="Slide" className='h-80 w-80 rounded-full' />
          </div>
        ))}
      </div>
      <button id="prev" onClick={prevSlider} className='flex gap-2 items-center'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.06147 18.1227L3.00012 12.0613L9.06147 6" stroke="black" stroke-width="null" stroke-linecap="round" stroke-linejoin="round" className="my-path"></path>
        <path d="M21 12.0615H3" stroke="black" stroke-width="null" stroke-linecap="round" className="my-path"></path>
      </svg></button>
      <button id="next" onClick={nextSlider} className='flex gap-2 items-center'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.9385 6L20.9999 12.0613L14.9385 18.1227" stroke="black" stroke-width="null" stroke-linecap="round" stroke-linejoin="round" className="my-path"></path>
        <path d="M3 12.061L21 12.061" stroke="black" stroke-width="null" stroke-linecap="round" className="my-path"></path>
      </svg></button>
    </div>
  );
};

export default Slider;
