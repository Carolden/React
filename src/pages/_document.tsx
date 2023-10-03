import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@200&family=Open+Sans:wght@800&family=Share+Tech+Mono&family=Victor+Mono:wght@400;700&display=swap" rel="stylesheet"/>
      </Head>      
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
