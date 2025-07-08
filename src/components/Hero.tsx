
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight, Code, Palette, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    }
  };

  const features = [
    {
      icon: Code,
      title: t('Desenvolvimento', 'Development'),
      description: t('Código limpo e otimizado', 'Clean and optimized code')
    },
    {
      icon: Palette,
      title: t('Design', 'Design'),
      description: t('Interfaces modernas e intuitivas', 'Modern and intuitive interfaces')
    },
    {
      icon: Zap,
      title: t('Performance', 'Performance'),
      description: t('Velocidade e otimização', 'Speed and optimization')
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 pt-20 transition-colors duration-300">
      <div className="container-width section-padding">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero Badge */}
          <motion.div 
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-smart-green/10 to-smart-cyan/10 border border-smart-green/20 rounded-full px-4 py-2 mb-8"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3
              }}
            >
              <Zap className="w-4 h-4 text-smart-green" />
            </motion.div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {t('Soluções Web Inovadoras', 'Innovative Web Solutions')}
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
            variants={itemVariants}
          >
            {t('Transforme sua', 'Transform your')}{' '}
            <motion.span 
              className="gradient-text"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {t('presença digital', 'digital presence')}
            </motion.span>{' '}
            {t('com sites modernos', 'with modern websites')}
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            {t(
              'Criamos websites, landing pages e e-commerce que convertem visitantes em clientes. Design moderno, performance excepcional.',
              'We create websites, landing pages, and e-commerce that convert visitors into customers. Modern design, exceptional performance.'
            )}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            variants={itemVariants}
          >
            <motion.button 
              className="btn-primary flex items-center space-x-2 group"
              whileHover={{ 
                scale: 1.05,
                y: -3,
                boxShadow: "0 20px 25px -5px rgba(94, 244, 161, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span>{t('Iniciar Projeto', 'Start Project')}</span>
              <motion.div
                className="group-hover:translate-x-1 transition-transform"
                whileHover={{ x: 5 }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.button>
            <motion.button 
              className="btn-secondary"
              whileHover={{ 
                scale: 1.05,
                y: -3
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {t('Ver Portfólio', 'View Portfolio')}
            </motion.button>
          </motion.div>

          {/* Feature Icons */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
            variants={containerVariants}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center space-y-3 group"
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  transition: { type: "spring", stiffness: 400 }
                }}
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-smart-green/10 to-smart-cyan/10 dark:from-smart-green/20 dark:to-smart-cyan/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 5,
                    boxShadow: "0 10px 25px -5px rgba(94, 244, 161, 0.3)"
                  }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.div
                    animate={{ 
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3 + index
                    }}
                  >
                    <feature.icon className="w-8 h-8 text-smart-green" />
                  </motion.div>
                </motion.div>
                <motion.h3 
                  className="font-semibold text-gray-900 dark:text-white"
                  whileHover={{ scale: 1.05 }}
                >
                  {feature.title}
                </motion.h3>
                <motion.p 
                  className="text-sm text-gray-600 dark:text-gray-400 text-center"
                  whileHover={{ scale: 1.02 }}
                >
                  {feature.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
