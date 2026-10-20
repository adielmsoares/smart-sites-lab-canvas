
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Sun, Moon } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? t('Ativar tema claro', 'Switch to light theme') : t('Ativar tema escuro', 'Switch to dark theme')}
      className="relative flex justify-center items-center hover:bg-foreground/5 border border-border/70 rounded-full w-11 h-11 overflow-hidden text-foreground transition-colors"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ y: 14, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -14, opacity: 0 }}
          transition={{ duration: 0.2 }}
          aria-hidden="true"
        >
          {isDark ? <Moon className="w-[1.1rem] h-[1.1rem]" /> : <Sun className="w-[1.1rem] h-[1.1rem]" />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggle;
