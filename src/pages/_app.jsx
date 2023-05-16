// import '@/styles/globals.css';
import '@/styles/scss/main.scss';
import { ThemeProvider } from '../contexts/ThemeContext';
import Layout from '@/components/layout/Layout';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}