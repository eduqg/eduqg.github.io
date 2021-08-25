import { AppProps } from 'next/app'
import { useEffect } from 'react'

import GlobalStyle from '../styles/GlobalStyles'

import TagManager from 'react-gtm-module'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_GTM_ID })
  }, [])

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
