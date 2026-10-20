import React from 'react';
import { Instagram, ArrowUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import smartsitesLogo from './assets/img/smartsites-logo.png';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const navigation = [
    { label: t('Início', 'Home'), href: '#home' },
    { label: t('Serviços', 'Services'), href: '#services' },
    { label: t('Soluções', 'Solutions'), href: '#solutions' },
    { label: t('Entregas', 'Deliverables'), href: '#work' },
    { label: t('Como trabalhamos', 'How we work'), href: '#process' },
    { label: t('Sobre', 'About'), href: '#about' },
  ];

  const services = [
    t('Sites institucionais', 'Business websites'),
    t('Landing pages', 'Landing pages'),
    t('Lojas virtuais', 'Online stores'),
    t('Sistemas web', 'Web systems'),
    t('UX/UI Design', 'UX/UI Design'),
    t('Reformulação de sites', 'Website redesign'),
  ];

  const linkClass = 'text-white/60 transition-colors hover:text-white';

  return (
    <footer className="relative bg-ink border-white/10 border-t text-white">
      <div className="py-16 lg:py-20 container-width">
        <div className="gap-12 grid lg:grid-cols-12">
          <div className="lg:col-span-5">
            <a href="#home" className="inline-flex items-center gap-3 rounded-lg" aria-label="Smart Sites Lab — início">
              <img src={smartsitesLogo} alt="" width={40} height={40} loading="lazy" className="w-10 h-10" />
              <span className="font-display text-xl leading-none tracking-tight">
                <span className="font-semibold">Smart Sites</span> <span className="text-white/60">Lab</span>
              </span>
            </a>
            <p className="mt-6 max-w-sm text-white/60 leading-relaxed">
              {t(
                'Criação de sites profissionais, landing pages, lojas virtuais e sistemas web para empresas que querem ser bem apresentadas na internet.',
                'Professional websites, landing pages, online stores and web systems for companies that want to be well presented online.'
              )}
            </p>
            <a href="#contact" className="mt-8 btn btn-primary">
              {t('Falar com a Smart Sites Lab', 'Talk to Smart Sites Lab')}
            </a>
          </div>

          <nav aria-label={t('Rodapé', 'Footer')} className="lg:col-span-2">
            <h2 className="font-mono text-[0.7rem] text-white/50 uppercase tracking-[0.16em]">{t('Navegação', 'Navigation')}</h2>
            <ul className="space-y-3 mt-5">
              {navigation.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={linkClass}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <h2 className="font-mono text-[0.7rem] text-white/50 uppercase tracking-[0.16em]">{t('Serviços', 'Services')}</h2>
            <ul className="space-y-3 mt-5 text-white/60">
              {services.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="font-mono text-[0.7rem] text-white/50 uppercase tracking-[0.16em]">{t('Contato', 'Contact')}</h2>
            <ul className="space-y-3 mt-5">
              <li>
                <a href="mailto:smartsiteslab@gmail.com" className={linkClass}>
                  smartsiteslab@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+5561991127447" className={linkClass}>
                  +55 (61) 99112-7447
                </a>
              </li>
              <li className="text-white/60">{t('Atendimento remoto', 'Remote service')}</li>
              <li className="text-white/60">Brasília - DF · Goiânia - GO</li>
            </ul>
            <a
              href="https://www.instagram.com/smartsiteslab/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-4 border border-white/15 hover:border-white/40 rounded-full h-11 text-white/80 hover:text-white text-sm transition-colors"
            >
              <Instagram className="w-4 h-4" aria-hidden="true" />
              @smartsiteslab
              <span className="sr-only">{t('no Instagram (abre em nova aba)', 'on Instagram (opens in a new tab)')}</span>
            </a>
          </div>
        </div>

        <div className="flex sm:flex-row flex-col-reverse justify-between items-start sm:items-center gap-6 mt-16 pt-8 border-white/10 border-t text-white/50 text-sm">
          <p>
            © {new Date().getFullYear()} Smart Sites Lab. {t('Todos os direitos reservados.', 'All rights reserved.')}
          </p>
          <a href="#home" className="group inline-flex items-center gap-2 hover:text-white transition-colors">
            {t('Voltar ao topo', 'Back to top')}
            <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 duration-300" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
