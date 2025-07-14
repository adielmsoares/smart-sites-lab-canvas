import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Badge } from './ui/badge';
import { Bookmark, Code, Palette, Zap, User, Instagram } from 'lucide-react';
import adielSoares from './assets/img/adiel-soares.jpg';

const About: React.FC = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 100
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring" as const,
        damping: 15,
        stiffness: 100,
        delay: 0.2
      }
    }
  };

  const badges = [
    {
      icon: User,
      ptText: "Fundador",
      enText: "Founder"
    },
    {
      icon: Palette,
      ptText: "Estrategista UX",
      enText: "UX Strategist"
    },
    {
      icon: Code,
      ptText: "Frontend Specialist",
      enText: "Frontend Specialist"
    },
    {
      icon: Zap,
      ptText: "Design Systems",
      enText: "Design Systems"
    }
  ];

  return (
    <section id="about" className="bg-gray-50 dark:bg-gray-800/50 transition-colors duration-300 section-padding">
      <div className="container-width">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="items-center gap-12 xl:gap-16 grid grid-cols-1 lg:grid-cols-2"
        >
          {/* Content Column */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Section Tag */}
            <motion.div
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-smart-green/10 to-smart-cyan/10 mb-6 px-4 py-2 border border-smart-green/20 rounded-full"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
              >
                <Bookmark className="w-4 h-4 text-smart-green" />
              </motion.div>
              <span className="font-medium text-gray-700 dark:text-gray-300 text-sm">
                {t('Sobre Nós', 'About Us')}
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="font-poppins font-bold text-gray-900 dark:text-white text-4xl lg:text-5xl"
            >
              {t('Sobre a Smart Sites Lab', 'About Smart Sites Lab')}
            </motion.h2>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-6">
              {badges.map((badge, index) => {
                const IconComponent = badge.icon;
                return (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="flex items-center gap-2 bg-smart-green/10 dark:bg-smart-green/20 px-3 py-1.5 border-smart-green/20 text-smart-dark dark:text-smart-green"
                  >
                    <IconComponent className="w-3.5 h-3.5" />
                    {t(badge.ptText, badge.enText)}
                  </Badge>
                );
              })}
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <p className="max-w-prose text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                {t(
                  'Adiel Soares é o idealizador do Smart Sites Lab — uma iniciativa que une estratégia de design, engenharia de software e performance digital. Com anos de experiência como UX/UI Designer Sênior em órgãos públicos e empresas privadas, Adiel construiu uma base sólida em interfaces, acessibilidade e desenvolvimento frontend.',
                  'Adiel Soares is the founder of Smart Sites Lab — an initiative that merges design strategy, software engineering, and digital performance. With years of experience as a Senior UX/UI Designer in both government and private sectors, Adiel brings deep expertise in user interfaces, accessibility, and frontend development.'
                )}
              </p>

              <p className="max-w-prose text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                {t(
                  'Seu propósito é criar soluções digitais que sejam não apenas funcionais, mas verdadeiramente impactantes. Especialista em React, Tailwind CSS e TypeScript, ele lidera projetos focados em acessibilidade, responsividade e sistemas de design escaláveis.',
                  'His goal is to create digital products that are not only functional but truly meaningful. Specializing in React, Tailwind CSS, and TypeScript, he leads projects focused on accessibility, responsiveness, and scalable design systems.'
                )}
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 pt-4"
            >
              <div className="bg-gradient-to-r from-smart-green to-smart-cyan w-12 h-0.5"></div>
              <p className="font-medium text-gray-600 dark:text-gray-400 text-sm uppercase tracking-wider">
                {t('Liderança em Design & Tecnologia', 'Leadership in Design & Technology')}
              </p>
            </motion.div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            variants={imageVariants}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-smart-green/20 to-smart-cyan/20 blur-xl rounded-2xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
                <img
                  src={adielSoares}
                  alt={t('Adiel Soares - Fundador da Smart Sites Lab', 'Adiel Soares - Founder of Smart Sites Lab')}
                  className="shadow-2xl border-4 border-white dark:border-gray-700 rounded-2xl w-full object-cover aspect-square transition-all duration-300"
                />
                <motion.div
                  className="-right-4 -bottom-4 absolute flex justify-center items-center bg-gradient-to-br from-smart-green to-smart-cyan shadow-lg rounded-full w-20 h-20"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <a href='https://www.instagram.com/adielmsoares/' target='_blank'><Instagram className="w-8 h-8 text-black" /></a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
