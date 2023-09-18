'use client'
import React, { useEffect } from 'react';

const MyComponent = () => {
  useEffect(() => {
    const handleScroll = () => {
      const blocks = document.querySelectorAll('.block');

      blocks.forEach((everyblock) => {
        let block = everyblock as HTMLElement;
        const blockPosition = block.getBoundingClientRect().top;
        const scrollPosition = window.scrollY;
        let opacity = 1 - (scrollPosition - blockPosition) / 500; // Измените 500 на желаемое значение для регулировки скорости изменения прозрачности

        // Ограничение значения прозрачности от 0 до 1
        if (opacity < 0) {
          opacity = 0;
        } else if (opacity > 1) {
          opacity = 1;
        }

        block.style.opacity = opacity.toString();
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="block">Содержимое блока 1</div>
      <div className="block">Содержимое блока 2</div>
      <div className="block">Содержимое блока 3</div>
      {/* Другие блоки */}
    </div>
  );
};

export default MyComponent;