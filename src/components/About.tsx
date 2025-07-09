
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Badge } from './ui/badge';
import { User, Code, Palette, Zap } from 'lucide-react';

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
    <section className="section-padding bg-gray-50 dark:bg-gray-800/50 transition-colors duration-300">
      <div className="container-width">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-center"
        >
          {/* Content Column */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h2 
              variants={itemVariants}
              className="text-4xl lg:text-5xl font-bold font-poppins text-gray-900 dark:text-white"
            >
              {t('Sobre o Smart Sites Lab', 'About Smart Sites Lab')}
            </motion.h2>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-6">
              {badges.map((badge, index) => {
                const IconComponent = badge.icon;
                return (
                  <Badge 
                    key={index}
                    variant="secondary" 
                    className="flex items-center gap-2 px-3 py-1.5 bg-smart-green/10 text-smart-dark dark:bg-smart-green/20 dark:text-smart-green border-smart-green/20"
                  >
                    <IconComponent className="w-3.5 h-3.5" />
                    {t(badge.ptText, badge.enText)}
                  </Badge>
                );
              })}
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-prose">
                {t(
                  'Adiel Soares é o idealizador do Smart Sites Lab — uma iniciativa que une estratégia de design, engenharia de software e performance digital. Com anos de experiência como UX/UI Designer Sênior em órgãos públicos e empresas privadas, Adiel construiu uma base sólida em interfaces, acessibilidade e desenvolvimento frontend.',
                  'Adiel Soares is the founder of Smart Sites Lab — an initiative that merges design strategy, software engineering, and digital performance. With years of experience as a Senior UX/UI Designer in both government and private sectors, Adiel brings deep expertise in user interfaces, accessibility, and frontend development.'
                )}
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-prose">
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
              <div className="w-12 h-0.5 bg-gradient-to-r from-smart-green to-smart-cyan"></div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">
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
                className="absolute -inset-4 bg-gradient-to-r from-smart-green/20 to-smart-cyan/20 rounded-2xl blur-xl"
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
              <div className="relative w-full max-w-sm mx-auto lg:max-w-md">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt={t('Adiel Soares - Fundador do Smart Sites Lab', 'Adiel Soares - Founder of Smart Sites Lab')}
                  className="w-full aspect-square object-cover rounded-2xl shadow-2xl border-4 border-white dark:border-gray-700 transition-all duration-300"
                />
                <motion.div
                  className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-smart-green to-smart-cyan rounded-full flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Zap className="w-8 h-8 text-black" />
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
