import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Exemplo: const { theme } = useTheme(); // Obtenha o tema atual
  // Para este exemplo, vamos simular o tema baseado na classe 'dark' no body ou html
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleThemeChange = () => {
      // Verifica se a classe 'dark' está presente no elemento <html>
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    // Adiciona event listeners
    window.addEventListener('scroll', handleScroll);
    // Adiciona listener para mudanças no DOM que possam indicar mudança de tema
    // Isso é uma simplificação, o ideal seria ter um contexto de tema
    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    // Roda a verificação inicial do tema
    handleThemeChange();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const navItems = [
    { label: t('Início', 'Home'), href: '#home' },
    { label: t('Serviços', 'Services'), href: '#services' },
    { label: t('Portfólio', 'Portfolio'), href: '#portfolio' },
    { label: t('Sobre', 'About'), href: '#about' },
    { label: t('Contato', 'Contact'), href: '#contact' },
  ];

  const headerVariants = {
    transparent: {
      backgroundColor: isDarkMode ? 'rgba(17, 24, 39, 0)' : 'rgba(255, 255, 255, 0)', // Ajuste para dark mode
      backdropFilter: 'blur(0px)',
      boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)',
    },
    solid: {
      backgroundColor: isDarkMode ? 'rgba(17, 24, 39, 0.95)' : 'rgba(255, 255, 255, 0.95)', // Ajuste para dark mode
      backdropFilter: 'blur(12px)',
      boxShadow: isDarkMode ? '0 10px 25px -5px rgba(0, 0, 0, 0.5)' : '0 10px 25px -5px rgba(0, 0, 0, 0.1)', // Sombra mais escura para dark mode
    }
  };

  return (
    <motion.header
      className="top-0 right-0 left-0 z-50 fixed transition-all duration-300" // Remova dark:bg-gray-900/95 daqui
      variants={headerVariants}
      animate={isScrolled ? 'solid' : 'transparent'}
      transition={{ duration: 0.3 }}
    >
      <div className="container-width">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.img
              src="https://smartsiteslab.netlify.app/src/components/assets/img/smartsites-logo.png"
              alt="Smart Sites Lab Logo"
              className="w-8 sm:w-10 h-8 sm:h-10"
              whileHover={{ rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <div className="flex items-center space-x-2">
              <span className="font-bold text-black dark:text-white text-lg sm:text-xl">Smart Sites</span>
              <span className="font-light text-gray-600 dark:text-gray-400 text-lg sm:text-xl">Lab</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="relative font-medium text-gray-700 dark:text-gray-300 hover:text-smart-green dark:hover:text-smart-green transition-colors duration-200"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.label}
                <motion.div
                  className="right-0 -bottom-1 left-0 absolute bg-smart-green h-0.5"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
          </nav>

          {/* Language Switcher, Theme Toggle & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSwitcher />
            <ThemeToggle />
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {t('Começar Projeto', 'Start Project')}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <LanguageSwitcher />
            <ThemeToggle />
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-700 dark:text-gray-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 border-t"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="flex flex-col space-y-4 py-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className="px-4 font-medium text-gray-700 dark:text-gray-300 hover:text-smart-green dark:hover:text-smart-green transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
                <motion.div
                  className="px-4 pt-4"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: navItems.length * 0.1 }}
                >
                  <motion.button
                    className="w-full btn-primary"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t('Começar Projeto', 'Start Project')}
                  </motion.button>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;