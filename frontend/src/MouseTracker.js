import { useEffect } from 'react';

function useMouseHaloEffect() {
  useEffect(() => {
    const updatePosition = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;

      document.body.style.setProperty('--mouseX', `${x}%`);
      document.body.style.setProperty('--mouseY', `${y}%`);
    };

    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);
}

export default useMouseHaloEffect;
