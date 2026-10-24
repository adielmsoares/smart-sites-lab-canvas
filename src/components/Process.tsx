import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { fadeUp, stagger } from '@/lib/motion';
import SectionHeader from './SectionHeader';
import BrandMark from './BrandMark';

const Process: React.FC = () => {
  const { t } = useLanguage();
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 80%', 'end 55%'] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  const steps = [
    {
      title: t('Entendimento', 'Discovery'),
      text: t(
        'Conversamos sobre seu negócio, seus serviços e o que você pretende alcançar.',
        'We talk about your business, your services and what you want to achieve.'
      ),
    },
    {
      title: t('Planejamento', 'Planning'),
      text: t(
        'Definimos a estrutura, os conteúdos e a melhor abordagem para o projeto.',
        'We define the structure, the content and the best approach for the project.'
      ),
    },
    {
      title: t('Design e desenvolvimento', 'Design and development'),
      text: t(
        'Criamos a interface e implementamos a solução com atenção à navegação, ao visual e à responsividade.',
        'We design the interface and build the solution with care for navigation, visuals and responsiveness.'
      ),
    },
    {
      title: t('Revisão e publicação', 'Review and launch'),
      text: t(
        'Fazemos os ajustes e as verificações necessárias antes de colocar o projeto no ar.',
        'We make the necessary adjustments and checks before the project goes live.'
      ),
    },
  ];

  return (
    <section id="process" aria-labelledby="process-title" className="isolate relative bg-ink overflow-hidden text-white grain section-padding">
      <BrandMark
        strokeWidth={22}
        className="-top-20 -right-40 -z-10 absolute opacity-[0.06] w-[34rem] h-[34rem] pointer-events-none"
      />
      <div className="container-width">
        <SectionHeader
          id="process-title"
          tone="dark"
          eyebrow={t('Como trabalhamos', 'How we work')}
          title={
            <>
              {t('Um processo claro, ', 'A clear process, ')}
              <span className="gradient-text on-dark">{t('do primeiro contato à publicação.', 'from first contact to launch.')}</span>
            </>
          }
          lead={t(
            'Você sabe em que etapa o projeto está e o que vem a seguir.',
            'You always know which stage the project is in and what comes next.'
          )}
        />

        <div className="relative mt-20">
          <div aria-hidden="true" className="top-0 lg:top-[0.6875rem] left-[0.6875rem] lg:left-0 absolute bg-white/10 w-px lg:w-full h-full lg:h-px" />
          <motion.div
            aria-hidden="true"
            style={{ scaleY: progress }}
            className="lg:hidden top-0 left-[0.6875rem] absolute bg-gradient-to-b from-smart-green to-smart-cyan w-px h-full origin-top"
          />
          <motion.div
            aria-hidden="true"
            style={{ scaleX: progress }}
            className="hidden lg:block top-[0.6875rem] left-0 absolute bg-gradient-to-r from-smart-green to-smart-cyan w-full h-px origin-left"
          />

          <motion.ol
            ref={listRef}
            className="gap-12 lg:gap-10 grid lg:grid-cols-4"
            variants={stagger(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {steps.map((step, i) => (
              <motion.li key={i} variants={fadeUp} className="relative lg:pt-14 pl-12 lg:pl-0">
                <span
                  aria-hidden="true"
                  className="top-0 left-0 absolute flex justify-center items-center bg-ink border border-white/20 rounded-full w-6 h-6"
                >
                  <span className="bg-gradient-to-br from-smart-green to-smart-cyan rounded-full w-2 h-2" />
                </span>
                <span className="font-mono text-smart-green text-sm">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-3 font-semibold text-white text-2xl">{step.title}</h3>
                <p className="mt-3 text-white/65 leading-relaxed">{step.text}</p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
};

export default Process;
