import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { easeOut } from '@/lib/motion';

const WHATSAPP_NUMBER = '5561991127447';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    <path strokeWidth={1.8} d="M12 2.5a9.5 9.5 0 0 0-8.2 14.3L2.5 21.5l4.8-1.26A9.5 9.5 0 1 0 12 2.5z" />
    <path
      strokeWidth={3.6}
      transform="translate(6.6 6.6) scale(0.45)"
      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
    />
  </svg>
);

const WhatsAppButton: React.FC = () => {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const message = t(
    'Olá! Vim pelo site da Smart Sites Lab e gostaria de conversar sobre um projeto.',
    "Hi! I found Smart Sites Lab's website and would like to talk about a project."
  );
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  const label = t('Conversar pelo WhatsApp', 'Chat on WhatsApp');

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${label} ${t('(abre em nova aba)', '(opens in a new tab)')}`}
          className="group z-40 fixed flex items-center bg-[#25D366] shadow-[0_12px_32px_-10px_rgba(37,211,102,0.65)] hover:shadow-[0_16px_40px_-10px_rgba(37,211,102,0.8)] rounded-full focus-visible:outline-offset-4 h-14 text-[#06210f] transition-shadow duration-300"
          style={{
            right: 'max(1.25rem, env(safe-area-inset-right))',
            bottom: 'max(1.25rem, env(safe-area-inset-bottom))',
          }}
          initial={{ opacity: 0, scale: 0.6, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 16 }}
          transition={{ duration: 0.45, ease: easeOut }}
          whileTap={{ scale: 0.94 }}
        >
          {/* Pulso limitado a poucas repetições para chamar atenção sem distrair */}
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-[#25D366] opacity-50 rounded-full animate-ping pointer-events-none [animation-duration:1.8s] [animation-iteration-count:3]"
          />
          <span className="relative flex justify-center items-center w-14 h-14 shrink-0">
            <WhatsAppIcon className="w-7 h-7" />
          </span>
          <span
            aria-hidden="true"
            className="hidden md:block relative opacity-0 group-focus-visible:opacity-100 group-hover:opacity-100 group-focus-visible:pr-5 group-hover:pr-5 max-w-0 group-focus-visible:max-w-[14rem] group-hover:max-w-[14rem] overflow-hidden font-semibold text-sm whitespace-nowrap transition-[max-width,opacity,padding] duration-500 ease-out-expo"
          >
            {label}
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppButton;
