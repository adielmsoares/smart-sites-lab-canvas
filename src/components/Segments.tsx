import React, { useEffect, useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { motion } from 'framer-motion';
import {
  Stethoscope,
  Scale,
  DraftingCompass,
  UtensilsCrossed,
  Store,
  Wrench,
  KeyRound,
  Dumbbell,
  Check,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { easeOut, inViewOnce } from '@/lib/motion';
import { cn } from '@/lib/utils';
import SectionHeader from './SectionHeader';
import CtaLink from './CtaLink';

const Segments: React.FC = () => {
  const { t } = useLanguage();
  const [active, setActive] = useState('clinics');
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const segments = [
    {
      id: 'clinics',
      icon: Stethoscope,
      name: t('Clínicas e consultórios', 'Clinics and practices'),
      benefit: t(
        'Sites para apresentar especialidades, profissionais e localização, e facilitar pedidos de atendimento.',
        'Websites that present specialties, professionals and location, and make appointment requests easier.'
      ),
      items: [
        t('Especialidades e corpo clínico', 'Specialties and medical staff'),
        t('Endereço, mapa e horários', 'Address, map and opening hours'),
        t('Caminho direto para agendar ou falar com a recepção', 'A direct path to book or contact the front desk'),
      ],
      cta: t('Quero um site para minha clínica', 'I want a site for my clinic'),
    },
    {
      id: 'law',
      icon: Scale,
      name: t('Advogados e escritórios', 'Law firms'),
      benefit: t(
        'Presença institucional com áreas de atuação e canais de contato, respeitando as regras de publicidade profissional.',
        'An institutional presence with practice areas and contact channels, following professional advertising rules.'
      ),
      items: [
        t('Áreas de atuação bem explicadas', 'Clearly explained practice areas'),
        t('Perfil da equipe e do escritório', 'Team and firm profile'),
        t('Comunicação sóbria, informativa e sem apelo comercial', 'Sober, informative communication'),
      ],
      cta: t('Conversar sobre o site do escritório', "Talk about my firm's site"),
    },
    {
      id: 'architecture',
      icon: DraftingCompass,
      name: t('Arquitetos e engenheiros', 'Architects and engineers'),
      benefit: t(
        'Projetos, serviços e especialidades apresentados com organização visual e credibilidade.',
        'Projects, services and specialties presented with visual order and credibility.'
      ),
      items: [
        t('Galeria de projetos com boas imagens', 'Project gallery that does the images justice'),
        t('Etapas do serviço explicadas ao cliente', 'Service stages explained to clients'),
        t('Formulário para briefing inicial', 'Form for an initial brief'),
      ],
      cta: t('Quero mostrar meus projetos', 'I want to showcase my projects'),
    },
    {
      id: 'food',
      icon: UtensilsCrossed,
      name: t('Restaurantes e estabelecimentos', 'Restaurants and venues'),
      benefit: t(
        'Cardápio digital, localização, horários e caminhos rápidos para pedidos ou reservas, quando fizer sentido.',
        'Digital menu, location, hours and quick paths to orders or reservations, where it makes sense.'
      ),
      items: [
        t('Cardápio fácil de ler no celular', 'Menu that reads well on mobile'),
        t('Horários e como chegar', 'Hours and directions'),
        t('Atalhos para pedido, reserva ou delivery', 'Shortcuts to order, book or delivery'),
      ],
      cta: t('Falar sobre o site do meu restaurante', 'Talk about my restaurant site'),
    },
    {
      id: 'retail',
      icon: Store,
      name: t('Lojas e comércios', 'Shops and retail'),
      benefit: t(
        'Catálogos, vitrines digitais e lojas virtuais que facilitam a apresentação e a venda de produtos.',
        'Catalogs, digital showcases and online stores that make products easier to present and sell.'
      ),
      items: [
        t('Catálogo organizado por categorias', 'Catalog organized by category'),
        t('Páginas de produto claras', 'Clear product pages'),
        t('Venda online ou pedido pelo atendimento', 'Online checkout or order via customer service'),
      ],
      cta: t('Quero vender pela internet', 'I want to sell online'),
    },
    {
      id: 'services',
      icon: Wrench,
      name: t('Prestadores de serviços', 'Service providers'),
      benefit: t(
        'Sites para eletricistas, técnicos, instaladores e profissionais de manutenção, limpeza e reformas.',
        'Websites for electricians, technicians, installers and maintenance, cleaning or renovation professionals.'
      ),
      items: [
        t('Serviços e região de atendimento', 'Services and coverage area'),
        t('Fotos de trabalhos realizados', 'Photos of completed jobs'),
        t('Pedido de orçamento em poucos toques', 'Quote request in a few taps'),
      ],
      cta: t('Quero receber pedidos de orçamento', 'I want to receive quote requests'),
    },
    {
      id: 'realestate',
      icon: KeyRound,
      name: t('Imobiliárias e corretores', 'Real estate'),
      benefit: t(
        'Apresentação de imóveis e oportunidades, com canais diretos para atender interessados.',
        'Property listings and opportunities, with direct channels to serve interested buyers.'
      ),
      items: [
        t('Fichas de imóveis com fotos e detalhes', 'Property pages with photos and details'),
        t('Filtros simples por tipo e região', 'Simple filters by type and area'),
        t('Contato a partir de cada imóvel', 'Contact straight from each listing'),
      ],
      cta: t('Falar sobre um site imobiliário', 'Talk about a real estate site'),
    },
    {
      id: 'wellness',
      icon: Dumbbell,
      name: t('Academias, saúde e bem-estar', 'Gyms, health and wellness'),
      benefit: t(
        'Divulgação de modalidades, serviços, horários, estrutura e formas de contato.',
        'Showcase classes, services, schedules, facilities and ways to get in touch.'
      ),
      items: [
        t('Modalidades e grade de horários', 'Classes and timetable'),
        t('Fotos da estrutura', 'Facility photos'),
        t('Aula experimental ou visita pelo site', 'Trial class or visit booking from the site'),
      ],
      cta: t('Quero divulgar meu espaço', 'I want to promote my space'),
    },
  ];

  return (
    <section id="solutions" aria-labelledby="solutions-title" className="relative overflow-hidden section-padding">
      <div className="container-width">
        <SectionHeader
          id="solutions-title"
          eyebrow={t('Soluções por segmento', 'Solutions by industry')}
          title={t(
            'Se seus clientes procuram você na internet, sua empresa precisa estar bem representada.',
            'If your clients look for you online, your business needs to be well represented.'
          )}
          lead={t(
            'Cada negócio tem suas particularidades. Por isso, pensamos cada projeto a partir dos serviços, do público e dos objetivos da empresa.',
            'Every business has its own particulars. That is why we shape each project around the services, audience and goals of the company.'
          )}
        />

        <Tabs.Root
          value={active}
          onValueChange={setActive}
          orientation={isDesktop ? 'vertical' : 'horizontal'}
          className="gap-8 lg:gap-12 grid lg:grid-cols-12 mt-14"
        >
          <Tabs.List
            aria-label={t('Segmentos atendidos', 'Industries we serve')}
            className="flex lg:flex-col gap-2 lg:gap-0 lg:col-span-5 -mx-5 sm:-mx-8 lg:mx-0 px-5 sm:px-8 lg:px-0 pb-1 lg:overflow-visible overflow-x-auto no-scrollbar"
          >
            {segments.map((seg, i) => {
              const isActive = active === seg.id;
              return (
                <Tabs.Trigger
                  key={seg.id}
                  value={seg.id}
                  className={cn(
                    'group relative flex items-center gap-4 px-4 py-2.5 border rounded-full font-medium text-sm text-left transition-colors duration-300 shrink-0',
                    'lg:rounded-none lg:border-0 lg:border-b lg:px-0 lg:py-5 lg:text-lg',
                    isActive
                      ? 'border-foreground bg-foreground text-background lg:border-border lg:bg-transparent lg:text-foreground'
                      : 'border-border text-muted-foreground hover:text-foreground lg:border-border'
                  )}
                >
                  <span className="hidden lg:inline font-mono text-muted-foreground text-xs">{String(i + 1).padStart(2, '0')}</span>
                  <span className="lg:font-display">{seg.name}</span>
                  {isActive && (
                    <motion.span
                      layoutId="segment-indicator"
                      aria-hidden="true"
                      className="hidden lg:block bottom-[-1px] left-0 absolute bg-gradient-to-r from-smart-green to-smart-cyan w-full h-px"
                      transition={{ type: 'spring', stiffness: 380, damping: 36 }}
                    />
                  )}
                </Tabs.Trigger>
              );
            })}
          </Tabs.List>

          {segments.map((seg) => (
            <Tabs.Content key={seg.id} value={seg.id} className="lg:col-span-7 focus-visible:outline-offset-8">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: easeOut }}
                className="isolate relative bg-surface p-8 sm:p-12 border border-border rounded-3xl h-full overflow-hidden"
              >
                <seg.icon
                  aria-hidden="true"
                  strokeWidth={1}
                  className="-top-10 -right-10 -z-10 absolute w-64 h-64 text-foreground/[0.04]"
                />
                <span className="flex justify-center items-center bg-gradient-to-br from-smart-green to-smart-cyan rounded-2xl w-14 h-14 text-ink">
                  <seg.icon className="w-6 h-6" aria-hidden="true" strokeWidth={1.75} />
                </span>
                <h3 className="mt-8 font-semibold text-foreground text-3xl sm:text-4xl">{seg.name}</h3>
                <p className="mt-4 max-w-xl text-muted-foreground text-lg leading-relaxed">{seg.benefit}</p>

                <p className="mt-10 font-mono text-muted-foreground text-xs uppercase tracking-[0.16em]">
                  {t('O que costuma fazer diferença', 'What usually makes a difference')}
                </p>
                <ul className="space-y-3 mt-4">
                  {seg.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-foreground">
                      <Check className="mt-0.5 w-5 h-5 text-brand shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>

                <CtaLink href="#contact" variant="secondary" className="mt-10">
                  {seg.cta}
                </CtaLink>
              </motion.div>
            </Tabs.Content>
          ))}
        </Tabs.Root>

        <motion.p
          className="mt-10 text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={inViewOnce}
        >
          {t('Seu segmento não está na lista? ', "Don't see your industry? ")}
          <a href="#contact" className="font-medium text-foreground hover:text-brand decoration-2 decoration-brand underline underline-offset-4">
            {t('Conte o que sua empresa faz.', 'Tell us what your company does.')}
          </a>
        </motion.p>
      </div>
    </section>
  );
};

export default Segments;
