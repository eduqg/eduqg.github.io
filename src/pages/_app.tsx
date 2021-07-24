import { AppProps } from 'next/app'

import GlobalStyle from '../styles/GlobalStyles'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
