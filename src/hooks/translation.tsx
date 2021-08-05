import React, { useState, createContext, useCallback, useContext } from 'react'

import { en, ILocaleData } from '../locales/en'
import { ptBr } from '../locales/pt-br'

interface ILanguageOptions {
  language: 'pt-br' | 'en'
}

interface ITranslationContextData {
  t: ILocaleData
  updateLanguage(language: ILanguageOptions): void
}

const TranslationContext = createContext<ITranslationContextData>({} as ITranslationContextData)

const TranslationProvider: React.FC = ({ children }) => {
  const [t, setT] = useState<ILocaleData>(ptBr)

  const updateLanguage = useCallback(async ({ language }: ILanguageOptions) => {
    setT(language === 'pt-br' ? ptBr : en)
  }, [])

  return (
    <TranslationContext.Provider value={{ t, updateLanguage }}>
      {children}
    </TranslationContext.Provider>
  )
}

function useTranslation(): ITranslationContextData {
  const context = useContext(TranslationContext)

  if (!context) {
    throw new Error('useTranslation must be used within TranslationProvider')
  }

  return context
}

export { TranslationProvider, useTranslation }
