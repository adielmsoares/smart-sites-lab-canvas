import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform, type MotionValue } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { easeOut } from '@/lib/motion';
import BrandMark from './BrandMark';
import CtaLink from './CtaLink';

const useDepth = (value: MotionValue<number>, depth: number) => useTransform(value, (v) => v * depth);

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const [parallax, setParallax] = useState(false);

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 60, damping: 20, mass: 0.6 });
  const sy = useSpring(py, { stiffness: 60, damping: 20, mass: 0.6 });

  const markX = useDepth(sx, -18);
  const markY = useDepth(sy, -18);
  const winX = useDepth(sx, 26);
  const winY = useDepth(sy, 22);
  const formX = useDepth(sx, 44);
  const formY = useDepth(sy, 36);
  const phoneX = useDepth(sx, 34);
  const phoneY = useDepth(sy, 30);

  useEffect(() => {
    setParallax(!reduceMotion && window.matchMedia('(pointer: fine) and (min-width: 1024px)').matches);
  }, [reduceMotion]);

  const handlePointer = (e: React.PointerEvent<HTMLElement>) => {
    if (!parallax) return;
    const rect = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width - 0.5);
    py.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const lines = [
    [{ text: t('Seu negócio merece', 'Your business deserves') }],
    [{ text: t('um site ', 'a website ') }, { text: t('à altura', 'that lives up'), accent: true }],
    [{ text: t('do que você oferece.', 'to what you offer.') }],
  ];

  const offerings = [
    t('Sites institucionais', 'Business websites'),
    t('Landing pages', 'Landing pages'),
    t('Lojas virtuais', 'Online stores'),
    t('Sistemas web', 'Web systems'),
  ];

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      onPointerMove={handlePointer}
      className="isolate relative flex items-center pt-28 lg:pt-32 pb-16 lg:pb-20 min-h-[100svh] overflow-hidden"
    >
      <div aria-hidden="true" className="-z-10 absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-lines [mask-image:radial-gradient(ellipse_70%_60%_at_70%_40%,black,transparent)]" />
        <motion.div
          className="top-[8%] -right-[10%] absolute bg-[radial-gradient(circle,hsl(var(--brand-green)/0.22),transparent_65%)] blur-2xl rounded-full w-[38rem] h-[38rem]"
          animate={reduceMotion ? undefined : { scale: [1, 1.08, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="top-[45%] right-[18%] absolute bg-[radial-gradient(circle,hsl(var(--brand-cyan)/0.18),transparent_65%)] blur-2xl rounded-full w-[26rem] h-[26rem]"
          animate={reduceMotion ? undefined : { x: [0, -40, 0], y: [0, 20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="items-center gap-16 lg:gap-8 grid lg:grid-cols-12 container-width">
        <div className="lg:col-span-7">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut }}
          >
            {t('Criação de sites e soluções digitais', 'Websites and digital solutions')}
          </motion.p>

          <h1
            id="hero-title"
            className="mt-6 text-[2.5rem] text-display text-foreground min-[400px]:text-[2.75rem] lg:text-[3.6rem] 2xl:text-[4.75rem] xl:text-[4.25rem] sm:text-6xl"
          >
            {lines.map((line, i) => {
              const words = line.flatMap((part) =>
                part.text.trim().split(' ').map((word) => ({ word, accent: part.accent }))
              );
              return (
                <React.Fragment key={i}>
                  {words.map(({ word, accent }, w) => (
                    <React.Fragment key={w}>
                      <span className="inline-block pb-[0.1em] overflow-hidden align-bottom">
                        <motion.span
                          className={accent ? 'gradient-text inline-block' : 'inline-block'}
                          initial={{ y: '110%' }}
                          animate={{ y: 0 }}
                          transition={{ duration: 0.9, delay: 0.15 + i * 0.12 + w * 0.04, ease: easeOut }}
                        >
                          {word}
                        </motion.span>
                      </span>{' '}
                    </React.Fragment>
                  ))}
                  {i < lines.length - 1 && <br className="hidden sm:inline" />}
                </React.Fragment>
              );
            })}
          </h1>

          <motion.p
            className="mt-8 max-w-xl text-muted-foreground text-lg sm:text-xl leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: easeOut }}
          >
            {t(
              'Criamos sites, lojas virtuais e soluções digitais para empresas que querem apresentar melhor seus serviços, conquistar credibilidade e abrir novas oportunidades de negócio.',
              'We build websites, online stores and digital solutions for companies that want to present their services better, earn credibility and open up new business opportunities.'
            )}
          </motion.p>

          <motion.div
            className="flex sm:flex-row flex-col sm:items-center gap-3 mt-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: easeOut }}
          >
            <CtaLink href="#contact">{t('Quero criar meu site', 'I want my website')}</CtaLink>
            <CtaLink href="#services" variant="secondary" arrow={false}>
              {t('Conhecer os serviços', 'See our services')}
            </CtaLink>
          </motion.div>

          <motion.ul
            aria-label={t('O que desenvolvemos', 'What we build')}
            className="flex flex-wrap gap-x-6 gap-y-3 mt-14 pt-6 border-border/70 border-t text-muted-foreground text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {offerings.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span aria-hidden="true" className="bg-gradient-to-br from-smart-green to-smart-cyan rounded-full w-1.5 h-1.5" />
                {item}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Composição visual: marca + fragmentos de interface */}
        <div aria-hidden="true" className="relative lg:col-span-5 mx-auto w-full max-w-[30rem] lg:max-w-none aspect-square">
          <motion.div style={{ x: markX, y: markY }} className="absolute inset-[6%]">
            <BrandMark draw delay={0.3} strokeWidth={30} className="opacity-90 drop-shadow-[0_30px_60px_rgba(94,244,161,0.25)] w-full h-full" />
          </motion.div>

          <motion.div style={{ x: winX, y: winY }} className="top-[8%] left-0 absolute w-[62%]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9, ease: easeOut }}
              className="bg-card/85 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.45)] backdrop-blur-md border border-border/80 rounded-2xl overflow-hidden">
              <div className="flex items-center gap-1.5 px-3 py-2.5 border-border/70 border-b">
                <span className="bg-foreground/15 rounded-full w-2 h-2" />
                <span className="bg-foreground/15 rounded-full w-2 h-2" />
                <span className="bg-foreground/15 rounded-full w-2 h-2" />
                <span className="flex-1 bg-foreground/[0.06] ml-3 rounded-full h-2" />
              </div>
              <div className="space-y-3 p-4">
                <div className="flex justify-between items-center">
                  <span className="bg-foreground/25 rounded-full w-10 h-2" />
                  <span className="flex gap-1.5">
                    <span className="bg-foreground/10 rounded-full w-6 h-1.5" />
                    <span className="bg-foreground/10 rounded-full w-6 h-1.5" />
                    <span className="bg-foreground/10 rounded-full w-6 h-1.5" />
                  </span>
                </div>
                <span className="block bg-foreground/80 rounded-full w-4/5 h-3.5" />
                <span className="block bg-gradient-to-r from-smart-green to-smart-cyan rounded-full w-3/5 h-3.5" />
                <span className="block bg-foreground/10 rounded-full w-full h-1.5" />
                <span className="block bg-foreground/10 rounded-full w-4/5 h-1.5" />
                <span className="inline-block bg-foreground/85 mt-1 rounded-full w-20 h-5" />
              </div>
            </motion.div>
          </motion.div>

          <motion.div style={{ x: formX, y: formY }} className="right-0 bottom-[8%] absolute w-[52%]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1, ease: easeOut }}
              className="bg-card/90 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.5)] backdrop-blur-md p-4 border border-border/80 rounded-2xl">
              <span className="block bg-foreground/60 rounded-full w-1/2 h-2" />
              <div className="space-y-2 mt-4">
                <span className="block bg-background/60 border border-border rounded-lg h-7" />
                <span className="block bg-background/60 border border-border rounded-lg h-7" />
              </div>
              <span className="flex justify-center items-center bg-gradient-to-r from-smart-green to-smart-cyan mt-3 rounded-full h-7">
                <span className="bg-ink/60 rounded-full w-12 h-1.5" />
              </span>
            </motion.div>
          </motion.div>

          <motion.div style={{ x: phoneX, y: phoneY }} className="bottom-[22%] left-[8%] absolute w-[22%]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.25, ease: easeOut }}
              className="bg-card/90 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.5)] backdrop-blur-md p-2 border border-border/80 rounded-[1.1rem] aspect-[9/17]">
              <span className="block bg-foreground/15 mx-auto rounded-full w-6 h-1" />
              <span className="block bg-gradient-to-br from-smart-green/70 to-smart-cyan/70 mt-3 rounded-md h-8" />
              <span className="block bg-foreground/30 mt-2 rounded-full w-4/5 h-1.5" />
              <span className="block bg-foreground/15 mt-1.5 rounded-full w-3/5 h-1.5" />
              <span className="block bg-foreground/80 mt-3 rounded-full h-4" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#services"
        className="hidden bottom-6 left-1/2 absolute lg:flex flex-col items-center gap-2 font-mono text-[0.7rem] text-muted-foreground hover:text-foreground uppercase tracking-[0.2em] transition-colors -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        {t('Role para conhecer', 'Scroll to explore')}
        <span className="block relative bg-border w-px h-10 overflow-hidden">
          <motion.span
            className="block top-0 absolute inset-x-0 bg-brand h-4"
            animate={reduceMotion ? undefined : { y: ['-100%', '250%'] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
      </motion.a>
    </section>
  );
};

export default Hero;
