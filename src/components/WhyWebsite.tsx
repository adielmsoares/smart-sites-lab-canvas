import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { easeOut, fadeUp, inViewOnce, stagger } from '@/lib/motion';
import SectionHeader from './SectionHeader';
import CtaLink from './CtaLink';

const WhyWebsite: React.FC = () => {
  const { t } = useLanguage();

  const social = {
    title: t('Redes sociais', 'Social media'),
    items: [t('Descoberta', 'Discovery'), t('Relacionamento', 'Relationships'), t('Divulgação', 'Promotion')],
  };
  const site = {
    title: t('Site próprio', 'Your own website'),
    items: [t('Informação organizada', 'Organized information'), t('Identidade consolidada', 'Consolidated identity'), t('Caminho para o contato', 'A path to contact')],
  };

  const reasons = [
    {
      title: t('Credibilidade', 'Credibility'),
      text: t(
        'Uma apresentação profissional transmite segurança para quem ainda não conhece sua empresa.',
        "A professional presentation reassures people who don't know your company yet."
      ),
    },
    {
      title: t('Visibilidade', 'Visibility'),
      text: t(
        'Um site bem estruturado amplia as chances de ser encontrado em mecanismos de busca como o Google.',
        'A well-structured website improves your chances of being found on search engines like Google.'
      ),
    },
    {
      title: t('Organização', 'Organization'),
      text: t(
        'Serviços, endereço, horários e dúvidas frequentes reunidos em um só lugar, fácil de consultar no celular.',
        'Services, address, hours and FAQs in one place, easy to check on a phone.'
      ),
    },
    {
      title: t('Oportunidades', 'Opportunities'),
      text: t(
        'Formulários, WhatsApp e outros canais deixam o próximo passo claro para quem tem interesse.',
        'Forms, WhatsApp and other channels make the next step clear for interested visitors.'
      ),
    },
    {
      title: t('Autonomia', 'Autonomy'),
      text: t(
        'Um canal que pertence à sua empresa e não depende de mudanças de algoritmo para ser visto.',
        "A channel your company owns, which doesn't depend on algorithm changes to be seen."
      ),
    },
  ];

  const Circle = ({ data, side }: { data: typeof social; side: 'left' | 'right' }) => (
    <div className={`absolute top-1/2 w-[58%] -translate-y-1/2 ${side === 'left' ? 'left-0' : 'right-0'}`}>
      <motion.div
        initial={{ opacity: 0, x: side === 'left' ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={inViewOnce}
        transition={{ duration: 1.1, ease: easeOut }}
        className={
          side === 'left'
            ? 'flex aspect-square w-full flex-col items-start justify-center rounded-full border border-foreground/20 pl-[12%]'
            : 'flex aspect-square w-full flex-col items-end justify-center rounded-full border border-smart-cyan/60 bg-[radial-gradient(circle_at_70%_40%,hsl(var(--brand-green)/0.12),transparent_70%)] pr-[12%] text-right'
        }
      >
        <h3 className="font-semibold text-foreground text-xl">{data.title}</h3>
        <ul className="space-y-1 mt-3 text-muted-foreground text-sm">
          {data.items.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </motion.div>
    </div>
  );

  return (
    <section id="why" aria-labelledby="why-title" className="relative bg-surface section-padding">
      <div className="container-width">
        <div className="items-center gap-14 grid lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeader
              id="why-title"
              eyebrow={t('Por que ter um site', 'Why have a website')}
              title={
                <>
                  {t('Seu Instagram apresenta sua marca. ', 'Your Instagram introduces your brand. ')}
                  <span className="gradient-text">
                    {t('Seu site ajuda a consolidar sua presença digital.', 'Your website consolidates your digital presence.')}
                  </span>
                </>
              }
            />
            <motion.div
              className="space-y-4 mt-8 max-w-xl text-muted-foreground text-lg leading-relaxed"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={inViewOnce}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p>
                {t(
                  'Redes sociais e site não competem entre si. As redes ajudam as pessoas a descobrir sua empresa e a acompanhar o que você faz.',
                  "Social media and a website don't compete. Social channels help people discover your company and follow your work."
                )}
              </p>
              <p>
                {t(
                  'O site é o espaço próprio onde tudo fica organizado: o que você oferece, como trabalha e como falar com você.',
                  'Your website is the space you own, where everything is organized: what you offer, how you work and how to reach you.'
                )}
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-6">
            <div className="hidden sm:block relative mx-auto w-full max-w-xl aspect-[1.6/1]">
              <Circle data={social} side="left" />
              <Circle data={site} side="right" />
              <span className="top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2">
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={inViewOnce}
                  transition={{ duration: 0.8, delay: 0.7, ease: easeOut }}
                  className="block bg-foreground px-4 py-2 rounded-full font-mono text-[0.7rem] text-background uppercase tracking-[0.14em] whitespace-nowrap"
                >
                  {t('Presença digital', 'Digital presence')}
                </motion.span>
              </span>
            </div>

            <div className="sm:hidden gap-3 grid">
              {[social, site].map((d, i) => (
                <div key={d.title} className={i === 1 ? 'rounded-2xl border border-smart-green/50 p-6' : 'rounded-2xl border border-border p-6'}>
                  <h3 className="font-semibold text-foreground text-lg">{d.title}</h3>
                  <p className="mt-2 text-muted-foreground text-sm">{d.items.join(' · ')}</p>
                </div>
              ))}
              <p className="font-mono text-muted-foreground text-xs text-center uppercase tracking-[0.14em]">
                {t('Canais complementares', 'Complementary channels')}
              </p>
            </div>
          </div>
        </div>

        <motion.ol
          className="gap-x-8 gap-y-10 grid sm:grid-cols-2 lg:grid-cols-5 mt-20"
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {reasons.map((r, i) => (
            <motion.li key={r.title} variants={fadeUp} className="relative pt-6">
              <motion.span
                aria-hidden="true"
                className="top-0 absolute inset-x-0 bg-foreground/20 h-px origin-left"
                variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 1, ease: easeOut } } }}
              />
              <span className="font-mono text-brand text-xs">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-3 font-semibold text-foreground text-xl">{r.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{r.text}</p>
            </motion.li>
          ))}
        </motion.ol>

        <motion.div
          className="relative lg:flex lg:justify-between lg:items-center lg:gap-10 bg-ink mt-20 p-8 sm:p-12 rounded-3xl overflow-hidden text-white"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inViewOnce}
          transition={{ duration: 0.9, ease: easeOut }}
        >
          <div aria-hidden="true" className="-top-24 -right-24 absolute bg-[radial-gradient(circle,rgba(94,244,161,0.25),transparent_65%)] rounded-full w-72 h-72" />
          <p className="relative max-w-2xl font-display font-medium text-2xl sm:text-3xl leading-snug">
            {t('Sua empresa já tem um site que representa bem o seu trabalho?', 'Does your company already have a website that does your work justice?')}
          </p>
          <CtaLink href="#contact" className="relative mt-8 lg:mt-0 shrink-0">
            {t('Conversar sobre meu projeto', 'Talk about my project')}
          </CtaLink>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyWebsite;
