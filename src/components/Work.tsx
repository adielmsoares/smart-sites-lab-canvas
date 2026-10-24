import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { fadeUp, stagger } from '@/lib/motion';
import { cn } from '@/lib/utils';
import SectionHeader from './SectionHeader';

/* Ilustrações conceituais construídas em CSS: leves, nítidas em qualquer resolução e sem imagens externas */

const Bar = ({ className }: { className?: string }) => <span className={cn('block bg-foreground/10 rounded-full', className)} />;

const Browser = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn('bg-card shadow-[0_24px_60px_-30px_rgba(0,0,0,0.45)] border border-border rounded-xl overflow-hidden', className)}>
    <div className="flex items-center gap-1.5 px-3 py-2 border-border border-b">
      <span className="bg-foreground/20 rounded-full w-1.5 h-1.5" />
      <span className="bg-foreground/20 rounded-full w-1.5 h-1.5" />
      <span className="bg-foreground/20 rounded-full w-1.5 h-1.5" />
      <span className="bg-foreground/[0.07] ml-2 rounded-full w-1/3 h-1.5" />
    </div>
    {children}
  </div>
);

const Lift = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn('transition-transform group-hover:-translate-y-2 duration-700 ease-out-expo', className)}>
    {children}
  </div>
);

const SiteIllo = () => (
  <Lift className="top-[12%] absolute inset-x-[8%]">
    <Browser>
      <div className="p-5">
        <div className="flex justify-between items-center">
          <span className="bg-foreground/40 rounded-full w-12 h-2" />
          <span className="flex gap-2">
            <Bar className="w-8 h-1.5" />
            <Bar className="w-8 h-1.5" />
            <Bar className="w-8 h-1.5" />
            <span className="bg-gradient-to-r from-smart-green to-smart-cyan rounded-full w-12 h-3" />
          </span>
        </div>
        <div className="gap-4 grid grid-cols-5 mt-6">
          <div className="space-y-2.5 col-span-3">
            <span className="block bg-foreground/70 rounded-full w-11/12 h-3" />
            <span className="block bg-foreground/70 rounded-full w-3/4 h-3" />
            <Bar className="mt-3 w-full h-1.5" />
            <Bar className="w-5/6 h-1.5" />
            <span className="inline-block bg-foreground/80 mt-3 rounded-full w-16 h-4" />
          </div>
          <div className="col-span-2 bg-gradient-to-br from-smart-green/40 via-smart-cyan/25 to-transparent rounded-lg" />
        </div>
        <div className="gap-3 grid grid-cols-3 mt-6">
          {[0, 1, 2].map((i) => (
            <div key={i} className="space-y-1.5 p-2.5 border border-border rounded-lg">
              <span className="block bg-smart-green/60 rounded w-3 h-3" />
              <Bar className="w-4/5 h-1.5" />
              <Bar className="w-3/5 h-1.5" />
            </div>
          ))}
        </div>
      </div>
    </Browser>
  </Lift>
);

const LandingIllo = () => (
  <Lift className="top-[10%] absolute inset-x-[14%]">
    <Browser>
      <div className="flex flex-col items-center p-5 text-center">
        <span className="bg-smart-green/70 rounded-full w-10 h-1.5" />
        <span className="block bg-foreground/70 mt-3 rounded-full w-4/5 h-2.5" />
        <span className="block bg-foreground/70 mt-1.5 rounded-full w-3/5 h-2.5" />
        <Bar className="mt-3 w-2/3 h-1.5" />
        <div className="space-y-2 mt-5 p-3 border border-border rounded-lg w-full">
          <span className="block bg-background/60 border border-border rounded-md h-5" />
          <span className="block bg-background/60 border border-border rounded-md h-5" />
          <span className="block bg-gradient-to-r from-smart-green to-smart-cyan rounded-full h-5" />
        </div>
      </div>
    </Browser>
  </Lift>
);

const StoreIllo = () => (
  <Lift className="top-[12%] absolute inset-x-[10%]">
    <Browser>
      <div className="gap-2.5 grid grid-cols-2 p-3.5">
        {['from-smart-green/50', 'from-smart-cyan/50', 'from-foreground/15', 'from-smart-green/30'].map((tone, i) => (
          <div key={i} className="p-2 border border-border rounded-lg">
            <span className={cn('block bg-gradient-to-br to-transparent rounded-md aspect-[4/3]', tone)} />
            <Bar className="mt-2 w-4/5 h-1.5" />
            <span className="flex justify-between items-center mt-1.5">
              <span className="bg-foreground/50 rounded-full w-6 h-1.5" />
              <span className="bg-foreground/80 rounded-full w-3 h-3" />
            </span>
          </div>
        ))}
      </div>
    </Browser>
  </Lift>
);

const SystemIllo = () => (
  <Lift className="top-[12%] absolute inset-x-[8%]">
    <Browser>
      <div className="flex">
        <div className="space-y-2 p-3 border-border border-r w-1/4">
          <span className="block bg-foreground/40 rounded-full w-3/4 h-2" />
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className={cn('block rounded-full h-1.5', i === 1 ? 'w-full bg-smart-green/70' : 'w-4/5 bg-foreground/10')} />
          ))}
        </div>
        <div className="flex-1 p-3">
          <span className="block bg-foreground/50 rounded-full w-1/3 h-2" />
          <div className="mt-3 border border-border rounded-lg divide-y divide-border">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-2 px-2 py-2">
                <span className="bg-foreground/15 rounded-full w-3 h-3" />
                <Bar className="flex-1 h-1.5" />
                <span className={cn('rounded-full w-8 h-2.5', i % 2 ? 'bg-smart-cyan/40' : 'bg-smart-green/40')} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Browser>
  </Lift>
);

const DashboardIllo = () => (
  <Lift className="top-[12%] absolute inset-x-[8%]">
    <Browser>
      <div className="p-3.5">
        <div className="gap-2 grid grid-cols-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="p-2 border border-border rounded-lg">
              <Bar className="w-1/2 h-1" />
              <span className="block bg-foreground/60 mt-1.5 rounded-full w-2/3 h-2.5" />
            </div>
          ))}
        </div>
        <div className="mt-2.5 p-3 border border-border rounded-lg">
          <div className="flex items-end gap-1.5 h-16">
            {[40, 65, 35, 80, 55, 90, 70].map((h, i) => (
              <span
                key={i}
                style={{ height: `${h}%` }}
                className="flex-1 bg-gradient-to-t from-smart-green/70 to-smart-cyan/70 rounded-sm group-hover:scale-y-[1.08] origin-bottom transition-transform duration-700"
              />
            ))}
          </div>
        </div>
      </div>
    </Browser>
  </Lift>
);

const CustomIllo = () => (
  <div className="absolute inset-0 flex justify-center items-center gap-6 px-[6%]">
    <Lift className="w-[46%] max-w-md">
      <Browser>
        <div className="gap-3 grid grid-cols-3 p-4">
          <div className="space-y-2 col-span-2">
            <span className="block bg-foreground/70 rounded-full w-4/5 h-2.5" />
            <Bar className="w-full h-1.5" />
            <Bar className="w-3/4 h-1.5" />
          </div>
          <span className="bg-gradient-to-br from-smart-cyan/50 to-smart-green/20 rounded-lg" />
        </div>
      </Browser>
    </Lift>
    <Lift className="w-[22%] max-w-[11rem] delay-75">
      <div className="bg-card shadow-[0_24px_60px_-30px_rgba(0,0,0,0.45)] p-3 border border-border rounded-xl">
        <span className="block bg-gradient-to-br from-smart-green/50 to-transparent rounded-md aspect-[4/3]" />
        <Bar className="mt-2 w-4/5 h-1.5" />
        <Bar className="mt-1.5 w-3/5 h-1.5" />
      </div>
    </Lift>
    <Lift className="w-[12%] max-w-[6rem] delay-150">
      <div className="bg-card shadow-[0_24px_60px_-30px_rgba(0,0,0,0.45)] p-1.5 border border-border rounded-[0.9rem] aspect-[9/18]">
        <span className="block bg-foreground/20 mx-auto rounded-full w-4 h-1" />
        <span className="block bg-gradient-to-br from-smart-green/70 to-smart-cyan/60 mt-2 rounded h-6" />
        <Bar className="mt-2 w-4/5 h-1" />
        <span className="block bg-foreground/70 mt-2 rounded-full h-2.5" />
      </div>
    </Lift>
  </div>
);

const Work: React.FC = () => {
  const { t } = useLanguage();

  const items = [
    {
      Illo: SiteIllo,
      span: 'lg:col-span-4',
      ratio: 'aspect-[4/3] sm:aspect-[16/10]',
      title: t('Sites institucionais', 'Business websites'),
      text: t('Estrutura clara para apresentar a empresa, seus serviços e formas de contato.', 'A clear structure to present the company, its services and contact options.'),
    },
    {
      Illo: LandingIllo,
      span: 'lg:col-span-2',
      ratio: 'aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[18rem]',
      title: t('Landing pages para campanhas', 'Campaign landing pages'),
      text: t('Uma mensagem, um objetivo e um próximo passo evidente.', 'One message, one goal, one obvious next step.'),
    },
    {
      Illo: StoreIllo,
      span: 'lg:col-span-2',
      ratio: 'aspect-[4/3]',
      title: t('Lojas virtuais responsivas', 'Responsive online stores'),
      text: t('Catálogo, busca e páginas de produto pensadas para o celular.', 'Catalog, search and product pages designed for mobile.'),
    },
    {
      Illo: SystemIllo,
      span: 'lg:col-span-2',
      ratio: 'aspect-[4/3]',
      title: t('Interfaces para sistemas web', 'Web system interfaces'),
      text: t('Fluxos de trabalho organizados em telas objetivas.', 'Workflows organized into focused screens.'),
    },
    {
      Illo: DashboardIllo,
      span: 'lg:col-span-2',
      ratio: 'aspect-[4/3]',
      title: t('Dashboards e painéis', 'Dashboards and admin panels'),
      text: t('Indicadores e informações importantes em uma leitura rápida.', 'Key indicators and information at a glance.'),
    },
    {
      Illo: CustomIllo,
      span: 'lg:col-span-6',
      ratio: 'aspect-[4/3] sm:aspect-[21/8]',
      title: t('Experiências digitais sob medida', 'Tailor-made digital experiences'),
      text: t('Quando o projeto pede algo específico, desenhamos a solução a partir dele, em todos os tamanhos de tela.', 'When a project calls for something specific, we design the solution around it, for every screen size.'),
    },
  ];

  return (
    <section id="work" aria-labelledby="work-title" className="relative section-padding">
      <div className="container-width">
        <SectionHeader
          id="work-title"
          eyebrow={t('Entregas', 'Deliverables')}
          title={t('Cada negócio tem uma necessidade. Nós desenvolvemos a solução digital.', 'Every business has a need. We build the digital solution.')}
          lead={t(
            'De sites institucionais a plataformas mais completas, criamos experiências digitais com atenção ao design, à navegação e às necessidades de cada projeto.',
            'From business websites to more complete platforms, we create digital experiences with care for design, navigation and the needs of each project.'
          )}
        />

        <motion.ul
          className="gap-4 grid sm:grid-cols-2 lg:grid-cols-6 mt-16"
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {items.map(({ Illo, span, ratio, title, text }, i) => (
            <motion.li key={i} variants={fadeUp} className={cn('group flex flex-col', span, span === 'lg:col-span-6' && 'sm:col-span-2')}>
              <div
                aria-hidden="true"
                className={cn(
                  'isolate relative bg-surface border border-border rounded-3xl overflow-hidden',
                  'bg-[radial-gradient(90%_70%_at_50%_0%,hsl(var(--brand-green)/0.10),transparent_70%)]',
                  ratio,
                  span === 'lg:col-span-6' ? '' : 'lg:flex-1'
                )}
              >
                <div className="-z-10 absolute inset-0 grid-lines opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
                <Illo />
              </div>
              <h3 className="mt-5 px-1 font-semibold text-foreground text-xl">{title}</h3>
              <p className="mt-1.5 px-1 lg:min-h-[3rem] text-muted-foreground">{text}</p>
            </motion.li>
          ))}
        </motion.ul>

        <p className="mt-10 max-w-2xl text-muted-foreground text-sm">
          {t(
            'As composições acima são ilustrações conceituais dos formatos que desenvolvemos e não representam projetos de clientes específicos.',
            'The compositions above are conceptual illustrations of the formats we build and do not represent specific client projects.'
          )}
        </p>
      </div>
    </section>
  );
};

export default Work;
