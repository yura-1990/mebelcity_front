
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLanguage } from '@/lib/i18n/context';
import { Globe } from 'lucide-react';

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'uz', name: 'O\'zbekcha' },
    { code: 'ru', name: 'Русский' },
  ];

  const currentLanguage = languages.find(lang => lang.code === language)?.name || 'Русский';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="custom" 
          className="bg-transparent backdrop-blur-sm px-2 py-2 border-white/20 hover:bg-white/20 dark:hover:bg-navy-dark/50"
        >
          <Globe className="text-white h-[1rem] w-[1rem]" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white mt-4 dark:bg-navy-dark border border-gray-200 dark:border-gray-700">
        {languages.map(lang => (
          <DropdownMenuItem 
            key={lang.code}
            onClick={() => setLanguage(lang.code as 'ru' | 'uz')}
            className={`${language === lang.code ? "bg-accent" : ""} dark:text-gray-200 dark:hover:bg-navy-light/20`}
          >
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
