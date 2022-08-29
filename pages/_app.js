import '../styles/globals.css'
import { ThemeProvider } from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/layout.css'
import Head from 'next/head'

const theme = {
  colors: {
    primary: '#355C7D'
  }
}

function MyApp({ Component, pageProps }) {
  if(Component.getLayout) {
    return Component.getLayout(
      <Component { ...pageProps } />
    )
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Next App Playground</title>
          <meta name='description' content='Free tutorials on web development' />
        </Head>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default MyApp
