import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head  >
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
       integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
       crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link href="https://db.onlinewebfonts.com/c/a8bec9b307151fc9d8916065c279f9e3?family=NeueHaasGroteskText+W01" 
  rel="stylesheet"/>

        </Head>
      <body>
 
        <Main />
        <NextScript />
        
      </body>
    </Html>
  )
}
