
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Monitor, Target, CreditCard, ShoppingCart, Palette, Code } from 'lucide-react';

const Services: React.FC = () => {
  const { t } = useLanguage();

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

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-width">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-smart-green/10 to-smart-cyan/10 border border-smart-green/20 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium text-gray-700">
              {t('Nossos Serviços', 'Our Services')}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('Soluções completas para', 'Complete solutions for')}{' '}
            <span className="gradient-text">
              {t('seu negócio digital', 'your digital business')}
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t(
              'Oferecemos uma gama completa de serviços de desenvolvimento web para impulsionar sua presença online.',
              'We offer a complete range of web development services to boost your online presence.'
            )}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-smart-green/30 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-smart-green/10 to-smart-cyan/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-smart-green" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-smart-green rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <button className="text-smart-green font-semibold text-sm group-hover:text-smart-cyan transition-colors">
                  {t('Saber mais →', 'Learn more →')}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
