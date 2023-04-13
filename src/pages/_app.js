import Head from 'next/head'

import '@/styles/globals.css'
//bootstrap css
import 'bootstrap/dist/css/bootstrap.css'

export default function App({ Component, pageProps }) {
  return (<>
    <Head>
      <title>Koza Store</title>
      <meta name="description" content="koza store - all products available" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>



    <>
    
     <div className="container">
      <Component {...pageProps} />
     </div>
      
    </>





  </>)
}
