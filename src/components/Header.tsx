import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useActiveSection } from '@/hooks/use-active-section';
import { cn } from '@/lib/utils';
import { easeOut } from '@/lib/motion';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';
import smartsitesLogo from './assets/img/smartsites-logo.png';

const SECTION_IDS = ['home', 'services', 'solutions', 'why', 'work', 'differentials', 'process', 'about', 'contact'];
const NAV_ALIAS: Record<string, string> = { why: 'solutions', differentials: 'about', process: 'about' };

const Header: React.FC = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const visible = useActiveSection(SECTION_IDS);
  const active = NAV_ALIAS[visible] ?? visible;

  const navItems = [
    { id: 'home', label: t('Início', 'Home') },
    { id: 'services', label: t('Serviços', 'Services') },
    { id: 'solutions', label: t('Soluções', 'Solutions') },
    { id: 'work', label: t('Entregas', 'Deliverables') },
    { id: 'about', label: t('Sobre', 'About') },
    { id: 'contact', label: t('Contato', 'Contact') },
  ];

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const onResize = () => window.innerWidth >= 1024 && setIsMenuOpen(false);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [isMenuOpen]);

  const solid = isScrolled || isMenuOpen;

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:top-4 focus:left-4 focus:z-[60] focus:fixed focus:bg-foreground focus:px-5 focus:py-3 focus:rounded-full focus:text-background"
      >
        {t('Pular para o conteúdo', 'Skip to content')}
      </a>

      <header
        className={cn(
          'top-0 z-50 fixed inset-x-0 transition-[background-color,border-color,backdrop-filter] duration-500',
          solid
            ? 'border-b border-border/70 bg-background/80 backdrop-blur-xl backdrop-saturate-150'
            : 'border-b border-transparent bg-transparent'
        )}
      >
        <div
          className={cn(
            'flex justify-between items-center gap-6 transition-[height] duration-500 container-width',
            isScrolled ? 'h-16' : 'h-[4.5rem] lg:h-20'
          )}
        >
          <a href="#home" className="group flex items-center gap-3 rounded-lg shrink-0" aria-label="Smart Sites Lab — início">
            <img
              src={smartsitesLogo}
              alt=""
              width={36}
              height={36}
              className="w-9 h-9 group-hover:rotate-[-6deg] transition-transform duration-500"
            />
            <span className="font-display text-foreground text-lg leading-none tracking-tight">
              <span className="font-semibold">Smart Sites</span> <span className="font-normal text-muted-foreground">Lab</span>
            </span>
          </a>

          <nav aria-label={t('Navegação principal', 'Main navigation')} className="hidden lg:block">
            <ul className="flex items-center gap-1 bg-surface/60 p-1 border border-border/60 rounded-full">
              {navItems.map((item) => {
                const isActive = active === item.id;
                return (
                  <li key={item.id} className="relative">
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 bg-foreground/[0.07] rounded-full ring-1 ring-foreground/10"
                        transition={{ type: 'spring', stiffness: 420, damping: 36 }}
                      />
                    )}
                    <a
                      href={`#${item.id}`}
                      aria-current={isActive ? 'true' : undefined}
                      className={cn(
                        'block relative px-4 py-2 rounded-full font-medium text-sm transition-colors duration-200',
                        isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                      )}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher />
            <ThemeToggle />
            <a href="#contact" className="px-5 min-h-[2.75rem] text-sm btn btn-primary">
              {t('Solicitar orçamento', 'Get a quote')}
            </a>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? t('Fechar menu', 'Close menu') : t('Abrir menu', 'Open menu')}
              className="flex justify-center items-center hover:bg-foreground/5 border border-border rounded-full w-11 h-11 text-foreground transition-colors"
            >
              {isMenuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-menu"
              className="lg:hidden bg-background border-border/70 border-t h-[calc(100dvh-4rem)] overflow-y-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <nav aria-label={t('Navegação principal', 'Main navigation')} className="flex flex-col py-8 h-full container-width">
                <ul className="flex flex-col">
                  {navItems.map((item, i) => (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.04 * i, duration: 0.5, ease: easeOut }}
                      className="border-border/60 border-b"
                    >
                      <a
                        href={`#${item.id}`}
                        onClick={() => setIsMenuOpen(false)}
                        aria-current={active === item.id ? 'true' : undefined}
                        className="flex justify-between items-center py-4 font-display font-medium text-foreground text-2xl"
                      >
                        {item.label}
                        <span aria-hidden="true" className="font-mono text-muted-foreground text-xs">0{i + 1}</span>
                      </a>
                    </motion.li>
                  ))}
                </ul>
                <div className="flex flex-col gap-6 mt-auto pt-10">
                  <LanguageSwitcher />
                  <a href="#contact" onClick={() => setIsMenuOpen(false)} className="w-full btn btn-primary">
                    {t('Solicitar orçamento', 'Get a quote')}
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
