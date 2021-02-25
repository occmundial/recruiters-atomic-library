import { useState, useEffect } from 'react';


const getWidth = (): number => (typeof window === 'undefined' ? 0 : window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth);

export default function useWindowSize(): number {
  const [width, setWidth] = useState(getWidth());
  useEffect(() => {
    const resizeListener = (): void => {
      setWidth(getWidth());
    };
    window.addEventListener('resize', resizeListener);
    return (): void => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return width;
}
