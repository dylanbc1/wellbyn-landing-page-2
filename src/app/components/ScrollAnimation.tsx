'use client';

import { motion } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  disableOnMobile?: boolean;
}

export default function ScrollAnimation({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 0.6,
  direction = 'up',
  disableOnMobile = false
}: ScrollAnimationProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // En mobile, si está deshabilitado, solo renderizar sin animación
  if (isMobile && disableOnMobile) {
    return <div className={className}>{children}</div>;
  }

  const directionVariants = {
    up: { y: isMobile ? 20 : 50, opacity: 0 },
    down: { y: isMobile ? -20 : -50, opacity: 0 },
    left: { x: isMobile ? 20 : 50, opacity: 0 },
    right: { x: isMobile ? -20 : -50, opacity: 0 }
  };

  return (
    <motion.div
      className={className}
      initial={directionVariants[direction]}
      whileInView={{ 
        y: 0, 
        x: 0, 
        opacity: 1 
      }}
      viewport={{ 
        once: true, 
        amount: isMobile ? 0.1 : 0.3,
        margin: isMobile ? "-50px" : "0px"
      }}
      transition={{
        duration: isMobile ? duration * 0.7 : duration,
        delay: isMobile ? delay * 0.5 : delay,
        ease: isMobile ? "easeOut" : [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.div>
  );
}
