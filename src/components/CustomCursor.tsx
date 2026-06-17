import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 300, damping: 30 });
  const springY = useSpring(cursorY, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX - 8);
      cursorY.set(e.clientY - 8);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9999] mix-blend-screen hidden lg:block"
      style={{
        x: springX,
        y: springY,
        background: 'radial-gradient(circle, rgba(0,229,255,0.8), rgba(138,43,226,0.4))',
        boxShadow: '0 0 20px rgba(0,229,255,0.4), 0 0 40px rgba(138,43,226,0.2)',
      }}
    />
  );
}
