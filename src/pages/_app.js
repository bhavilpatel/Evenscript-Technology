import '@/styles/globals.css'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'

export default function App({ Component, pageProps }) {
  return <div>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </div>
}
