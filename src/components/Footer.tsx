
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { label: t('Início', 'Home'), href: '#home' },
    { label: t('Serviços', 'Services'), href: '#services' },
    { label: t('Portfólio', 'Portfolio'), href: '#portfolio' },
    { label: t('Contato', 'Contact'), href: '#contact' },
  ];

  const services = [
    { label: t('Websites', 'Websites'), href: '#services' },
    { label: t('Landing Pages', 'Landing Pages'), href: '#services' },
    { label: t('E-commerce', 'E-commerce'), href: '#services' },
    { label: t('UI/UX Design', 'UI/UX Design'), href: '#services' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="container-width">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img
                  src="/lovable-uploads/e815fa61-4ddc-4eec-be47-6e42e789155b.png"
                  alt="Smart Sites Lab Logo"
                  className="w-10 h-10"
                />
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-bold text-white">Smart Sites</span>
                  <span className="text-xl font-light text-gray-400">Lab</span>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                {t(
                  'Criamos soluções web modernas e eficientes que transformam ideias em resultados concretos para seu negócio.',
                  'We create modern and efficient web solutions that transform ideas into concrete results for your business.'
                )}
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail className="w-5 h-5 text-smart-green" />
                  <span>contato@smartsiteslab.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone className="w-5 h-5 text-smart-green" />
                  <span>+55 (11) 99999-9999</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin className="w-5 h-5 text-smart-green" />
                  <span>São Paulo, Brasil</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">
                {t('Links Rápidos', 'Quick Links')}
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-smart-green transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">
                {t('Serviços', 'Services')}
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.href}
                      className="text-gray-400 hover:text-smart-green transition-colors duration-200"
                    >
                      {service.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>
                © {new Date().getFullYear()} Smart Sites Lab. {t('Todos os direitos reservados.', 'All rights reserved.')}
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-smart-green hover:text-black transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-smart-green transition-colors">
                {t('Política de Privacidade', 'Privacy Policy')}
              </a>
              <a href="#" className="hover:text-smart-green transition-colors">
                {t('Termos de Uso', 'Terms of Service')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
