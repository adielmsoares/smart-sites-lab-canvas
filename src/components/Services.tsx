
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Monitor, Target, CreditCard, ShoppingCart, Palette, Code } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Services: React.FC = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Monitor,
      title: t('Criação de Websites', 'Website Creation'),
      description: t(
        'Sites institucionais completos com design moderno, responsivo e otimizado para SEO.',
        'Complete institutional websites with modern, responsive design optimized for SEO.'
      ),
      features: [
        t('Design Responsivo', 'Responsive Design'),
        t('SEO Otimizado', 'SEO Optimized'),
        t('Performance Rápida', 'Fast Performance'),
      ],
    },
    {
      icon: Target,
      title: t('Landing Pages', 'Landing Pages'),
      description: t(
        'Páginas focadas em conversão, ideais para campanhas de marketing e captação de leads.',
        'Conversion-focused pages, ideal for marketing campaigns and lead generation.'
      ),
      features: [
        t('Alta Conversão', 'High Conversion'),
        t('A/B Testing', 'A/B Testing'),
        t('Analytics Integrado', 'Integrated Analytics'),
      ],
    },
    {
      icon: CreditCard,
      title: t('Sales Pages', 'Sales Pages'),
      description: t(
        'Páginas de vendas persuasivas que transformam visitantes em compradores.',
        'Persuasive sales pages that transform visitors into buyers.'
      ),
      features: [
        t('Copy Persuasiva', 'Persuasive Copy'),
        t('Gatilhos de Vendas', 'Sales Triggers'),
        t('Checkout Otimizado', 'Optimized Checkout'),
      ],
    },
    {
      icon: ShoppingCart,
      title: t('E-commerce', 'E-commerce'),
      description: t(
        'Lojas virtuais completas com sistemas de pagamento integrados e gestão de estoque.',
        'Complete online stores with integrated payment systems and inventory management.'
      ),
      features: [
        t('Pagamentos Seguros', 'Secure Payments'),
        t('Gestão de Estoque', 'Inventory Management'),
        t('Painel Administrativo', 'Admin Dashboard'),
      ],
    },
    {
      icon: Palette,
      title: t('UI/UX Design', 'UI/UX Design'),
      description: t(
        'Design de interfaces intuitivas focadas na experiência do usuário.',
        'Intuitive interface design focused on user experience.'
      ),
      features: [
        t('Prototipagem', 'Prototyping'),
        t('Testes de Usabilidade', 'Usability Testing'),
        t('Design System', 'Design System'),
      ],
    },
    {
      icon: Code,
      title: t('Estratégia Digital', 'Digital Strategy'),
      description: t(
        'Consultoria completa para otimizar sua presença digital e aumentar conversões.',
        'Complete consulting to optimize your digital presence and increase conversions.'
      ),
      features: [
        t('Análise de Mercado', 'Market Analysis'),
        t('Consultoria SEO', 'SEO Consulting'),
        t('Otimização de Conversão', 'Conversion Optimization'),
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
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

  return (
    <section id="services" className="section-padding bg-white dark:bg-gray-900 transition-colors duration-300" ref={ref}>
      <div className="container-width">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-smart-green/10 to-smart-cyan/10 border border-smart-green/20 rounded-full px-4 py-2 mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {t('Nossos Serviços', 'Our Services')}
            </span>
          </motion.div>
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('Soluções completas para', 'Complete solutions for')}{' '}
            <span className="gradient-text">
              {t('seu negócio digital', 'your digital business')}
            </span>
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t(
              'Oferecemos uma gama completa de serviços de desenvolvimento web para impulsionar sua presença online.',
              'We offer a complete range of web development services to boost your online presence.'
            )}
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:shadow-xl hover:border-smart-green/30 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Icon */}
              <motion.div 
                className="w-16 h-16 bg-gradient-to-br from-smart-green/10 to-smart-cyan/10 dark:from-smart-green/20 dark:to-smart-cyan/20 rounded-2xl flex items-center justify-center mb-6"
                whileHover={{ 
                  scale: 1.2,
                  rotate: 10,
                  boxShadow: "0 10px 25px -5px rgba(94, 244, 161, 0.4)"
                }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2 + index * 0.5
                  }}
                >
                  <service.icon className="w-8 h-8 text-smart-green" />
                </motion.div>
              </motion.div>

              {/* Content */}
              <motion.h3 
                className="text-xl font-bold text-gray-900 dark:text-white mb-4"
                whileHover={{ scale: 1.05 }}
              >
                {service.title}
              </motion.h3>
              <motion.p 
                className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
                whileHover={{ scale: 1.02 }}
              >
                {service.description}
              </motion.p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <motion.li 
                    key={featureIndex} 
                    className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: 0.8 + (index * 0.1) + (featureIndex * 0.1) }}
                    whileHover={{ x: 5, color: "#5EF4A1" }}
                  >
                    <motion.div 
                      className="w-1.5 h-1.5 bg-smart-green rounded-full mr-3"
                      whileHover={{ scale: 1.5 }}
                    />
                    {feature}
                  </motion.li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                <motion.button 
                  className="text-smart-green font-semibold text-sm group-hover:text-smart-cyan transition-colors"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('Saber mais →', 'Learn more →')}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
