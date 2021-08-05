import React from 'react'
import { TranslationProvider } from './translation'

const AppProvider: React.FC = ({ children }) => {
  return <TranslationProvider>{children}</TranslationProvider>
}

export default AppProvider
