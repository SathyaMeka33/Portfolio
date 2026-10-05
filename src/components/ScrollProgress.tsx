import { motion, useScroll } from 'motion/react';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-[#1a1a1a]"
      aria-hidden="true"
    >
      <motion.div
        className="h-full bg-white origin-left"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
}
