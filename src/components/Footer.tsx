
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Mail, Phone, MapPin, Heart, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import smartsitesLogo from './assets/img/smartsites-logo.png';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
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
        damping: 12,
        stiffness: 200
      }
    }
  };

  return (
    <footer className="bg-black dark:bg-gray-950 text-white transition-colors duration-300" ref={ref}>
      <div className="container-width">
        {/* Main Footer Content */}
        <motion.div
          className="py-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {/* Company Info */}
            <motion.div className="lg:col-span-2" variants={itemVariants}>
              <motion.div
                className="flex items-center space-x-3 mb-6"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.img
                  src={smartsitesLogo}
                  alt="Smart Sites Lab Logo"
                  className="w-10 h-10"
                  whileHover={{ rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-white text-xl">Smart Sites</span>
                  <span className="font-light text-gray-400 text-xl">Lab</span>
                </div>
              </motion.div>
              <motion.p
                className="mb-6 max-w-md text-gray-400"
                whileHover={{ scale: 1.02 }}
              >
                {t(
                  'Criamos soluções web modernas e eficientes que transformam ideias em resultados concretos para seu negócio.',
                  'We create modern and efficient web solutions that transform ideas into concrete results for your business.'
                )}
              </motion.p>

              {/* Contact Info */}
              <div className="space-y-3">
                {[
                  { icon: Mail, text: 'contato@smartsiteslab.com' },
                  { icon: Phone, text: '+55 (11) 99999-9999' },
                  { icon: MapPin, text: 'São Paulo, Brasil' }
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 text-gray-400"
                    whileHover={{
                      x: 5,
                      color: "#5EF4A1",
                      transition: { duration: 0.2 }
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <contact.icon className="w-5 h-5 text-smart-green" />
                    </motion.div>
                    <span>{contact.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h3 className="mb-6 font-semibold text-white text-lg">
                {t('Links Rápidos', 'Quick Links')}
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <motion.a
                      href={link.href}
                      className="text-gray-400 hover:text-smart-green transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                    >
                      {link.label}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants}>
              <h3 className="mb-6 font-semibold text-white text-lg">
                {t('Serviços', 'Services')}
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <motion.a
                      href={service.href}
                      className="text-gray-400 hover:text-smart-green transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                    >
                      {service.label}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          className="py-8 border-gray-800 border-t"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex md:flex-row flex-col justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div
              className="text-gray-400 text-sm md:text-left text-center"
              whileHover={{ scale: 1.02 }}
            >
              <p>
                © {new Date().getFullYear()} - Smart Sites Lab. {t('Todos os direitos reservados.', 'All rights reserved.')}
              </p>
            </motion.div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="flex justify-center items-center bg-gray-800 hover:bg-smart-green rounded-full w-10 h-10 text-gray-400 hover:text-black transition-all duration-200"
                  aria-label={social.label}
                  whileHover={{
                    scale: 1.2,
                    rotate: 10,
                    y: -3
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-gray-400 text-sm">
              {[
                { label: t('Desenvolvido com', 'Developer with'), href: '#' },
                { render: () => <Heart className="w-6 h-6 text-red-500 animate-pulse" /> },
                { label: t('Smart Sites Lab', 'Smart Sites Lab'), href: '#' }
              ].map((legal, index) =>
                'href' in legal && 'label' in legal ? (
                  <motion.a
                    key={index}
                    href={legal.href}
                    className="hover:text-smart-green transition-colors"
                    whileHover={{
                      scale: 1.05,
                      y: -2
                    }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {legal.label}
                  </motion.a>
                ) : (
                  <span key={index}>
                    {'render' in legal && typeof legal.render === 'function' ? legal.render() : null}
                  </span>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
