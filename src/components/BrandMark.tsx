import React, { useId } from 'react';
import { motion } from 'framer-motion';
import { easeOut } from '@/lib/motion';

// Os quatro traços do logotipo, redesenhados em vetor para uso decorativo
const BRAND_STROKES = [
  'M95 170 L200 272 L298 174',
  'M180 182 L282 80 L388 182',
  'M222 332 L326 228 L432 334',
  'M136 326 L242 428 L344 326',
];

interface BrandMarkProps {
  className?: string;
  strokeWidth?: number;
  draw?: boolean;
  delay?: number;
}

const BrandMark: React.FC<BrandMarkProps> = ({ className, strokeWidth = 36, draw = false, delay = 0 }) => {
  const gradientId = useId();

  return (
    <svg viewBox="60 40 410 420" className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5EF4A1" />
          <stop offset="100%" stopColor="#30D5C7" />
        </linearGradient>
      </defs>
      {BRAND_STROKES.map((d, i) => (
        <motion.path
          key={d}
          d={d}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
          initial={draw ? { pathLength: 0, opacity: 0 } : false}
          animate={draw ? { pathLength: 1, opacity: 1 } : undefined}
          transition={{ duration: 1.1, delay: delay + i * 0.12, ease: easeOut }}
        />
      ))}
    </svg>
  );
};

export default BrandMark;
