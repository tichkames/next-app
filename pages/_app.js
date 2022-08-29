import '../styles/globals.css'
import { ThemeProvider } from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/layout.css'

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
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default MyApp
