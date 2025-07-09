
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <Globe className="w-4 h-4 text-muted-foreground" />
      <div className="flex bg-muted rounded-lg p-1">
        <button
          onClick={() => setLanguage('pt')}
          className={`px-3 py-1 text-sm font-medium rounded-md transition-all duration-200 ${
            language === 'pt'
              ? 'bg-background text-smart-green shadow-sm'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          PT
        </button>
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1 text-sm font-medium rounded-md transition-all duration-200 ${
            language === 'en'
              ? 'bg-background text-smart-green shadow-sm'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          EN
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
