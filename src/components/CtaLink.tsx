import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'on-dark';

interface CtaLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  arrow?: boolean;
}

const variantClass: Record<Variant, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  'on-dark': 'btn-on-dark',
};

const CtaLink: React.FC<CtaLinkProps> = ({ variant = 'primary', arrow = true, className, children, ...props }) => (
  <a className={cn('btn', variantClass[variant], className)} {...props}>
    <span>{children}</span>
    {arrow && <ArrowRight className="w-4 h-4 btn-arrow shrink-0" aria-hidden="true" />}
  </a>
);

export default CtaLink;
