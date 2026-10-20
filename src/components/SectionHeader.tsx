import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { fadeUp, inViewOnce, stagger } from '@/lib/motion';

interface SectionHeaderProps {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
  tone?: 'default' | 'dark';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  id,
  eyebrow,
  title,
  lead,
  align = 'left',
  className,
  tone = 'default',
}) => (
  <motion.header
    className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center', className)}
    variants={stagger(0.1)}
    initial="hidden"
    whileInView="visible"
    viewport={inViewOnce}
  >
    <motion.p
      variants={fadeUp}
      className={cn('eyebrow', align === 'center' && 'justify-center', tone === 'dark' && 'text-smart-green')}
    >
      {eyebrow}
    </motion.p>
    <motion.h2
      id={id}
      variants={fadeUp}
      className={cn(
        'mt-5 text-[2.1rem] text-display lg:text-[3.5rem] sm:text-5xl',
        tone === 'dark' ? 'text-white' : 'text-foreground'
      )}
    >
      {title}
    </motion.h2>
    {lead && (
      <motion.p
        variants={fadeUp}
        className={cn(
          'mt-6 text-lg sm:text-xl leading-relaxed',
          align === 'center' && 'mx-auto max-w-2xl',
          tone === 'dark' ? 'text-white/70' : 'text-muted-foreground'
        )}
      >
        {lead}
      </motion.p>
    )}
  </motion.header>
);

export default SectionHeader;
