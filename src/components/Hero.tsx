
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight, Code, Palette, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-20">
      <div className="container-width section-padding">
        <div className="text-center max-w-4xl mx-auto">
          {/* Hero Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-smart-green/10 to-smart-cyan/10 border border-smart-green/20 rounded-full px-4 py-2 mb-8">
            <Zap className="w-4 h-4 text-smart-green" />
            <span className="text-sm font-medium text-gray-700">
              {t('Soluções Web Inovadoras', 'Innovative Web Solutions')}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {t('Transforme sua', 'Transform your')}{' '}
            <span className="gradient-text">
              {t('presença digital', 'digital presence')}
            </span>{' '}
            {t('com sites modernos', 'with modern websites')}
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            {t(
              'Criamos websites, landing pages e e-commerce que convertem visitantes em clientes. Design moderno, performance excepcional.',
              'We create websites, landing pages, and e-commerce that convert visitors into customers. Modern design, exceptional performance.'
            )}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="btn-primary flex items-center space-x-2 group">
              <span>{t('Iniciar Projeto', 'Start Project')}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-secondary">
              {t('Ver Portfólio', 'View Portfolio')}
            </button>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center space-y-3 group">
              <div className="w-16 h-16 bg-gradient-to-br from-smart-green/10 to-smart-cyan/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Code className="w-8 h-8 text-smart-green" />
              </div>
              <h3 className="font-semibold text-gray-900">
                {t('Desenvolvimento', 'Development')}
              </h3>
              <p className="text-sm text-gray-600 text-center">
                {t('Código limpo e otimizado', 'Clean and optimized code')}
              </p>
            </div>

            <div className="flex flex-col items-center space-y-3 group">
              <div className="w-16 h-16 bg-gradient-to-br from-smart-green/10 to-smart-cyan/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Palette className="w-8 h-8 text-smart-green" />
              </div>
              <h3 className="font-semibold text-gray-900">
                {t('Design', 'Design')}
              </h3>
              <p className="text-sm text-gray-600 text-center">
                {t('Interfaces modernas e intuitivas', 'Modern and intuitive interfaces')}
              </p>
            </div>

            <div className="flex flex-col items-center space-y-3 group">
              <div className="w-16 h-16 bg-gradient-to-br from-smart-green/10 to-smart-cyan/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-smart-green" />
              </div>
              <h3 className="font-semibold text-gray-900">
                {t('Performance', 'Performance')}
              </h3>
              <p className="text-sm text-gray-600 text-center">
                {t('Velocidade e otimização', 'Speed and optimization')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
