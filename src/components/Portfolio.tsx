
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ExternalLink, Code, Palette } from 'lucide-react';

const Portfolio: React.FC = () => {
  const { t } = useLanguage();

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

  return (
    <section id="portfolio" className="section-padding bg-gray-50">
      <div className="container-width">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-smart-green/10 to-smart-cyan/10 border border-smart-green/20 rounded-full px-4 py-2 mb-6">
            <Palette className="w-4 h-4 text-smart-green" />
            <span className="text-sm font-medium text-gray-700">
              {t('Portfólio', 'Portfolio')}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('Projetos que', 'Projects that')}{' '}
            <span className="gradient-text">
              {t('fazem a diferença', 'make a difference')}
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t(
              'Conheça alguns dos projetos que desenvolvemos e que geraram resultados excepcionais para nossos clientes.',
              'Discover some of the projects we developed that generated exceptional results for our clients.'
            )}
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-3">
                    <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                      <Code className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="inline-block bg-smart-green/10 text-smart-green text-xs font-semibold px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-smart-green transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="btn-primary">
            {t('Ver Todos os Projetos', 'View All Projects')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
