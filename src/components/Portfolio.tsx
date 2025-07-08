
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ExternalLink, Code, Palette } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Portfolio: React.FC = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: t('E-commerce Moderna', 'Modern E-commerce'),
      category: t('E-commerce', 'E-commerce'),
      description: t(
        'Loja virtual completa com sistema de pagamentos integrado e painel administrativo.',
        'Complete online store with integrated payment system and admin panel.'
      ),
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'Node.js', 'Stripe'],
    },
    {
      title: t('Landing Page SaaS', 'SaaS Landing Page'),
      category: t('Landing Page', 'Landing Page'),
      description: t(
        'Landing page de alta conversão para software B2B com foco em geração de leads.',
        'High-conversion landing page for B2B software focused on lead generation.'
      ),
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Next.js', 'Tailwind', 'Analytics'],
    },
    {
      title: t('Site Institucional', 'Corporate Website'),
      category: t('Website', 'Website'),
      description: t(
        'Website institucional moderno com sistema de gestão de conteúdo personalizado.',
        'Modern corporate website with custom content management system.'
      ),
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['WordPress', 'Custom CMS', 'SEO'],
    },
    {
      title: t('App Financeiro', 'Financial App'),
      category: t('Aplicativo Web', 'Web App'),
      description: t(
        'Aplicação web para gestão financeira pessoal com dashboard interativo.',
        'Web application for personal financial management with interactive dashboard.'
      ),
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Vue.js', 'Chart.js', 'API'],
    },
    {
      title: t('Marketplace Digital', 'Digital Marketplace'),
      category: t('Marketplace', 'Marketplace'),
      description: t(
        'Plataforma marketplace para produtos digitais com sistema de comissões.',
        'Marketplace platform for digital products with commission system.'
      ),
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'PostgreSQL', 'Stripe'],
    },
    {
      title: t('Portal de Notícias', 'News Portal'),
      category: t('Portal', 'Portal'),
      description: t(
        'Portal de notícias com sistema de comentários e newsletter automatizada.',
        'News portal with comment system and automated newsletter.'
      ),
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Gatsby', 'GraphQL', 'CMS'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 15,
        stiffness: 200
      }
    }
  };

  return (
    <section id="portfolio" className="section-padding bg-gray-50 dark:bg-gray-800 transition-colors duration-300" ref={ref}>
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
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Palette className="w-4 h-4 text-smart-green" />
            </motion.div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {t('Portfólio', 'Portfolio')}
            </span>
          </motion.div>
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('Projetos que', 'Projects that')}{' '}
            <span className="gradient-text">
              {t('fazem a diferença', 'make a difference')}
            </span>
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t(
              'Conheça alguns dos projetos que desenvolvemos e que geraram resultados excepcionais para nossos clientes.',
              'Discover some of the projects we developed that generated exceptional results for our clients.'
            )}
          </motion.p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              variants={itemVariants}
              whileHover={{ 
                y: -15,
                scale: 1.03,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                <motion.div 
                  className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="flex space-x-3">
                    <motion.button 
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.button>
                    <motion.button 
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                      whileHover={{ scale: 1.2, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Code className="w-5 h-5" />
                    </motion.button>
                  </div>
                </motion.div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="mb-3">
                  <motion.span 
                    className="inline-block bg-smart-green/10 text-smart-green text-xs font-semibold px-3 py-1 rounded-full"
                    whileHover={{ scale: 1.1 }}
                  >
                    {project.category}
                  </motion.span>
                </div>
                <motion.h3 
                  className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-smart-green transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed"
                  whileHover={{ scale: 1.01 }}
                >
                  {project.description}
                </motion.p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md"
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: "#5EF4A1",
                        color: "#000"
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <motion.button 
            className="btn-primary"
            whileHover={{ 
              scale: 1.05,
              y: -3,
              boxShadow: "0 20px 25px -5px rgba(94, 244, 161, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {t('Ver Todos os Projetos', 'View All Projects')}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
