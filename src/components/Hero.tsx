
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
        type: "spring" as const,
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
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 pt-20 transition-colors duration-300 relative overflow-hidden">
      {/* High-Tech Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Grid Pattern - Enhanced for light theme */}
        <motion.div 
          className="absolute inset-0 opacity-40 dark:opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(94, 244, 161, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(94, 244, 161, 0.4) 1px, transparent 1px),
              linear-gradient(rgba(48, 213, 199, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(48, 213, 199, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px, 50px 50px, 25px 25px, 25px 25px'
          }}
          animate={{
            backgroundPosition: ['0px 0px, 0px 0px, 0px 0px, 0px 0px', '50px 50px, 50px 50px, 25px 25px, 25px 25px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Code Brackets */}
        <motion.div
          className="absolute top-20 left-20 text-6xl font-mono text-smart-green/40 dark:text-smart-green/40"
          animate={{
            rotate: [0, 5, -5, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {'</>'}
        </motion.div>

        {/* Design Elements - Bezier Curves */}
        <motion.svg
          className="absolute top-1/3 right-1/4 w-40 h-40 opacity-30 dark:opacity-30"
          viewBox="0 0 200 200"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <path
            d="M20 20 Q 100 80, 180 20 T 180 180 Q 100 120, 20 180 T 20 20"
            stroke="url(#designGradient)"
            strokeWidth="3"
            fill="none"
            strokeDasharray="10,5"
          />
          <defs>
            <linearGradient id="designGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#5EF4A1" />
              <stop offset="50%" stopColor="#30D5C7" />
              <stop offset="100%" stopColor="#5EF4A1" />
            </linearGradient>
          </defs>
        </motion.svg>

        {/* Floating Tech Icons - Enhanced visibility */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-smart-cyan/50 dark:bg-smart-cyan/50 rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* HTML Tags */}
        <motion.div
          className="absolute bottom-32 left-16 text-2xl font-mono text-smart-cyan/50 dark:text-smart-cyan/50"
          animate={{
            y: [0, -10, 0],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          &lt;div&gt;
        </motion.div>

        {/* CSS Braces */}
        <motion.div
          className="absolute top-1/2 right-16 text-4xl font-mono text-smart-green/50 dark:text-smart-green/50"
          animate={{
            rotate: [0, 10, -10, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {'{ }'}
        </motion.div>

        {/* JavaScript Function */}
        <motion.div
          className="absolute bottom-20 right-1/3 text-sm font-mono text-smart-cyan/40 dark:text-smart-cyan/40 leading-tight"
          animate={{
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          const design = () =&gt; <br />
          &nbsp;&nbsp;magic();
        </motion.div>

        {/* Design System Tokens */}
        <motion.div
          className="absolute top-1/4 left-1/3 text-xs font-mono text-smart-green/40 dark:text-smart-green/40 leading-tight"
          animate={{
            x: [0, 20, 0],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          :root {'{'}
          <br />
          &nbsp;&nbsp;--primary: #5EF4A1;
          <br />
          &nbsp;&nbsp;--accent: #30D5C7;
          <br />
          {'}'}
        </motion.div>

        {/* Geometric Shapes - Enhanced visibility */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border-2 border-smart-green/30 dark:border-smart-green/30"
            style={{
              width: `${30 + i * 5}px`,
              height: `${30 + i * 5}px`,
              borderRadius: i % 2 === 0 ? '50%' : '0%',
              right: `${5 + i * 15}%`,
              top: `${10 + i * 12}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              borderRadius: i % 2 === 0 ? ['50%', '25%', '50%'] : ['0%', '25%', '0%'],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}

        {/* React Components Structure */}
        <motion.div
          className="absolute top-40 right-20 text-lg font-mono text-smart-cyan/40 dark:text-smart-cyan/40"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          &lt;Component /&gt;
        </motion.div>

        {/* Terminal Cursor */}
        <motion.div
          className="absolute bottom-40 left-1/2 w-3 h-6 bg-smart-green/60 dark:bg-smart-green/60"
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Responsive Design Icons */}
        <motion.div
          className="absolute top-60 left-10 flex space-x-2"
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-4 h-6 border-2 border-smart-cyan/50 dark:border-smart-cyan/50 rounded-sm"></div>
          <div className="w-6 h-4 border-2 border-smart-green/50 dark:border-smart-green/50 rounded-sm"></div>
          <div className="w-8 h-5 border-2 border-smart-cyan/50 dark:border-smart-cyan/50 rounded-sm"></div>
        </motion.div>
      </div>

      <div className="container-width section-padding relative z-10">
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
