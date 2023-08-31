import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en"  className='scroll-smooth' >
      <Head  >
      <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
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
        
      </body>
    </Html>
  )
}
