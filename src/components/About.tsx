import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { easeOut, fadeUp, inViewOnce, stagger } from '@/lib/motion';
import BrandMark from './BrandMark';
import adielSoares from './assets/img/adiel-soares.jpg';

const About: React.FC = () => {
  const { t } = useLanguage();

  const facts = [
    { term: t('Especialidades', 'Expertise'), value: 'UX/UI Design · Design Systems · Frontend' },
    { term: t('Tecnologias', 'Technologies'), value: 'React · TypeScript · Tailwind CSS' },
    { term: t('Atendimento', 'Service'), value: t('Remoto · Brasília - DF e Goiânia - GO', 'Remote · Brasília - DF and Goiânia - GO') },
  ];

  return (
    <section id="about" aria-labelledby="about-title" className="relative overflow-hidden section-padding">
      <div className="items-center gap-14 lg:gap-20 grid lg:grid-cols-12 container-width">
        <motion.div
          className="relative lg:col-span-5 mx-auto w-full lg:max-w-none max-w-md"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inViewOnce}
          transition={{ duration: 1, ease: easeOut }}
        >
          <BrandMark strokeWidth={26} className="-top-10 sm:-top-14 -left-10 sm:-left-14 absolute opacity-80 w-40 sm:w-52 h-40 sm:h-52" />
          <div className="relative bg-surface border border-border rounded-[2rem] overflow-hidden">
            <img
              src={adielSoares}
              alt={t('Adiel Soares, fundador da Smart Sites Lab', 'Adiel Soares, founder of Smart Sites Lab')}
              loading="lazy"
              decoding="async"
              width={640}
              height={800}
              className="w-full object-cover aspect-[4/5]"
            />
            <div className="bottom-0 absolute inset-x-0 bg-gradient-to-t from-black/75 to-transparent p-6 pt-20">
              <p className="font-display font-semibold text-white text-xl">Adiel Soares</p>
              <p className="text-white/75 text-sm">{t('Fundador · UX/UI Designer Sênior', 'Founder · Senior UX/UI Designer')}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="lg:col-span-7"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
        >
          <motion.p variants={fadeUp} className="eyebrow">
            {t('Sobre', 'About')}
          </motion.p>
          <motion.h2 id="about-title" variants={fadeUp} className="mt-5 text-[2.1rem] text-display text-foreground lg:text-[3.5rem] sm:text-5xl">
            {t('Quem está por trás da ', "Who's behind ")}
            <span className="gradient-text">Smart Sites Lab</span>
          </motion.h2>

          <motion.div variants={fadeUp} className="space-y-5 mt-8 max-w-2xl text-muted-foreground text-lg leading-relaxed">
            <p>
              {t(
                'A Smart Sites Lab foi criada por Adiel Soares, UX/UI Designer Sênior com experiência em projetos para órgãos públicos e empresas privadas. Essa trajetória trouxe uma base sólida em design de interfaces, acessibilidade e desenvolvimento frontend.',
                'Smart Sites Lab was founded by Adiel Soares, a Senior UX/UI Designer with experience on projects for government agencies and private companies. That background brings solid expertise in interface design, accessibility and frontend development.'
              )}
            </p>
            <p>
              {t(
                'Na prática, o mesmo rigor aplicado a sistemas complexos está em cada site que desenvolvemos: estrutura pensada para quem vai usar, código bem construído e atenção à forma como as pessoas realmente navegam.',
                'In practice, the same rigor applied to complex systems goes into every website we build: a structure designed for the people using it, well-built code and attention to how people actually browse.'
              )}
            </p>
          </motion.div>

          <motion.dl variants={fadeUp} className="gap-px grid sm:grid-cols-3 mt-10 bg-border border border-border rounded-2xl overflow-hidden">
            {facts.map((f) => (
              <div key={f.term} className="bg-background p-5">
                <dt className="font-mono text-[0.7rem] text-muted-foreground uppercase tracking-[0.16em]">{f.term}</dt>
                <dd className="mt-2 font-medium text-foreground text-sm leading-relaxed">{f.value}</dd>
              </div>
            ))}
          </motion.dl>

          <motion.div variants={fadeUp} className="mt-10">
            <a
              href="https://www.linkedin.com/in/adiel-soares-122579145/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 font-medium text-foreground decoration-2 decoration-border hover:decoration-brand underline underline-offset-[6px] transition-colors"
            >
              {t('Ver perfil no LinkedIn', 'View LinkedIn profile')}
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 duration-300" aria-hidden="true" />
              <span className="sr-only">{t('(abre em nova aba)', '(opens in a new tab)')}</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
