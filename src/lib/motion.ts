import type { Transition, Variants } from 'framer-motion';

export const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const baseTransition: Transition = { duration: 0.8, ease: easeOut };

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: baseTransition },
};

export const stagger = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren, delayChildren } },
});

export const inViewOnce = { once: true, amount: 0.25 } as const;
