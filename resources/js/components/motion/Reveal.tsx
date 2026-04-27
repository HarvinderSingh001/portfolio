import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  fullHeight?: boolean;
}

export const Reveal = ({ children, width = "100%", delay = 0.25, fullHeight }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <div ref={ref} style={{ position: "relative", width, height: fullHeight ? "100%" : "auto" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 40, scale: 0.95, rotateX: 15 },
          visible: { opacity: 1, y: 0, scale: 1, rotateX: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ 
          type: "spring", 
          damping: 20, 
          stiffness: 100, 
          mass: 0.8,
          delay: delay 
        }}
        style={{ 
          height: fullHeight ? "100%" : "auto", 
          transformOrigin: "center center",
          perspective: "1000px" 
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
