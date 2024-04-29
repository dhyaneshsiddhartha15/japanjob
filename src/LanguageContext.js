import React, { createContext, useContext, useState } from 'react';
import { IntlProvider } from 'react-intl';
import translations from './translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState('en');

  const toggleLanguage = () => {
    setLocale((prevLocale) => (prevLocale === 'en' ? 'jp' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ locale, toggleLanguage }}>
      <IntlProvider locale={locale} messages={translations[locale]}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
