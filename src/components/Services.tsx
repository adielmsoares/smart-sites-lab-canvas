import React from 'react';
import { motion } from 'framer-motion';
import { Building2, MousePointerClick, ShoppingBag, Workflow, PenTool, RefreshCcw } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { fadeUp, inViewOnce, stagger } from '@/lib/motion';
import SectionHeader from './SectionHeader';
import CtaLink from './CtaLink';

const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Building2,
      name: t('Sites institucionais', 'Business websites'),
      headline: t('Sua empresa bem apresentada, de onde o cliente estiver.', 'Your company well presented, wherever your client is.'),
      description: t(
        'Sites profissionais para apresentar seus serviços, fortalecer a marca e facilitar o contato de novos clientes.',
        'Professional websites to present your services, strengthen your brand and make it easy for new clients to reach you.'
      ),
    },
    {
      icon: MousePointerClick,
      name: t('Landing pages', 'Landing pages'),
      headline: t('Uma página pensada para transformar interesse em contato.', 'One page designed to turn interest into contact.'),
      description: t(
        'Páginas estratégicas para campanhas, lançamentos, captação de leads e pedidos de orçamento.',
        'Focused pages for campaigns, launches, lead capture and quote requests.'
      ),
    },
    {
      icon: ShoppingBag,
      name: t('Lojas virtuais', 'Online stores'),
      headline: t('Seu catálogo disponível para vender online.', 'Your catalog, ready to sell online.'),
      description: t(
        'Experiências de compra organizadas e responsivas, que facilitam a navegação e a descoberta de produtos.',
        'Organized, responsive shopping experiences that make browsing and finding products easy.'
      ),
    },
    {
      icon: Workflow,
      name: t('Sistemas web', 'Web systems'),
      headline: t('Tecnologia desenvolvida para a rotina do seu negócio.', 'Technology built around how your business runs.'),
      description: t(
        'Aplicações e ferramentas digitais adaptadas às necessidades específicas de operação e gestão.',
        'Applications and digital tools tailored to your specific operational and management needs.'
      ),
    },
    {
      icon: PenTool,
      name: t('UX/UI Design', 'UX/UI Design'),
      headline: t('Interfaces que fazem sentido para quem usa.', 'Interfaces that make sense to the people using them.'),
      description: t(
        'Arquitetura da informação, prototipação e design de interfaces com foco em clareza e usabilidade.',
        'Information architecture, prototyping and interface design focused on clarity and usability.'
      ),
    },
    {
      icon: RefreshCcw,
      name: t('Reformulação de sites', 'Website redesign'),
      headline: t('Seu site atual já não representa sua empresa?', "Your current site no longer represents your company?"),
      description: t(
        'Modernização visual, navegação mais clara, responsividade e reorganização de conteúdo.',
        'Visual refresh, clearer navigation, responsiveness and reorganized content.'
      ),
    },
  ];

  return (
    <section id="services" aria-labelledby="services-title" className="relative bg-surface section-padding">
      <div className="container-width">
        <div className="lg:items-end gap-10 grid lg:grid-cols-12">
          <SectionHeader
            id="services-title"
            className="lg:col-span-8"
            eyebrow={t('Serviços', 'Services')}
            title={
              <>
                {t('O que fazemos para a sua empresa ', 'What we do for your company ')}
                <span className="gradient-text">{t('aparecer bem.', 'to show up well.')}</span>
              </>
            }
          />
          <motion.p
            className="lg:col-span-4 text-muted-foreground text-lg leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={inViewOnce}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t(
              'Do primeiro site à reformulação de uma plataforma existente: cada projeto parte do que o seu cliente precisa encontrar.',
              "From a first website to rebuilding an existing platform: every project starts with what your clients need to find."
            )}
          </motion.p>
        </div>

        <motion.ul
          className="grid sm:grid-cols-2 lg:grid-cols-3 [&>li]:bg-surface mt-16 bg-border border border-border rounded-3xl overflow-hidden"
          style={{ gap: 1 }}
          variants={stagger(0.07)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, i) => (
            <motion.li key={service.name} variants={fadeUp} className="group isolate relative flex flex-col p-8 sm:p-10">
              <span
                aria-hidden="true"
                className="-z-10 absolute inset-0 bg-[radial-gradient(120%_80%_at_0%_0%,hsl(var(--brand-green)/0.10),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <span
                aria-hidden="true"
                className="top-0 absolute inset-x-0 bg-gradient-to-r from-smart-green to-smart-cyan h-px scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out-expo"
              />

              <div className="flex justify-between items-center">
                <span className="flex justify-center items-center bg-background border border-border rounded-2xl w-12 h-12 text-brand transition-transform group-hover:-translate-y-1 duration-500">
                  <service.icon className="w-5 h-5" aria-hidden="true" strokeWidth={1.75} />
                </span>
                <span className="font-mono text-muted-foreground text-xs">{String(i + 1).padStart(2, '0')}</span>
              </div>

              <h3 className="mt-10 font-semibold text-foreground text-2xl">{service.name}</h3>
              <p className="mt-3 font-medium text-[1.05rem] text-foreground/85 leading-snug">{service.headline}</p>
              <p className="mt-4 text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          className="flex sm:flex-row flex-col justify-between items-start sm:items-center gap-6 bg-background mt-12 p-8 sm:p-10 border border-border rounded-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inViewOnce}
          transition={{ duration: 0.8 }}
        >
          <p className="max-w-xl text-foreground text-lg">
            {t('Não sabe qual formato faz mais sentido para o seu negócio?', 'Not sure which format fits your business best?')}{' '}
            <span className="text-muted-foreground">{t('A gente ajuda a definir.', "We'll help you decide.")}</span>
          </p>
          <CtaLink href="#contact" className="shrink-0">
            {t('Solicitar um orçamento', 'Request a quote')}
          </CtaLink>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
