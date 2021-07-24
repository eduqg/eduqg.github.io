import Document, { DocumentProps, Html, Head, Main, NextScript } from 'next/document'

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

class MyDocument extends Document<DocumentProps> {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href={prefix + '/favicon.ico'} />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Encode+Sans+Condensed:wght@100;300;400;600;700&family=Lato:ital,wght@0,300;0,700;1,400&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
