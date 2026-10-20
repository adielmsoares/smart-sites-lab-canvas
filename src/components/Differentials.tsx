import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Smartphone, Cpu, Route, ScanSearch } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { easeOut } from '@/lib/motion';
import SectionHeader from './SectionHeader';

const Differentials: React.FC = () => {
  const { t } = useLanguage();

  const items = [
    {
      icon: Compass,
      title: t('Design com propósito', 'Purposeful design'),
      text: t(
        'Cada escolha visual tem uma função: guiar a leitura, destacar o que importa e deixar a empresa com a aparência profissional que ela tem na prática.',
        'Every visual choice has a job: guide reading, highlight what matters and make the company look as professional as it really is.'
      ),
    },
    {
      icon: Smartphone,
      title: t('Responsividade de verdade', 'Truly responsive'),
      text: t(
        'Layouts planejados para celular, tablet e desktop desde o início, e não apenas encolhidos para caber na tela.',
        'Layouts planned for phone, tablet and desktop from the start, not just shrunk to fit.'
      ),
    },
    {
      icon: Cpu,
      title: t('Tecnologia adequada', 'The right technology'),
      text: t(
        'A ferramenta certa para o tamanho do projeto. Nem solução improvisada, nem complexidade que você não precisa.',
        "The right tool for the size of the project. No improvised shortcuts, no complexity you don't need."
      ),
    },
    {
      icon: Route,
      title: t('Experiência do usuário', 'User experience'),
      text: t(
        'Navegação intuitiva e hierarquia clara para que o visitante encontre rápido o que procura e saiba como falar com você.',
        'Intuitive navigation and clear hierarchy so visitors quickly find what they need and know how to reach you.'
      ),
    },
    {
      icon: ScanSearch,
      title: t('Atenção aos detalhes', 'Attention to detail'),
      text: t(
        'Acabamento visual, consistência entre componentes, acessibilidade e desempenho revisados antes da publicação.',
        'Visual finish, consistent components, accessibility and performance reviewed before launch.'
      ),
    },
  ];

  return (
    <section id="differentials" aria-labelledby="differentials-title" className="relative bg-surface section-padding">
      <div className="gap-14 grid lg:grid-cols-12 container-width">
        <div className="lg:col-span-5">
          <div className="lg:top-32 lg:sticky">
            <SectionHeader
              id="differentials-title"
              eyebrow={t('Por que a Smart Sites Lab', 'Why Smart Sites Lab')}
              title={
                <>
                  {t('O cuidado aparece ', 'Care shows ')}
                  <span className="gradient-text">{t('nos detalhes.', 'in the details.')}</span>
                </>
              }
              lead={t(
                'Não existe atalho para um bom site. Existe método, critério e revisão, do planejamento ao último ajuste.',
                "There's no shortcut to a good website. There's method, judgment and review, from planning to the final adjustment."
              )}
            />
          </div>
        </div>

        <ol className="lg:col-span-7">
          {items.map((item, i) => (
            <motion.li
              key={item.title}
              className="group relative gap-x-6 gap-y-2 sm:gap-x-10 grid grid-cols-[auto_1fr] py-9"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <motion.span
                aria-hidden="true"
                className="top-0 absolute inset-x-0 bg-border h-px origin-left"
                variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 1.1, ease: easeOut } } }}
              />
              <motion.span
                className="row-span-2 w-16 sm:w-20 font-display font-semibold tabular-nums text-foreground/15 group-hover:text-brand text-5xl sm:text-6xl leading-none transition-colors duration-500"
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } } }}
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, '0')}
              </motion.span>
              <motion.h3
                className="flex items-center gap-3 font-semibold text-foreground text-2xl"
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.08, ease: easeOut } } }}
              >
                <item.icon className="w-5 h-5 text-brand" aria-hidden="true" strokeWidth={1.75} />
                {item.title}
              </motion.h3>
              <motion.p
                className="max-w-xl text-muted-foreground leading-relaxed"
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.16, ease: easeOut } } }}
              >
                {item.text}
              </motion.p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Differentials;
