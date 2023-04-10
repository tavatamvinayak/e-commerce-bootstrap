import '@/styles/globals.css'



import Head from 'next/head'




export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>E-commerce</title>
        <meta name="description" content="E-com buy anything you want" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />

    </>
  )
}
