
import React from 'react';
import { useLanguage, type Language } from '../contexts/LanguageContext';
import { cn } from '@/lib/utils';

const options: { value: Language; label: string; name: string }[] = [
  { value: 'pt', label: 'PT', name: 'Português' },
  { value: 'en', label: 'EN', name: 'English' },
];

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div role="group" aria-label={t('Idioma', 'Language')} className="flex p-1 border border-border/70 rounded-full w-fit">
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => setLanguage(opt.value)}
          aria-pressed={language === opt.value}
          aria-label={opt.name}
          lang={opt.value === 'pt' ? 'pt-BR' : 'en'}
          className={cn(
            'px-3 py-1.5 rounded-full min-w-[2.5rem] font-mono font-medium text-xs transition-colors duration-200',
            language === opt.value ? 'bg-foreground text-background' : 'text-muted-foreground hover:text-foreground'
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
