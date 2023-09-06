 import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en"  className='scroll-smooth' >
      <Head  >
      <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
       integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
       crossOrigin="anonymous" referrerPolicy="no-referrer" />
  <link href="https://db.onlinewebfonts.com/c/a8bec9b307151fc9d8916065c279f9e3?family=NeueHaasGroteskText+W01" 
  rel="stylesheet"/>
<link href="../public/favicon/favicon.ico" rel="sortcut icon"/>
        </Head>
      <body>
 
        <Main />
        <NextScript />
        <Script
          src="https://embed.tawk.to/64ee2285a91e863a5c10801c/1h913dnjt"
          strategy="beforeInteractive"
        />
 
      </body>
    </Html>
  )
}
 