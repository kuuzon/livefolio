import '@/styles/globals.css';
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