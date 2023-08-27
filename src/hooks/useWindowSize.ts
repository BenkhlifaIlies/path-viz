import { useLayoutEffect, useState } from 'react';

export default function useWindowSize() {
  const [size, setSize] = useState<number[]>([
    window.innerWidth > 768 ? 40 : 15,
    25,
  ]);

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth > 768 ? 40 : 15, 25]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}
